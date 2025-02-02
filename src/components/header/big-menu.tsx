import Link from "next/link";

import { BigMenuType } from "@/types/header";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BigMenuCarousel } from "@/components/header/big-menu-carousel";
import { BigMenuCard } from "@/components/header/big-menu-card";

export const BigMenu = ({
  list,
  carouselHref,
  carouselLabel,
  carousel,
}: BigMenuType) => {
  return (
    <div className="flex flex-col gap-2 w-full lg:flex-row">
      {list.map((elem) => (
        <BigMenuCard
          id={elem.id}
          key={elem.id}
          categoryHref={elem.categoryHref}
          categoryLabel={elem.categoryLabel}
          list={elem.list}
        />
      ))}
      <Card
        className={cn(
          "w-full py-2 overflow-hidden lg:w-72 rounded-md flex-shrink-0"
        )}
      >
        <CardHeader className="p-2 pt-0 flex-shrink-0">
          <CardTitle>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="w-full capitalize justify-start px-2 text-base"
            >
              <Link href={carouselHref} title={carouselLabel}>
                <span className="inline-block whitespace-nowrap overflow-hidden text-ellipsis">
                  {carouselLabel}
                </span>
              </Link>
            </Button>
          </CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="px-2 py-2 flex flex-col gap-y-2 h-full">
          <BigMenuCarousel carousel={carousel} />
        </CardContent>
      </Card>
    </div>
  );
};
