import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col gap-10 justify-center items-center text-4xl ">
      Todo Application
      <div>
        <Link
          href={"/auth/signin"}
          className="bg-blue-600 text-white rounded-xl m-5 px-4 py-3 "
        >
          Sign in
        </Link>
        <Link
          href={"/auth/signup"}
          className="bg-blue-600 text-white rounded-xl m-5 px-4 py-3 "
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
