module.exports = {
    extends: ["prettier"],
    plugins: ["import", "prettier"],
    rules: {
        "prettier/prettier": "error",

        // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                mjs: "never",
                jsx: "never",
                ts: "never",
                tsx: "never"
            }
        ]
    }
}
