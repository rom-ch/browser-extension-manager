import styles from "./FilterButton.module.css";

export function FilterButton({ name, onClick, className }) {
  return (
    <button className={`${styles.btn} ${styles[className]}`} onClick={onClick}>
      {name}
    </button>
  );
}
