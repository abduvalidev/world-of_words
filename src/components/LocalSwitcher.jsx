import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const Header = () => {
  const { i18n } = useTranslation();
  // Set the default language as 'ru'
  const [activeLang, setActiveLang] = useState("ru");

  const onTabClick = (lang) => {
    if (lang !== activeLang) {
      i18n.changeLanguage(lang);
      setActiveLang(lang);
    }
  };

  useEffect(() => {
    i18n.changeLanguage(activeLang);
  }, [i18n, activeLang]);

  return (
    <div className="flex items-center -space-x-2.5">
      {/* Rus tili tugmasi */}
      <div className="bg-dark p-five rounded-full">
        <button
          className={`rounded-full font-semibold uppercase text-base/[1.2188rem] px-4 py-nine bg-secondary ${
            activeLang === "ru" ? "" : "bg-transparent"
          }`}
          onClick={() => onTabClick("ru")}
          disabled={activeLang === "ru"}
        >
          <span
            className={`${
              activeLang === "ru"
                ? "bg-gradient-to-t from-[#F1C4E2] to-[#AF809F] bg-clip-text text-transparent"
                : "bg-gradient-to-br from-[#917588] to-[#5D3E53] bg-clip-text text-transparent"
            }`}
          >
            Ru
          </span>
        </button>
      </div>

      <div>
        <svg
          width="25"
          height="38"
          viewBox="0 0 25 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.103054 0.927301C4.34269 5.76772 6.91184 12.1053 6.91184 19.0422C6.91184 25.9792 4.34268 32.3168 0.103027 37.1572C3.29697 33.7292 7.40609 30.9616 12.0811 30.9616C16.7563 30.9616 20.8655 33.7293 24.0594 37.1575C19.8197 32.317 17.2504 25.9794 17.2504 19.0422C17.2504 12.1052 19.8196 5.76756 24.0594 0.927124C20.8654 4.35525 16.7562 7.12294 12.0811 7.12294C7.4061 7.12294 3.29699 4.35535 0.103054 0.927301Z"
            fill="#271220"
          />
        </svg>
      </div>

      <div className="bg-dark p-five rounded-full">
        <button
          className={`rounded-full font-semibold uppercase text-base/[1.2188rem] px-4 py-nine bg-secondary ${
            activeLang === "en" ? "" : "bg-transparent"
          }`}
          onClick={() => onTabClick("en")}
          disabled={activeLang === "en"}
        >
          <span
            className={`${
              activeLang === "en"
                ? "bg-gradient-to-b from-[#F1C4E2] to-[#AF809F] bg-clip-text text-transparent"
                : "bg-gradient-to-br from-[#917588] to-[#5D3E53] bg-clip-text text-transparent"
            }`}
          >
            Eng
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
