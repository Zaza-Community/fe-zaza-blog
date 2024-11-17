import { Link } from 'react-router-dom';
import NeonText from './NeonText';

export default function Header() {
    return (
        <div className="flex items-center justify-between mb-4">
              <Link to="/" className="font-bold tracking-tight">
                <NeonText />
              </Link>
              <div className="flex items-center gap-2 content">
                <select className="bg-black/20 text-[#00ffff] px-2 py-1 rounded border border-[#00ffff]">
                  <option>News</option>
                  <option>Technology</option>
                  <option>Culture</option>
                </select>
                <div className="flex">
                  <input 
                    type="search" 
                    placeholder="Search..." 
                    className="px-2 py-1 bg-black/20 text-[#00ffff] rounded-l border-y border-l border-[#00ffff] placeholder-[#00ffff]/50 focus:outline-none"
                  />
                  <button className="bg-[#00ffff] text-black px-4 py-1 rounded-r hover:bg-[#00ffff]/90 transition-colors">
                    Search
                  </button>
                </div>
              </div>
            </div>
    );
}