// layout.tsx and page.tsx file. These will be rendered when the user visits the root of your application (/).
// The app directory must include a root layout.
// The root layout must define <html> and <body> tags since Next.js does not automatically create them.
import "./globals.css";

const getUser = () => {
  // Get user function
  return false;
};

const isLogin = getUser();

export default function RootLayout({
  children,
  conditionalRoutes,
  conditionalRoutesLogin,
}: {
  children: React.ReactNode;
  conditionalRoutes: React.ReactNode;
  conditionalRoutesLogin: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {isLogin ? conditionalRoutes : conditionalRoutesLogin}
        this is app/layout.tsx
        {children}
      </body>
    </html>
  );
}
