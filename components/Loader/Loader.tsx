import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loaderWrapperr}>
      <div className={css.loaderContainer}>
        <span className={css.loader}></span>
        <div className={css.textWrapper}>
          <p className={css.loaderTitle}>Loading tracks...</p>
          <p className={css.loaderText}>
            Please wait while we fetch the best travel trucks for you
          </p>
        </div>
      </div>
    </div>
  );
}
