"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/has-bigints";
exports.ids = ["vendor-chunks/has-bigints"];
exports.modules = {

/***/ "(ssr)/./node_modules/has-bigints/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-bigints/index.js ***!
  \*******************************************/
/***/ ((module) => {

eval("\n\nvar $BigInt = typeof BigInt !== 'undefined' && BigInt;\n\nmodule.exports = function hasNativeBigInts() {\n\treturn typeof $BigInt === 'function'\n\t\t&& typeof BigInt === 'function'\n\t\t&& typeof $BigInt(42) === 'bigint' // eslint-disable-line no-magic-numbers\n\t\t&& typeof BigInt(42) === 'bigint'; // eslint-disable-line no-magic-numbers\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGFzLWJpZ2ludHMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvaGFzLWJpZ2ludHMvaW5kZXguanM/YTVhNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciAkQmlnSW50ID0gdHlwZW9mIEJpZ0ludCAhPT0gJ3VuZGVmaW5lZCcgJiYgQmlnSW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhhc05hdGl2ZUJpZ0ludHMoKSB7XG5cdHJldHVybiB0eXBlb2YgJEJpZ0ludCA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCYmIHR5cGVvZiBCaWdJbnQgPT09ICdmdW5jdGlvbidcblx0XHQmJiB0eXBlb2YgJEJpZ0ludCg0MikgPT09ICdiaWdpbnQnIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xuXHRcdCYmIHR5cGVvZiBCaWdJbnQoNDIpID09PSAnYmlnaW50JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1tYWdpYy1udW1iZXJzXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/has-bigints/index.js\n");

/***/ })

};
;