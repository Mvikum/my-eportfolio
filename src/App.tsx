import "./App.css";

import AppRoutes from "./routes";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <AppRoutes />
    </div>
  );
}
