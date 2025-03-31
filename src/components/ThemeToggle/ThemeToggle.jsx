import { useContext } from "react";
import moonIcon from "../../assets/icon-moon.svg";
import sunIcon from "../../assets/icon-sun.svg";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className={styles.toggle} onClick={toggleTheme}>
      <img
        src={theme === "dark" ? sunIcon : moonIcon}
        alt={`Toggle to ${theme === "dark" ? "light" : "dark"} mode`}
      />
    </button>
  );
}
