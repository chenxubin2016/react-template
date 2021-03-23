# [React-template](https://github.com/chenxubin2016/react-template.git)



## 项目启动/打包/测试/释放webpack配置

```json
{
  "scripts": {
    "dev": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  },
}
```

> npm run dev
>
> npm run  build
>
> npm run  test
>
> npm run  eject



# 内置模块

**axios**

**router**

**redux**

**sass**

**@craco/craco**

##### craco.fonfig.js不释放webpack的情况下配置webpack

```js
const path = require('path')
const pathResolve = pathUrl => path.join(__dirname, pathUrl)
const sassResourcesLoader = require('craco-sass-resources-loader');
module.exports = {
  reactScriptsVersion: "react-scripts",
  webpack: {
    // 路径别名设置
    alias: {
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@components': pathResolve('src/components'),
      '@store': pathResolve('src/store')
    }
  },
  plugins: [
    // 全局导入scss变量
    {
      plugin: sassResourcesLoader,
      options: {
        resources: [
          './src/assets/scss/public.scss',
        ],
      },
    },
  ],
}

```









