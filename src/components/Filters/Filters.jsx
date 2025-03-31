import { FilterButton } from "../FilterButton/FilterButton";
import styles from "./Filters.module.css";

const filters = ["All", "Active", "Inactive"];

export function Filters({ filter, setFilter }) {
  return (
    <div className={styles["filter-section"]}>
      <h2>Extensions List</h2>
      <div className={styles.filters}>
        {filters.map(item => (
          <FilterButton
            key={item}
            name={item}
            onClick={() => setFilter(item)}
            className={filter === item ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
}
