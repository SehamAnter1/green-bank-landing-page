import {no_data} from "../../assets/Images";

export default function Empty_State({img, className}) {
    return (
        <div className={`flex h-[50vh] w-full items-center justify-center ${className} `}>
            <img className="mx-auto " src={img ? img : no_data} alt="" />
        </div>
    );
}
