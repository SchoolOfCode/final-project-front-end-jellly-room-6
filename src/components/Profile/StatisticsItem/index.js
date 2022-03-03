import styles from "./statistics.module.css";

export default function StatisticsItem({ title, value }) {
  return (
    <div className="statistics-item">
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.statisticsValue}>{value}</div>
    </div>
  );
}
