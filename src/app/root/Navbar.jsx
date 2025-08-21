import { useEffect, useState } from "react";
import { full_logo } from "../../assets/images/Images";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import { Close_menu_icon, Menu_icon } from "../../assets/Icons";

export default function Navbar() {
    const { t } = useTranslation();
    const navItems = [
        { label: "Why Us", path: "#why-us" },
        { label: "Services", path: "#services" },
        { label: "Our Process", path: "#our-services" },
        { label: "Payments", path: "#payments" },
        { label: "FAQs", path: "#faqs" },
    ];
    const [collapse, setCollapse] = useState(false);

    return (
        <div className="container  mt-[32px]">
            <div className="navbar h-[48px] mx-auto w-full flex items-center justify-between">
                <img src={full_logo} alt="logo" className="w-[140px]" />

                <ul className={`${collapse ? "max-md:grid max-md:px-6 max-md:absolute max-md:bg-foreground max-md:h-[100vh] max-md:top-0 content-start max-md:gap-14 max-md:z-[9999] max-md:pt-[100px] !w-[280px] end-0" : "max-md:hidden"} flex w-fit flex mx-auto items-center gap-[16px] xl:gap-[32px]`}>
                    {navItems.map((item) => (
                        <NavLink to={item.path} key={item.path} className={"group"}>
                            {({ isActive }) => (
                                <li
                                    className={` transition-all font-medium text-background duration-300 group-hover:opacity-100 `}
                                >
                                    {t(item.label)}
                                </li>
                            )}
                        </NavLink>
                    ))}
                    <Button variant="secondary" className={"md:hidden"} text={"Contact us"} />
                </ul>
                <span className="md:hidden w-4 ms-0 relative z-[99999]"
                    onClick={() => setCollapse(!collapse)}
                    role="button">
                    {!collapse ?
                        <Menu_icon />
                        :
                        <Close_menu_icon />
                    }
                </span>
                <Button variant="outline" className={"max-md:hidden"} text={"Contact us"} />
            </div>
        </div>
    );
}
