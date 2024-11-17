import NavigateBar from "./components/NavigateBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#006666] text-white font-mono">
      <header>
        <div className="container mx-auto p-4">
          <Header />
          <NavigateBar />
        </div>
      </header>

      <div className="container mx-auto p-4 flex-grow">
        <Outlet />
      </div>

      <footer>
        <div className="container mx-auto p-4">
          <Footer />
        </div>
      </footer>
    </div>
  );
}