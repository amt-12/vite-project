const RoleBasedCheck = ({ children, allowedRoles,role }) => {

    
  const userRole = role;

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <h1>You do not have permission to access this page.</h1>;
  }

  if (userRole === "admin") {
    return children;
  }
  return <h1>You do not have permission to access this page.</h1>;
};
export default RoleBasedCheck;
