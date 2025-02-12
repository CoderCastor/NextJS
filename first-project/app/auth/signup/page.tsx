"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center p-10 bg-zinc-900 gap-5">
      <div className="flex justify-center flex-col gap-5 rounded-2xl px-28 py-16 items-center bg-zinc-800">
        <h2 className="text-4xl text-white">Sign Up</h2>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="bg-zinc-900 rounded-2xl px-2 py-2"
          type="text"
          name="username"
          placeholder="username"
          id=""
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="bg-zinc-900 rounded-2xl px-2 py-2"
          type="password"
          name="password"
          placeholder="password"
          id=""
        />
        <button
          onClick={() => {
            axios.post("http://localhost:3000/api/auth/signup", {
              username,
              password,
            });

            // router.push("/auth/signin");
            console.log("frontend")
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default page;
