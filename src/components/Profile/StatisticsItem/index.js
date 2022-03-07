import styles from "./statistics.module.css";

export default function StatisticsItem({ title, value }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div data-cy="statisticsValue" className={styles.statisticsValue}>
        {value}
      </div>
    </div>
  );
}
