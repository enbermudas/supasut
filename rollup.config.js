const typescript = require("rollup-plugin-typescript2");
const pkg = require("./package.json");

module.exports = {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "commonjs",
      exports: "named",
      sourcemap: false,
    },
  ],
  plugins: [
    typescript({
      clean: true,
      tsconfig: "./tsconfig.json",
    }),
  ],
};
