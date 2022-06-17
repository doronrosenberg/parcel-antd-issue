## Parcel/AntD MenuItem Issue

Using latest versions of dependencies, Parcel production build with the AntD (React component library) Menu component 
results in this error when loaded in a browser (files located in *dist* directory):

```
react-dom.production.min.js:189 TypeError: Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.
    at F (nonIterableSpread.js:2:9)
    at R (toConsumableArray.js:6:95)
    at PathContext.js:13:47
    at Object.useMemo (react-dom.production.min.js:184:189)
    at Object.T (react.production.min.js:25:208)
    at yt (PathContext.js:12:10)
    at Nt (MenuItem.js:204:26)
    at Li (react-dom.production.min.js:167:137)
    at Ru (react-dom.production.min.js:290:337)
    at Nc (react-dom.production.min.js:280:389)
```

This issue is not present in Parcel development mode.  I also tried using Webpack and it did not result in this 
(webpack config is included).