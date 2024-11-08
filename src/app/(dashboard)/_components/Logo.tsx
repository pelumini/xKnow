import Image from "next/image";

import { Syncopate } from "next/font/google";

const syncopate = Syncopate({ weight: ["400", "700"], subsets: ["latin"] });

export const Logo = () => {
  return (
    <div className="flex gap-1 items-center">
      <Image height={30} width={30} alt="logo" src="/logo.svg" />
      <h1 className={`text-[#073650] font-bold  ${syncopate.className}`}>
        xKnow
      </h1>
    </div>
  );
};
