# react-native-image-resource-generator

[![npm-version](https://img.shields.io/npm/v/react-native-image-resource-generator)](https://www.npmjs.com/package/react-native-image-resource-generator)
[![npm-downloads](https://img.shields.io/npm/dt/react-native-image-resource-generator)](https://www.npmjs.com/package/react-native-image-resource-generator)

[![GitHub Followers](https://img.shields.io/github/followers/svbutko?label=Follow%20%40svbutko&style=social)](https://github.com/svbutko)
[![Twitter Follow](https://img.shields.io/twitter/follow/svbutko?label=Follow%20%40svbutko&style=social)](https://twitter.com/svbutko)


Generate code-friendly image URI source constants.
To learn about use cases and what issues it solves check [this blog post](https://dev.to/svbutko/react-native-image-resource-generator-m14).

## Quick start

### Installation

#### yarn

```sh
yarn add -D react-native-image-resource-generator
```

#### npm

```sh
npm install --save-dev react-native-image-resource-generator
```

### Usage

1. Create a folder and put all of your images there (_sub-folders are supported too_). Example:
```
project
│   package.json
│   src  
│
└───resources
│   │   fonts
│   │   settings
│   │
│   └───images
│       │   arrow_down.png
│       │   arrow_down@2x.png
│       │   arrow_down@3x.png
│       │   arrow_up.png
│       │   ...
```
2. Add script to your `package.json` scripts or type into terminal:
   * JavaScript: ```img-res-gen --dir=resources/images --out=src/common/ImageResources.js```
   * TypeScript ```img-res-gen --dir=resources/images --out=src/common/ImageResources.g.ts --ts```
3. The result of the previous command will create a file with static image URI sources, which will look something similar to this:
```typescript
/* eslint:disable */
/* tslint:disable */
import {ImageURISource} from "react-native";

export class ImageResources {
    static readonly account: ImageURISource = require("../../resources/images/account.png");
    static readonly arrow_down: ImageURISource = require("../../resources/images/arrow_down.png");
    static readonly arrow_up: ImageURISource = require("../../resources/images/arrow_up.png");
    static readonly avatar: ImageURISource = require("../../resources/images/avatar.png");
    static readonly back: ImageURISource = require("../../resources/images/back.png");
    static readonly bank: ImageURISource = require("../../resources/images/bank.png");
    static readonly bell: ImageURISource = require("../../resources/images/bell.png");
}
```
4. After this use it anywhere you need:
```typescript jsx
<Image source={ImageResources.account} style={styles.icon} />
```

If you added or removed images, simply re-run the script to regenerate the file.

### Options

| Option        | Description                                                                 | Required | Example
|---------------|-----------------------------------------------------------------------------|----------|---------------------------------------
| dir           | Relative directory path with images                                         | `True`   | `img-res-gen --dir=resources/images`
| out           | Output file path                                                            | `True`   | `img-res-gen --out=src/common/ImageResources.g.ts`
| read          | Read directory path, adds additional path to a file's output required path  | `False`  | `img-res-gen --read=build/src`
| ts            | Should the output file be generated as a TypeScript file                    | `False`  | `img-res-gen --ts`



