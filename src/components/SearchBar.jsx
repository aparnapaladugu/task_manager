function SearchBar({ query, setQuery, priority, setPriority }) {
  return (
    <div className="mb-6 grid gap-4 sm:grid-cols-3">
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium text-gray-700">Search tasks</label>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title or description"
          className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Priority</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none"
        >
          <option value="">All priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
