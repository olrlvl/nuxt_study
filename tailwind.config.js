/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
        "./node_modules/preline/preline.js",
    ],
    theme: {
        extend: {
            width: {
                max: "1140px",
                middle: "980px",
                mobile: "360px",
                4.5: "1.125rem",
                13: "3.75rem",
            },
            height: {
                4.5: "1.125rem",
                13: "3.75rem",
            },
            margin: {
                4.5: "1.125rem",
            },
            padding: {
                4.5: "1.125rem",
            },
            colors: {
                main: "#EF5A27",
                sub: "#EC683D",
                sub02: "#DD530E",
                aucGreen: "#36B24A",
                aucGreemMain: "#36B24A",
                gray: {
                    50: "#F6F6F6",
                    100: "#E8E8E8",
                    300: "#A19E9C",
                    500: "#56504E",
                    700: "#2F2C2A",
                },
                red: {
                    100: "#FB4635",
                },
                consult: {
                    wait: "#E8E8E8",
                    ing: "#007DF1",
                    done: "#56504E",
                    complete: "#36B24A",
                    play: "#DFA100",
                    finish: "#E64040",
                },

                produce: {
                    wait: "#56504E",
                    cancel: "#E54040",
                    ing: "#007DF1",
                    done: "#36B24A",
                },
            },

            boxShadow: {
                "bar-default": "0px 0px 1px rgba(39, 28, 15, 0.02), 0px 2px 3px rgba(39, 28, 15, 0.05)",
                "modal-default": "0px 0px 1px rgba(47, 44, 42, 0.04), 0px 7px 16px rgba(47, 44, 42, 0.08)",
                "business-card": "0px 0px 1px rgba(109, 80, 4, 0.04), 0px 7px 16px rgba(109, 80, 4, 0.06)",
                "option-bottom": "0px 0px 2px rgba(47, 44, 42, 0.01), 0px -2px 10px rgba(47, 44, 42, 0.03), 0px -4px 16px rgba(47, 44, 42, 0.05)",
                "select-box": "0px 7px 16px 0px rgba(47, 44, 42, 0.08), 0px 0px 1px 0px rgba(47, 44, 42, 0.04)",
            },
            fontSize: {
                mainTitle: [
                    "2.00rem",
                    {
                        letterSpacing: "0.01em",
                        lineHeight: "43px",
                    },
                ],
                heading01: [
                    "1.75rem",
                    {
                        letterSpacing: "-0.03125em",
                        lineHeight: "2.5rem",
                    },
                ],
                heading02: [
                    "1.5rem",
                    {
                        letterSpacing: "-0.03125em",
                        lineHeight: "2.125rem",
                    },
                ],
                paraTitle: [
                    "1.125rem",
                    {
                        letterSpacing: "-0.015625em",
                        lineHeight: "1.625rem",
                    },
                ],
                itemText: [
                    "1rem",
                    {
                        lineHeight: "1.5rem",
                    },
                ],
                paraText: [
                    "0.875rem",
                    {
                        lineHeight: "1.313rem",
                    },
                ],
                disableText: [
                    "0.75rem",
                    {
                        lineHeight: "1.125rem",
                        letterSpacing: "0.015625em",
                    },
                ],
            },
            zIndex: {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
            },
            transitionProperty: {
                maxHeight: "max-height",
                height: "height",
                spacing: "margin, padding",
            },
        },
    },
    plugins: [require("preline/plugin")],
};
