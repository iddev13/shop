import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useOpenMobileNav } from "@/hooks/use-open-mobile-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type GalleryCardType = {
  href: string;
  label: string;
  text: string;
  imageUrl: string;
  className?: string;
};

export const GalleryCard = ({
  href,
  label,
  text,
  imageUrl,
  className,
}: GalleryCardType) => {
  const { onClose } = useOpenMobileNav();
  const pathname = usePathname();
  return (
    <Card
      className={cn(
        "lg:h-[348px] w-full py-2 overflow-hidden rounded-md",
        className
      )}
    >
      <CardHeader className="p-2 pt-0 flex-shrink-0">
        <CardTitle>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className={cn(
              "w-full capitalize justify-start px-2 text-base hover:bg-primary hover:text-white",
              href === pathname && "bg-primary text-white"
            )}
            onClick={onClose}
          >
            <Link href={href} title={label}>
              <span className="inline-block whitespace-nowrap overflow-hidden text-ellipsis">
                {label}
              </span>
            </Link>
          </Button>
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="px-2 pb-0 flex flex-col h-full">
        <p className="text-xs py-1 lg:my-2 max-h-14 flex-auto">{text}</p>
        <Link
          href={href}
          className="relative block w-full h-44 lg:h-52 rounded-md overflow-hidden"
          onClick={onClose}
        >
          <Image
            src={imageUrl}
            alt={label}
            fill
            sizes="(max-width: 768px) 50vw, 20vw"
            className="object-cover"
          />
        </Link>
      </CardContent>
    </Card>
  );
};
