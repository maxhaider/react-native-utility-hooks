import React, { FunctionComponent, useCallback, useState } from "react";
import { Button, Text, View } from "react-native";
import { useMeasurement } from "../src";

interface IMeasurementComponentProps {}

export const MeasurementComponent: FunctionComponent<
  IMeasurementComponentProps
> = (props) => {
  const { height, width, onLayout } = useMeasurement();

  return (
    <View>
      <View
        style={{ height: 40, width: 20 }}
        onLayout={onLayout}
        testID="measuredView"
      />
      <View style={{ height, width }} testID="resultView" />
    </View>
  );
};
