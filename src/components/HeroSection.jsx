import { Swiper, SwiperSlide } from "swiper/react";
import Prev from "../assets/svg/prev.svg";
import { useRef, useState, useEffect } from "react";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { CircularProgress } from "@mui/material";

function HeroSection() {
  const swiperRef = useRef(null);
  const [slideCount, setSlideCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [bigBanners, setBigBanners] = useState([]);
  const [smallBanner, setSmallBanner] = useState(null);
  const [loading, setLoading] = useState(true);

  // API'dan banner ma'lumotlarini olish
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(
          "https://dev.api.worldwords.io/web/main/ads"
        );
        const data = await response.json();

        if (data.error_code === 0) {
          setBigBanners(data.data.big_banners || []);
          setSmallBanner(data.data.small_banner || null);
        }
      } catch (error) {
        console.error("Banner ma'lumotlarini olishda xatolik:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  // Slayderlar sonini aniqlash
  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      setSlideCount(swiperInstance.slides.length);
      swiperInstance.on("slideChange", () => {
        setActiveIndex(swiperInstance.activeIndex);
      });
    }
  }, [bigBanners]);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePaginationClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <section className="max-w-1140 2xl:max-w-base mx-auto flex justify-between gap-11 px-2.5 md:px-10 lg:px-10 2xl:px-5">
      {/* Left Banner */}
      <div className="relative w-full 2xl:max-w-[59.625rem] h-[180px] sm:h-[278px]">
        <div className="size-full relative z-0 overflow-hidden rounded-28 border-2 border-[#271822] box-shadow1">
          <div className="size-full rounded-28 border-2 border-[#9b718c]">
            {loading ? (
              <div className="flex items-center justify-center w-full h-full">
                <CircularProgress size={50} color="secondary" />
              </div>
            ) : (
              <Swiper
                ref={swiperRef}
                cssMode={false}
                mousewheel={true}
                touchAngle={false}
                modules={[Navigation, Pagination, Mousewheel, Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                className="mySwiper !size-full !rounded-28 !overflow-hidden"
              >
                {bigBanners.map((banner, index) => (
                  <SwiperSlide key={index}>
                    <a
                      href={banner.redirect_to}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={banner.image_url}
                        alt={`Banner ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>

        {/* Custom Next & Prev Buttons */}
        <div className="">
          <div className="absolute z-20 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden md:block size-12 items-center justify-center box-shadow1 rounded-full overflow-hidden border-2 border-[#271822]">
            <button
              onClick={handlePrev}
              className="bg-gradietn size-full flex items-center justify-center"
            >
              <img src={Prev} alt="Prev" />
            </button>
          </div>
          <div className="absolute z-20 top-1/2 -translate-y-1/2 right-0 translate-x-1/2 hidden md:block size-12 items-center justify-center box-shadow1 rounded-full overflow-hidden border-2 border-[#271822]">
            <button
              onClick={handleNext}
              className="bg-gradietn size-full flex items-center justify-center"
            >
              <img src={Prev} alt="Next" className="rotate-180" />
            </button>
          </div>
        </div>

        {/* Custom Pagination */}
        <div className="relative z-10 flex gap-1 mx-auto w-max -mt-5">
          {[...Array(slideCount)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePaginationClick(index)}
              className={`size-2.5 rounded-full ${
                activeIndex === index ? "bg-[#FBDBF0]" : "bg-[#69425C]"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Right Banner */}
      <div className="relative hidden 2xl:block max-w-[17.5rem] w-full aspect-square overflow-hidden rounded-28 border-2 border-[#271822] box-shadow1">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <CircularProgress size={50} />
          </div>
        ) : smallBanner ? (
          <a
            href={smallBanner.redirect_to}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={smallBanner.image_url}
              alt="RightImage"
              className="size-full object-cover rounded-28"
            />
          </a>
        ) : (
          <div className="size-full flex items-center justify-center">
            <p>Loading...</p>
          </div>
        )}
        <div className="absolute top-0 left-0 size-full rounded-28 border-2 border-[#63435799]"></div>
      </div>
    </section>
  );
}

export default HeroSection;
