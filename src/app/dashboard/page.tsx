"use client";

// this component under the app directory is segment
// Just follow these steps to create a page! (URL/dashbord)

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorHnadle from "./error";

function Page() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard");
  };

  return (
    <div>
      <h1>dashboard page</h1>
      <Link href="/dashboard" className="bg-blue-500 inline-block p-1 mr-1">
        to /dashboard
      </Link>
      {/* or */}
      <button onClick={handleClick} className="bg-blue-500 inline-block p-1">
        to /dashboard
      </button>

      {/*
        ## streaming
        The components specified in the fallback below are depicted separately.

        streaming 1　⇨ after fetching  json.username(Bred ..etc)
        streaming 2
        streaming 3
      */}
      <Suspense fallback={<p>streaming 1</p>}>
        <Fetch />
      </Suspense>

      <Suspense fallback={<p>streaming 2</p>}>
        <Fetch />
      </Suspense>

      <Suspense fallback={<p>streaming 3</p>}>
        <Fetch />
      </Suspense>

      <ErrorBoundary
        fallback={
          <ErrorHnadle
            error={new Error("Something wrong")}
            reset={() => router.push("/")}
          ></ErrorHnadle>
        }
      >
        <Suspense fallback={<p>streaming fetch error</p>}>
          <FetchEroor />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

const Fetch = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const json = await data.json();
  return <main className="text-red-500">{json.username}</main>;
};

const FetchEroor = async () => {
  throw new Error("something wrong");
};
export default Page;
