import { useContext } from "react";
import DarkModeContext from "./Dark_Mode_Provider";

export const useDarkMode = () => useContext(DarkModeContext);
