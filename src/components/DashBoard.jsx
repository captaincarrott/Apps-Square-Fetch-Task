const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <nav className="mt-8">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#home">Home</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#profile">Profile</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#settings">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <header className="mb-6">
          <h2 className="text-3xl font-semibold">Welcome to the Dashboard</h2>
        </header>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-xl font-bold mb-2">Statistics</h3>
              <p className="text-gray-600">Some stats info...</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-xl font-bold mb-2">Recent Activity</h3>
              <p className="text-gray-600">Recent updates...</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-xl font-bold mb-2">User Insights</h3>
              <p className="text-gray-600">User details...</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
