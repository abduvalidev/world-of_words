import { Link } from "react-router-dom";
import TelegramIcon from "../assets/svg/telegram-icon.svg";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  return (
    <footer className="max-w-base-2 mx-auto px-five md:px-3.5 lg:px-5 xl:px-10 2xl:px-3 3xl:px-12">
      <div className="border-2 border-b-0 border-black backdrop-blur-[2px] bg-gradient rounded-l-28 rounded-r-28 !rounded-b-none">
        <div className="bg-gradient border-2 border-b-0 border-[#331E2B]/80 rounded-l-28 rounded-t-28 !rounded-b-none overflow-hidden">
          <div className="px-7 xl:px-[68px] py-3.5 xl:py-6">
            <div>
              <Link to="/chat" className="w-max bg-[#271220] border-2 border-[#513748] rounded-full flex items-center gap-3 p-1.5 pr-5">
                <div className="bg-gradietn size-[2.375rem] flex items-center justify-center">
                  <img
                    src={TelegramIcon}
                    alt="telegram-icon"
                    className="size-5"
                  />
                </div>
                 <p className="font-medium">{t("Footer.chat")}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
