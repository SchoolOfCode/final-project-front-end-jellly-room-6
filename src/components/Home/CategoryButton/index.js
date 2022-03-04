import Link from "next/link";
import BeanButton from "../../BeanButton";
import { motion } from "framer-motion";

export default function CategoryButton({ category, isCompleted, color, xPos }) {
  return (
    <Link
      href={{
        pathname: "/question",
        query: {
          category,
        },
      }}
    >
      <motion.a animate={{ x: xPos }}>
        <BeanButton
          color={color}
          text={category}
          xPos={xPos}
          completed={isCompleted ? true : false}
        >
          {category}
        </BeanButton>
      </motion.a>
    </Link>
  );
}
