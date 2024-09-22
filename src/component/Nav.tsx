import { Link, Outlet } from 'react-router-dom';
import searchIcon from '../assets/search.svg';
import signinIcon from '../assets/signin.svg';

export default function Nav() {
  return (
    <>
      <nav className="flex px-[46px] py-[21px] max-w-[1200px] w-full m-auto">
        <Link to="/" className="text-[32px]">
          ZAZA
        </Link>
        <div className="flex justify-between flex-1">
          <div className="flex gap-[25px] ml-[37px] items-end">
            <Link to="/news">News</Link>
            <Link to="/tech">Tech</Link>
            <Link to="community">Community</Link>
          </div>
          <div className="flex gap-[25px]">
            <button>
              <img src={searchIcon} alt="search-icon" />
            </button>
            <button>
              <img src={signinIcon} alt="signin-icon" />
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
