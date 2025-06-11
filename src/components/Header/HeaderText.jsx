import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 text-sm rounded-md border-2 border-white text-white hover:bg-white hover:text-black_cruznegra transition-all"
    >
      {i18n.language === "es" ? "EN" : "ES"}
    </button>
  );
};

const HeaderText = () => {
  const { t } = useTranslation();

  return (
    <div className="lg:text-left lg:m-0 m-2 md:m-5">
      <div className="flex flex-col items-center gap-2 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
        <h1 className="text-md font-normal mb-2 leading-5 lg:text-2xl lg:font-bold lg:leading-tight">
          {t("header_text")}
        </h1>
        <LanguageSwitch />
      </div>
      <div className="text-center lg:text-left items-center lg:items-start flex justify-center lg:justify-start mt-4">
        <a
          href="#form"
          type="button"
          className="bg-white text-black_cruznegra px-4 py-2 text-sm rounded-md border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all"
        >
          {t("lets_talk")}
        </a>
      </div>
    </div>
  );
};

export default HeaderText;
