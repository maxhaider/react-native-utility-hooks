import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect } from "react";
import { BackHandler } from "react-native";

export const useAndroidBackHandler = (customCallback?: Function) => {
  const navigator = useNavigation();

  const callback = useCallback(() => {
    if (customCallback) {
      customCallback();
      return true;
    }

    if (navigator.canGoBack()) {
      navigator.goBack();
      return true;
    }
    return false;
  }, [navigator]);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", callback);

    return () => BackHandler.removeEventListener("hardwareBackPress", callback);
  }, [callback]);

  return callback;
};
