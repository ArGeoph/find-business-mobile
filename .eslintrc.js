module.exports = {
    "rules": {
        // enable additional rules
        "linebreak-style": ["error", "unix"],
        "quotes":  ['error', "single"],
        "semi": ["error", "always"],

        // override default options for rules from base configurations
        "comma-dangle": ["error", "always-multiline"],

        // disable rules from base configurations
        "no-console": "off",
    }
};
