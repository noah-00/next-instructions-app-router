"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);

  async function getData() {
    // 'force-cache' is the default, and can be omitted
    // fetch("https://...", { cache: "force-cache" });
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    // revalidate at most every hour
    // const revalidate = 3600
    // fetch('https://...', { next: { revalidate: 3600 } })

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    console.log(data);
    setUsers(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      {users
        ? users.map((user) => <div key={user.id}>{user.name}</div>)
        : "Loading..."}
    </main>
  );
}
