import React from "react";
import "./App.css";
import Typography from "./components/Typography";
import Im from "./assets/images/freshui.png";

export default function App() {
  return (
    <div>
      <p className="text-red-500 text-2xl">Testing tailwind</p>
      <Typography variant="h2">Hello React</Typography>
      <img src={Im} />
    </div>
  );
}
