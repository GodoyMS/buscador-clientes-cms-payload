import type { Access } from "payload/config";


export const isAdmin: Access = ({ req: { user } }) => {
  if (!user) return false;

  if (user.roladmin && user.roladmin === "admin") {
    return true;
  } 
  // else if (user.applicantRole && user.applicantRole==="applicant") {
    
  //   return{
  //     id:{
  //       equals:user.id
  //     }
  //   }
  // }
  
  else {
    return false
  }

};
