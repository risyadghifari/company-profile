interface StatsCardProps {
    title: string;
    value: string | number;
    growth: string;
    description: string;
    icon: React.ReactNode;
  }
  
  export default function StatsCard({
    title,
    value,
    growth,
    description,
    icon,
  }: StatsCardProps) {
    return (
      <div className="bg-white p-6 rounded-xl shadow flex flex-col">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold">{title}</span>
          <span className="text-2xl">{icon}</span>
        </div>
        <div className="mt-4">
          <h3 className="text-2xl font-bold">{value}</h3>
          <p className="text-green-500 text-sm">{growth}</p>
          <p className="text-gray-400 text-sm mt-1">{description}</p>
        </div>
      </div>
    );
  }
  