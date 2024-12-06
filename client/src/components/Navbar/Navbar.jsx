import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, User, Tooltip } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Menu, LogIn, CircleHelp, PlusCircle } from "lucide-react";
import SearchBar from "./SearchBar";
import CategoryCarousel from "./CategoryCarousel";
import { LoginForm } from "../LoginForm/LoginForm";
import { SignupForm } from "../SignupForm/SignupForm";
import logo from "../../assets/logo.svg";

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

const NavButtons = ({ setOpen }) => {
  return (
    <div className="flex sm:flex-row gap-2">
      <Link to="faq">
        <Button variant="gooeyLeft" className="text-xs w-full ">
          FAQ
        </Button>
      </Link>
      <Button
        variant="gooeyLeft"
        className="text-xs w-full "
        onClick={() => setOpen(true)}
      >
        Login
      </Button>
      <Button
        variant="gooeyLeft"
        className="text-xs w-full "
        onClick={() => setOpen(true)}
      >
        Signup
      </Button>
    </div>
  );
};

const NavSheetButtons = ({ setOpen }) => {
  return (
    <div className="flex flex-col mt-5">
      <Link to="faq">
        <Button
          variant="ghost"
          className="flex justify-between px-6 py-1 hover:bg-zinc-900"
        >
          <span>FAQ</span>
          <CircleHelp />
        </Button>
      </Link>
      <Separator className="bg-zinc-900 mb-3 mt-1" />
      <Button
        className="flex justify-between px-6 py-1 hover:bg-zinc-900"
        onClick={() => setOpen(true)}
      >
        Login
        <LogIn />
      </Button>
      <Separator className="bg-zinc-900 mb-3 mt-1" />
      <Button
        className="flex justify-between px-6 py-1 hover:bg-zinc-900"
        onClick={() => setOpen(true)}
      >
        Signup
        <PlusCircle />
      </Button>
      <Separator className="bg-zinc-900 mb-3 mt-1" />
    </div>
  );
};

const ShowAvatar = () => {
  return (
    <div className="flex gap-10">
      <Button variant="gooeyLeft" className="text-xs w-full text-white">
        FAQ
      </Button>
      <Tooltip
        showArrow={true}
        placement="bottom-end"
        content={
          <div className="px-1 py-2">
            <div className="text-small font-bold">Jane Doe</div>
            <div className="text-tiny">Signed in</div>
          </div>
        }
      >
        <div>
          <Avatar
            classNames={{
              base: "ring transition-all duration-300 hover:ring-green-400",
            }}
            showFallback
            name="Jane"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </div>
      </Tooltip>
    </div>
  );
};

const ShowAvatarOnSheet = () => {
  return (
    <div className="flex flex-col mt-10">
      <div className="mb-3">
        <User
          size="lg"
          name="Jane Doe"
          description="Signed in"
          classNames={{ wrapper: "ml-2" }}
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            showFallback: true,
            classNames: {
              base: "ring transition-all duration-300 hover:ring-green-400",
            },
          }}
        />
      </div>
      <Separator className="bg-zinc-900 mb-3 mt-1" />
      <Button
        variant="ghost"
        className="flex justify-between px-[16px] py-6 hover:bg-zinc-900 "
      >
        <span>FAQ</span>
        <CircleHelp />
      </Button>
      <Separator className="bg-zinc-900 mb-3 mt-1" />
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const handleClick = () => {
    setAuthenticated(true);
  };

  return (
    <div className="flex flex-col items-center gap-2.5">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-zinc-950 text-white w-[425px] p-3 border-0 ">
          <Tabs defaultValue="login" className="w-[400px] mt-8">
            <TabsList className="grid w-full grid-cols-2 bg-zinc-800 text-white">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Signup</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <div>
                <LoginForm />
              </div>
            </TabsContent>
            <TabsContent value="signup">
              <div>
                <SignupForm />
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
      <nav className="w-full flex flex-col sm:flex-row justify-between py-3 pb-0 px-5 text-white sm:gap-8">
        <div className="flex justify-between items-center w-full sm:w-auto mb-4 sm:mb-0">
          <Link to="/">
            <Logo />
          </Link>
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
              {!authenticated ? (
                <NavSheetButtons setOpen={setOpen} />
              ) : (
                <ShowAvatarOnSheet />
              )}
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex-grow max-w-2xl mx-auto w-full sm:mx-2">
          <SearchBar />
        </div>
        <div className="hidden sm:block">
          {!authenticated ? <NavButtons setOpen={setOpen} /> : <ShowAvatar />}
        </div>
      </nav>
      <Separator className="bg-zinc-900" />
      <CategoryCarousel />
    </div>
  );
};

export default Navbar;
