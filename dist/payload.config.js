"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("payload/config");
var path_1 = __importDefault(require("path"));
var Users_1 = __importDefault(require("./collections/Users"));
var Registros_1 = __importDefault(require("./collections/Registros"));
var Trabajadores_1 = __importDefault(require("./collections/Trabajadores"));
exports.default = (0, config_1.buildConfig)({
    serverURL: process.env.SERVER_URL,
    admin: {
        user: Users_1.default.slug,
    },
    collections: [
        Registros_1.default,
        Users_1.default,
        Trabajadores_1.default,
    ],
    typescript: {
        outputFile: path_1.default.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path_1.default.resolve(__dirname, 'generated-schema.graphql'),
    },
});
