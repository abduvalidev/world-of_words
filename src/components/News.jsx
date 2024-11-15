import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import NextBtn from "../assets/svg/next-button.svg";
import Ligh from "../assets/svg/light.svg";
import Skeleton from "@mui/material/Skeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";

function News() {
  const { t } = useTranslation();
  const [newsBooks, setNewsBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://dev.api.worldwords.io/web/main/books")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setNewsBooks(data.data.new || []);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="max-w-1140 2xl:max-w-base mx-auto px-2.5 md:px-10 lg:px-10 2xl:px-5 mt-[30px]">
      <div className="w-max h-12 box-shadow1 rounded-full overflow-hidden border-2 border-[#271822]">
        <button className="bg-gradietn size-full !rounded-full flex items-center justify-center gap-3 transition duration-300 hover:opacity-85 px-5">
          <span className="font-medium leading-5">
            {t("News.newbts")} {/* News section translation */}
          </span>
          <img src={NextBtn} alt="next" className="h-5" />
        </button>
      </div>
      <div className="relative">
        <div className="relative z-10 border-2 border-[#271822]/80 bg-gradient__popular rounded-28 mt-4">
          <div className=" border-2 border-[#634357] rounded-28 p-4 md:p-4 lg:p-6 2xl:p-8">
            <div className="relative flex gap-3.5 overflow-x-auto no-scroll px-4 -mx-4 lg:px-0 lg:mx-0">
              {loading
                ? // Display skeleton loaders while loading
                  Array.from(new Array(7)).map((_, index) => (
                    <div
                      key={index}
                      className="min-w-[7.125rem] md:min-w-32 lg:min-w-40 w-[7.125rem] md:w-32 lg:w-[9.9375rem]"
                    >
                      <Skeleton
                        variant="rectangular"
                        width="100%"
                        className="!h-40 sm:!h-44 lg:!h-[13.6875rem]"
                      />
                      <Skeleton width="60%" />
                      <Skeleton width="80%" />
                    </div>
                  ))
                : newsBooks.map((article, index) => (
                    <div
                      key={index}
                      className="cursor-pointer min-w-[7.125rem] md:min-w-32 lg:min-w-40 w-[7.125rem] md:w-32 lg:w-[9.9375rem]"
                    >
                      <div className="relative w-full h-40 sm:h-44 lg:h-[13.6875rem] overflow-hidden rounded-xl border-2 border-[#271822]">
                        <LazyLoadImage
                          src={article.image}
                          alt={article.title}
                          className="size-full object-cover"
                          effect="blur"
                        />
                        <div className="absolute top-0 left-0 size-full rounded-xl border-2 border-[#63435799]"></div>
                      </div>
                      <p className="text-sm/4 line-clamp-1 mt-2">
                        {article.author}
                      </p>
                      <h4 className="font-bold line-clamp-2 mt-2">
                        {article.name}
                      </h4>
                    </div>
                  ))}
            </div>
          </div>
        </div>
        <img
          src={Ligh}
          alt="light"
          className="absolute z-0 left-10 top-1/2 -translate-y-1/2 w-full h-[600px]"
          // effect="blur"
        />
      </div>
    </section>
  );
}

export default News;
