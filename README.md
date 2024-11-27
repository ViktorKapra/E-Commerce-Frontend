# E-Commerce front end part

E-commerce for selling video games.

## How to run project

1. Open project in VSCode (for example)
2. Run command `npm i` in terminal (console) for installing all required packages (Node.js is required: <https://nodejs.org/en/>)
3. For building project you can use the following commands:

- `npm run build-prod` - building production version (minimized and optimized). The project will be builded into `build` folder. You can change destination in `webpack.common.js (line 19)`
- `npm run build-dev` - building development version
- `npm run serve` - building development hot-reloaded version with webpack-dev-server

## This project was created using the following template

- <https://github.com/Yegorich555/webpack-must-have>