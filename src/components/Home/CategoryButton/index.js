import Link from "next/link";
import styles from "./index.module.css";

export default function CategoryButton({ category, isCompleted }) {
  return (
    <Link
      href={{
        pathname: "/question",
        query: {
          category
        },
      }}
    >
      <a>
        <button
          className={`${styles.button} ${isCompleted && styles.completed}`}
        >
          {category}
        </button>
      </a>
    </Link>
  );
}
