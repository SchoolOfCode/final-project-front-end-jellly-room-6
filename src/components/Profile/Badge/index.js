import styles from "./badge.module.css";

export default function Badge({ name }) {
  return (
    <div className={`${styles.badgebtn} btn`}>
      <p>{name}</p>
    </div>
  );
}
