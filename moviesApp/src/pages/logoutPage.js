import { useAuth } from "../contexts/authContext"; 
import { Link } from "react-router-dom";

export default function LogoutPage() {
  const { logout } = useAuth();
  logout();
  return (
    <>
      <h1> You have successfully been logged out! </h1>
      <h2> Come back soon! <Link to="/">Log in</Link> </h2>
    </>
  );
}