// layout.tsx and page.tsx file. These will be rendered when the user visits the root of your application (/).

// In the app directory, you can modify the <head> HTML elements such as title and meta using the built-in SEO support.
import swagPhotos from "@/phots";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "next-instructions-app-router",
};

export default function Page() {
  const photos = swagPhotos;

  return (
    <>
      <div>
        <h1>Hello, Next.js!</h1>
        <Link href="/dashboard" className="bg-blue-500 p-1">
          to /dashboard
        </Link>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10">
          {photos.map(({ id, imageSrc }) => (
            <Link key={id} href={`/photos/${id}`}>
              <Image
                alt=""
                src={imageSrc}
                height={500}
                width={500}
                className="w-full object-cover aspect-square"
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
