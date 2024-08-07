// Byimaan

import BChatText from "@/components/common/AppText.server";
import { TechStack } from "@/components/common/TechStack.server";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-center">

      <div className="holder w-full sm:w-[540px] xl:w-[880px] space-y-16">

        <div className="text-area flex flex-col text-left sm:text-center space-y-10 ">

          <BChatText textSizeInTailwind="text-[8rem]"
            spanChildOf_B_letter={
              <span className='absolute left-full top-5 text-[0.3em] tracking-wider'>YIਮਾਨ</span>
            }
          />
          <h2 className="text-lg text-secondary-bchat"> <span className="text-bold text-3xl text-black"> " </span>
            Stay connected with friends and family anytime, anywhere. <br /> Experience seamless communication with our user-friendly interface. <br /> Your conversations, simplified and secure.<span className="text-bold text-3xl text-black"> " </span></h2>
        </div>

        <div className="buttons flex justify-around flex-col sm:flex-row gap-4 ">
          <Link href={"/authentication?form=login"} className="rounded-lg bg-teal-400 min-w-24 font-semibold py-3 px-5 sm:w-fit hover:bg-teal-500 text-white text-center">
            Login
          </Link>
          <Link href={"/authentication?form=register"} className="sm:w-fit rounded-lg min-w-24 bg-teal-400 font-semibold py-3 px-5 hover:bg-teal-500 text-white text-center">
            Signup
          </Link>
        </div>

        {
          TechStack.render["*"]({
            size: 24,
            className:"w-full flex justify-center items-center gap-3 sm:gap-5",
            iconClassName: "flex gap-3 sm:gap-5 text-bold"
          })
        }
      </div>
    </main>
  );
}
