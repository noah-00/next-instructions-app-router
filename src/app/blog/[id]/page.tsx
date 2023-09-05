"use client";

import React from "react";

export default function Page({ params }: { params: { id: string } }) {
  // for example: http://localhost:3000/blog/1
  // params.id = "1"

  return <div>Params is {params.id}</div>;
}
