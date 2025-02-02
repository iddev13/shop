import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GalleryType } from "@/types/header";

type BigMenuCarouselType = {
  carousel: Omit<GalleryType, "text">[];
};

export const BigMenuCarousel = ({ carousel }: BigMenuCarouselType) => {
  return (
    <Carousel className="w-full max-w-xs over">
      <CarouselContent>
        {carousel.map((slide) => (
          <CarouselItem key={slide.id}>
            <div className="p-1">
              <Card className="rounded-md overflow-hidden">
                <CardContent className="p-0 flex aspect-square items-center justify-center">
                  <Link
                    href={slide.href}
                    title={slide.label}
                    className="relative block w-full h-full overflow-hidden"
                  >
                    <Image
                      src={slide.imageUrl}
                      alt={slide.label}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 15vw"
                    />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-white dark:bg-zinc-800 hover:bg-primary hover:text-white hover:border-white border-primary top-3/4 translate-y-2 lg:translate-y-5 left-4  h-8 w-8 rounded-md disabled:pointer-events-auto" />
      <CarouselNext className="bg-white dark:bg-zinc-800 hover:bg-primary hover:text-white hover:border-white border-primary top-3/4 translate-y-2 lg:translate-y-5 right-4 h-8 w-8 rounded-md transition-all disabled:pointer-events-auto" />
    </Carousel>
  );
};
