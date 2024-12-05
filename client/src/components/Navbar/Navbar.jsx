import { useState } from "react";
import logo from "../../assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu, LogIn, CircleHelp, PlusCircle } from "lucide-react";
import SearchBar from "./SearchBar";
import CategoryCarousel from "./CategoryCarousel";

const Logo = () => (
  <div className="flex items-center gap-2">
    <img src={logo} alt="Neelaam Logo" className="h-8 w-8" />
    <span className="text-white font-bold text-xl group font-bold	">
      <span className="font-kufam bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 bg-[length:200%_auto] group-hover:animate-shine">
        نیلام
      </span>
    </span>
  </div>
);

const NavButtons = () => (
  <div className="flex flex-col sm:flex-row gap-2">
    <Button variant="gooeyLeft" className="text-xs w-full ">
      FAQ
    </Button>
    <Button variant="gooeyLeft" className="text-xs w-full ">
      Login
    </Button>
    <Button variant="gooeyLeft" className="text-xs w-full ">
      Signup
    </Button>
  </div>
);

const NavSheetButtons = () => (
  <div className="flex flex-col sm:flex-row mt-5">
    <Button
      variant="ghost"
      className="flex justify-between px-6 py-1 hover:bg-zinc-900"
    >
      <span>FAQ</span>
      <CircleHelp />
    </Button>
    <Separator className="bg-zinc-900 mb-3 mt-1" />
    <Button className="flex justify-between px-6 py-1 hover:bg-zinc-900">
      Login
      <LogIn />
    </Button>
    <Separator className="bg-zinc-900 mb-3 mt-1" />
    <Button className="flex justify-between px-6 py-1 hover:bg-zinc-900">
      Signup
      <PlusCircle />
    </Button>
    <Separator className="bg-zinc-900 mb-3 mt-1" />
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2.5">
      <nav className="w-full flex flex-col sm:flex-row justify-between py-3 pb-0 px-5 text-white sm:gap-8">
        <div className="flex justify-between items-center w-full sm:w-auto mb-4 sm:mb-0">
          <Logo />
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="sm:hidden p-0">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:hidden bg-zinc-950 text-white"
            >
              <NavSheetButtons />
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex-grow max-w-2xl mx-auto w-full sm:mx-2">
          <SearchBar />
        </div>
        <div className="hidden sm:block">
          <NavButtons />
        </div>
      </nav>
      <Separator className="bg-zinc-900" />
      <CategoryCarousel />
    </div>
  );
};

export default Navbar;
