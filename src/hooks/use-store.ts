import { useCallback, useEffect, useMemo, useState } from "react";
import { GenericStore } from "../models/generic-store";

export const useStore = <T>(storeType: string, defaultStore: T) => {
  const [store, setStore] = useState<T>(defaultStore);
  const [storeLoaded, setStoreLoaded] = useState<boolean>(false);
  const Store = useMemo(
    () => new GenericStore<T>(storeType, defaultStore),
    [storeType]
  );

  useEffect(() => {
    Store.get()
      .then((loadedSettings) => {
        setStore({
          ...defaultStore,
          ...loadedSettings,
        });
        setStoreLoaded(true);
      })
      .catch(console.error);
  }, [setStore, storeType, setStoreLoaded, Store]);

  const changeStore = useCallback(
    (partial: Partial<T>) => {
      try {
        const newStore = { ...(store as Object), ...partial } as T;
        Store.save(newStore);
        setStore(newStore);
      } catch (error) {
        console.log(error);
      }
    },
    [store, storeType]
  );

  return {
    store,
    changeStore,
    storeLoaded,
  };
};
