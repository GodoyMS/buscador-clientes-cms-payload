import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../AccesControl/isAdmin';
import { isAdminOrEditorSelf } from '../AccesControl/isAdminorEditorSelf';
import { isAdminFieldAccess } from '../AccesControl/FieldLevel/isAdminFieldLevel';

const Users: CollectionConfig = {
  slug: 'Administradores',
  auth: true,
  admin: {
    useAsTitle: 'nombres',
  },
  access: {
    read:isAdminOrEditorSelf,
    create:()=>true,
    update:isAdminOrEditorSelf,
    delete:isAdmin
    

  },
  fields: [
    {name:"nombres",
    type:"text",},
    {
      name: "rolAdmin",
      // Save this field to JWT so we can use from `req.user`
      saveToJWT: true,
      type: "select",
      hasMany: true,
      defaultValue: ["admin"],
      access: {
        // Only admins can create or update a value for this field
        create: () => true,
        update: isAdminFieldAccess,
        read:()=>true,
      },
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "Editor",
          value: "editor",
        },
      ],
    },
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;