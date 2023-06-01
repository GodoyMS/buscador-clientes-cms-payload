import { FieldAccess } from "payload/types";
export const isAdminFieldAccess: FieldAccess = ({ req: { user } }) => {
  if (!user) return false;

  if (user.rolAdmin && user.rolAdmin==="admin") {
    return true;
  } else {
    return false;
  }
};
