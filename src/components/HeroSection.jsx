import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "../assets/img/banner.png";
import RightImage from "../assets/img/right-image.jpeg";
import Prev from "../assets/svg/prev.svg";
import { useRef, useState, useEffect } from "react";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper/modules";
function HeroSection() {
  const swiperRef = useRef(null);
  const [slideCount, setSlideCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Slayderlar sonini aniqlash
  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      setSlideCount(swiperInstance.slides.length);
      swiperInstance.on("slideChange", () => {
        setActiveIndex(swiperInstance.activeIndex);
      });
    }
  }, []);

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
        <div className="size-full relative z-0 overflow-hidden rounded-28 border-2 border-[#271822]/80 box-shadow1">
          <Swiper
            ref={swiperRef}
            cssMode={false}
            mousewheel={true}
            touchAngle={false}
            modules={[ Navigation, Pagination, Mousewheel, Autoplay,]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mySwiper !size-full !rounded-28 !overflow-hidden"
          >
            {/* Slayderlar */}
            <SwiperSlide >
              <img
                src={Banner}
                alt='Banner'
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide >
              <img
                src={Banner}
                alt='Banner'
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide >
              <img
                src={Banner}
                alt='Banner'
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide >
              <img
                src={Banner}
                alt='Banner'
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>

          {/* Custom Overlay Border */}
          <div className="absolute top-0 left-0 z-10 size-full rounded-28 border-2 border-[#63435799]"></div>
        </div>
        {/* Custom Next & Prev Buttons */}
        <div className="">
          <div className="absolute z-20 top-1/2 -translate-y-1/2 -translate-x-1/2  hidden md:block size-12 items-center justify-center box-shadow1 rounded-full overflow-hidden border-2 border-[#271822]">
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
        <img
          src={RightImage}
          alt="RightImage"
          className="size-full object-cover rounded-28"
        />
        <div className="absolute top-0 left-0 size-full rounded-28 border-2 border-[#63435799]"></div>
      </div>
    </section>
  );
}

export default HeroSection;
