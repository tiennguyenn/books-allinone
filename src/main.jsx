import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Counter from "./Counter.jsx";
import ShowClock from "./ShowClock.jsx";
import ClockContainer from "./ClockContainer.jsx";
import GitHubRepos from "./GitHubRepos.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GitHubRepos username="otocat" />
  </StrictMode>
);
