import { useState, useEffect } from "react";
import { svgGlare } from "../../assets/Icons";
import { currentLanguageCode } from "../helpers/helpers";

export default function DropletCursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
   
    useEffect(() => {
        const handleMove = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, [currentLanguageCode]);

    return (
        <>
            <div
                className="fixed flex items-center left-0  animate-[pulse_2s_ease-in-out_infinite] justify-center pointer-events-none"
                style={{
                    transform: `translate(${pos.x - 10}px, ${pos.y - 10}px)`,
                }}
            >

                <div className="absolute h-14 w-14">

                    {svgGlare}
                </div>

            </div>


        </>
    );
}
