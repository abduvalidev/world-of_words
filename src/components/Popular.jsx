import { useTranslation } from "react-i18next";
import NextBtn from "../assets/svg/next-button.svg";
import Ligh from "../assets/svg/light.svg";
import PopularImage from "../assets/img/popular-image.png";

function Popular() {
  const { t } = useTranslation();
  return (
    <section className="max-w-1140 2xl:max-w-base mx-auto px-2.5 md:px-10 lg:px-10 2xl:px-5 mt-[30px]">
      <div className="w-max h-12 box-shadow1 rounded-full overflow-hidden border-2 border-[#271822]">
        <button className="bg-gradietn size-full !rounded-full flex items-center justify-center gap-3 transition duration-300 hover:opacity-85 px-5">
          <span className="font-medium leading-5">
            {t("PopularSection.popular")}
          </span>
          <img src={NextBtn} alt="next" className="h-5" />
        </button>
      </div>
      <div className="relative">
        <div className="relative z-10 border-2 border-[#271822]/80 bg-gradient__popular rounded-28 mt-4">
          <div className=" border-2 border-[#634357] rounded-28  p-4 md:p-4 lg:p-6 2xl:p-8">
            <div className="relative flex gap-3.5 overflow-x-auto no-scroll">
              {/* Item 1 */}
              <div className="min-w-[7.125rem] md:min-w-32 lg:min-w-40 w-[7.125rem] md:w-32 lg:w-[9.9375rem]">
                <div className="relative w-full h-40 sm:h-44 lg:h-[13.6875rem] overflow-hidden rounded-28 border-2 border-[#271822]">
                  <img
                    src={PopularImage}
                    alt="popular-image"
                    className="size-full object-cover"
                  />
                  <div className="absolute top-0 left-0 size-full rounded-28 border-2 border-[#63435799]"></div>
                </div>
                <p className="text-sm/4 line-clamp-1 mt-2">Дем Михайлов</p>
                <h4 className="font-bold line-clamp-2 mt-2">
                  Господство клана Неспящих
                </h4>
              </div>
              {/* Item 1 */}
              <div className="min-w-[7.125rem] md:min-w-32 lg:min-w-40 w-[7.125rem] md:w-32 lg:w-[9.9375rem]">
                <div className="relative w-full h-40 sm:h-44 lg:h-[13.6875rem] overflow-hidden rounded-28 border-2 border-[#271822]">
                  <img
                    src={PopularImage}
                    alt="popular-image"
                    className="size-full object-cover"
                  />
                  <div className="absolute top-0 left-0 size-full rounded-28 border-2 border-[#63435799]"></div>
                </div>
                <p className="text-sm/4 line-clamp-1 mt-2">Дем Михайлов</p>
                <h4 className="font-bold line-clamp-2 mt-2">
                  Господство клана Неспящих
                </h4>
              </div>
              {/* Item 1 */}
              <div className="min-w-[7.125rem] md:min-w-32 lg:min-w-40 w-[7.125rem] md:w-32 lg:w-[9.9375rem]">
                <div className="relative w-full h-40 sm:h-44 lg:h-[13.6875rem] overflow-hidden rounded-28 border-2 border-[#271822]">
                  <img
                    src={PopularImage}
                    alt="popular-image"
                    className="size-full object-cover"
                  />
                  <div className="absolute top-0 left-0 size-full rounded-28 border-2 border-[#63435799]"></div>
                </div>
                <p className="text-sm/4 line-clamp-1 mt-2">Дем Михайлов</p>
                <h4 className="font-bold line-clamp-2 mt-2">
                  Господство клана Неспящих
                </h4>
              </div>
              {/* Item 1 */}
              <div className="min-w-[7.125rem] md:min-w-32 lg:min-w-40 w-[7.125rem] md:w-32 lg:w-[9.9375rem]">
                <div className="relative w-full h-40 sm:h-44 lg:h-[13.6875rem] overflow-hidden rounded-28 border-2 border-[#271822]">
                  <img
                    src={PopularImage}
                    alt="popular-image"
                    className="size-full object-cover"
                  />
                  <div className="absolute top-0 left-0 size-full rounded-28 border-2 border-[#63435799]"></div>
                </div>
                <p className="text-sm/4 line-clamp-1 mt-2">Дем Михайлов</p>
                <h4 className="font-bold line-clamp-2 mt-2">
                  Господство клана Неспящих
                </h4>
              </div>
              {/* Item 1 */}
              <div className="min-w-[7.125rem] md:min-w-32 lg:min-w-40 w-[7.125rem] md:w-32 lg:w-[9.9375rem]">
                <div className="relative w-full h-40 sm:h-44 lg:h-[13.6875rem] overflow-hidden rounded-28 border-2 border-[#271822]">
                  <img
                    src={PopularImage}
                    alt="popular-image"
                    className="size-full object-cover"
                  />
                  <div className="absolute top-0 left-0 size-full rounded-28 border-2 border-[#63435799]"></div>
                </div>
                <p className="text-sm/4 line-clamp-1 mt-2">Дем Михайлов</p>
                <h4 className="font-bold line-clamp-2 mt-2">
                  Господство клана Неспящих
                </h4>
              </div>
              {/* Item 1 */}
              <div className="min-w-[7.125rem] md:min-w-32 lg:min-w-40 w-[7.125rem] md:w-32 lg:w-[9.9375rem]">
                <div className="relative w-full h-40 sm:h-44 lg:h-[13.6875rem] overflow-hidden rounded-28 border-2 border-[#271822]">
                  <img
                    src={PopularImage}
                    alt="popular-image"
                    className="size-full object-cover"
                  />
                  <div className="absolute top-0 left-0 size-full rounded-28 border-2 border-[#63435799]"></div>
                </div>
                <p className="text-sm/4 line-clamp-1 mt-2">Дем Михайлов</p>
                <h4 className="font-bold line-clamp-2 mt-2">
                  Господство клана Неспящих
                </h4>
              </div>
              {/* Item 1 */}
              <div className="min-w-[7.125rem] md:min-w-32 lg:min-w-40 w-[7.125rem] md:w-32 lg:w-[9.9375rem]">
                <div className="relative w-full h-40 sm:h-44 lg:h-[13.6875rem] overflow-hidden rounded-28 border-2 border-[#271822]">
                  <img
                    src={PopularImage}
                    alt="popular-image"
                    className="size-full object-cover"
                  />
                  <div className="absolute top-0 left-0 size-full rounded-28 border-2 border-[#63435799]"></div>
                </div>
                <p className="text-sm/4 line-clamp-1 mt-2">Дем Михайлов</p>
                <h4 className="font-bold line-clamp-2 mt-2">
                  Господство клана Неспящих
                </h4>
              </div>
              {/* Item 1 */}
              <div className="min-w-[7.125rem] md:min-w-32 lg:min-w-40 w-[7.125rem] md:w-32 lg:w-[9.9375rem]">
                <div className="relative w-full h-40 sm:h-44 lg:h-[13.6875rem] overflow-hidden rounded-28 border-2 border-[#271822]">
                  <img
                    src={PopularImage}
                    alt="popular-image"
                    className="size-full object-cover"
                  />
                  <div className="absolute top-0 left-0 size-full rounded-28 border-2 border-[#63435799]"></div>
                </div>
                <p className="text-sm/4 line-clamp-1 mt-2">Дем Михайлов</p>
                <h4 className="font-bold line-clamp-2 mt-2">
                  Господство клана Неспящих
                </h4>
              </div>
              {/* Item 1 */}
              <div className="min-w-[7.125rem] md:min-w-32 lg:min-w-40 w-[7.125rem] md:w-32 lg:w-[9.9375rem]">
                <div className="relative w-full h-40 sm:h-44 lg:h-[13.6875rem] overflow-hidden rounded-28 border-2 border-[#271822]">
                  <img
                    src={PopularImage}
                    alt="popular-image"
                    className="size-full object-cover"
                  />
                  <div className="absolute top-0 left-0 size-full rounded-28 border-2 border-[#63435799]"></div>
                </div>
                <p className="text-sm/4 line-clamp-1 mt-2">Дем Михайлов</p>
                <h4 className="font-bold line-clamp-2 mt-2">
                  Господство клана Неспящих
                </h4>
              </div>
            </div>
          </div>
        </div>
        <img
          src={Ligh}
          alt="light"
          className="absolute z-0 left-10 top-1/2 -translate-y-1/2 w-full h-[600px]"
        />
      </div>
      <div className="relative w-[calc(100%-14px)] md:w-full h-[3px] bg-[#220F1C] my-[30px] border-svg mx-auto"></div>
    </section>
  );
}

export default Popular;
