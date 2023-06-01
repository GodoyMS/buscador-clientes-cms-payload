import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../AccesControl/isAdmin';
import { isAdminOrEditorSelf } from '../AccesControl/isAdminorEditorSelf';
import { isAdminFieldAccess } from '../AccesControl/FieldLevel/isAdminFieldLevel';
import { isSelf } from '../AccesControl/isSelf';

const Users: CollectionConfig = {
  slug: 'Admins',
  auth: true,
  admin: {
    useAsTitle: 'nombres',
    
  },
  access: {
    read:()=>true,
    create:()=>true,
    update:()=>true,
    delete:()=>true
    

  },
  fields: [
    {name:"nombres",
    type:"text",},
    {
      name: "roladmin",
      // Save this field to JWT so we can use from `req.user`
      saveToJWT: true,
      type: "text",
 
      defaultValue:"admin",
      access: {
        // Only admins can create or update a value for this field
        create: () => true,
        update: ()=>false,
        read:()=>true,
      }
    },
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;