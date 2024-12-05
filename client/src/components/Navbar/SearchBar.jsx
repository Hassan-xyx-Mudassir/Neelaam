import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  Kbd,
  Accordion,
  AccordionItem,
  Slider,
  CheckboxGroup,
  Checkbox,
} from "@nextui-org/react";
import {
  Search,
  Filter,
  Receipt as Price,
  Star as Rating,
  Tag as Tags,
  Plus,
  Minus,
} from "lucide-react";
import { TagInput } from "emblor";

const createStars = (ratings) => {
  return (
    <div className="flex gap-2">
      {Array.from({ length: ratings }).map((_, index) => (
        <Rating key={index} size={20} color="yellow" />
      ))}
    </div>
  );
};

const SearchBar = () => {
  const [range, setRange] = useState([1000, 1000000]);
  const [rating, setRating] = useState("");
  const tags = [
    {
      id: "Gifts",
      text: "Gifts",
    },
    {
      id: "Art",
      text: "Art",
    },
    {
      id: "Health",
      text: "Health",
    },
  ];
  const [exampleTags, setExampleTags] = useState(tags);
  const [activeTagIndex, setActiveTagIndex] = useState(null);

  window.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key == "k") {
      if (document.getElementById("search") !== document.activeElement) {
        e.preventDefault();
        console.log("Search is not in focus");
        document.getElementById("search").focus();
      }
    }
  });

  return (
    <div className="flex items-center flex-grow w-full gap-2 ml-4">
      <div className="flex-grow flex justify-between items-center border rounded-lg bg-zinc-800 border-zinc-800 px-2 py-1 gap-2.5 focus-within:ring-2 focus-within:ring-zinc-700 transition-all duration-200 placeholder:text-white">
        <Input
          id="search"
          placeholder="Search..."
          className="border-0 focus-visible:ring-transparent placeholder:italic"
        />
        <Label for="searchInput">
          <Kbd className="bg-zinc-900 text-[#A0A0A4]" keys={["command"]}>
            K
          </Kbd>
        </Label>
      </div>
      <Tooltip showArrow={true} content="Search">
        <Button variant="gooeyRight" className="border hover:bg-zinc-900">
          <Search className="h-3 w-3 text-white" />
        </Button>
      </Tooltip>
      <Sheet>
        <Tooltip showArrow={true} content="Filter">
          <SheetTrigger asChild>
            <Button
              variant="gooeyRight"
              className="bg-white text-[#000] hover:text-slate-500"
            >
              <Filter className="h-4 w-4" />
            </Button>
          </SheetTrigger>
        </Tooltip>
        <SheetContent className="w-[300px] md:w-[500px] lg:w-[600px] bg-zinc-950 text-white">
          <SheetHeader className="mt-5">
            <SheetTitle className="text-white text-3xl">Filters</SheetTitle>
          </SheetHeader>
          <Accordion
            itemClasses={{
              title: "text-white font-normal",
              base: "mt-5",
              trigger:
                "px-3 py-2 transition-colors duration-200 data-[hover=true]:hover:bg-zinc-900 rounded-lg h-14 flex items-center",
              content: "px-2",
            }}
            selectionMode="multiple"
          >
            <AccordionItem
              key="price"
              indicator={<Price color="green" strokeWidth={1} />}
              aria-label="Price"
              title="Price"
            >
              <Slider
                label="Price Range"
                showTooltip={true}
                showOutline={true}
                startContent={<Minus size={12} strokeWidth={3} />}
                endContent={<Plus size={12} strokeWidth={3} />}
                size="sm"
                color="success"
                step={100}
                minValue={1000}
                maxValue={1000000}
                value={range}
                onChange={setRange}
                defaultValue={[100, 500]}
                formatOptions={{ style: "currency", currency: "PKR" }}
                classNames={{ labelWrapper: "mb-3" }}
                className="max-w-md"
              />
              {console.log("Range: ", range)}
            </AccordionItem>
            <AccordionItem
              key="rating"
              indicator={<Rating color="yellow" strokeWidth={1} />}
              aria-label="Rating"
              title="Rating"
            >
              <CheckboxGroup>
                <Checkbox
                  color="warning"
                  classNames={{ base: "gap-2 " }}
                  value="5"
                >
                  {createStars(5)}
                </Checkbox>
                <Checkbox
                  color="warning"
                  classNames={{ base: "gap-2" }}
                  value="4"
                >
                  {createStars(4)}
                </Checkbox>
                <Checkbox
                  color="warning"
                  classNames={{ base: "gap-2" }}
                  value="3"
                >
                  {createStars(3)}
                </Checkbox>
                <Checkbox
                  color="warning"
                  classNames={{ base: "gap-2" }}
                  value="2"
                >
                  {createStars(2)}
                </Checkbox>
                <Checkbox
                  color="warning"
                  classNames={{ base: "gap-2" }}
                  value="1"
                >
                  {createStars(1)}
                </Checkbox>
              </CheckboxGroup>
              {console.log("Rating: ", rating)}
            </AccordionItem>
            <AccordionItem
              key="tags"
              indicator={<Tags color="purple" strokeWidth={1} />}
              aria-label="Tags"
              title="Tags"
            >
              <TagInput
                tags={exampleTags}
                setTags={(newTags) => {
                  setExampleTags(newTags);
                }}
                placeholder="Add tag here"
                animation={"slideIn"}
                size={"sm"}
                styleClasses={{
                  inlineTagsContainer:
                    "border rounded-lg bg-zinc-800 border-zinc-800 focus-within:ring-2 focus-within:ring-zinc-700 transition-all duration-200",
                  input:
                    "w-full sm:max-w-[350px] border rounded-lg bg-zinc-800 border-zinc-800 text-sm",
                  tag: {
                    body: "bg-zinc-900 text-[#A0A0A4] border-zinc-800 pl-2 hover:bg-zinc-800/5",
                  },
                }}
                activeTagIndex={activeTagIndex}
                setActiveTagIndex={setActiveTagIndex}
              />
            </AccordionItem>
          </Accordion>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SearchBar;
