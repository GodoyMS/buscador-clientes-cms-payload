import type { Access } from "payload/config";


export const isAdminOrEditor: Access = ({ req: { user } }) => {
  if (!user) return false;

  if (user.roladmin && user.roladmin === "admin") {
    return true;
  } else if(user.roladmin && user.roladmin === "editor"){
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
