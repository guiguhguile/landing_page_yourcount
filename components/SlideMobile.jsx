import Mobile1 from "../public/Mobile1.svg";
import Mobile2 from "../public/Mobile2.svg";
import Mobile3 from "../public/Mobile3.svg";
import Mobile4 from "../public/Mobile4.svg";
import Mobile5 from "../public/Mobile5.svg";
import Mobile6 from "../public/Mobile6.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";

export default function SlideMobile() {
  const imageItemsMobile = [
    Mobile1,
    Mobile2,
    Mobile3,
    Mobile4,
    Mobile5,
    Mobile6,
  ];

  return (
    <Carousel className=" w-[100%] max-w-xs lg:hidden">
      <CarouselContent>
        {imageItemsMobile.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="overflow-hidden">
                <CardContent className="flex items-center justify-center ">
                  <Image src={item} alt="card" className="w-full h-full" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
