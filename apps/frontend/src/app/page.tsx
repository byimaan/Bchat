// Byimaan

import BChatText from "@/components/common/AppText.server";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-center">

      <div className="holder w-full sm:w-[540px] xl:w-[880px] space-y-16">

        <div className="text-area flex flex-col text-left sm:text-center space-y-10">
          <BChatText sizeInTailwind="text-[8rem]"/>
          <h2 className="text-lg text-gray-700">"Stay connected with friends and family anytime, anywhere. <br /> Experience seamless communication with our user-friendly interface. <br /> Your conversations, simplified and secure."</h2>
        </div>

        <div className="buttons flex justify-around flex-col sm:flex-row gap-4 ">
          <Link href={"/authenticate?type=login"} className="rounded-lg bg-teal-400 min-w-24 font-semibold py-3 px-5 sm:w-fit hover:bg-teal-500 text-white text-center">
            Login
          </Link>
          <Link href={"/authenticate?type=register"} className="sm:w-fit rounded-lg min-w-24 bg-teal-400 font-semibold py-3 px-5 hover:bg-teal-500 text-white text-center">
            Signup
          </Link>
        </div>
      </div>
    </main>
  );
}
