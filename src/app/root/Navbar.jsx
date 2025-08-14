import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import {
    home_side_icon,
    portfolio_side_icon,
    projects_side_icon,
    reports_side_icon,
    tasks_side_icon,
    teams_side_icon,
    tickets_side_icon,
    time_tracker_side_icon,
} from "../../assets/Icons";
import Icon_Chip from "../components/chips/Icon_Chip";

export default function Navbar() {
    const navItems = [
        {path: "/home", icon: (color) => home_side_icon(color), label: "home"},
        {path: "/tasks", icon: (color) => tasks_side_icon(color), label: "tasks"},
        {path: "/tickets", icon: (color) => tickets_side_icon(color), label: "tickets"},
        {path: "/reports", icon: (color) => reports_side_icon(color), label: "reports"},
        {path: "/time-tracker", icon: (color) => time_tracker_side_icon(color), label: "time_tracker"},
        {path: "/portfolio", icon: (color) => portfolio_side_icon(color), label: "portfolio"},
        {path: "/projects", icon: (color) => projects_side_icon(color), label: "projects"},
        {path: "/teams", icon: (color) => teams_side_icon(color), label: "teams"},
    ];
    const {t} = useTranslation();
    return (
        <div>
            <ul className="nav_items w-fit  px-[32px] grid items-center gap-[8px] ">
                {navItems.map((item) => (
                    <NavLink to={item.path} key={item.path} className={"group"}>
                        {({isActive}) => (
                            <div className={`relative flex`}>
                                <Icon_Chip
                                    background_color={`${
                                        isActive ? "bg-background" : "bg-foreground -secondary-variant"
                                    }`}
                                    icon={item.icon(
                                        isActive ? "var(--foreground)" : "var(--background)"
                                    )}
                                />
                                <li
                                    className={` transition-all duration-300 absolute start-14 top-3 opacity-0 group-hover:opacity-100 `}
                                >
                                    {t(item.label)}
                                </li>
                            </div>
                        )}
                    </NavLink>
                ))}
            </ul>
        </div>
    );
}
