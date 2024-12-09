import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Image,
  Chip,
} from "@nextui-org/react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const products = [
  {
    id: 101,
    title: "Mastering Syntakt (original) Complete Course",
    author: "Alex Turner",
    price: "55.00",
    image: "https://picsum.photos/id/231/300/300",
  },
  {
    id: 102,
    title: "The Digitakt Cheat Sheet (pdf)",
    author: "Sarah Connor",
    price: "40.00",
    image: "https://picsum.photos/id/232/300/300",
  },
  {
    id: 103,
    title: "Octatrack Sound Design Mastery",
    author: "John Doe",
    price: "60.00",
    image: "https://picsum.photos/id/233/300/300",
  },
  {
    id: 104,
    title: "Analog Rytm Drum Programming Essentials",
    author: "Jane Smith",
    price: "45.00",
    image: "https://picsum.photos/id/234/300/300",
  },
  {
    id: 105,
    title: "Digitone FM Synthesis Deep Dive",
    author: "Michael Johnson",
    price: "50.00",
    image: "https://picsum.photos/id/235/300/300",
  },
  {
    id: 106,
    title: "Syntakt Polyrhythmic Patterns",
    author: "Emily Brown",
    price: "35.00",
    image: "https://picsum.photos/id/236/300/300",
  },
  {
    id: 107,
    title: "Octatrack Sampling Techniques",
    author: "David Lee",
    price: "55.00",
    image: "https://picsum.photos/id/237/300/300",
  },
  {
    id: 108,
    title: "Analog Rytm Sound Design Secrets",
    author: "Karen Wilson",
    price: "60.00",
    image: "https://picsum.photos/id/238/300/300",
  },
  {
    id: 109,
    title: "Digitone FM Synthesis for Beginners",
    author: "Robert Smith",
    price: "40.00",
    image: "https://picsum.photos/id/239/300/300",
  },
  {
    id: 110,
    title: "Syntakt Polyrhythmic Patterns and Sequencing",
    author: "Lisa Davis",
    price: "45.00",
    image: "https://picsum.photos/id/240/300/300",
  },
  {
    id: 111,
    title: "Octatrack Advanced Sampling Workflows",
    author: "Mark Taylor",
    price: "50.00",
    image: "https://picsum.photos/id/241/300/300",
  },
  {
    id: 112,
    title: "Analog Rytm Drum Machine Mastery",
    author: "Sarah Johnson",
    price: "60.00",
    image: "https://picsum.photos/id/242/300/300",
  },
  {
    id: 113,
    title: "Digitone FM Synthesis for Electronic Music Production",
    author: "Michael Davis",
    price: "45.00",
    image: "https://picsum.photos/id/243/300/300",
  },
  {
    id: 114,
    title: "Syntakt Polyrhythmic Patterns and Sequencing Techniques",
    author: "Emily Carter",
    price: "50.00",
    image: "https://picsum.photos/id/244/300/300",
  },
  {
    id: 115,
    title: "Octatrack Advanced Sampling and Resampling",
    author: "David Miller",
    price: "60.00",
    image: "https://picsum.photos/id/245/300/300",
  },
  {
    id: 116,
    title: "Analog Rytm Drum Machine Sound Design",
    author: "Karen Lee",
    price: "45.00",
    image: "https://picsum.photos/id/246/300/300",
  },
  {
    id: 117,
    title: "Digitone FM Synthesis for Ambient Music",
    author: "Robert Harris",
    price: "50.00",
    image: "https://picsum.photos/id/247/300/300",
  },
  {
    id: 118,
    title: "Syntakt Polyrhythmic Patterns and Sequencing Tips",
    author: "Lisa Turner",
    price: "35.00",
    image: "https://picsum.photos/id/248/300/300",
  },
  {
    id: 119,
    title: "Octatrack Advanced Sampling and Performance Techniques",
    author: "Mark Wilson",
    price: "40.00",
    image: "https://picsum.photos/id/249/300/300",
  },
  {
    id: 120,
    title: "Analog Rytm Drum Machine Sound Design and Programming",
    author: "Sarah Lee",
    price: "55.00",
    image: "https://picsum.photos/id/250/300/300",
  },
  {
    id: 121,
    title: "Digitone FM Synthesis for Techno Music",
    author: "Michael Harris",
    price: "60.00",
    image: "https://picsum.photos/id/251/300/300",
  },
  {
    id: 122,
    title: "Syntakt Polyrhythmic Patterns and Sequencing Workflow",
    author: "Emily Carter",
    price: "45.00",
    image: "https://picsum.photos/id/252/300/300",
  },
  {
    id: 123,
    title: "Octatrack Advanced Sampling and Sound Design",
    author: "David Miller",
    price: "50.00",
    image: "https://picsum.photos/id/253/300/300",
  },
  {
    id: 124,
    title: "Analog Rytm Drum Machine Sound Design and Programming Tips",
    author: "Karen Lee",
    price: "35.00",
    image: "https://picsum.photos/id/254/300/300",
  },
  {
    id: 125,
    title: "Digitone FM Synthesis for Experimental Music",
    author: "Robert Harris",
    price: "40.00",
    image: "https://picsum.photos/id/255/300/300",
  },
  {
    id: 126,
    title: "Syntakt Polyrhythmic Patterns and Sequencing Best Practices",
    author: "Lisa Turner",
    price: "55.00",
    image: "https://picsum.photos/id/256/300/300",
  },
  {
    id: 127,
    title: "Octatrack Advanced Sampling and Sound Design Techniques",
    author: "Mark Wilson",
    price: "60.00",
    image: "https://picsum.photos/id/257/300/300",
  },
  {
    id: 128,
    title: "Analog Rytm Drum Machine Sound Design and Programming Deep Dive",
    author: "Sarah Lee",
    price: "45.00",
    image: "https://picsum.photos/id/258/300/300",
  },
  {
    id: 129,
    title: "Digitone FM Synthesis for House Music",
    author: "Michael Harris",
    price: "50.00",
    image: "https://picsum.photos/id/259/300/300",
  },
  {
    id: 130,
    title: "Syntakt Polyrhythmic Patterns and Sequencing Workflow Optimization",
    author: "Emily Carter",
    price: "35.00",
    image: "https://picsum.photos/id/260/300/300",
  },
  {
    id: 131,
    title: "Octatrack Advanced Sampling and Sound Design for Film Scoring",
    author: "David Miller",
    price: "40.00",
    image: "https://picsum.photos/id/261/300/300",
  },
  {
    id: 132,
    title:
      "Analog Rytm Drum Machine Sound Design and Programming for Live Performance",
    author: "Karen Lee",
    price: "55.00",
    image: "https://picsum.photos/id/262/300/300",
  },
  {
    id: 133,
    title: "Digitone FM Synthesis for Experimental Sound Design",
    author: "Robert Harris",
    price: "60.00",
    image: "https://picsum.photos/id/263/300/300",
  },
  {
    id: 134,
    title: "Syntakt Polyrhythmic Patterns and Sequencing Creative Techniques",
    author: "Lisa Turner",
    price: "45.00",
    image: "https://picsum.photos/id/264/300/300",
  },
  {
    id: 135,
    title: "Octatrack Advanced Sampling and Sound Design for Game Audio",
    author: "Mark Wilson",
    price: "50.00",
    image: "https://picsum.photos/id/265/300/300",
  },
  {
    id: 136,
    title: "Analog Rytm Drum Machine Sound Design and Programming for Hip-Hop",
    author: "Sarah Lee",
    price: "35.00",
    image: "https://picsum.photos/id/266/300/300",
  },
  {
    id: 137,
    title: "Digitone FM Synthesis for Dubstep",
    author: "Michael Harris",
    price: "40.00",
    image: "https://picsum.photos/id/267/300/300",
  },
  {
    id: 138,
    title:
      "Syntakt Polyrhythmic Patterns and Sequencing for Live Improvisation",
    author: "Emily Carter",
    price: "55.00",
    image: "https://picsum.photos/id/268/300/300",
  },
  {
    id: 139,
    title: "Octatrack Advanced Sampling and Sound Design for Ambient Music",
    author: "David Miller",
    price: "60.00",
    image: "https://picsum.photos/id/269/300/300",
  },
  {
    id: 140,
    title: "Analog Rytm Drum Machine Sound Design and Programming for Trap",
    author: "Karen Lee",
    price: "45.00",
    image: "https://picsum.photos/id/270/300/300",
  },
  {
    id: 141,
    title: "Digitone FM Synthesis for Experimental Noise Music",
    author: "Robert Harris",
    price: "50.00",
    image: "https://picsum.photos/id/271/300/300",
  },
  {
    id: 142,
    title: "Syntakt Polyrhythmic Patterns and Sequencing for Drum and Bass",
    author: "Lisa Turner",
    price: "35.00",
    image: "https://picsum.photos/id/272/300/300",
  },
  {
    id: 143,
    title: "Octatrack Advanced Sampling and Sound Design for Field Recordings",
    author: "Mark Wilson",
    price: "40.00",
    image: "https://picsum.photos/id/273/300/300",
  },
  {
    id: 144,
    title: "Analog Rytm Drum Machine Sound Design and Programming for Electro",
    author: "Sarah Lee",
    price: "55.00",
    image: "https://picsum.photos/id/274/300/300",
  },
  {
    id: 145,
    title: "Digitone FM Synthesis for Psychedelic Music",
    author: "Michael Harris",
    price: "60.00",
    image: "https://picsum.photos/id/275/300/300",
  },
  {
    id: 146,
    title: "Syntakt Polyrhythmic Patterns and Sequencing for Glitch Hop",
    author: "Emily Carter",
    price: "45.00",
    image: "https://picsum.photos/id/276/300/300",
  },
  {
    id: 147,
    title: "Octatrack Advanced Sampling and Sound Design for Cinematic Music",
    author: "David Miller",
    price: "50.00",
    image: "https://picsum.photos/id/277/300/300",
  },
  {
    id: 148,
    title:
      "Analog Rytm Drum Machine Sound Design and Programming for Industrial Music",
    author: "Karen Lee",
    price: "35.00",
    image: "https://picsum.photos/id/278/300/300",
  },
  {
    id: 149,
    title: "Digitone FM Synthesis for Dark Ambient",
    author: "Robert Harris",
    price: "40.00",
    image: "https://picsum.photos/id/279/300/300",
  },
  {
    id: 150,
    title: "Syntakt Polyrhythmic Patterns and Sequencing for Breakbeat",
    author: "Lisa Turner",
    price: "55.00",
    image: "https://picsum.photos/id/280/300/300",
  },
];

