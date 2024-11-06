
export default function RightSideBar() {
    return (
        <>
            <aside className="w-64">
                <div className="separator"></div>
                <div className="modeless-dialog content h-full">
                    <ul className="menu-items">
                        <li><a href="#intro">Intro</a></li>
                        <div className="standard-dialog bg-yellow-400 ">
                            <div className="inactive-title-bar">
                                <h1 className="title">Inactive Title Bar</h1>
                            </div>
                        </div>
                        <li>Components
                            <ul>
                                <li><a href="#buttons">Buttons</a></li>
                                <li><a href="#radio-buttons">Radio Buttons</a></li>
                                <li><a href="#checkboxes">Checkboxes</a></li>
                                <li><a href="#menu-bar">Menu Bar</a></li>
                                <li><a href="#select-menu">Select Menu</a></li>
                                <li><a href="#text-box">Text Box</a></li>
                            </ul>
                        </li>
                        <div className="title-bar">
                            <h1 className="title">Dialog Title</h1>
                        </div>
                        <li>Windows
                            <ul>
                                <li><a href="#title-bar">Title Bar</a></li>
                                <li><a href="#window-contents">Window Contents</a></li>
                                <li><a href="#dialogs">Dialogs</a></li>
                            </ul>
                        </li>
                        <div className="bg-yellow-400">
                            <p> title </p>
                        </div>
                        <li>Sponsors
                            <ul>
                                <li><p>Get CSS Scan browser extension</p></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}
