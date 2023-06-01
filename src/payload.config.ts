import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Registros from './collections/Registros';
import Trabajadores from './collections/Trabajadores';

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  admin: {
    user: Users.slug,
  },
  collections: [
    Registros,
    Users,
    Trabajadores,
  ],
  csrf: [ // whitelist of domains to allow cookie auth from
  'https://buscador-de-clientes.vercel.app/',
],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
