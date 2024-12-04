import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { AiOutlineLink } from "react-icons/ai";

export default function ProductPayment() {
  return (
    <>
      <div>
        <div className="pt-5 pl-7 pr-7">
          <Select>
            <SelectTrigger className="w-[330px] h-[50px] border border-black font-bold">
              <SelectValue placeholder="Monthly" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quaterly">Quaterly</SelectItem>
              <SelectItem value="6months">Every Six Months</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
          <div className="w-[330px] h-[200px] border border-black rounded mt-5 shadow-[5px_5px_0px_rgba(0,0,0,1)]  bg-[#e5e5e5]">
            <div className="w-[120px] h-[40px] bg-white border border-black rounded-full mt-4 ml-4 mr-4 mb-2">
              <h1 className="p-2 text-black">$97 a month</h1>
            </div>
            <h1 className="font-bold ml-4">Basic Access</h1>
            <p className="ml-4 mr-4 fit text-black">
              This give you access to all signals, the community all fundamental
              classes and weekly/biweekly zoom calls within the discord.
            </p>
          </div>
          <button className="bg-customTeal w-[330px] h-[45px] text-white font-medium py-2 px-4 ml-2 mt-5 mb-5 mr-2 rounded shadow hover:bg-teal-600 hover:scale-105 hover:translate-[-5px_-5px] transition-all duration-300 border border-black">
            Add to cart
          </button>
          <div className="w-[330px] h-[45px] border border-black rounded ml-2 mb-5 mr-2 py-2">
            <h6 className="font-bold p-1 ml-2 text-small">Membership Access</h6>
          </div>
          <div className="flex flex-row">
            <div className="ml-2">
              <Select>
                <SelectTrigger className="w-[270px] h-[50px] border border-black font-bold">
                  <SelectValue
                    placeholder="Add to wishlist"
                    onClick={() =>
                      window.open("https://www.example.com", "_blank")
                    }
                  />
                </SelectTrigger>
              </Select>
            </div>

            <Button
              variant="outline"
              className="ml-2 h-[50px] w-[50px] text-xs border border-black hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-shadow duration-200"
            >
              <AiOutlineLink />
            </Button>
          </div>
        </div>
        <div className="border-t border-black mb-2 mt-10 w-[385px]"></div>
      </div>
    </>
  );
}
