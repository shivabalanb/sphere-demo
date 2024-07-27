import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import SignUp from "@/app/components/SignUp";

export default function SignUpPage() {
  return (
    <div className=" h-full max-w-[300px] mx-auto flex flex-col items-center justify-center">
      <div className="relative w-3/4  h-40 ">
        <Image
          src="sphere.svg"
          alt="sphere"
          fill
          sizes="100vw"
          objectFit="contain"
        />
      </div>
      <SignUp />
    </div>
  );
}
