import Carousel from './components/Carousel';
import NavigateBar from './components/NavigateBar.tsx';
import LeftSideBar from "./components/LeftSideBar.tsx";
import RightSideBar from "./components/RightSideBar.tsx";

function App() {
    return (
            <div className="h-screen">
                <NavigateBar/>
                <div className="flex h-full">
                    <LeftSideBar/>
                    <div className="col col-complementary flex flex-1" role="complementary">
                        <Carousel/>
                    </div>
                    <RightSideBar/>
                </div>
            </div>
    );
}

export default App;
