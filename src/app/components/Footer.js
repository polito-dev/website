import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <>
            {/* TO FIX: error to show image in light mode */}
            <img src="/bitpolito-light.png" className="icon-style !w-64 !h-36 rotate-7"></img>

            <div className="flex justify-between space-x-3">
                <a href='mailto: info@bitpolito.it' target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src={"icons/email-light.png"} className="icon-style"></img>
                    info@bitpolito.it
                </a>
                <a href="https://forms.gle/P9mzEhqh8DdrkyQ96" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src={"icons/join-us-light.png"} className="icon-style"></img>
                    {t("apply")}
                </a>
            </div>

            <div style={{ height: "5px" }}></div>

            <div className="flex justify-between space-x-2">
                <a href="https://t.me/BitPolitoForum" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src="icons/telegram-light.png" className="icon-style"></img>
                    Telegram
                </a>
                <a href="https://www.linkedin.com/company/bitpolito/?originalSubdomain=it" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src="icons/linkedIn-light.png" className="icon-style"></img>
                    LinkedIn
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src="#" className="icon-style"></img>
                    X (Twitter)
                </a>
                <a href="https://www.instagram.com/bitpolito/" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src="icons/instagram-light.png" className="icon-style"></img>
                    Instagram
                </a>
                <a href="https://www.youtube.com/@BitPolito" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src="icons/youtube-light.png" className="icon-style"></img>
                    YouTube
                </a>
                <a href="https://open.spotify.com/show/3xXqSrkyLloGhTozWMnuhH" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src="icons/spotify-light.png" className="icon-style"></img>
                    Spotify
                </a>
                <a href="https://github.com/BitPolito" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src="icons/github-light.png" className="icon-style"></img>
                    GitHub
                </a>
            </div>

            <div style={{ height: "30px" }}></div>

            <div className="flex justify-between space-x-10">
                <p>Cookie Policy</p>
                <p>©2025, Bitpolito</p>
                <p>Privacy Policy</p>
            </div>
        </>
    );
}