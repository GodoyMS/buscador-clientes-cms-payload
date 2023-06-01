import type { Access } from "payload/config";


export const isSelf: Access = ({ req: { user } }) => {
  if (!user) return false;

  if(user){
    return{
        id:{
            equals:user.id
        }
    }
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
