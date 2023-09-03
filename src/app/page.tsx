// layout.tsx and page.tsx file. These will be rendered when the user visits the root of your application (/).

// In the app directory, you can modify the <head> HTML elements such as title and meta using the built-in SEO support.
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "next-instructions-app-router",
};

export default function Page() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <Link href="/dashboard" className="bg-blue-500 p-1">
        to /dashboard
      </Link>
    </div>
  );
}
