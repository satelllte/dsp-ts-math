/**
 * Maps "x" value in [0..1] range onto [min..max] range linearly
 * @param x - Value in [0..1] range to map
 * @param min - Minimum value of the range to map onto
 * @param max - Maximum value of the range to map onto
 * @returns Mapped result in [min..max] range
 */
export const mapFrom01Linear = (x: number, min: number, max: number): number =>
  (max - min) * x + min;

/**
 * Maps "x" value in [min..max] range onto [0..1] range linearly
 * @param x - Value in [min..max] range to map
 * @param min - Minimum value of the range to map from
 * @param max - Maximum value of the range to map from
 * @returns Mapped result in [0..1] range
 */
export const mapTo01Linear = (x: number, min: number, max: number): number =>
  (x - min) / (max - min);
