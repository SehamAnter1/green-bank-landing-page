import { useEffect, useState} from "react";
import {full_logo} from "../../assets/images/Images";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

export default function Main_Header() {
   const {t} = useTranslation();
       const navItems = [
        {label: "Why Us", path: "#why-us"},
        {label: "Services", path: "#services"},
        {label: "Our Process",  path: "#our-services"},
        {label: "Payments",  path: "#payments"},
        {label: "FAQs", path: "#faqs"},
    ];
    const [collapse,setCollapse]=useState(true);
    
    return (
        <div className="container  mt-[32px]">
            <div className="navbar h-[48px] mx-auto w-full flex items-center justify-between">
               <img src={full_logo} alt="logo"  className="w-[140px]" />
                  <ul className="flex  w-fit  px-[32px] flex items-center gap-[16px] lg:gap-[32px] ">
                                {navItems.map((item) => (
                                    <NavLink to={item.path} key={item.path} className={"group"}>
                                        {({isActive}) => (
                                              <li
                                                    className={` transition-all font-medium text-background duration-300 group-hover:opacity-100 `}
                                                >
                                                    {t(item.label)}
                                                </li>
                                        )}
                                    </NavLink>
                                ))}
                            </ul>
                <Button variant="outline" text={"Contact us"}/>              
            </div>
        </div>
    );
}
