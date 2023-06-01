import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../AccesControl/isAdmin';

const Trabajadores: CollectionConfig = {
  slug: 'trabajadores',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
    create:isAdmin,
    delete:isAdmin,
    update:isAdmin
  },
  fields: [
    {
      name:"nombres",
      type:"text"
    }
    // Email added by default
    // Add more fields as needed
  ],
};

export default Trabajadores;