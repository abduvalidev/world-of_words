import { Link } from "react-router-dom";
import TelegramIcon from "../assets/svg/telegram-icon.svg";
import ChormeIcon from "../assets/svg/chorme.svg";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Header() {
  const { t } = useTranslation();
  return (
    <footer className="max-w-base-2 mx-auto px-five md:px-3.5 lg:px-5 xl:px-10 2xl:px-3 3xl:px-12">
      <div className="border-2 border-b-0 border-black backdrop-blur-[2px] bg-gradient rounded-l-28 rounded-r-28 !rounded-b-none">
        <div className="bg-gradient border-2 border-b-0 border-[#331E2B]/80 rounded-l-28 rounded-t-28 !rounded-b-none overflow-hidden">
          <div className="flex items-center justify-between gap-4 px-7 xl:px-[68px] py-3.5 xl:py-6">
            <div className="flex items-center gap-4 justify-between w-full md:w-auto">
              <Link
                to="/chat"
                className="shrink-0 size-12 xl:w-max bg-[#271220] border-2 border-[#513748] rounded-full flex items-center justify-center gap-3 xl:p-1.5 xl:pr-5"
              >
                <div className="shrink-0 bg-gradietn size-[2.375rem] flex items-center justify-center">
                  <LazyLoadImage
                    src={TelegramIcon}
                    alt="telegram-icon"
                    className="size-5"
                    effect="blur"
                  />
                </div>
                <span className="hidden xl:block font-medium">
                  {t("Footer.chat")}
                </span>
              </Link>
              <div className="block md:hidden space-y-2">
                <div className="font-medium flex flex-col text-xs md:text-base">
                  <Link
                    to="/"
                    className="text-[#BD89A9] decoration underline underline-offset-2"
                  >
                    {t("Footer.policy")}
                  </Link>
                  <div className="flex items-center gap-3 justify-between">
                    <Link
                      to="/"
                      className="text-[#BD89A9] decoration underline underline-offset-2"
                    >
                      {t("Footer.offer")}
                    </Link>
                    <ul className="list-inside">
                      <li className="list-disc">
                        <Link className="text-[#BD89A9] decoration underline underline-offset-2">
                          Контакты
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="font-medium text-gradient text-center text-xs md:text-base max-w-[200px] mx-auto">
                  {t("Footer.center")}
                </p>
              </div>
              <Link
                to="/chat"
                className="shrink-0 size-12 xl:w-max bg-[#271220] border-2 border-[#513748] rounded-full flex items-center justify-center gap-3 xl:p-1.5 xl:pr-5"
              >
                <div className="shrink-0 bg-gradietn size-[2.375rem] flex items-center justify-center">
                  <LazyLoadImage
                    src={ChormeIcon}
                    alt="telegram-icon"
                    className="size-5"
                    effect="blur"
                  />
                </div>
                <span className="hidden xl:block font-medium">
                  {t("Footer.chorme")}
                </span>
              </Link>
            </div>
            <p className="hidden md:block font-medium text-gradient text-center max-w-[200px]">
              {t("Footer.center")}
            </p>
            <div className="font-medium hidden md:flex flex-col">
              <Link
                to="/"
                className="text-[#BD89A9] decoration underline underline-offset-2"
              >
                {t("Footer.policy")}
              </Link>
              <div className="flex items-center gap-3 justify-between">
                <Link
                  to="/"
                  className="text-[#BD89A9] decoration underline underline-offset-2"
                >
                  {t("Footer.offer")}
                </Link>
                <ul className="list-inside">
                  <li className="list-disc">
                    <Link className="text-[#BD89A9] decoration underline underline-offset-2">
                      Контакты
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
