import { useEffect, useState } from "react";
import axios from "axios";

/**
 * SpotifyPodcast component fetches and stores episodes from the '/api/spotify' endpoint.
 * It manages the list of episodes, the currently selected episode, and tracks the loading state of the data.
 * The component uses Axios to make an API request and updates the state accordingly.
 *
 * @component
 * @returns {JSX.Element} The rendered SpotifyPodcast component.
 * @author BitPolito Team : polito-dev
 * @version 1.0.0
 * @example <SpotifyPodcast />
 *
 * @description
 * - The component fetches a list of episodes from the '/api/spotify' endpoint using Axios.
 * - It stores the episodes in the 'episodes' state and sets the first episode as the 'currentEpisode'.
 * - It tracks whether the data is still being fetched using the 'loading' state.
 * - The 'loading' state is initially set to 'true', and once the data is fetched (or if an error occurs), it is set to 'false'.
 *  
 * @dependencies
 * - 'useState': React hook for managing the state of the episodes, the current episode, and the loading state.
 * - 'useEffect': React hook to fetch episodes on component mount and update the states accordingly.
 * - 'axios': A promise-based HTTP client for making API requests.
 *
 * @function
 * @name SpotifyPodcast
 */
export default function SpotifyPodcast() {
    /**
     * @state {Object[]} episodes
     * @description A state variable that stores the list of episodes fetched from the API.
     * It is an array of episode objects, each containing details about an episode.
     */
    const [episodes, setEpisodes] = useState([]);

    /**
     * @state {Object|null} currentEpisode
     * @description A state variable that stores the currently selected episode. It is initially set to 'null' until the first episode is selected.
     * If there is a selected episode, this will contain the episode object. Otherwise, it will be 'null'.
     */
    const [currentEpisode, setCurrentEpisode] = useState(null);

    /**
     * @state {boolean} loading
     * @description A state variable that tracks whether the episodes are being loaded from the API.
     * It is initially set to 'true' and is set to 'false' once the episodes have been successfully fetched or an error occurs.
     */
    const [loading, setLoading] = useState(true);

    /**
     * @effect
     * @description A 'useEffect' hook that runs on component mount. It fetches episodes from the '/api/spotify' endpoint using Axios.
     * Once the episodes are fetched, it updates the 'episodes' state with the list of episodes and sets the 'currentEpisode' to the first episode in the list.
     * The 'loading' state is set to 'false' (whether the operation was successful or failed).
     */
    useEffect(() => {
        async function fetchEpisodes() {
            try {
                const response = await axios.get("/api/spotify");
                setEpisodes(response.data.episodes.items);
                setCurrentEpisode(response.data.episodes.items[0]);
            } catch (error) {
                console.error("Error: ", error);
            } finally {
                setLoading(false);
            }
        }
        fetchEpisodes();
    }, []);

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
            <h2 className="text-xl font-bold text-center mb-4 text-blue-dark dark:text-white">Podcast</h2>

            {loading && <p className="text-center text-blue-dark dark:text-white">Loading...</p>}

            {currentEpisode && (
                <iframe
                    className="w-full h-24 mt-4 rounded-lg"
                    src={`https://open.spotify.com/embed/episode/${currentEpisode.id}`}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                </iframe>
            )}

            <ul className="mt-4 gap-y-2">
                {episodes.map((episode) => (
                    <li
                        key={episode.id}
                        onClick={() => setCurrentEpisode(episode)}
                        className={`p-3 border rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition ${currentEpisode?.id === episode.id ? "bg-gray-200 dark:bg-gray-600 font-semibold" : ""}`}
                    >
                        <p className="text-blue-dark dark:text-white">{episode.name}</p>
                        <p className="text-sm text-gray-500">{new Date(episode.release_date).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}