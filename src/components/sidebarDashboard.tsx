export default function Sidebar() {
    return (
      <aside className="w-64 bg-white p-6 shadow">
        <h1 className="text-xl font-bold">DealDeck</h1>
        <nav className="mt-8 space-y-4">
          <a className="flex items-center text-gray-700 font-medium">
            <span>📊</span>
            <span className="ml-2">Dashboard</span>
          </a>
          <a className="flex items-center text-gray-500">
            <span>📄</span>
            <span className="ml-2">Reports</span>
          </a>
          <a className="flex items-center text-gray-500">
            <span>👥</span>
            <span className="ml-2">Customers</span>
          </a>
        </nav>
        <div className="mt-auto pt-6">
          <button className="w-full bg-blue-500 text-white p-3 rounded-lg font-medium">
            Upgrade Pro
          </button>
        </div>
      </aside>
    );
  }
  