# nav-1
# 开发
```
yarn global add parcel-bundler
parcel src/index.html
```
## 为了简化parcel build 
# yarn build
```
"scripts":{
    "build":"rm -rf dist && parcel build src/index.html --no-minify --public-url ./"
  }
```
