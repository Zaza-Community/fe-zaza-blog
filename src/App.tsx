import Carousel from './components/Carousel';
import Nav from './components/Nav';
import SideBar from "./components/SideBar.tsx";

function App() {
    return (
        <>
            <Nav/>
            <div className="flex">
                <div>
                    <SideBar/>
                </div>
                <div className="col col-complementary flex flex-1" role="complementary">
                    <Carousel/>
                </div>
            </div>
        </>
    );
}

export default App;
