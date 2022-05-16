# react-native-utility-hooks

Simple hooks for react native

## General Hooks

### useStore
**Accesses Async Storage**
This Hook is designed to work with multiple Async "Stores". 

##### Usage
```
const { store, changeStore, storeLoaded } = useStore<IStoreType>("store-name");
```

It is advised that you use and enum with this hook to more easily manage multiple different stores.

```
enum STORE {
    APP_SETTINGS = "APP_SETTINGS",
    USER_SETTINGS = 'USER_SETTINGS'
}

interface IAppSettingsStore {
    appOpenCount: number;
}

const { store, changeStore, storeLoaded } = useStore<IAppSettingsStore>(STORE.APP_SETTINGS);
```

### useMeasurement
**Measures UI Components**
The measurement only works if the component you'd like to measure is currently rendered, so it won't work on the first render cycle of your component.

##### Usage

```
const { onLayout, width, height } = useMeasurement();


return <>
    <View onLayout={onLayout}>
        <Text>Hooks make life a lot easier!</Text>
        <Button />
    </View>
<>
```

### useOrientation
**Adds correct transform value to styles**
This hook is very useful if you use svg icon components

##### Usage

```
export const ChevronIcon: FunctionComponent<IIconProps> = (props) => {
  const { orientation, style } = props;

  const svgStyle = useOrientation(orientation, {style});

  return (
    <Svg viewBox="0 0 1000 1000" style={svgStyle} {...rest}>
      <Path ... />
    </Svg>
  );
};
```

## Android Hooks
### useAndroidBackHandler
**Adds go back functionality to hardwareBackPress Event**
Can also be used with a custom callback
Returns goBack (or custom) callback

##### Usage
```
const goBack = useAndroidBackHandler();

return <TouchableOpacity onPress={goBack}>...</TouchableOpacity>
```