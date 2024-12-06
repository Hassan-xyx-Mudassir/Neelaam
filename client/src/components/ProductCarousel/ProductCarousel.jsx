import {
  Card,
  CardHeader,
  CardBody,
  User,
  Image,
  Chip,
} from "@nextui-org/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const products = [
  {
    id: 1,
    title: "Vintage Leather Camera Bag",
    description:
      "This handcrafted camera bag is a photographer's dream, made from genuine leather that only gets better with age. Adjustable straps ensure a comfortable fit, while the brass hardware adds a touch of timeless elegance.  Whether you're a seasoned professional or a passionate hobbyist, this bag will keep your precious equipment safe and stylish on all your photographic adventures.",
    image: "https://picsum.photos/300/300",
    poster: "ArtisanLeather",
    price: 12500,
  },
  {
    id: 2,
    title: "Limited Edition Mechanical Watch",
    description:
      "Experience the pinnacle of watchmaking with this limited edition masterpiece.  Featuring a Swiss-made automatic movement, this timepiece boasts unparalleled precision and craftsmanship.  The scratch-resistant sapphire crystal provides a clear view of the intricate inner workings, while the exhibition caseback allows you to admire the mesmerizing movement in action.  This watch is not just a timepiece, it's a statement piece for the discerning collector.",
    image: "https://picsum.photos/300/300",
    poster: "LuxuryTimepieces",
    price: 45000,
  },
  {
    id: 3,
    title: "Handwoven Persian Carpet",
    description:
      "Bring a touch of timeless artistry to your home with this stunning handwoven Persian carpet.  Crafted from 100% wool and featuring traditional Persian motifs, this rug is a true work of art for your floor.  Measuring 6x9 feet, it's the perfect size to add a touch of luxury and warmth to your living room, bedroom, or den.  Invest in a piece of history that will be cherished for generations to come.",
    image: "https://picsum.photos/300/300",
    poster: "HeritageRugs",
    price: 35000,
  },
  {
    id: 4,
    title: "Antique Bronze Sculpture",
    description:
      "Own a captivating piece of history with this 19th century bronze sculpture of a dancing figure.  The rich patina finish adds depth and character to the sculpture, making it a true conversation starter.  This unique work of art will add a touch of sophistication and intrigue to any home or office.  Imagine the stories it could tell!",
    image: "https://picsum.photos/300/300",
    poster: "VintageArts",
    price: 28000,
  },
  {
    id: 5,
    title: "Custom Gaming PC Build",
    description:
      "Dominate the competition with this ultimate custom gaming PC build. Engineered for unparalleled performance, this beast features an RTX 4080 graphics card for stunning visuals, 32GB of RAM for smooth multitasking, and a custom water cooling system to keep things cool under pressure.  Experience the future of gaming with this powerhouse PC that will leave your opponents in the dust.",
    image: "https://picsum.photos/300/300",
    poster: "TechBuilder",
    price: 150000,
  },
  {
    id: 6,
    title: "Rare First Edition Book",
    description:
      "For bibliophiles and collectors, this rare first edition book is a treasure not to be missed.  A classic novel in excellent condition with its original dust jacket, this piece is a true investment piece.  Imagine owning a part of literary history and getting lost in the captivating story within its pages.",
    image: "https://picsum.photos/300/300",
    poster: "RareBooks",
    price: 75000,
  },
  {
    id: 7,
    title: "Professional DJ Equipment Set",
    description:
      "Turn up the volume and ignite the party with this complete professional DJ equipment set.  Everything you need to create unforgettable mixes is included,  from turntables and a mixer to controllers.  Unleash your inner DJ and get the crowd moving with this top-of-the-line setup that will have you spinning tracks like a pro in no time.",
    image: "https://picsum.photos/300/300",
    poster: "MusicPro",
    price: 85000,
  },
  {
    id: 8,
    title: "Handmade Acoustic Guitar",
    description:
      "Experience the pure joy of music with this handcrafted acoustic guitar. Crafted with meticulous attention to detail, this instrument features a solid spruce top for rich tone and a rosewood back and sides for exceptional resonance. Whether you're a seasoned musician or just starting your musical journey, this guitar will inspire you to create beautiful melodies and chords.",
    image: "https://picsum.photos/300/300",
    poster: "LuthierCrafts",
    price: 95000,
  },
];

const ProductCarousel = () => {
  return (
    <div className="w-full px-16 lg:px-32 xl:px-20 py-10">
      <h2 className="text-white font-medium text-3xl lg:text-4xl mt-4 mb-5 typed-[These_are_the_hottest_bids_we_got...;Don't_regret_it_later...] typed-caret"></h2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
          Fade({ containScroll: false }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {products.map((product, index) => {
            return (
              <CarouselItem key={index}>
                <Card className="bg-zinc-900/70" shadow="lg" fullWidth={true}>
                  <CardBody className="flex flex-row items-center justify-center bg-zinc-900/70 gap-8">
                    <Image
                      fallbackSrc="https://via.placeholder.com/300x300"
                      isBlurred
                      isZoomed
                      height={300}
                      width={300}
                      radius="md"
                      alt={product.title}
                      src={`https://picsum.photos/id/${230 + index}/300/300`}
                    />
                    <Card
                      className="w-[50%] bg-zinc-900/70 border-none"
                      shadow="none"
                    >
                      <CardHeader className="text-white font-medium text-2xl lg:text-3xl ">
                        {product.title}
                      </CardHeader>
                      <CardBody className="text-neutral-400 flex flex-col items-start gap-10">
                        <p className="line-clamp-4">{product.description}</p>
                        <div className="flex justify-between self-stretch items-center flex-wrap gap-4">
                          <User
                            name={product.poster}
                            avatarProps={{
                              src: `https://i.pravatar.cc/150?u=a04258114e290267022 ${index}`,
                            }}
                          />
                          <Chip
                            size="md"
                            variant="flat"
                            classNames={{
                              base: "bg-zinc-800",
                              content: "text-white font-medium",
                            }}
                          >
                            {"Rs. " + product.price}
                          </Chip>
                        </div>
                      </CardBody>
                    </Card>
                  </CardBody>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="bg-zinc-950 hover:bg-zinc-900 hover:text-white text-white border-[#18181b]" />
        <CarouselNext className="bg-zinc-950 hover:bg-zinc-900 hover:text-white text-white border-[#18181b]" />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
