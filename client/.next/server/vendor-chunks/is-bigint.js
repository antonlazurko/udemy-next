"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-bigint";
exports.ids = ["vendor-chunks/is-bigint"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-bigint/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-bigint/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar hasBigInts = __webpack_require__(/*! has-bigints */ \"(ssr)/./node_modules/has-bigints/index.js\")();\n\nif (hasBigInts) {\n\tvar bigIntValueOf = BigInt.prototype.valueOf;\n\tvar tryBigInt = function tryBigIntObject(value) {\n\t\ttry {\n\t\t\tbigIntValueOf.call(value);\n\t\t\treturn true;\n\t\t} catch (e) {\n\t\t}\n\t\treturn false;\n\t};\n\n\tmodule.exports = function isBigInt(value) {\n\t\tif (\n\t\t\tvalue === null\n\t\t\t|| typeof value === 'undefined'\n\t\t\t|| typeof value === 'boolean'\n\t\t\t|| typeof value === 'string'\n\t\t\t|| typeof value === 'number'\n\t\t\t|| typeof value === 'symbol'\n\t\t\t|| typeof value === 'function'\n\t\t) {\n\t\t\treturn false;\n\t\t}\n\t\tif (typeof value === 'bigint') {\n\t\t\treturn true;\n\t\t}\n\n\t\treturn tryBigInt(value);\n\t};\n} else {\n\tmodule.exports = function isBigInt(value) {\n\t\treturn  false && 0;\n\t};\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtYmlnaW50L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLGlCQUFpQixtQkFBTyxDQUFDLDhEQUFhOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsU0FBUyxNQUFLLElBQUksQ0FBSztBQUN2QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2lzLWJpZ2ludC9pbmRleC5qcz83ZWE5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc0JpZ0ludHMgPSByZXF1aXJlKCdoYXMtYmlnaW50cycpKCk7XG5cbmlmIChoYXNCaWdJbnRzKSB7XG5cdHZhciBiaWdJbnRWYWx1ZU9mID0gQmlnSW50LnByb3RvdHlwZS52YWx1ZU9mO1xuXHR2YXIgdHJ5QmlnSW50ID0gZnVuY3Rpb24gdHJ5QmlnSW50T2JqZWN0KHZhbHVlKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGJpZ0ludFZhbHVlT2YuY2FsbCh2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQmlnSW50KHZhbHVlKSB7XG5cdFx0aWYgKFxuXHRcdFx0dmFsdWUgPT09IG51bGxcblx0XHRcdHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcblx0XHRcdHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG5cdFx0XHR8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG5cdFx0XHR8fCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG5cdFx0XHR8fCB0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnXG5cdFx0XHR8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbidcblx0XHQpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2JpZ2ludCcpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnlCaWdJbnQodmFsdWUpO1xuXHR9O1xufSBlbHNlIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0JpZ0ludCh2YWx1ZSkge1xuXHRcdHJldHVybiBmYWxzZSAmJiB2YWx1ZTtcblx0fTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-bigint/index.js\n");

/***/ })

};
;