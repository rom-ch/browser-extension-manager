import { ExtensionCard } from "../ExtensionCard/ExtensionCard";
import styles from "./ExtensionGrid.module.css";

export function ExtensionGrid({ extensions, toggleExtension }) {
  return (
    <section className={styles["extensions-grid"]}>
      {extensions.map(extension => (
        <ExtensionCard
          key={extension.name}
          toggleExtension={toggleExtension}
          {...extension}
        />
      ))}
    </section>
  );
}
