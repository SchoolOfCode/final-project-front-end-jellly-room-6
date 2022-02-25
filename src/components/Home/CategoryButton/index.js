import Link from "next/link";
import BeanButton from "../../BeanButton";
import styles from "./index.module.css";

export default function CategoryButton({ category, user, color, isCompleted }) {
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
        <BeanButton color={color} text={category} disabled={isCompleted ? true : false}>
          {category}
        </BeanButton>
      </a>
    </Link>
  );
}
