export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-900/90 backdrop-blur border-b border-neutral-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold">Koki</h1>
        <ul className="flex space-x-6 text-sm">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#timeline" className="hover:text-blue-400">Timeline</a></li>
          <li><a href="#travel" className="hover:text-blue-400">Travel</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
