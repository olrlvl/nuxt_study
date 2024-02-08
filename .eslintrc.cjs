module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/typescript/recommended", "@vue/prettier", "@vue/prettier/@typescript-eslint"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "vue"],
    rules: {
        "vue/no-multiple-template-root": "off",
    },
    settings: {
        vue: {
            scriptSetup: true,
        },
    },
};
