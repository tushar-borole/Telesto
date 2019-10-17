const YAML = require("yamljs");
const ymlToObject = YAML.load("setting.yml");

module.exports = ymlToObject;
