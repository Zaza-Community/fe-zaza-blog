
export default function SideBar() {
    return (
        <>
            <aside className="bg-yellow-400">
                <div className="title-bar">
                    <button aria-label="Close" className="close"></button>
                    <h1 className="title">Docs</h1>
                    <button aria-label="Resize" className="resize"></button>
                </div>
                <div className="separator"></div>
                <div className="window-pane">
                    <ul className="menu-items">
                        <li><a href="#intro">Intro</a></li>
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
                        <li>Windows
                            <ul>
                                <li><a href="#title-bar">Title Bar</a></li>
                                <li><a href="#window-contents">Window Contents</a></li>
                                <li><a href="#dialogs">Dialogs</a></li>
                            </ul>
                        </li>
                        <li><a href="#contributing">Contributing, Credits, etc.</a></li>
                        <li>Sponsors
                            <ul>
                                <li><a href="https://getcssscan.com/?ref=systemcss" target="_blank">Get CSS Scan browser
                                    extension</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}
