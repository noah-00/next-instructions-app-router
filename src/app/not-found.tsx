// The not-found file is used to render UI when the notFound function is thrown within a route segment. Along with serving a custom UI,
// Next.js will also return a 404 HTTP status code.

//This page is displayed when you visit a page that is not defined

import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
