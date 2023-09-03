"use client";

// this component under the app directory is segment
// Just follow these steps to create a page! (URL/dashbord)

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

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
    </div>
  );
}

export default Page;
