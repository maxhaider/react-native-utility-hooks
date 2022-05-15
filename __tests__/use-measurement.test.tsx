import React from "react";
import { MeasurementComponent } from "../__test-components__/measurement";
import { render, cleanup, fireEvent, act } from "@testing-library/react-native";

afterEach(cleanup);

describe("useMeasurement", () => {
  test("test height", (done) => {
    const rendered = render(<MeasurementComponent />);

    let resultView = rendered.getByTestId("resultView");
    let measuredView = rendered.getByTestId("measuredView");

    expect(resultView.props.style.height).toBe(0);
    expect(measuredView.props.style.height).toBe(40);

    fireEvent(measuredView, "layout", {
      nativeEvent: {
        layout: measuredView.props.style,
      },
    });

    rendered.rerender(<MeasurementComponent />);
    resultView = rendered.getByTestId("resultView");
    expect(resultView.props.style.height).toBe(40);

    done();
  });

  test("test width", (done) => {
    const rendered = render(<MeasurementComponent />);

    let resultView = rendered.getByTestId("resultView");
    let measuredView = rendered.getByTestId("measuredView");

    expect(resultView.props.style.width).toBe(0);
    expect(measuredView.props.style.width).toBe(20);

    fireEvent(measuredView, "layout", {
      nativeEvent: {
        layout: measuredView.props.style,
      },
    });

    rendered.rerender(<MeasurementComponent />);
    resultView = rendered.getByTestId("resultView");
    expect(resultView.props.style.width).toBe(20);

    done();
  });
});
