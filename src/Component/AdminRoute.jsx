import { Navigate } from "react-router-dom";
// import { ADMIN_EMAIL } from "../constants";

export default function AdminRoute({ user, children }) {
    const ADMIN_EMAIL = "b4m7t@example.com";
  if (!user || user.email !== ADMIN_EMAIL) {
    return <Navigate to="/" />;
  }
  return children;
}
