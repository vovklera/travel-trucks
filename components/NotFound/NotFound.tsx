"use client";

import { useRouter } from "next/navigation";
import css from "./NotFound.module.css";

export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <div className={css.notFound}>
      <h1 className={css.title}>404</h1>
      <div className={css.separateLine}></div>

      <div className={css.wrap}>
        <p className={css.text}>Page not found</p>

        <p className={css.description}>
          The page you&lsquo;re looking for doesn&lsquo;t exist.
        </p>
      </div>
      <button type="button" className={css.goBack} onClick={handleGoBack}>
        Back to home
      </button>
    </div>
  );
}
