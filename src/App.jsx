import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import userData from "./userData.json";
// import { Profile } from "./components/Profile/Profile";
import "./App.css";

const user = JSON.parse(userData);
export default function App() {
  console.log(user);
  // return {
  //   // < Profile />;
  // };
}
