import { useState } from "react";
import { search_arrow_icon, search_icon } from "../../../assets/Icons";
import { useTranslation } from "react-i18next";

export default function Search() {
    const { t } = useTranslation();
    const [expanded, setExpanded] = useState(false);

    return (
        <div 
            className={`h-[40px]  px-[10px] ${expanded?"w-[348px]  justify-between":"w-[40px] "} overflow-hidden flex items-center bg-container-secondary-variant rounded-full transition-all duration-300 cursor-pointer`}
            onClick={() => !expanded && setExpanded(true)} 
            >
        <div className=" flex items-center justify-center "
           
        
        >
            <div className="flex items-center gap-2 transition-all duration-300">
                {search_icon("var(--on-container-secondary)")}
                <input
                    type="text"
                    placeholder={t("type_here")}
                    className={`bg-transparent outline-none transition-opacity duration-300 ${
                        expanded ? "opacity-100 " : "opacity-0 "
                    }`}
                />
            </div>
            </div>
            <div 
                className={`transition-transform duration-300 ${
                    expanded ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
                }`}
                onClick={(e) => {
                    e.stopPropagation(); 
                    setExpanded(false); 
                }}
            >
                {search_arrow_icon("var(--on-surface-primary)")}
            </div>
        </div>
    );
}
