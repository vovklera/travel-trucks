"use client";

import { useState } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";

// import required modules
import { FreeMode, Thumbs } from "swiper/modules";
import { GalleryImage } from "@/types/camper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import css from "./CamperGallery.module.css";

interface CamperGalleryProps {
  gallery: GalleryImage[];
  camperName: string;
}

export default function CamperGallery({
  gallery,
  camperName,
}: CamperGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className={css.mainSwiper}
      >
        {gallery.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.original}
              alt={`${camperName} photo`}
              width={640}
              height={505}
              className={css.mainImage}
              loading="eager"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={32}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className={css.thumbsSwiper}
      >
        {gallery.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.thumb}
              alt={`${camperName} photo`}
              width={140}
              height={145}
              className={css.thumbsImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
