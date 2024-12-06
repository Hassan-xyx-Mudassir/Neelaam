import { FileX2 } from "lucide-react";
import Navbar from "../components/Navbar/Navbar";
const NotFound = () => {
  return (
    <div className="font-roboto bg-zinc-950 min-h-screen">
      <Navbar />
      <div className="flex justify-center flex-col sm:flex-row items-center gap-5 mt-30">
        <FileX2 strokeWidth={1} className="h-28 w-28 sm:h-40 sm:w-40" />
        <h1 className="font-light text-3xl md:text-4xl">
          Couldn&apos;t find that page
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
