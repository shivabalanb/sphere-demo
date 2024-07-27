"use client";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <main className="h-screen w-full bg-[url('/bg.jpg')] bg-cover bg-center px-8 ">
      <section
        className={`h-full  ${
          ["/sign-up", "/sign-in"].includes(pathname)
            ? "max-w-[600px]"
            : "max-w-[800px]"
        } mx-auto bg-white `}
      >
        {children}
      </section>
    </main>
  );
};

export default Wrapper;
