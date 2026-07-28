export interface Filter {
  location: string;
  form: FormType | "";
  engine: EngineType | "";
  transmission: TransmissionType | "";
}

export type FormType =
  | "alcove"
  | "panel_van"
  | "integrated"
  | "semi_integrated";

export type EngineType = "diesel" | "petrol" | "hybrid" | "electric";

export type TransmissionType = "automatic" | "manual";
