// import Lottie from "react-lottie";
import loader from "../../assets/animation/loader.json";

export default function Loader() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loader,
    };
    return (
        <div className="spinner  bg-body_bg">
            <div className="container grid content-center  h-full ">
                <div className="w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%] mx-auto">
                    {/* <Lottie options={defaultOptions} /> */}
                </div>
            </div>
        </div>
    );
}
