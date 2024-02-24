import React from "react";
import Typography from "../../components/Typography";
import Im from "../../assets/images/freshui.png";
import { Link, Outlet } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h1>Landing Page</h1>
      <Link to="/auth">Auth</Link>
      <Outlet />
      <p className="text-red-500 text-2xl font-poppins">Testing tailwind</p>
      <Typography variant="h2">Hello React</Typography>
      <img src={Im} />
    </div>
  );
}
