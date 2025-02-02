import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

type HeaderLogoType = {
  className?: string;
};

export const HeaderLogo = ({ className }: HeaderLogoType) => {
  return (
    <div
      className={cn(
        "select-none relative mr-2 lg:mr-8 flex items-center ",
        className
      )}
    >
      <Link
        href={"/"}
        className="inline-block relative
		 w-12 h-7 lg:w-16 lg:h-10 whitespace-nowrap"
      >
        <Image
          className="block w-full h-full top-0 left-0 z-10 object-contain"
          src={"/assets/image/fx-logo2.png"}
          fill
          alt="LOGO"
          sizes="(max-width: 768px) 33vw, (max-width: 1200px) 22vw, 10vw"
          priority={true}
        />
      </Link>
    </div>
  );
};
