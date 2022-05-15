import { renderHook } from "@testing-library/react-hooks/native";
import { useOrientation } from "../src";

describe("useOrientation", () => {
  test("turn upward-facing icon to the left", (done) => {
    const { result } = renderHook(() => useOrientation("left"));
    expect(result.current.transform).toContainEqual({ rotate: "-90deg" });
    done();
  });

  test("turn right-facing icon to the left", (done) => {
    const { result } = renderHook(() =>
      useOrientation("right", { defaultOrientation: "left" })
    );
    expect(result.current.transform).toContainEqual({ rotate: "180deg" });
    done();
  });

  test("turn left-facing icon upwards", (done) => {
    const { result } = renderHook(() =>
      useOrientation("up", { defaultOrientation: "left" })
    );
    expect(result.current.transform).toContainEqual({ rotate: "90deg" });
    done();
  });

  test("turn downward-facing icon to the right", (done) => {
    const { result } = renderHook(() =>
      useOrientation("right", { defaultOrientation: "down" })
    );
    expect(result.current.transform).toContainEqual({ rotate: "-90deg" });
    done();
  });
});
