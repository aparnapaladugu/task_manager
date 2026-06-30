function StatsCards({ total, completed, pending }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-200">
        <div className="text-sm uppercase tracking-wide text-gray-500">Total Tasks</div>
        <div className="mt-3 text-3xl font-semibold text-green-700">{total}</div>
      </div>
      <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-200">
        <div className="text-sm uppercase tracking-wide text-gray-500">Completed</div>
        <div className="mt-3 text-3xl font-semibold text-blue-700">{completed}</div>
      </div>
      <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-200">
        <div className="text-sm uppercase tracking-wide text-gray-500">Pending</div>
        <div className="mt-3 text-3xl font-semibold text-orange-600">{pending}</div>
      </div>
    </div>
  );
}

export default StatsCards;
