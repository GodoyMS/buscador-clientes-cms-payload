import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../AccesControl/isAdmin';

const Registros: CollectionConfig = {
  slug: 'registros',
  admin: {
    useAsTitle: 'someField',
  },
  access: {create: () => true, read: () => true, update:isAdmin, delete: isAdmin},
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
}

export default Registros;