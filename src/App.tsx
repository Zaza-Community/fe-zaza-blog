import Carousel from './components/Carousel';
import NavigateBar from './components/NavigateBar.tsx';
import SideBar from "./components/SideBar.tsx";

function App() {
    return (
        <>
            <NavigateBar/>
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
