import AsyncStorage from "@react-native-community/async-storage";

export class GenericStore<T> {
  name: string;
  defaultStore: T;

  constructor(name: string, defaultStore: T) {
    this.name = name;
    this.defaultStore = defaultStore;
  }

  public async get(): Promise<T> {
    try {
      let value: string | null = null;

      value = await AsyncStorage.getItem(this.name);

      if (value) {
        return JSON.parse(value);
      }

      return this.defaultStore;
    } catch (e) {
      console.error(e);
      return this.defaultStore;
    }
  }

  public async save(storeContent: T) {
    await AsyncStorage.setItem(this.name, JSON.stringify(storeContent));
  }
}
