export type FormType =
  | "alcove"
  | "panel_van"
  | "integrated"
  | "semi_integrated";

export type TransmissionType = "automatic" | "manual";

export type EngineType = "diesel" | "petrol" | "hybrid" | "electric";

export interface Filter {
  location: string;
  form: FormType | "";
  transmission: TransmissionType | "";
  engine: EngineType | "";
}
