import Carousel from './component/Carousel';
import Nav from './component/Nav';
import SideBar from "./component/SideBar.tsx";

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
