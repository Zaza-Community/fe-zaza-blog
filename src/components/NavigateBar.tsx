import signinIcon from '../assets/signin.svg';
import { useState } from 'react';
import { Login } from './login/Login';
import { useNavigate, Link } from 'react-router-dom';

export default function NavigateBar() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const handleLoginClick = () => {
        setIsLoginModalOpen(true);
    };

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setIsLoginModalOpen(false);
    };

    const handleCloseModal = () => {
        setIsLoginModalOpen(false);
    };

    function handleLogout() {
        setIsLoggedIn(false);
        navigate('/');
    }

    return (
        <>
            <nav className="bg-black/20 p-2 rounded border border-[#00ffff]">
                <ul className="flex items-center justify-between content">

                    <div className="flex items-center gap-1">
                        <Link to="/" className="inline-block px-3 py-1 rounded text-[#00ffff] hover:bg-black/30 transition-colors">
                            Home
                        </Link>
                        <Link to="/news" className="inline-block px-3 py-1 rounded text-[#00ffff] hover:bg-black/30 transition-colors">
                            News
                        </Link>
                        <Link to="/tech" className="inline-block px-3 py-1 rounded text-[#00ffff] hover:bg-black/30 transition-colors">
                            Tech
                        </Link>
                        <Link to="/community" className="inline-block px-3 py-1 rounded text-[#00ffff] hover:bg-black/30 transition-colors">
                            Community
                        </Link>
                    </div>

                    <li>
                        <div className="flex gap-2">
                            {isLoggedIn ? (
                                <>
                                    <button
                                        onClick={() => navigate('/mypage')}
                                        className="px-3 py-1 rounded bg-[#00ffff] text-black hover:bg-[#00ffff]/90 transition-colors flex items-center gap-2">
                                        MyPage
                                    </button>
                                    <button
                                        onClick={() => navigate('/write')}
                                        className="px-3 py-1 rounded bg-[#00ffff] text-black hover:bg-[#00ffff]/90 transition-colors flex items-center gap-2">
                                        Write
                                    </button>
                                    <button 
                                        onClick={handleLogout}
                                        className="px-3 py-1 rounded bg-[#00ffff] text-black hover:bg-[#00ffff]/90 transition-colors flex items-center gap-2"
                                    >
                                        LogOut
                                    </button>
                                </>
                            ) : (
                                <button 
                                    onClick={handleLoginClick}
                                    className="px-3 py-1 rounded bg-[#00ffff] text-black hover:bg-[#00ffff]/90 transition-colors flex items-center gap-2"
                                >
                                    <img src={signinIcon} alt="signin-icon" className="w-4 h-4"/>
                                    Login
                                </button>
                            )}
                        </div>
                    </li>
                    
                </ul>
            </nav>
            <Login 
                isOpen={isLoginModalOpen} 
                onClose={handleCloseModal}
                onLoginSuccess={handleLoginSuccess} 
            />
        </>
    );
}

