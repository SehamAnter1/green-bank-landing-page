import {Link, NavLink} from "react-router-dom";
import {useContext, useState} from "react";
// icons
import i18next from "i18next";

import {useDarkMode} from "../Context/useDarkMode";
import {lng_toggle_icon, mode_toggle_icon} from "../../assets/Icons";
import {logo, user} from "../../assets/images/Images";
import Icon_Chip from "../components/chips/Icon_Chip";
import Search from "../components/actions/Search";
import { useTranslation } from "react-i18next";

export default function Main_Header() {
    const [currentLanguage, setCurrentLanguage] = useState(i18next.language);
    const handleLanguageChange = () => {
        const targetLanguage = currentLanguage === "en" ? "ar" : "en";

        i18next.changeLanguage(targetLanguage).then(() => {
            setCurrentLanguage(targetLanguage);
        });
    };

    const {darkMode, setDarkMode} = useDarkMode();
   const {t} = useTranslation();
    return (
        <div className="container   w-full  h-[80px] fixed z-[9999999] top-0">
            <div className="navbar mx-auto w-full h-[80px]  flex items-center justify-between">
               
                     <div
                     className="w-[44px] h-[44px] bg-foreground border-[1px] border-on-surface-outline flex items-center justify-center object-cover rounded-full"
                     >
                            <h2 className="font-bold text-background text-lg sm:text-xl md:text-2xl  ">{t("s")}</h2>
                        </div>
                            {/* quick access bar */}
                <div className="flex items-center gap-[8px]">
                    <Icon_Chip
                        onClick={() => setDarkMode(!darkMode)}
                        size={"md"}
                        icon={mode_toggle_icon("var(--foreground)")}
                    />
                    <Icon_Chip
                        onClick={handleLanguageChange}
                        size={"md"}
                        icon={lng_toggle_icon("var(--foreground)")}
                    />
                </div>
            </div>
        </div>
    );
}
