"use client";

import React from "react";

export default function Page({ params }: { params: { id: string } }) {
  // for example: http://localhost:3000/blogCatchAll/1/2/3
  // params.id = ["1", "2", "3"]

  return <div>Params is {params.id}</div>;
}
