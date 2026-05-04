
import { Carousel } from "../../ExternalComponent/Carousel";
export function CarouselDemo() {
const slideData = [
    {
        title: "Kalathiya infotech",
        button: "Visit",
        link: "https://kalathiyainfotech.com/"
    },
    {
        title: "Vs infotech",
        button: "Visit",
        link: "https://vsinfotech.ca/"
    },
];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
