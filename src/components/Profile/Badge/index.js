import styles from "./badge.module.css";

export default function Badge({ name }) {
  return (
    <div className={`${styles.badgebtn}`}>
      <p>{name}</p>
    </div>
  );
}
