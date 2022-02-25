import Link from "next/link";
import BeanButton from "../../BeanButton";
import styles from "./index.module.css";

export default function CategoryButton({ category, isCompleted, color }) {
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
        <BeanButton color={color} text={category} disabled={isCompleted ? true : false}>
          {category}
        </BeanButton>
      </a>
    </Link>
  );
}
