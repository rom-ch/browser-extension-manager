import styles from "./ExtensionToggle.module.css";

export function ExtensionToggle({ id, isActive, toggleExtension }) {
  return (
    <div className={styles.toggle} tabIndex={0}>
      <input
        inert
        type="checkbox"
        id={id}
        checked={isActive}
        onChange={e => toggleExtension(id, e.target.checked)}
        className={styles["toggle__input"]}
      />
      <label htmlFor={id} className={styles["toggle__label"]}></label>
    </div>
  );
}
