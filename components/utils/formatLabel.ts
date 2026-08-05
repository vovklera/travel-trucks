// Converts values ("panel_van" -> "Panel van")
export const formatText = (value: string) =>
  value
    .replaceAll("_", " ")
    .replace(/^./, (character) => character.toUpperCase());

// Converts string values into options with label and value
export const createOptions = <T extends string>(values: T[]) => {
  return values.map((value) => ({
    label: formatText(value),
    value,
  }));
};

// Removes all letters from a string
export const removeLetters = (value: string) => value.replace(/[a-z]/gi, "");

// Swaps location parts ("Ukraine, Lviv" -> "Lviv, Ukraine")
export const formatLocation = (location: string) => {
  const [contry, city] = location.split(", ");
  return `${city}, ${contry}`;
};
