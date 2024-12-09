import Sidebar from '@/components/sidebarDashboard';
import Header from '@/components/headerDashboard';
import StatsCard from '@/components/StatsCardDashboard';
import charts from '@/components/charts';

export default function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <Header />

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <StatsCard
            title="Total Sales"
            value="$612,917"
            growth="+2.05%"
            description="Products sold this month"
            icon="📈"
          />
          <StatsCard
            title="Total Orders"
            value="34,760"
            growth="+1.15%"
            description="Orders in total"
            icon="🛒"
          />
          <StatsCard
            title="Visitors"
            value="14,987"
            growth="-0.25%"
            description="Visitors this month"
            icon="👥"
          />
          <StatsCard
            title="Total Sold Products"
            value="12,987"
            growth="+3.21%"
            description="Products sold this month"
            icon="📦"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Customer Habits</h3>
            <charts.BarChart />
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Product Statistics</h3>
            <charts.DonutChart />
          </div>
        </div>

        {/* Growth Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Customer Growth</h3>
            <charts.PieChart />
          </div>
        </div>
      </div>
    </div>
  );
}
