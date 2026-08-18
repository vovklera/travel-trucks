import { FaStar } from "react-icons/fa";

import { CamperReviews } from "@/types/camper";
import BookingForm from "../../BookingForm/BookingForm/BookingForm";

import css from "./ReviewsSection.module.css";

interface ReviewsSectionProps {
  reviews: CamperReviews[];
  camperId: string;
}

export default function ReviewsSection({
  reviews,
  camperId,
}: ReviewsSectionProps) {
  return (
    <div className={css.reviewsWrapper}>
      <h2 className={css.reviewsTitle}>Reviews</h2>
      <div className={css.reviewsSection}>
        <ul className={css.reviewsList}>
          {reviews.map((review) => (
            <li key={review.id} className={css.reviewItem}>
              <div className={css.reviewerInfo}>
                <div className={css.reviewerAvatar}>
                  {review.reviewer_name.charAt(0).toUpperCase()}
                </div>
                <div className={css.reviewerRate}>
                  <p>{review.reviewer_name}</p>
                  <div className={css.rating}>
                    {Array.from({ length: 5 }, (_, index) => (
                      <FaStar
                        key={index}
                        className={
                          index < review.reviewer_rating
                            ? css.fullStar
                            : css.emptyStar
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className={css.reviewerComment}>{review.comment}</p>
            </li>
          ))}
        </ul>

        <div>
          <BookingForm camperId={camperId} />
        </div>
      </div>
    </div>
  );
}
