// export type Form = "alcove" | "panel_van" | "integrated" | "semi_integrated";

// export type Transmission = "automatic" | "manual";

// export type Engine = "diesel" | "petrol" | "hybrid" | "electric";
export interface Filter {
  forms: string[];
  transmissions: string[];
  engines: string[];
}
