import Link from "next/link";

export default function CategoryButton({ category, user, handleClick }) {
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
        <button onClick={handleClick}>{category}</button>
      </a>
    </Link>
  );
}
