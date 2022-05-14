import { useMemo } from "react";
import { StyleProp } from "react-native";
import { Orientation } from "../types/orientation";

export const useOrientation = (
  orientation: Orientation,
  style: StyleProp<any> = {}
) =>
  useMemo(() => {
    const transform = style?.transform || [];

    switch (orientation) {
      case "up":
        return style;
      case "left":
        transform.push({ rotate: "-90deg" });
        return {
          ...style,
          transform,
        };
      case "right":
        transform.push({ rotate: "90deg" });
        return {
          ...style,
          transform,
        };
      case "down":
        transform.push({ rotate: "-180deg" });
        return {
          ...style,
          transform,
        };
      default:
        return style;
    }
  }, [orientation, style]);
