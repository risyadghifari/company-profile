export default function Header() {
    return (
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Sales Report</h2>
          <p className="text-sm text-gray-500">Friday, December 15th, 2023</p>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="search"
            placeholder="Search"
            className="border p-2 rounded-lg"
          />
          <div className="flex items-center space-x-2">
            <span>👤</span>
            <span>Ferra Alexandra</span>
          </div>
        </div>
      </header>
    );
  }
  