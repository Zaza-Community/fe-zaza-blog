interface CategoryLink {
  title: string;
  description: string;
}

export default function LeftSidebar() {
  const categories: CategoryLink[] = [
    { title: 'Business', description: 'Deep geeks click here' },
    { title: 'Technology', description: 'Deep geeks click here' },
    { title: 'Culture', description: 'Deep geeks click here' }
  ];

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold mb-2 text-yellow-400 title">QUOTE MARKS</h2>
        <p className="text-sm content">"My joke was that I'm recession proof." - A psychic on her profession's rising popularity with markets financially downtrodden.</p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2 text-yellow-400 title">SUBSETS</h2>
        <div className="space-y-4 content">
          {categories.map((category) => (
            <div key={category.title} className="border-b border-gray-600 pb-2">
              <a href="#" className="text-[#00ffff] hover:underline block">{category.title}</a>
              <p className="text-sm text-gray-300">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 