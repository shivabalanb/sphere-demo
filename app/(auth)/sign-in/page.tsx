import SignIn from "@/app/components/SignIn";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

export default function SignInPage() {
  return (
    <div className=" h-full max-w-[300px] 0 mx-auto flex flex-col items-center justify-center">
      <div className="relative w-3/4  h-40 ">
        <Image
          src="sphere.svg"
          alt="sphere"
          fill
          sizes="100vw"
          objectFit="contain"
        />
      </div>
      <SignIn />
    </div>
  );
}
