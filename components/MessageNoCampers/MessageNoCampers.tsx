import Image from "next/image";
import css from "./MessageNoCampers.module.css";

export default function MessageNoCampers() {
  return (
    <div className={css.messageContainer}>
      <div className={css.imageWrapper}>
        <Image
          src="/images/NoFoundCampers.webp"
          alt="No campers found"
          width={488}
          height={463}
        />
      </div>
      <div className={css.message}>
        <p className={css.messageTitle}>No campers found</p>
        <div>
          <p className={css.messageText}>
            We couldn`t find any campers that match your filters.
          </p>
          <p className={css.messageText}>
            Try adjusting your search or clearing some filters.
          </p>
        </div>
      </div>
      <div className={css.actions}>
        <button type="button" className={css.clearButton}>
          <svg width="24" height="24" className={css.closeButtonIcon}>
            <use href="/icons.svg#icon-close" />
          </svg>
          Clear filters
        </button>
        <button type="button" className={css.viewAllButton}>
          View all campers
        </button>
      </div>
    </div>
  );
}
