import { useState } from "react";
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

const contentColors = [
  "text-red-500",
  "text-blue-500",
  "text-orange-400",
  "text-amber-400",
  "text-lime-500",
  "text-green-500",
  "text-teal-400",
  "text-cyan-500",
  "text-indigo-400",
  "text-yellow-300",
  "text-violet-500",
  "text-fuchsia-400",
  "text-pink-400",
  "text-rose-500",
  "text-sky-500",
  "text-emerald-500",
  "text-slate-400",
  "text-purple-500",
];

const cardColors = [
  "bg-red-500/5",
  "bg-blue-500/5",
  "bg-orange-400/5",
  "bg-amber-400/5",
  "bg-lime-500/5",
  "bg-green-500/5",
  "bg-teal-400/5",
  "bg-cyan-500/5",
  "bg-indigo-400/5",
  "bg-yellow-300/5",
  "bg-violet-500/5",
  "bg-fuchsia-400/5",
  "bg-pink-400/5",
  "bg-rose-500/5",
  "bg-sky-500/5",
  "bg-emerald-500/5",
  "bg-slate-400/5",
  "bg-purple-500/5",
];

const CategoryCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState();

  return (
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
            const contentColor = contentColors[index % contentColors.length];
            const cardColor = cardColors[index % cardColors.length];

            return (
              <CarouselItem
                key={index}
                className="pl-4 md:pl-5 lg:pl-6 basis-1/4 sm:basis-1/5 md:basis-[12.5%] lg:basis-[10%] xl:basis-1/10"
              >
                <Card
                  className={`bg-zinc-950 transition-colors duration-200 border-0 group cursor-pointer ${
                    selectedIndex === index ? cardColor : `hover:${cardColor}`
                  }`}
                  onClick={() => setSelectedIndex(index)}
                >
                  <CardContent className="flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 gap-1 text-white">
                    <Icon
                      strokeWidth="1"
                      className={`h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 mb-1 transition-colors duration-200 ${
                        selectedIndex === index
                          ? contentColor
                          : `text-white group-hover:${contentColor}`
                      }`}
                    />
                    <span
                      className={`text-[10px] sm:text-xs text-center transition-colors duration-200 ${
                        selectedIndex === index
                          ? contentColor
                          : `text-white group-hover:${contentColor}`
                      }`}
                    >
                      {category.name}
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
};

export default CategoryCarousel;
