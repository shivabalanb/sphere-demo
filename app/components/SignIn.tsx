"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  signInSchema,
  signUpSchema,
  TSignInSchema,
  TSignUpSchema,
} from "../types/types";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function SignIn() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: TSignInSchema) => {
    const signInData = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (signInData?.ok) {
      router.push("/");
    } else {
      setError("password", { message: `${signInData?.error!} failed` });
      console.error(signInData?.error);
    }
  };
  return (
    <form
      className="w-full flex flex-col gap-3 pb-12"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="h-14">
        <input
          type="text"
          className="h-12 w-full px-4 text-sm border-2 focus:border-primary focus:outline-none transition-all duration-150"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && (
          <p className=" text-right text-xs text-red-500/70">
            {errors.email && errors.email.message + "*"}
          </p>
        )}
      </div>
      <div className="h-14">
        <input
          type="password"
          className="h-12 w-full px-4 text-sm border-2 focus:border-primary focus:outline-none transition-all duration-150"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && (
          <p className=" text-right text-xs text-red-500/70">
            {errors.password.message + "*"}
          </p>
        )}
      </div>
  
      <button

        type="submit"
        className="bg-primary h-14 text-white font-semibold text-lg focus:scale-95 hover:bg-black transition-colors duration-150"
      >
        {isSubmitting ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="mx-auto w-6 h-6 text-gray-200 animate-spin  fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        ) : (
          "Login"
        )}
      </button>
      <p className="text-center text-primary ">
        Create a new account{" "}
        <Link
          className="hover:text-blue-700 text-blue-500 font-semibold focus:scale-95 transition-colors duration-150"
          href="/sign-up"
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
}
