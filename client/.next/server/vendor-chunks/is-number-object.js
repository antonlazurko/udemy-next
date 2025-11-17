"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-number-object";
exports.ids = ["vendor-chunks/is-number-object"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-number-object/index.js":
/*!************************************************!*\
  !*** ./node_modules/is-number-object/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar numToStr = Number.prototype.toString;\nvar tryNumberObject = function tryNumberObject(value) {\n\ttry {\n\t\tnumToStr.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\nvar toStr = Object.prototype.toString;\nvar numClass = '[object Number]';\nvar hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ \"(ssr)/./node_modules/has-tostringtag/shams.js\")();\n\nmodule.exports = function isNumberObject(value) {\n\tif (typeof value === 'number') {\n\t\treturn true;\n\t}\n\tif (typeof value !== 'object') {\n\t\treturn false;\n\t}\n\treturn hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtbnVtYmVyLW9iamVjdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQU8sQ0FBQyw0RUFBdUI7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9pcy1udW1iZXItb2JqZWN0L2luZGV4LmpzP2I2NGMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbnVtVG9TdHIgPSBOdW1iZXIucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHRyeU51bWJlck9iamVjdCA9IGZ1bmN0aW9uIHRyeU51bWJlck9iamVjdCh2YWx1ZSkge1xuXHR0cnkge1xuXHRcdG51bVRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBudW1DbGFzcyA9ICdbb2JqZWN0IE51bWJlcl0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gcmVxdWlyZSgnaGFzLXRvc3RyaW5ndGFnL3NoYW1zJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc051bWJlck9iamVjdCh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiBoYXNUb1N0cmluZ1RhZyA/IHRyeU51bWJlck9iamVjdCh2YWx1ZSkgOiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gbnVtQ2xhc3M7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-number-object/index.js\n");

/***/ })

};
;