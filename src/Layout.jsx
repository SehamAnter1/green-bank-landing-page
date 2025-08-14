import {Outlet} from "react-router-dom";
import Page_Header from "./app/root/Page_Header";
import Main_Header from "./app/root/Main_Header";
import Navbar from "./app/root/Navbar";
import {useEffect, useRef, useState} from "react";

const Layout = () => {
    const pageHeaderRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        if (pageHeaderRef.current) {
            setHeaderHeight(pageHeaderRef.current.offsetHeight);
        }

        // Update on window resize
        const handleResize = () => {
            if (pageHeaderRef.current) {
                setHeaderHeight(pageHeaderRef.current.offsetHeight);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    console.log(headerHeight);
    return (
        <div className=" grid content-start bg-surface-container-lowest mb-auto">
            <Main_Header />

            <div ref={pageHeaderRef} className=" fix ed top-[calc(80px+32px)] w-full z-40">
                <Page_Header page_title={"projects"} btn_text={"new_task"} />
            </div>
            <div className={` fix ed z-40 `} style={{top: `${headerHeight + 80 + 32 + 16}px`}}>
                <Navbar />
            </div>
            <div className={`ps-2 container overflow-y-auto `} style={{paddingTop: `${headerHeight + 80 + 32 + 16}px`,paddingInlineStart:'100px'}}>
            <Outlet />
        </div>
</div>
    );
};

export default Layout;
