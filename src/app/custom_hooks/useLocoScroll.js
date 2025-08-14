import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export const useLocoScroll = (start = true) => {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector("[data-scroll-container]");

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1.2,
      class: "is-inview",
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, [start]);
};
