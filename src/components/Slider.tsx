// import useEmblaCarousel from "embla-carousel-react";
// import AutoScroll from "embla-carousel-auto-scroll";
// import { useEffect } from "react";

// export default function BuvaazSlider() {
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { loop: true, align: "start" },
//     [AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1 })]
//   );

//   // Optional: verify it mounted
//   useEffect(() => {
//     if (!emblaApi) return;
//     // console.log('Embla ready', emblaApi.slideNodes().length);
//     // emblaApi.scrollNext(true);
//     console.log("slides:", emblaApi.slideNodes().length);
//     console.log("canNext:", emblaApi.canScrollNext());
//     const auto = emblaApi.plugins()?.autoScroll;
//     if (auto) console.log("playing:", auto.isPlaying());
//   }, [emblaApi]);

//   return (
//     <div className="embla" ref={emblaRef}>
//       <div className="embla__container">
//         <div className="product-container embla__slide">
//           <img
//             src="/images/Component-4.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 676.9921875px"
//             srcSet="
//                   /images/Component-4-p-500.png 500w,
//                   /images/Component-4.png       677w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             sizes="(max-width: 767px) 100vw, 675.986328125px"
//             srcSet="
//                   /images/Rectangle-753-6-p-500.png 500w,
//                   /images/Rectangle-753-6.png       676w
//                 "
//             alt=""
//             src="/images/Rectangle-753-6.png"
//             loading="lazy"
//             className="product-image-creator"
//           />
//           <img
//             sizes="(max-width: 767px) 100vw, 676.9921875px"
//             srcSet="

