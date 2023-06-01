"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Trabajadores = {
    slug: 'trabajadores',
    auth: true,
    admin: {
        useAsTitle: 'email',
    },
    access: {
        read: function () { return true; },
    },
    fields: [
        {
            name: "name",
            type: "text"
        }
        // Email added by default
        // Add more fields as needed
    ],
};
exports.default = Trabajadores;
