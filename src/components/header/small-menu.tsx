import Link from "next/link";
import { usePathname } from "next/navigation";

import { useOpenMobileNav } from "@/hooks/use-open-mobile-nav";
import { SmallMenuType } from "@/types/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const SmallMenu = ({
  categoryHref,
  categoryLabel,
  list,
}: SmallMenuType) => {
  const { onClose } = useOpenMobileNav();
  const pathname = usePathname();
  return (
    <Card className={cn("w-full py-2 overflow-hidden rounded-md")}>
      <CardHeader className="p-2 pt-0 flex-shrink-0">
        <CardTitle>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className={cn(
              "w-full capitalize justify-start px-2 text-base hover:bg-primary hover:text-white",
              categoryHref === pathname && "bg-primary text-white"
            )}
            onClick={onClose}
          >
            <Link href={categoryHref} title={categoryLabel}>
              <span className="inline-block whitespace-nowrap overflow-hidden text-ellipsis">
                {categoryLabel}
              </span>
            </Link>
          </Button>
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="px-2 pt-2 pb-0 flex flex-col gap-2 h-full">
        {list.map((elem) => (
          <Button
            asChild
            size="sm"
            variant="outline"
            className={cn(
              "capitalize px-2 justify-start hover:bg-primary hover:text-white",
              elem.subCategoryHref === pathname && "bg-primary text-white"
            )}
            onClick={onClose}
            key={elem.id}
          >
            <Link href={elem.subCategoryHref}>
              <span className="inline-block whitespace-nowrap overflow-hidden text-ellipsis">
                {elem.subCategoryLabel}
              </span>
            </Link>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};
