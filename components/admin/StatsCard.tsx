type StatsCardProps = {
  title: string;
  value: string | number;
};

export default function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="bg-white shadow rounded p-4">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
