import { Image } from "@nextui-org/react";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <footer className="w-full min-h-20 bg-zinc-900 py-15 px-4 md:px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Image src={logo} alt="Neelaam Logo" width={32} height={32} />
          <span className="ml-2 text-white font-bold text-xl">
            <span className="font-kufam bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 bg-[length:200%_auto]">
              نیلام
            </span>
          </span>
        </div>
        <div className="text-zinc-400 text-sm">
          © {new Date().getFullYear()} Neelaam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
