"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Registros = {
    slug: 'registros',
    admin: {
        useAsTitle: 'someField',
    },
    access: { create: function () { return true; }, read: function () { return true; }, update: function () { return true; }, delete: function () { return true; } },
    fields: [
        {
            name: 'tiempo',
            type: 'date',
        },
        {
            name: 'autor',
            type: 'relationship',
            relationTo: 'trabajadores',
        },
        {
            name: 'tipoDocumento',
            type: 'text',
        },
        {
            name: 'numeroDocumento',
            type: 'text',
        }
    ],
};
exports.default = Registros;
