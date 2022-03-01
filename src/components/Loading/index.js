import styles from "./loading.module.css";
import { useEffect } from "react";

const timeoutInSeconds = 3;

export default function Loading() {

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/api/auth/logout"
    }, timeoutInSeconds * 1000);
    return () => {
      clearTimeout(timer);
      
    }
  }, []);

  return <div className={styles.loading}></div>;
}
