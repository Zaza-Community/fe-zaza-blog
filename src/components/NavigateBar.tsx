import { Outlet } from 'react-router-dom';
import signinIcon from '../assets/signin.svg';

export default function NavigateBar() {
    return (
        <>
            <nav className="bg-black/20 p-2 rounded border border-[#00ffff]">
                <ul className="flex items-center justify-between content">
                    <div className="flex items-center gap-1">
                        {['Home', 'News', 'Tech', 'Community'].map((item) => (
                            <li key={item}>
                                <a
                                    href="#"
                                    className="inline-block px-3 py-1 rounded text-[#00ffff] hover:bg-black/30 transition-colors"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </div>
                    <li>
                        <button className="px-3 py-1 rounded bg-[#00ffff] text-black hover:bg-[#00ffff]/90 transition-colors flex items-center gap-2">
                            <img src={signinIcon} alt="signin-icon" className="w-4 h-4"/>
                            Login
                        </button>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    );
}

