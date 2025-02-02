import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SquareArrowUpRight } from "lucide-react";

import { TextMenuType } from "@/types/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useOpenMobileNav } from "@/hooks/use-open-mobile-nav";

export const TextMenu = ({ links, text }: TextMenuType) => {
  const { onClose } = useOpenMobileNav();
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-2 w-full lg:flex-row">
      <Card className={cn("w-full py-2 overflow-hidden flex-auto rounded-md")}>
        <CardHeader className="p-2 pt-0 flex-shrink-0">
          <CardTitle>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className={cn(
                "max-w-72 w-full capitalize justify-start px-2 text-base hover:bg-primary hover:text-white",
                text.href === pathname && "bg-primary text-white"
              )}
              onClick={onClose}
            >
              <Link href={text.href} title={text.label}>
                <span className="inline-block whitespace-nowrap overflow-hidden text-ellipsis">
                  {text.label}
                </span>
              </Link>
            </Button>
          </CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="px-2 pb-2 flex flex-col h-full">
          <p className="py-1 lg:my-2 text-xs lg:text-sm flex-auto ">
            <Image
              src={text.imageUrl}
              alt={text.label}
              className="object-cover float-start mr-2 rounded-md mb-1 lg:mb-0"
              width={288}
              height={288}
            />

            {text.text}
          </p>
        </CardContent>
      </Card>
      <Card className={cn("w-full py-2 overflow-hidden lg:w-72 rounded-md")}>
        <CardHeader className="p-2 pt-0 flex-shrink-0">
          <CardTitle>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className={cn(
                "w-full capitalize justify-start px-2 text-base hover:bg-primary hover:text-white",
                links.categoryHref === pathname && "bg-primary text-white"
              )}
              onClick={onClose}
            >
              <Link href={links.categoryHref} title={links.categoryLabel}>
                <span className="inline-block whitespace-nowrap overflow-hidden text-ellipsis">
                  {links.categoryLabel}
                </span>
              </Link>
            </Button>
          </CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="px-2 py-2 flex flex-col gap-y-2 h-full">
          {links.list.map((elem) => (
            <Button
              asChild
              variant="outline"
              className={cn(
                "px-2 justify-start text-muted-foreground capitalize overflow-hidden whitespace-nowrap text-ellipsis hover:bg-primary hover:text-white",
                elem.subCategoryHref === pathname && "bg-primary text-white"
              )}
              onClick={onClose}
              key={elem.id}
            >
              <Link href={elem.subCategoryHref} className=" flex items-center">
                <SquareArrowUpRight size={14} className="mr-1 flex-shrink-0" />
                <span className="inline-block whitespace-nowrap overflow-hidden text-ellipsis">
                  {elem.subCategoryLabel}
                </span>
              </Link>
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
