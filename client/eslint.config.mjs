import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import featureSliced from "eslint-plugin-feature-sliced";

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    plugins: {
      "feature-sliced": featureSliced,
    },

    rules: {
      "feature-sliced/path-checker": "error",
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);
export default eslintConfig;
