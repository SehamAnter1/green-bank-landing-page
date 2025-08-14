// the icon chip component is used to display icon chips like side icons and header chips
export default function Icon_Chip({size = "lg", type, icon, onClick, className, background_color}) {
    const local_size = size === "lg" ? 64 : size === "md" ? 56 : size === "sm" ? 48 : null;
    return (
        <div
            onClick={onClick}
            role={onClick ? "button" : null}
            className={`transition-all duration-300 ${
                background_color ? background_color : "bg-container-secondary-variant"
            } flex items-center justify-center w-[48px]  h-[48px] rounded-full ${className} `}
        >
            {icon}
        </div>
    );
}
