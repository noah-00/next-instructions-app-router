"use client";

import React from "react";

// import AuthModal from "@/components/authModal";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <>
      Conditional Routes Login
      {/* <AuthModal>
        <span onClick={() => router.back()}>Close modal</span>
      </AuthModal> */}
    </>
  );
}
