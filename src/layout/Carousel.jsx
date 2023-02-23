import { useState, useEffect } from "react";

const imgCarousel = [
  "https://res.cloudinary.com/dfumgovrj/image/upload/v1676259098/sprint4_final/BannerHome/bannerHome14_etzure.jpg",
  "https://res.cloudinary.com/dfumgovrj/image/upload/v1676259098/sprint4_final/BannerHome/bannerHome2_fzdvy4.jpg",
  "https://res.cloudinary.com/dfumgovrj/image/upload/v1676259098/sprint4_final/BannerHome/bannerHome4_zywlwu.jpg",
  "https://res.cloudinary.com/dfumgovrj/image/upload/v1676259098/sprint4_final/BannerHome/bannerHome3_owjloz.jpg",
  "https://res.cloudinary.com/dfumgovrj/image/upload/v1676259097/sprint4_final/BannerHome/bannerHome13_nu7iwg.jpg",
  "https://res.cloudinary.com/dfumgovrj/image/upload/v1676259097/sprint4_final/BannerHome/bannerHome1_jahwkr.jpg",
  "https://res.cloudinary.com/dfumgovrj/image/upload/v1676259097/sprint4_final/BannerHome/bannersHome15_enx3ac.jpg",
  "https://res.cloudinary.com/dfumgovrj/image/upload/v1676259096/sprint4_final/BannerHome/bannerHome10_ls5rgn.jpg",
  "https://res.cloudinary.com/dfumgovrj/image/upload/v1676259096/sprint4_final/BannerHome/bannersHome9_s4cpmq.jpg",
  "https://res.cloudinary.com/dfumgovrj/image/upload/v1676259096/sprint4_final/BannerHome/bannerHome12_vtss6s.jpg",
  "https://res.cloudinary.com/dfumgovrj/image/upload/v1676259095/sprint4_final/BannerHome/bannerHome11_ngial4.jpg",
  "https://res.cloudinary.com/dfumgovrj/image/upload/v1676259095/sprint4_final/BannerHome/bannerHome6_vzheit.jpg",
  "https://res.cloudinary.com/dfumgovrj/image/upload/v1676259095/sprint4_final/BannerHome/bannerHome8_xr3zin.jpg",
  "https://res.cloudinary.com/dfumgovrj/image/upload/v1676259095/sprint4_final/BannerHome/bannerHome5_kvjruz.jpg",
  "https://res.cloudinary.com/dfumgovrj/image/upload/v1676259094/sprint4_final/BannerHome/bannerHome7_zhlqsq.jpg",
];

export default function Carousel() {
  const [curr, setCurr] = useState(0);

  const next = () => {
    setCurr((curr) => (curr === imgCarousel.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(next, 4000);
    return () => clearInterval(slideInterval);
  }, []);

  const imgSrc = imgCarousel[curr];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <img
        src={imgSrc}
        alt={`Slide ${curr}`}
        className="w-full rounded-xl object-cover md:h-40 lg:h-60"
      />
      <img
        src={imgCarousel[(curr + 1) % imgCarousel.length]}
        alt={`Slide ${(curr + 1) % imgCarousel.length}`}
        className="w-full hidden rounded-xl object-cover md:h-40 lg:h-60 md:block"
      />
{/*       <img
        src={imgCarousel[(curr + 2) % imgCarousel.length]}
        alt={`Slide ${(curr + 2) % imgCarousel.length}`}
        className="w-full rounded-xl object-cover md:h-40 lg:h-60"
      />
      <img
        src={imgCarousel[(curr + 3) % imgCarousel.length]}
        alt={`Slide ${(curr + 3) % imgCarousel.length}`}
        className="w-full rounded-xl object-cover md:h-40 lg:h-60"
      /> */}
    </div>
  );
}