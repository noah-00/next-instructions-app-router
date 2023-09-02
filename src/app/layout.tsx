// layout.tsx and page.tsx file. These will be rendered when the user visits the root of your application (/).
// The app directory must include a root layout.
// The root layout must define <html> and <body> tags since Next.js does not automatically create them.

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        this is app/layout.tsx
        {children}
      </body>
    </html>
  );
}
