import { Mail, MapPin, Phone } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { HeaderLogo } from "@/components/header/header-logo";

export const HeaderContacts = () => {
  return (
    <div className="flex items-center gap-x-2">
      <HeaderLogo className="lg:hidden" />
      <div className="flex items-center gap-x-1 text-muted-foreground hover:text-primary hidden sm:inline-flex transition-colors">
        <MapPin size={12} className="text-primary" />
        <span className="text-xs">New York Washington Square Park</span>
      </div>
      <Separator
        orientation="vertical"
        className="h-3 dark:bg-slate-400 hidden sm:block"
      />
      <a
        href="mailto:example@email.el"
        title="example@email.com"
        className="inline-flex items-center gap-x-1 md:text-muted-foreground hover:text-primary p-1.5 md:p-0 bg-white dark:bg-gray-500/10 md:bg-transparent dark:md:bg-transparent rounded-md text-primary transition-colors shadow-md md:shadow-none"
      >
        <Mail size={12} className="text-primary" />
        <span className="text-xs hidden md:inline-block">
          example@email.com
        </span>
      </a>
      <Separator
        orientation="vertical"
        className="h-3 dark:bg-slate-400 hidden md:block"
      />
      <a
        href="tell:1234567890"
        title="123-456-7890"
        className="inline-flex items-center gap-x-1 md:text-muted-foreground hover:text-primary p-1.5 md:p-0 bg-white dark:bg-gray-500/10 md:bg-transparent dark:md:bg-transparent rounded-md text-primary transition-colors shadow-md md:shadow-none"
      >
        <Phone size={12} className="text-primary" />
        <span className="text-xs hidden md:inline-block">123-456-7890</span>
      </a>
    </div>
  );
};
