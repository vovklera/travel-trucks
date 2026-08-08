export interface Camper {
  id: string;
  name: string;
  price: number;

  rating: number;
  totalReviews: number;

  location: string;
  description: string;

  form: string;
  transmission: string;
  engine: string;
  amenities: string[];
  gallery: GalleryImage[];

  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;

  coverImage: string;
}

export interface VehicleSpec {
  label: string;
  value: string;
}

export interface GalleryImage {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}

export interface CamperReviews {
  id: string;
  camperId: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}
