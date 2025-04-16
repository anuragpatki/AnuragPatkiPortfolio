import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize the application by mounting the App component to the DOM
createRoot(document.getElementById("root")!).render(<App />);
