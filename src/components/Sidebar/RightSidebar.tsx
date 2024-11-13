export default function RightSidebar() {
  return (
    <aside className="space-y-4">
      <div className="bg-yellow-400 text-black p-4 rounded">
        <h2 className="font-bold mb-2 title">CLICK OR MISS</h2>
        <ul className="space-y-2 text-sm content">
          <li>
            <a href="#" className="hover:underline">Turn the Page</a>
            <p>Wired News' new look is radical departure from previous versions.</p>
          </li>
        </ul>
      </div>

      <div className="bg-black/20 p-4 rounded">
        <h2 className="text-xl font-bold mb-2 text-yellow-400 title">HOT OFF THE WIRE</h2>
        <ul className="space-y-2 text-sm content">
          <li>
            <a href="#" className="text-[#00ffff] hover:underline">Breaking News</a>
          </li>
          <li>
            <a href="#" className="text-[#00ffff] hover:underline">Image Galleries</a>
          </li>
        </ul>
      </div>
    </aside>
  );
} 