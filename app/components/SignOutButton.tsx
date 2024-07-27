"use client";
import { signOut } from "next-auth/react";
import React from "react";

const Button = () => {
  return (
    <button
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/sign-in`,
        })
      }
      className="bg-primary p-2  text-white font-semibold "
    >
      Sign Out
    </button>
  );
};

export default Button;
