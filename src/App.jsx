export default function ActivityTracker() {
  const activities = [
    { name: 'Workout', target: '1 session', status: 'Pending' },
    { name: '10,000 Steps', target: 'Daily', status: 'Pending' },
    { name: 'Prayer', target: 'Daily', status: 'Pending' },
    { name: 'Study / Skill Learning', target: '2 Hours', status: 'Pending' },
    { name: 'No Fap', target: 'Daily', status: 'Pending' },
    { name: 'Sleep', target: '7-8 Hours', status: 'Pending' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center">Daily Activity Tracker</h1>
        <p className="text-center text-gray-600 mb-8">
          Track your daily progress and stay disciplined.
        </p>

        <div className="grid gap-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-5 flex items-center justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold">{activity.name}</h2>
                <p className="text-gray-500">Target: {activity.target}</p>
              </div>

              <div className="flex items-center gap-3">
                <button className="px-4 py-2 rounded-xl bg-green-500 text-white hover:scale-105 transition">
                  Done
                </button>
                <button className="px-4 py-2 rounded-xl bg-red-500 text-white hover:scale-105 transition">
                  Missed
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Weekly Goals</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Improve pull-up strength</li>
            <li>• Stay consistent with armwrestling training</li>
            <li>• Maintain discipline and routine</li>
            <li>• Focus on recovery and sleep</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
