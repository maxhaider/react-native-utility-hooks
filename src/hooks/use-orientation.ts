import { useMemo } from "react";
import { StyleProp } from "react-native";
import { Orientation } from "../types/orientation";

interface IOrientationOptions {
  style?: StyleProp<any>;
  defaultOrientation?: Orientation;
}

export const useOrientation = (
  orientation: Orientation,
  options: IOrientationOptions = {
    style: {},
    defaultOrientation: "up",
  }
) =>
  useMemo(() => {
    const { style, defaultOrientation } = options;
    const transform = style?.transform || [];

    if (orientation === defaultOrientation) {
      return style;
    }

    let defaultRotation = 0;

    switch (defaultOrientation) {
      case "up":
        break;
      case "left":
        defaultRotation = 90;
        break;
      case "right":
        defaultRotation = -90;
        break;
      case "down":
        defaultRotation = -180;
        break;
    }

    switch (orientation) {
      case "up":
        transform.push({ rotate: `${defaultRotation}deg` });
        break;
      case "left":
        transform.push({ rotate: `${-90 + defaultRotation}deg` });
        break;
      case "right":
        transform.push({ rotate: `${90 + defaultRotation}deg` });
        break;
      case "down":
        transform.push({ rotate: `${180 + defaultRotation}deg` });
        break;
      default:
        return style;
    }

    return {
      ...style,
      transform,
    };
  }, [orientation, options]);
