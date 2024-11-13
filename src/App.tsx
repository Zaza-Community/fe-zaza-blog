import NavigateBar from "./components/NavigateBar";
import Header from "./components/Header";
import LeftSidebar from "./components/Sidebar/LeftSidebar";
import RightSidebar from "./components/Sidebar/RightSidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

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
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_250px] gap-4 min-h-full">
          <div className="bg-black/20 rounded p-4 h-full">
            <LeftSidebar />
          </div>
          
          <MainContent />
          
          <div className="bg-black/20 rounded p-4 h-full">
            <RightSidebar />
          </div>
        </div>
      </div>

      <footer>
        <div className="container mx-auto p-4">
          <Footer />
        </div>
      </footer>

    </div>
  );
}