import Link from "next/link";
import BeanButton from "../../BeanButton";
import styles from "./index.module.css";

<<<<<<< HEAD
export default function CategoryButton({ category, isCompleted }) {
=======
export default function CategoryButton({ category, user, color, isCompleted }) {
>>>>>>> 6735c33834905ea86a71681c390b3abfed2fab99
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
<<<<<<< HEAD
        <button
          className={`${styles.button} ${isCompleted && styles.completed}`}
        >
=======
        <BeanButton color={color} text={category} disabled={isCompleted ? true : false}>
>>>>>>> 6735c33834905ea86a71681c390b3abfed2fab99
          {category}
        </BeanButton>
      </a>
    </Link>
  );
}
