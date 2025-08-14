import { useState} from "react";
import {full_logo} from "../../assets/images/Images";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";

export default function Main_Header() {
   const {t} = useTranslation();
    return (
        <div className="container  mt-[32px]">
            <div className="navbar h-[48px] mx-auto w-full flex items-center justify-between">
               <img src={full_logo} alt="logo"  className="w-[140px]" />
                
                <Button text={"Contact us"}/>
                <Button variant="outline" text={"Contact us"}/>              
            </div>
        </div>
    );
}
