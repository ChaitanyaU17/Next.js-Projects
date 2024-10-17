// src/app/layout.js
export const metadata = {
  title: 'To-Do App',
  description: 'A simple to-do list app built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
