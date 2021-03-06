import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs"

export default {
    input: "./src/index.js",
    output: {
        file: "index.js",
        format: "umd"
    },
    plugins: [
        resolve(),
        babel({
            exclude: "node_modules/**",
            presets: ["es2015-rollup"]
        }),
        commonjs({
            namedExports: {}
        })
    ],
    name: "juex"
};
