import React, { useState } from "react";
import { useGlobalState } from "@/contexts/GlobalStateContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function PlanDisplay() {
  const { text, price, plan, updateText, updatePrice, updatePlan } =
    useGlobalState(); // Access global state
  const [isModalOpen, setModalOpen] = useState(false); // Modal visibility state
  const [tempPlan, setTempPlan] = useState(plan); // Temporary plan
  const [tempPrice, setTempPrice] = useState(price); // Temporary price
  const [tempText, setTempText] = useState(text); // Temporary text

  const handlePlanChange = (selectedPlan) => {
    setTempPlan(selectedPlan);

    if (selectedPlan === "monthly") {
      setTempPrice(97);
      setTempText("$97 a month");
    } else if (selectedPlan === "quarterly") {
      setTempPrice(257);
      setTempText("$257 every 3 months");
    } else if (selectedPlan === "yearly") {
      setTempPrice(987);
      setTempText("$987 a year");
    }
  };

  const handleSaveChanges = () => {
    updatePlan(tempPlan);
    updatePrice(tempPrice);
    updateText(tempText);
    setModalOpen(false); // Close modal
  };

  return (
    <div className="relative flex flex-col items-start">
      <a
        className="text-[#dcdcdc] underline font-bold cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        Configure
      </a>

      {/* Modal */}
      {isModalOpen && (
        <div className="absolute top-[50px] left-0 w-[400px] bg-black text-white border border-gray-700 rounded-lg p-4 shadow-lg z-10">
          <select
            className="w-full border border-pink-500 rounded-lg bg-black text-[#dcdcdc] px-4 py-2 mb-3"
            value={tempPlan}
            onChange={(e) => handlePlanChange(e.target.value)}
          >
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>

          {/* Plan Details */}
          <div className="w-[370px] h-[150px] border border-[#dcdcdc] rounded mt-1 bg-[#242423] shadow-[5px_5px_0px_white]  bg-[#242423]">
            <div className="w-max max-w-[200px] h-[40px] bg-black border border--[#dcdcdc] rounded-full mt-4 ml-4 mr-4 mb-2">
              <h1 className="p-2 text-[#dcdcdc]">{text}</h1>
            </div>

            <h1 className="font-bold ml-4">Basic Access</h1>
            <p className="ml-4 mr-4 fit text-[#dcdcdc] text-small mb-4">
              This gives you access to all signals, the community, all
              fundamental classes, and weekly/biweekly zoom calls within the
              Discord.
            </p>
          </div>

          {/* Save Button */}
          <button
            className="bg-pink-500 text-black font-medium w-full mt-4 py-2 rounded-lg hover:bg-pink-400 transition"
            onClick={handleSaveChanges} // Save changes and close modal
          >
            Save changes
          </button>
        </div>
      )}
    </div>
  );
}
