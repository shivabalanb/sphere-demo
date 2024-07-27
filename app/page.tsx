import { formatName } from "./lib/util";
import { getServerSession } from "next-auth";
import Button from "./components/SignOutButton";
import { redirect } from "next/navigation";
import { db } from "./lib/db";
import { useEffect } from "react";

export default async function Home() {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/sign-in");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/onboard?email=${session.user.email}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  if (!response.ok) {
    redirect("/onboard");
  }

  return (
    <div className="">
      <p>Welcome {formatName(session?.user?.name!)}</p>
      <Button />
    </div>
  );
}
