import { socialLinks } from "@/constants";
import { FacebookIcon } from "@/components/icons/facebook";
import { InstagramIcon } from "@/components/icons/instagram";
import { XIcon } from "@/components/icons/x";
import { GoogleIcon } from "@/components/icons/google";
import { GithubIcon } from "@/components/icons/github";
import { cn } from "@/lib/utils";

type SocialType = {
  className?: string;
};

export const Social = ({ className }: SocialType) => {
  const list = socialLinks.map((elem) => {
    return (
      <li className="relative flex items-center justify-center" key={elem.id}>
        <a
          href={elem.href}
          title={elem.label}
          target="_blank"
          className={cn(
            'group inline-block w-6 h-6 relative rounded-full overflow-hidden after:block after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:-z-[1]  after:transition-all hover:after:h-full p-1 [&_>svg]:hover:fill-white dark:[&_>svg]:fill-white',
            elem.label
          )}
        >
          {elem.label === "facebook" && <FacebookIcon />}
          {elem.label === "instagram" && <InstagramIcon />}
          {elem.label === "twitter" && <XIcon />}
          {elem.label === "google" && <GoogleIcon />}
          {elem.label === "github" && <GithubIcon />}
        </a>
      </li>
    );
  });

  return (
    <div className={cn("flex justify-end items-end relative z-10", className)}>
      <ul className="flex gap-1">{list}</ul>
    </div>
  );
};
