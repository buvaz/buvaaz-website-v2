import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const images = [
  "/images/Component-4.png",
  "/images/Rectangle-753-6.png",
  "/images/Rectangle-753-1.png",
  "/images/buvaaz-deals-04-p-500.png",
  "/images/buvaaz-deals-08.png",
  "/images/buvaaz-deals-09-p-500.png",
  "/images/buvaaz-deals-05-p-500.png",
  "/images/buvaaz-deals-08-p-500.png",
];

const images2 = [
  "/images/buvaaz-deals-01-p-500.png",
  "/images/buvaaz-deals-23-p-500.png",
  "/images/buvaaz-deals-25-p-500.png",
  "/images/buvaaz-deals-31-p-500.png",
  "/images/buvaaz-deals-35-p-500.png",
  "/images/buvaaz-deals-33-p-500.png",
  "/images/buvaaz-deals-53-p-500.png",
  "/images/buvaaz-deals-53-p-500.png",
];

// Duplicate to guarantee long track:
const slides = [...images, ...images, ...images];
const slides2 = [...images2, ...images2];

export default function BuvaazSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true, containScroll: "trimSnaps" },
    [AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1 })]
  );

  const [emblaRef2, emblaApi2] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true, direction: "rtl" },
    [AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 0.3 })]
  );

  const [emblaRef3, emblaApi3] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1 })]
  );

  return (
    <div>
      <div className="embla mb-2" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((src, i) => (
            <div className="embla__slide mx-1" key={i}>
              <img src={src} alt="" onLoad={() => emblaApi?.reInit()} />
            </div>
          ))}
        </div>
      </div>
      <div className="embla mb-2" ref={emblaRef2}>
        <div className="embla__container">
          {slides2.map((src, i) => (
            <div className="embla__slide mx-1" key={i}>
              <img src={src} alt="" onLoad={() => emblaApi2?.reInit()} />
            </div>
          ))}
        </div>
      </div>
      <div className="embla" ref={emblaRef3}>
        <div className="embla__container">
          {slides.reverse().map((src, i) => (
            <div className="embla__slide mx-1" key={i}>
              <img src={src} alt="" onLoad={() => emblaApi3?.reInit()} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
