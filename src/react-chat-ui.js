/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/src/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
console.log("Working!")

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Missing binding /home/daveguy/Documents/Practice/react-chat-ui/node_modules/node-sass/vendor/linux-x64-57/binding.node\nNode Sass could not find a binding for your current environment: Linux 64-bit with Node.js 8.x\n\nFound bindings for the following environments:\n  - Linux 64-bit with Node.js 7.x\n\nThis usually happens because your environment has changed since running `npm install`.\nRun `npm rebuild node-sass --force` to build the binding for your current environment.\n    at module.exports (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/node-sass/lib/binding.js:15:13)\n    at Object.<anonymous> (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (module.js:569:30)\n    at Object.Module._extensions..js (module.js:580:10)\n    at Module.load (module.js:503:32)\n    at tryModuleLoad (module.js:466:12)\n    at Function.Module._load (module.js:458:3)\n    at Module.require (module.js:513:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (module.js:569:30)\n    at Object.Module._extensions..js (module.js:580:10)\n    at Module.load (module.js:503:32)\n    at tryModuleLoad (module.js:466:12)\n    at Function.Module._load (module.js:458:3)\n    at Module.require (module.js:513:17)\n    at require (internal/module.js:11:18)\n    at loadLoader (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/loadLoader.js:13:17)\n    at iteratePitchingLoaders (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/webpack/lib/NormalModule.js:275:15)\n    at runLoaders (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/LoaderRunner.js:170:18\n    at loadLoader (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/loadLoader.js:27:11)\n    at iteratePitchingLoaders (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/webpack/lib/NormalModule.js:275:15)\n    at Compilation.buildModule (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/webpack/lib/Compilation.js:151:10)\n    at moduleFactory.create (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/webpack/lib/Compilation.js:454:10)\n    at factory (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/webpack/lib/NormalModuleFactory.js:243:5)\n    at applyPluginsAsyncWaterfall (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/webpack/lib/NormalModuleFactory.js:94:13)\n    at /home/daveguy/Documents/Practice/react-chat-ui/node_modules/tapable/lib/Tapable.js:268:11\n    at NormalModuleFactory.params.normalModuleFactory.plugin (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/webpack/lib/CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/tapable/lib/Tapable.js:272:13)\n    at resolver (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/webpack/lib/NormalModuleFactory.js:69:10)\n    at process.nextTick (/home/daveguy/Documents/Practice/react-chat-ui/node_modules/webpack/lib/NormalModuleFactory.js:196:7)\n    at _combinedTickCallback (internal/process/next_tick.js:95:7)\n    at process._tickCallback (internal/process/next_tick.js:161:9)");

/***/ })
/******/ ]);