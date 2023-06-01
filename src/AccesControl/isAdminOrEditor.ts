import type { Access } from "payload/config";


export const isAdminOrEditor: Access = ({ req: { user } }) => {
  if (!user) return false;

  if (user.rolAdmin && user.rolAdmin.some((role) => role === "admin")) {
    return true;
  } else if(user.rolAdmin && user.rolAdmin.som((role)=>role==="editor")){
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
