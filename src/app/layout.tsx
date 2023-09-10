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
  conditional1,
  conditional2,
  modal,
}: {
  children: React.ReactNode;
  conditional1: React.ReactNode;
  conditional2: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {isLogin ? conditional1 : conditional2}
        this is app/layout.tsx
        {children}
        {/* it is Intercepting Routes. https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes*/}
        {modal}
      </body>
    </html>
  );
}
