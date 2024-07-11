"use client";

import { useState } from "react";

import Login from "@/components/forms/login";
import Signup from "@/components/forms/signup/signup";

export default function Register() {
  const [authType, setAuthType] = useState<"signup" | "login">("login");

  return (
    <main className="flex items-center justify-center p-[5%]">
      <div className="flex items-center flex-col gap-10 w-full">
        <div className="flex items-center justify-center gap-12">
          <p
            className="flex flex-col cursor-pointer group mb-2"
            onClick={() => setAuthType("login")}
          >
            Log in
            <span
              className={`w-full h-1 ${
                authType === "login" ? "bg-primary" : "bg-transparent"
              } rounded duration-200 transition-all`}
            />
          </p>
          <p
            className="flex flex-col cursor-pointer group mb-2"
            onClick={() => setAuthType("signup")}
          >
            Sign up
            <span
              className={`w-full h-1 ${
                authType === "signup" ? "bg-primary" : "bg-transparent"
              } rounded duration-200 transition-all`}
            />
          </p>
        </div>

        {authType === "login" && <Login />}
        {authType === "signup" && <Signup />}
      </div>
    </main>
  );
}
