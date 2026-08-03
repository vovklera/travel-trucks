import Image from "next/image";

// Icons
import { IoCloseOutline } from "react-icons/io5";

import css from "./MessageNoCampers.module.css";

interface MessageNoCampersProps {
  onClear: () => void;
}

export default function MessageNoCampers({ onClear }: MessageNoCampersProps) {
  return (
    <div className={css.messageContainer}>
      <div className={css.imageWrapper}>
        <Image
          src="/images/NoFoundCampers.webp"
          alt="No campers found"
          width={488}
          height={463}
          loading="eager"
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
        <button type="button" className={css.clearButton} onClick={onClear}>
          <IoCloseOutline className={css.closeButtonIcon} />
          Clear filters
        </button>
      </div>
    </div>
  );
}
