// app/layout.tsx
import './globals.css'; // The most important line!

export const metadata = {
  title: 'Juglans', // Provide a default title
  description: "The World's First Vibe Trading App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // This MUST be a complete HTML document
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}