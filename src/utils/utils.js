export const rangeMap = (value, in_min, in_max, out_min, out_max) =>
    ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;

export const mapToHue = (value, min, max) => rangeMap(value, min, max, 50, 200);
