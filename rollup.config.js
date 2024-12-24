import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";
import { terser } from "rollup-plugin-terser"

export default {
    input: "src/index.ts",
    output: [
        {
            file: "lib/index.cjs",
            format: "cjs"
        },
        {
            file: "lib/index.esm.js",
            format: "esm"
        }
    ],
    plugins: [
        del({ targets: "lib/*" }),
        typescript({
            tsconfig: "tsconfig.json",
            useTsconfigDeclarationDir: true
        })
    ]
}