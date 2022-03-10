import styles from "./loading.module.css";
import { useEffect } from "react";

const timeoutInSeconds = 3;

export default function Loading({ redirect }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = redirect;
    }, timeoutInSeconds * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [redirect]);

  return <div className={styles.loading}></div>;
}
