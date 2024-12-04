import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ShoppingCart,
  Shirt,
  Smartphone,
  Home,
  Monitor,
  Camera,
  PenToolIcon as Tool,
  BookOpen,
  Gamepad,
  Watch,
  Bed,
  Car,
  Music,
  Utensils,
  GemIcon as Beauty,
  HeartPulse,
  Gift,
  VibrateIcon as Volleyball,
  Plane,
  Flower,
  PaintbrushIcon as Art,
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const categories = [
  { name: "Electronics", icon: Smartphone },
  { name: "Fashion", icon: Shirt },
  { name: "Home", icon: Home },
  { name: "Computers", icon: Monitor },
  { name: "Cameras", icon: Camera },
  { name: "Tools", icon: Tool },
  { name: "Books", icon: BookOpen },
  { name: "Gaming", icon: Gamepad },
  { name: "Watches", icon: Watch },
  { name: "Furniture", icon: Bed },
  { name: "Vehicles", icon: Car },
  { name: "Music", icon: Music },
  { name: "Delicacies", icon: Utensils },
  { name: "Beauty", icon: Beauty },
  { name: "Health ", icon: HeartPulse },
  { name: "Gifts", icon: Gift },
  { name: "Sports", icon: Volleyball },
  { name: "Travel", icon: Plane },
  { name: "Gardening", icon: Flower },
  { name: "Art", icon: Art },
  { name: "Others", icon: ShoppingCart },
];

const CategoryCarousel = () => (
  <div className="w-full px-10 sm:px-12 md:px-14 lg:px-16 xl:px-20 relative">
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-1 md:-ml-2 lg:-ml-3">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <CarouselItem
              key={index}
              className="pl-4 md:pl-5 lg:pl-6 basis-1/5 sm:basis-1/6 md:basis-1/7 lg:basis-1/8 xl:basis-1/10"
            >
              <Card className="bg-zinc-950 hover:bg-zinc-900 transition-colors duration-200 border-0">
                <CardContent className="flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 gap-1 text-white">
                  <Icon strokeWidth="1" size={20} className="mb-1" />
                  <span className="text-[10px] sm:text-xs text-center">
                    {category.name}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute -left-2 sm:-left-3 md:-left-4 top-1/2 -translate-y-1/2 bg-zinc-950 hover:bg-zinc-900 hover:text-white text-white border-[#18181b]" />
      <CarouselNext className="absolute -right-2 sm:-right-3 md:-right-4 top-1/2 -translate-y-1/2 bg-zinc-950 hover:bg-zinc-900 hover:text-white text-white border-[#18181b]" />
    </Carousel>
  </div>
);

export default CategoryCarousel;
