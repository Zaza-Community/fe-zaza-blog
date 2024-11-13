import {useEffect, useState} from 'react'
import {Link} from "react-router-dom";

export default function News() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
      <div className="min-h-screen bg-black text-green-500 font-mono p-4 relative overflow-hidden">
        {/* CRT screen effect */}
        <div className="pointer-events-none fixed inset-0 z-50 before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201%201%22%3E%3Cpath%20d%3D%22M0%200h1v1H0z%22%20fill%3D%22none%22%20stroke%3D%22%23013a0f22%22%20stroke-width%3D%222%22%20%2F%3E%3C%2Fsvg%3E')] before:bg-repeat before:bg-[length:2px_2px] before:opacity-20 after:absolute after:inset-0 after:bg-[linear-gradient(to_bottom,transparent,#013a0f22,transparent_50%)] after:animate-[scanline_50ms_linear_infinite]"></div>

        <header className="border-b border-green-500 pb-4 mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold tracking-tight">RETRO.TECH</h1>
            <div className="text-sm">{currentTime}</div>
          </div>
          <nav className="mt-4">
            <ul className="flex space-x-4">
              <li><Link to="#" className="hover:underline">[HOME]</Link></li>
              <li><Link to="#" className="hover:underline">[ARTICLES]</Link></li>
              <li><Link to="#" className="hover:underline">[ABOUT]</Link></li>
              <li><Link to="#" className="hover:underline">[CONTACT]</Link></li>
            </ul>
          </nav>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="md:col-span-2 space-y-6">
            <article className="border border-green-500 p-4">
              <h2 className="text-2xl font-bold mb-2">Latest Post: The Rise of AI</h2>
              <p className="mb-4">Exploring the implications of artificial intelligence in our daily lives...</p>
              <Link to="#" className="hover:underline">[READ MORE]</Link>
            </article>
            <article className="border border-green-500 p-4">
              <h2 className="text-2xl font-bold mb-2">Quantum Computing Breakthroughs</h2>
              <p className="mb-4">Recent advancements in quantum computing are paving the way for...</p>
              <Link to="#" className="hover:underline">[READ MORE]</Link>
            </article>
          </section>
          <aside className="space-y-6">
            <div className="border border-green-500 p-4">
              <h3 className="text-xl font-bold mb-2">Categories</h3>
              <ul className="space-y-1">
                <li><Link to="#" className="hover:underline"> AI & Machine Learning</Link></li>
                <li><Link to="#" className="hover:underline"> Quantum Computing</Link></li>
                <li><Link to="#" className="hover:underline"> Cybersecurity</Link></li>
                <li><Link to="#" className="hover:underline"> Blockchain</Link></li>
              </ul>
            </div>
            <div className="border border-green-500 p-4">
              <h3 className="text-xl font-bold mb-2">Newsletter</h3>
              <p className="mb-2">Stay updated with our latest tech insights!</p>
              <form className="flex">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow bg-black border border-green-500 p-2 text-green-500 placeholder-green-700 focus:outline-none focus:border-green-300"
                    aria-label="Email for newsletter"
                />
                <button
                    type="submit"
                    className="bg-green-500 text-black px-4 py-2 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300"
                    aria-label="Subscribe to newsletter"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </aside>
        </main>

        <footer className="mt-8 pt-4 border-t border-green-500 text-center">
          <p>&copy; 2024 RETRO.TECH | All rights reserved</p>
        </footer>

      {/*  <style jsx global>{`*/}
      {/*  @keyframes scanline {*/}
      {/*    0% {*/}
      {/*      transform: translateY(0);*/}
      {/*    }*/}
      {/*    100% {*/}
      {/*      transform: translateY(100%);*/}
      {/*    }*/}
      {/*  }*/}
      {/*  body {*/}
      {/*    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="fill:none;stroke:white;stroke-width:2px;"><rect width="16" height="16"/></svg>') 8 8, auto;*/}
      {/*  }*/}
      {/*`}</style>*/}
      </div>
  )
}