import { useState } from "react";
import logo from "../../assets/logo.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CategoryCarousel from "./CategoryCarousel";
import { Search, Filter, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Logo = () => (
  <div className="flex items-center gap-2">
    <img src={logo} alt="Neelaam Logo" className="h-8 w-8" />
    <span className="text-white font-bold text-xl group">
      <span className="font-kufam bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 bg-[length:200%_auto] group-hover:animate-shine duration-10">
        نیلام
      </span>
    </span>
  </div>
);

const SearchBar = () => (
  <div className="flex items-center w-full gap-2">
    <Input placeholder="Search..." className="flex-grow" />
    <Button className="border hover:bg-zinc-900">
      <Search className="h-3 w-3 text-white" />
    </Button>
    <Button
      variant="ghost"
      className="bg-white text-[#000] hover:text-slate-500"
    >
      <Filter className="h-4 w-4" />
    </Button>
  </div>
);

const NavButtons = ({ className = "" }) => (
  <div className={`flex flex-col sm:flex-row gap-2 ${className}`}>
    <Button variant="gooeyLeft" className="text-xs w-full sm:w-auto">
      FAQ
    </Button>
    <Button variant="gooeyLeft" className="text-xs w-full sm:w-auto">
      Login
    </Button>
    <Button variant="gooeyLeft" className="text-xs w-full sm:w-auto">
      Signup
    </Button>
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2.5">
      <nav className="w-full flex flex-col sm:flex-row justify-between py-3 pb-0 px-5 text-white">
        <div className="flex justify-between items-center w-full sm:w-auto mb-4 sm:mb-0">
          <Logo />
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="sm:hidden p-0">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:hidden">
              <NavButtons className="mt-8" />
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