//                   /images/Rectangle-753-1-p-500.png 500w,
//                   /images/Rectangle-753-1.png       677w
//                 "
//             alt=""
//             src="/images/Rectangle-753-1.png"
//             loading="lazy"
//             className="product-image-creator"
//           />
//           <img
//             src="/images/Rectangle-753-4.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 675.986328125px"
//             srcSet="
//                   /images/Rectangle-753-4-p-500.png 500w,
//                   /images/Rectangle-753-4.png       676w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/Rectangle-753-2.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 676.9921875px"
//             srcSet="
//                   /images/Rectangle-753-2-p-500.png 500w,
//                   /images/Rectangle-753-2.png       677w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/Rectangle-753-5.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 675.986328125px"
//             srcSet="
//                   /images/Rectangle-753-5-p-500.png 500w,
//                   /images/Rectangle-753-5.png       676w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/Rectangle-753.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 675.986328125px"
//             srcSet="
//                   /images/Rectangle-753-p-500.png 500w,
//                   /images/Rectangle-753.png       676w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-01.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 506.9921875px"
//             srcSet="
//                   /images/buvaaz-deals-01-p-500.png 500w,
//                   /images/buvaaz-deals-01.png       507w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-34.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-34-p-500.png 500w,
//                   /images/buvaaz-deals-34.png       508w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-54.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 506.9921875px"
//             srcSet="
//                   /images/buvaaz-deals-54-p-500.png 500w,
//                   /images/buvaaz-deals-54.png       507w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-40.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-40-p-500.png 500w,
//                   /images/buvaaz-deals-40.png       508w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-50.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-50-p-500.png 500w,
//                   /images/buvaaz-deals-50.png       508w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-53.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 506.9921875px"
//             srcSet="
//                   /images/buvaaz-deals-53-p-500.png 500w,
//                   /images/buvaaz-deals-53.png       507w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-52.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 506.9921875px"
//             srcSet="
//                   /images/buvaaz-deals-52-p-500.png 500w,
//                   /images/buvaaz-deals-52.png       507w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-11.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-11-p-500.png 500w,
//                   /images/buvaaz-deals-11.png       508w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-09.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-09-p-500.png 500w,
//                   /images/buvaaz-deals-09.png       508w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-35.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-35-p-500.png 500w,
//                   /images/buvaaz-deals-35.png       508w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-25.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-25-p-500.png 500w,
//                   /images/buvaaz-deals-25.png       508w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-17.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-17-p-500.png 500w,
//                   /images/buvaaz-deals-17.png       508w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-23.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 506.9921875px"
//             srcSet="
//                   /images/buvaaz-deals-23-p-500.png 500w,
//                   /images/buvaaz-deals-23.png       507w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//         </div>
//         <div className="product-container-2 embla__slide">
//           <img
//             src="/images/buvaaz-deals-01.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 506.9921875px"
//             srcSet="
//                   /images/buvaaz-deals-01-p-500.png 500w,
//                   /images/buvaaz-deals-01.png       507w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-05.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-05-p-500.png 500w,
//                   /images/buvaaz-deals-05.png       508w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-02-p-500.png 500w,
//                   /images/buvaaz-deals-02.png       508w
//                 "
//             alt=""
//             src="/images/buvaaz-deals-02.png"
//             loading="lazy"
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-38.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 506.9921875px"
//             srcSet="
//                   /images/buvaaz-deals-38-p-500.png 500w,
//                   /images/buvaaz-deals-38.png       507w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-12.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-12-p-500.png 500w,
//                   /images/buvaaz-deals-12.png       508w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-32.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-32-p-500.png 500w,
//                   /images/buvaaz-deals-32.png       508w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-31.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 506.9921875px"
//             srcSet="
//                   /images/buvaaz-deals-31-p-500.png 500w,
//                   /images/buvaaz-deals-31.png       507w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-42.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-42-p-500.png 500w,
//                   /images/buvaaz-deals-42.png       508w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-04.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-04-p-500.png 500w,
//                   /images/buvaaz-deals-04.png       508w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-08.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 506.9921875px"
//             srcSet="
//                   /images/buvaaz-deals-08-p-500.png 500w,
//                   /images/buvaaz-deals-08.png       507w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/Rectangle-753-11.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 676.9921875px"
//             srcSet="
//                   /images/Rectangle-753-11-p-500.png 500w,
//                   /images/Rectangle-753-11.png       677w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/Rectangle-753-8.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 676.9921875px"
//             srcSet="
//                   /images/Rectangle-753-8-p-500.png 500w,
//                   /images/Rectangle-753-8.png       677w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/Rectangle-753-13.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 675.986328125px"
//             srcSet="
//                   /images/Rectangle-753-13-p-500.png 500w,
//                   /images/Rectangle-753-13.png       676w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/denis-duke.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 675.986328125px"
//             srcSet="
//                   /images/denis-duke-p-500.png 500w,
//                   /images/denis-duke.png       676w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-03-p-500.png 500w,
//                   /images/buvaaz-deals-03.png       508w
//                 "
//             alt=""
//             src="/images/buvaaz-deals-03.png"
//             loading="lazy"
//             className="product-image-creator"
//           />
//           <img
//             src="/images/Rectangle-753-18.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 676.9921875px"
//             srcSet="
//                   /images/Rectangle-753-18-p-500.png 500w,
//                   /images/Rectangle-753-18.png       677w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-23.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 506.9921875px"
//             srcSet="
//                   /images/buvaaz-deals-23-p-500.png 500w,
//                   /images/buvaaz-deals-23.png       507w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/Rectangle-753-16.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 675.986328125px"
//             srcSet="
//                   /images/Rectangle-753-16-p-500.png 500w,
//                   /images/Rectangle-753-16.png       676w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-10.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-10-p-500.png 500w,
//                   /images/buvaaz-deals-10.png       508w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/Rectangle-753-14.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 675.986328125px"
//             srcSet="
//                   /images/Rectangle-753-14-p-500.png 500w,
//                   /images/Rectangle-753-14.png       676w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//         </div>
//         <div className="product-container-4 embla__slide">
//           <img
//             src="/images/Rectangle-753-9.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 676.9921875px"
//             srcSet="
//                   /images/Rectangle-753-9-p-500.png 500w,
//                   /images/Rectangle-753-9.png       677w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             sizes="(max-width: 767px) 100vw, 676.9921875px"
//             srcSet="
//                   /images/Rectangle-753-12-p-500.png 500w,
//                   /images/Rectangle-753-12.png       677w
//                 "
//             alt=""
//             src="/images/Rectangle-753-12.png"
//             loading="lazy"
//             className="product-image-creator"
//           />
//           <img
//             sizes="(max-width: 767px) 100vw, 676.9921875px"
//             srcSet="
//                   /images/Rectangle-753-3-p-500.png 500w,
//                   /images/Rectangle-753-3.png       677w
//                 "
//             alt=""
//             src="/images/Rectangle-753-3.png"
//             loading="lazy"
//             className="product-image-creator"
//           />
//           <img
//             src="/images/Rectangle-753-7.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 675.986328125px"
//             srcSet="
//                   /images/Rectangle-753-7-p-500.png 500w,
//                   /images/Rectangle-753-7.png       676w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/Rectangle-753-17.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 676.9921875px"
//             srcSet="
//                   /images/Rectangle-753-17-p-500.png 500w,
//                   /images/Rectangle-753-17.png       677w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-19.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-19-p-500.png 500w,
//                   /images/buvaaz-deals-19.png       508w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/chaka-product-01.png"
//             loading="lazy"
//             sizes="(max-width: 1919px) 100vw, 1883.994140625px"
//             srcSet="
//                   /images/chaka-product-01-p-500.png   500w,
//                   /images/chaka-product-01-p-800.png   800w,
//                   /images/chaka-product-01-p-1080.png 1080w,
//                   /images/chaka-product-01-p-1600.png 1600w,
//                   /images/chaka-product-01.png        1884w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-41.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-41-p-500.png 500w,
//                   /images/buvaaz-deals-41.png       508w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-35.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-35-p-500.png 500w,
//                   /images/buvaaz-deals-35.png       508w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-33.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-33-p-500.png 500w,
//                   /images/buvaaz-deals-33.png       508w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-07.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 506.9921875px"
//             srcSet="
//                   /images/buvaaz-deals-07-p-500.png 500w,
//                   /images/buvaaz-deals-07.png       507w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-39.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 506.9921875px"
//             srcSet="
//                   /images/buvaaz-deals-39-p-500.png 500w,
//                   /images/buvaaz-deals-39.png       507w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-47.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 506.9921875px"
//             srcSet="
//                   /images/buvaaz-deals-47-p-500.png 500w,
//                   /images/buvaaz-deals-47.png       507w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-24.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 506.9921875px"
//             srcSet="
//                   /images/buvaaz-deals-24-p-500.png 500w,
//                   /images/buvaaz-deals-24.png       507w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-17.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-17-p-500.png 500w,
//                   /images/buvaaz-deals-17.png       508w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-33.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-33-p-500.png 500w,
//                   /images/buvaaz-deals-33.png       508w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-23.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 506.9921875px"
//             srcSet="
//                   /images/buvaaz-deals-23-p-500.png 500w,
//                   /images/buvaaz-deals-23.png       507w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-31.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 506.9921875px"
//             srcSet="
//                   /images/buvaaz-deals-31-p-500.png 500w,
//                   /images/buvaaz-deals-31.png       507w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-28.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-28-p-500.png 500w,
//                   /images/buvaaz-deals-28.png       508w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//           <img
//             src="/images/buvaaz-deals-36.png"
//             loading="lazy"
//             sizes="(max-width: 767px) 100vw, 507.98828125px"
//             srcSet="
//                   /images/buvaaz-deals-36-p-500.png 500w,
//                   /images/buvaaz-deals-36.png       508w
//                 "
//             alt=""
//             className="product-image-creator"
//           />
//         </div>
//         <img
//           src="/images/create.magic.mark.svg"
//           loading="lazy"
//           width="320"
//           alt=""
//           className="shadow-blur"
//         />
//       </div>
//     </div>
//   );
// }

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