const ProductGrid = ({ searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div className="w-full px-16 lg:px-32 xl:px-20 py-10">
      <h2 className="text-white font-medium text-3xl lg:text-4xl mb-8 ">
        Items{" "}
        <span className="text-white font-medium text-3xl lg:text-4xl typed-[_on_Auction;you'll_miss!] typed-caret"></span>
      </h2>
      <div
        id="productGrid"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
      >
        {currentProducts.map((product) => (
          <Card
            key={product.id}
            className="bg-zinc-900/70 border-none cursor-pointer transition-transform hover:scale-[1.02]"
            isPressable
          >
            <CardBody className="p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={product.title}
                className="w-full object-cover h-[200px]"
                fallbackSrc="https://via.placeholder.com/300x300"
                src={`https://picsum.photos/id/${230 + product.id}/300/300`}
              />
            </CardBody>
            <CardHeader className="flex flex-col items-start p-4 gap-3">
              <h3 className="text-white font-medium text-lg line-clamp-2">
                {product.title}
              </h3>
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 items-center text-neutral-500 text-sm">
                  <Avatar
                    src={`https://i.pravatar.cc/150?u=a${product.id}`}
                    size="md"
                  />
                  <span>{product.author}</span>
                </div>
                <Chip
                  size="sm"
                  variant="flat"
                  classNames={{
                    base: "bg-zinc-800",
                    content: "text-white font-medium",
                  }}
                >
                  {"Rs. " + product.price}
                </Chip>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="bg-zinc-900 text-white hover:bg-blue-300 hover:text-zinc-900"
                aria-label="Go to previous page"
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
              ) {
                return (
                  <PaginationItem key={index}>
                    <PaginationLink
                      href="#"
                      onClick={() => setCurrentPage(pageNumber)}
                      isActive={currentPage === pageNumber}
                      className={`bg-zinc-900 text-white hover:bg-blue-300 hover:text-zinc-900 ${
                        currentPage === pageNumber
                          ? "bg-zinc-800 font-bold"
                          : ""
                      }`}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                );
              } else if (
                (pageNumber === currentPage - 2 && currentPage > 3) ||
                (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
              ) {
                return <PaginationEllipsis key={index} />;
              }
              return null;
            })}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className="bg-zinc-900 text-white hover:bg-blue-300 hover:text-zinc-900"
                aria-label="Go to next page"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default ProductGrid;
