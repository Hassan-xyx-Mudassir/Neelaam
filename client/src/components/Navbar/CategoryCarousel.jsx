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
  Volleyball,
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

const contentColors = [
  "group-hover:text-red-500",
  "group-hover:text-blue-500",
  "group-hover:text-orange-400",
  "group-hover:text-amber-400",
  "group-hover:text-lime-500",
  "group-hover:text-green-500",
  "group-hover:text-teal-400",
  "group-hover:text-cyan-500",
  "group-hover:text-indigo-400",
  "group-hover:text-yellow-300",
  "group-hover:text-violet-500",
  "group-hover:text-fuchsia-400",
  "group-hover:text-pink-400",
  "group-hover:text-rose-500",
  "group-hover:text-sky-500",
  "group-hover:text-emerald-500",
  "group-hover:text-slate-400",
  "group-hover:text-purple-500",
];

const cardColors = [
  "hover:bg-red-500/5",
  "hover:bg-blue-500/5",
  "hover:bg-orange-400/5",
  "hover:bg-amber-400/5",
  "hover:bg-lime-500/5",
  "hover:bg-green-500/5",
  "hover:bg-teal-400/5",
  "hover:bg-cyan-500/5",
  "hover:bg-indigo-400/5",
  "hover:bg-yellow-300/5",
  "hover:bg-violet-500/5",
  "hover:bg-fuchsia-400/5",
  "hover:bg-pink-400/5",
  "hover:bg-rose-500/5",
  "hover:bg-sky-500/5",
  "hover:bg-emerald-500/5",
  "hover:bg-slate-400/5",
  "hover:bg-purple-500/5",
];

const CategoryCarousel = () => (
  <div className="w-full px-16 lg:px-16 xl:px-20">
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
              className="pl-4 md:pl-5 lg:pl-6 basis-1/4 sm:basis-1/5 md:basis-[12.5%] lg:basis-[10%] xl:basis-1/10"
            >
              <Card
                className={`bg-zinc-950 ${
                  cardColors[index % cardColors.length]
                } transition-colors duration-200 border-0 group`}
              >
                <CardContent className="flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 gap-1 text-white">
                  <Icon
                    strokeWidth="1"
                    className={`h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 mb-1 transition-colors duration-200 ${
                      contentColors[index % contentColors.length]
                    }`}
                  />
                  <span
                    className={`text-[10px] sm:text-xs text-center transition-colors duration-200 ${
                      contentColors[index % contentColors.length]
                    }`}
                  >
                    {category.name}
                    {console.log(
                      category.name,
                      contentColors[index % contentColors.length],
                      cardColors[index % cardColors.length]
                    )}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="bg-zinc-950 hover:bg-zinc-900 hover:text-white text-white border-[#18181b]" />
      <CarouselNext className="bg-zinc-950 hover:bg-zinc-900 hover:text-white text-white border-[#18181b]" />
    </Carousel>
  </div>
);

export default CategoryCarousel;
