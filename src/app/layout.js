import "./globals.css";

export const metadata = {
  title: 'Bitpolito',
  description: 'bitpolito',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-blue-light dark:bg-blue-dark text-blue-dark dark:text-blue-light">
        {children}
      </body>
    </html>
  );
}
