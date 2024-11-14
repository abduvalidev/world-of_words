import { Swiper, SwiperSlide } from "swiper/react";
// import Banner from "../assets/img/banner.png";
import RightImage from "../assets/img/right-image.jpeg";
import Prev from "../assets/svg/prev.svg";
import { useRef, useState, useEffect } from "react";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import NextBtn from "../assets/svg/next-button.svg";
import AppsLeft from "../assets/svg/apps-left.svg";
import AppsRight from "../assets/svg/apps-right.svg";
import "../fonts/stylesheet.css";
function Apps() {
  const { t } = useTranslation();
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
    <section className="max-w-1140 2xl:max-w-base mx-auto px-2.5 md:px-10 lg:px-10 2xl:px-5 mt-[30px]">
      <div className="w-max h-12 box-shadow1 rounded-full overflow-hidden border-2 border-[#271822]">
        <button className="bg-gradietn size-full !rounded-full flex items-center justify-center gap-3 transition duration-300 hover:opacity-85 px-5">
          <span className="font-medium leading-5 whitespace-nowrap">
            {t("Apps.appBtn")}
          </span>
          <img src={NextBtn} alt="next" className="h-5" />
        </button>
      </div>
      <div className="flex justify-between gap-11 mt-[30px]">
        {/* Left Banner */}
        <div className="relative w-full 2xl:max-w-[59.625rem]">
          <div className="size-full relative z-0 overflow-hidden rounded-28 bg-gradient__2 border-2 border-[#271822] box-shadow1">
            {/* Custom Overlay Border */}
            <div className="size-full rounded-28 border-2 border-[#634357] p-4 px-12">
              <div className="w-full max-w-[30.5rem]">
                <div className="flex items-center gap-5">
                  <img src={AppsLeft} alt="apps-left" className="w-12 h-1.5" />
                  <h2 className="font-copperplate text-4xl text-[#FFD5CD]">
                    Литературные миры?
                  </h2>
                  <img src={AppsRight} alt="app-right" className="w-12 h-1.5" />
                </div>
                <Swiper
                  ref={swiperRef}
                  cssMode={false}
                  mousewheel={true}
                  // touchAngle={false}
                  modules={[Navigation, Pagination, Mousewheel, Autoplay]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  className="mySwiper !size-full !rounded-28 !overflow-hidden"
                >
                  {/* Slayderlar */}
                  <SwiperSlide>
                    <h4 className="font-semibold text-sm text-[#FFD5CD] mt-2.5">
                      Мы даем писателям возможность создавать арт-объекты по
                      мотивам своих литературных вселенных!
                    </h4>
                    <p className="text mt-2.5 line-clamp-3">
                      Фигурки для украшения вашего книжного шкафа, карточки для
                      ваших литературных альбомов - все эти арт-объекты вы
                      можете использовать в приложении WoW Books и повышать за
                      счет них заработок литкоинов. Можно сказать, что это
                      “мерч” по книжным вселенным, только токенизированный в
                      блокчейне и имеющий, помимо коллекционного, еще и
                      практическое применение.
                    </p>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
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
      </div>
    </section>
  );
}

export default Apps;
