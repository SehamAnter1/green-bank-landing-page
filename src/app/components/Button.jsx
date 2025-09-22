import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import ButtonSpinner from "../components/ButtonSpinner";

export default function Button({to, variant="primary",
        size = "md", // sm, md, lg, xl, full
target, loading, onClick, disabled, type, className, text, 
    children, icon_first}) {
    const {t} = useTranslation();
    const isDisabled = loading || disabled;
    const buttonContent = (
        <>
            {loading && <ButtonSpinner />}
            {icon_first ? (
                <>
                    {children}
                    {t(text)}
                </>
            ) : (
                <>
                    {t(text)}
                    {children}
                </>
            )}
        </>
    );
       const variantClasses = {
        primary: "bg-foreground text-background",
        secondary: "bg-gray-200 text-gray-900",
        danger: "bg-red-500 text-white",
        outline: "border border-foreground text-foreground  bg-transparent",
    };
    const sizeClasses = {
        xs: "h-[28px] text-xs px-3 py-0.5 min-w-[50px]",
        sm: "h-[36px] text-sm px-4 py-1 min-w-[60px]",
        md: "h-[36px] md:h-[40px] lg:h-[50px] text-base px-[20px] md:px-[30px] py-[10px] min-w-[80px] md:min-w-[150px]",
        lg: "h-[60px] text-lg px-[28px] md:px-[40px] py-[14px] min-w-[120px]",
        xl: "h-[70px] text-xl px-[36px] py-[16px] min-w-[150px]",
        full: "w-full h-[50px] text-base px-[20px] py-[10px]",
    };
    const buttonClasses = `w-fit capitalize backdrop-blur-md cursor-pointer rounded-[49px] px-[20px] md:px-[px] py-[10px] text-center bg-RED flex items-center gap-[10px] justify-center ${className} ${
        isDisabled ? "opacity-35 cursor-not-allowed" : ""
    } ${variantClasses[variant]|| variantClasses.primary}
      ${sizeClasses[size] || sizeClasses.md}
       `;

    if (to) {
        return (
            <Link rel="preload" to={to} target={target} className={`rounded-[49px]  ${className}`}>
                <button name={"button"} loading={loading} onClick={onClick} disabled={isDisabled} type={type} className={buttonClasses}>
                    {buttonContent}
                </button>
            </Link>
        );
    }

    return (
        <button  name={"button"}  loading={loading} onClick={onClick} disabled={isDisabled} type={type} className={buttonClasses}>
            {buttonContent}
        </button>
    );
}
