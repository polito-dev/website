import "./globals.css";

export const metadata = {
  title: 'Bitpolito',
  description: 'bitpolito',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-[#F9F9F9] dark:bg-blue-dark text-blue-dark dark:text-white">
        {children}
      </body>
    </html>
  );
}
