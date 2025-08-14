// import Cookies from "js-cookie";

import {useTranslation} from "react-i18next";
// import {not_found} from "../../assets/Images";

export default function Not_Found() {
    const {t} = useTranslation();
    return (
        <div className="container">
            <div className="page h-screen not_found flex items-center justify-center gap-[100px] ">
                {t("not found")}
            </div>
        </div>
    );
}
