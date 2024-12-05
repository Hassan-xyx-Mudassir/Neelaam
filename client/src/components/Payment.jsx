import { Button } from "@/components/ui/button";
import { useGlobalState } from "@/contexts/GlobalStateContext";
import logo from "../assets/logo.png";
import Modal from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

import React, { useState } from "react";

export default function () {
  const { text, price, plan } = useGlobalState();
  const [discountCode, setDiscountCode] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(price); // Initially, price without discount
  const [isDiscountApplied, setIsDiscountApplied] = useState(false); // Track if discount is applied
  const { toast } = useToast();

  const storedDiscountCode = "DISCOUNT2024";

  const handleApplyDiscount = () => {
    if (isDiscountApplied) {
      toast({
        title: "Discount already applied!",
        description: "InValid Code! Discount already applied.",
      });

      return;
    }
    if (discountCode === storedDiscountCode) {
      setDiscountedPrice(price * 0.5);
      toast({
        title: "Discount Code Applied",
        description: "Valid Code! Discount applied.",
      });

      setIsDiscountApplied(true);
    } else {
      toast({
        title: "Invalid Code!",
        description: "InValid Code! Discount not applied.",
      });
    }
  };
  return (
    <>
      <Toaster />
      <div className="h-screen w-full bg-[#242423]">
        <div className="Header flex flex-row ">
          <div className="h-[200px] bg-[#242423]">
            <div className="flex justify-between">
              <h1 className="font-bold text-[#dcdcdc] text-4xl mt-8 ml-45">
                Checkout
              </h1>
              <Button
                variant="outline"
                className="mt-8 p-2 mr-45 h-[50px] w-[150px] text-s text-[#dcdcdc] border border-[#dcdcdc] bg-[#242423] hover:text-[#dcdcdc] hover:bg-[#242423] hover:scale-105 hover:border-[#dcdcdc] hover:translate-[-5px_-5px] hover:shadow-[6px_6px_0px_white] transition-shadow duration-200"
              >
                Continue Shopping
              </Button>
            </div>
            <div className="w-screen border-t border-[#dcdcdc] mt-8"></div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="left_container mt-1 ml-45 h-[310px] bg-black w-[620px] border border-[#dcdcdc] rounded">
            <div className="flex flex-row w-[620px] border-b border-[#dcdcdc]">
              <div className="h-[130px] w-[130px] border border-[#dcdcdc]">
                <img
                  src={logo}
                  alt="Placeholder"
                  className="object-fill  w-full h-full"
                />
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col space-y-1 p-1.5">
                  <a className="text-[#dcdcdc] underline font-bold" href="">
                    CNC Discord Membership
                  </a>
                  <a className="text-[#dcdcdc] underline font-bold" href="">
                    Tallguytycoon
                  </a>
                  <h1 className="text-[#dcdcdc]">Qty: 1 Tier: Basic Access</h1>
                  <h1 className="text-[#dcdcdc]">Membership: {plan}</h1>
                </div>
                <div>
                  <div className="flex flex-col space-y-1 p-1.5 ml-50">
                    <h1 className="text-[#dcdcdc]">US${price}</h1>
                    <h1 className="text-[#dcdcdc]">{plan}</h1>
                  </div>
                  <div className="flex flex-row space-x-1 mt-6 ml-30">
                    <Modal></Modal>
                    <a
                      className="text-[#dcdcdc] underline font-bold pl-2"
                      href=""
                    >
                      remove
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex p-4 justify-between">
              <div>
                <h1 className="text-[#dcdcdc]">Subtotal</h1>
              </div>
              <div>
                <h1 className="text-[#dcdcdc]">US${price}</h1>
              </div>
            </div>
            <div className="flex m-2 -mt-1 ">
              <Input
                className="w-[500px] border h-[50px] border-[#dcdcdc] focus:border-pink-300 text-[#dcdcdc] ml-2 "
                placeholder="Discount Code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <Button
                variant="outline"
                className=" ml-3  h-[50px] w-[80px] text-s text-[#dcdcdc] border border-[#dcdcdc] bg-black hover:text-[#dcdcdc] hover:bg-[#242423] hover:scale-105 hover:border-[#dcdcdc] hover:translate-[-5px_-5px] hover:shadow-[6px_6px_0px_white] transition-shadow duration-200"
                onClick={handleApplyDiscount}
              >
                Apply
              </Button>
            </div>
            <div className="w-full h-[1px] bg-[#dcdcdc] mt-3"></div>
            <div className="flex  justify-between">
              <h1 className="text-[#dcdcdc] text-xl m-4">Total</h1>
              <h1 className="text-[#dcdcdc] text-xl m-4">
                US${discountedPrice}
              </h1>
            </div>
          </div>

          <div className="right_container mt-8 mr-45">
            <h1>ok</h1>
          </div>
        </div>
      </div>
    </>
  );
}
