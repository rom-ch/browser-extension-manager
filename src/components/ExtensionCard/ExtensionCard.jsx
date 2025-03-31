import { ExtensionToggle } from "../ExtensionToggle/ExtensionToggle";
import styles from "./ExtensionCard.module.css";

export function ExtensionCard({
  logo,
  name,
  description,
  isActive,
  toggleExtension,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img className={styles.logo} src={logo} alt={`Logo ${name}`} />
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.options}>
        <button>Remove</button>
        <ExtensionToggle
          id={name}
          isActive={isActive}
          toggleExtension={toggleExtension}
        />
      </div>
    </div>
  );
}
