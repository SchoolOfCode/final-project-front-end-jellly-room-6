import Link from "next/link";
import styles from "./index.module.css";

export default function CategoryButton({ category, disabled, user, isCompleted }) {
  return (
    <Link
      href={{
        pathname: "/question",
        query: {
          category,
          user,
        },
      }}
    >
      <a>
        <button
          disabled={isCompleted ? true : false}
          className={`${styles.button} ${isCompleted && styles.completed}`}
        >
          {category}
        </button>
      </a>
    </Link>
  );
}
