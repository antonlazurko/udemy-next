"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-shared-array-buffer";
exports.ids = ["vendor-chunks/is-shared-array-buffer"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-shared-array-buffer/index.js":
/*!******************************************************!*\
  !*** ./node_modules/is-shared-array-buffer/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"(ssr)/./node_modules/call-bind/callBound.js\");\n\nvar $byteLength = callBound('SharedArrayBuffer.prototype.byteLength', true);\n\n/** @type {import('.')} */\nmodule.exports = $byteLength\n\t? function isSharedArrayBuffer(obj) {\n\t\tif (!obj || typeof obj !== 'object') {\n\t\t\treturn false;\n\t\t}\n\t\ttry {\n\t\t\t$byteLength(obj);\n\t\t\treturn true;\n\t\t} catch (e) {\n\t\t\treturn false;\n\t\t}\n\t}\n\t: function isSharedArrayBuffer(obj) { // eslint-disable-line no-unused-vars\n\t\treturn false;\n\t};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtc2hhcmVkLWFycmF5LWJ1ZmZlci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixnQkFBZ0IsbUJBQU8sQ0FBQyx3RUFBcUI7O0FBRTdDOztBQUVBLFdBQVcsYUFBYTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2lzLXNoYXJlZC1hcnJheS1idWZmZXIvaW5kZXguanM/YTc4MiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBjYWxsQm91bmQgPSByZXF1aXJlKCdjYWxsLWJpbmQvY2FsbEJvdW5kJyk7XG5cbnZhciAkYnl0ZUxlbmd0aCA9IGNhbGxCb3VuZCgnU2hhcmVkQXJyYXlCdWZmZXIucHJvdG90eXBlLmJ5dGVMZW5ndGgnLCB0cnVlKTtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4nKX0gKi9cbm1vZHVsZS5leHBvcnRzID0gJGJ5dGVMZW5ndGhcblx0PyBmdW5jdGlvbiBpc1NoYXJlZEFycmF5QnVmZmVyKG9iaikge1xuXHRcdGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHQkYnl0ZUxlbmd0aChvYmopO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHQ6IGZ1bmN0aW9uIGlzU2hhcmVkQXJyYXlCdWZmZXIob2JqKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-shared-array-buffer/index.js\n");

/***/ })

};
;