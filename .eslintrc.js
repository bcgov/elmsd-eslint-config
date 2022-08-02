const prettierConfig = require("./.prettierrc")

module.exports = {
    root: true,
    extends: require.resolve("./index"),
    rules: {
        "prettier/prettier": ["error", prettierConfig]
    }
}
