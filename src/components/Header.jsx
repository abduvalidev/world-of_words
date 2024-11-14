import { useTranslation } from "react-i18next";
import LocalSwitcher from "./LocalSwitcher";
import Logo from "../assets/svg/logo.svg";
import LogoCenter from "../assets/svg/logo-center.svg";
import LoginIcon from "../assets/svg/login.svg";
import MenuIcon from "../assets/svg/menu.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="max-w-base-2 mx-auto px-five md:px-3.5 lg:px-5 xl:px-10 2xl:px-3 3xl:px-12">
      <div className="border-2 border-t-0 border-black backdrop-blur-[2px] bg-gradient rounded-l-28 rounded-r-28 !rounded-t-none">
        <div className="border-2 border-t-0 border-[#634357] rounded-28 rounded-t-none">
          <nav className="relative bg-gradient rounded-l-28 rounded-r-28 !rounded-t-none">
            <div className="flex items-center justify-between gap-7 md:gap-4 px-7 xl:px-[68px] py-3.5">
              <div className="shrink-0 md:hidden size-12 flex items-center justify-center bg-dark border-[0.0938rem] border-accent rounded-full">
                <button className="size-[2.375rem] bg-gradient-to-tl to-brand-green-600 from-brand-green-700 border-[1.5px] border-brand-green-500 flex items-center justify-center rounded-full content-hover">
                  <img src={LoginIcon} alt="Logo-icon" className="w-5 h-5" />
                </button>
              </div>
              <Link to="/">
                <img src={Logo} alt="logo" className="w-40 h-14" />
              </Link>
              {/* Logo Center */}
              <img
                src={LogoCenter}
                alt="logo-center"
                className="hidden md:block max-w-[26.8125rem] lg:max-w-[34rem] w-full h-[2.125rem]"
              />
              <div className="hidden xl:flex gap-15">
                <LocalSwitcher />
                <div className="size-12 flex items-center justify-center bg-dark border-[0.0938rem] border-accent rounded-full">
                  <button className="size-[2.375rem] bg-gradient-to-tl to-brand-green-600 from-brand-green-700 border-[1.5px] border-brand-green-500 flex items-center justify-center rounded-full content-hover">
                    <img src={LoginIcon} alt="Logo-icon" className="w-5 h-5" />
                  </button>
                </div>
              </div>
              {/* Mobile */}
              <div className="shrink-0 size-12 xl:hidden flex items-center justify-center bg-dark border-[0.0938rem] border-accent rounded-full">
                <button className="size-[2.375rem] bg-gradient-to-tl to-brand-green-600 from-brand-green-700 border-[1.5px] border-brand-green-500 flex items-center justify-center rounded-full content-hover">
                  <img src={MenuIcon} alt="Logo-icon" className="w-5 h-5" />
                </button>
              </div>
              {/* Mobile Buttons */}
              <div className="hidden space-x-4">
                <Link to="/new">{t("Navigation.newItems")}</Link>
                <Link to="/popular">{t("Navigation.popular")}</Link>
                <Link to="/literary-worlds">
                  {t("Navigation.literaryWorlds")}
                </Link>
                <Link to="/login">{t("Navigation.loginAcount")}</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
