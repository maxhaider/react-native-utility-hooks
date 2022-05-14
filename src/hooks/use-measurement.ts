import { useCallback, useState } from "react";
import { LayoutChangeEvent } from "react-native";

interface IUseMeasurementProps {
  height?: number;
  width?: number;
}

export const useMeasurement = (props?: IUseMeasurementProps) => {
  const [width, setWidth] = useState<number>(props?.width || 0);
  const [height, setHeight] = useState<number>(props?.height || 0);

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const { width: _width, height: _height } = event.nativeEvent.layout;
      setWidth(_width);
      setHeight(_height);
    },
    [setWidth, setHeight]
  );

  return {
    onLayout,
    height,
    width,
  };
};
