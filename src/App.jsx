import { useEffect, useState } from 'react';

export default function ActivityTracker() {
  const defaultActivities = [
    { name: 'Workout', target: '1 session', completed: false },
    { name: '10,000 Steps', target: 'Daily', completed: false },
    { name: 'Prayer', target: 'Daily', completed: false },
    { name: 'Study / Skill Learning', target: '2 Hours', completed: false },
    { name: 'Sleep', target: '7-8 Hours', completed: false },
    { name: 'No Fap', target: 'Daily', completed: false },
  ];

  const today = new Date().toISOString().split('T')[0];

  const [monthlyData, setMonthlyData] = useState(() => {
    const saved = localStorage.getItem('monthlyData');
    return saved ? JSON.parse(saved) : {};
  });

  const [activities, setActivities] = useState(() => {
    return monthlyData[today] || defaultActivities;
  });

  useEffect(() => {
    const updatedMonthlyData = {
      ...monthlyData,
      [today]: activities,
    };

    setMonthlyData(updatedMonthlyData);
    localStorage.setItem('monthlyData', JSON.stringify(updatedMonthlyData));
  }, [activities]);

  const toggleActivity = (index) => {
    const updated = [...activities];
    updated[index].completed = !updated[index].completed;
    setActivities(updated);
  };

  const completedCount = activities.filter((a) => a.completed).length;
  const completionPercentage = Math.round(
    (completedCount / activities.length) * 100
  );

  const streak = Object.values(monthlyData).filter(
    (day) => day.every((a) => a.completed)
  ).length;

  const monthlyCompletion = Object.keys(monthlyData).length;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center">
          Daily Activity Tracker
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Track your discipline and daily consistency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl shadow-md p-5 text-center">
            <h2 className="text-xl font-bold">Completed</h2>
            <p className="text-3xl mt-2">
              {completedCount}/{activities.length}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5 text-center">
            <h2 className="text-xl font-bold">Completion</h2>
            <p className="text-3xl mt-2">{completionPercentage}%</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5 text-center">
            <h2 className="text-xl font-bold">Current Streak</h2>
            <p class
        </div>

        <div className="w-full bg-gray-300 rounded-full h-5 mb-8 overflow-hidden">
          <div
            className="bg-green-500 h-5 transition-all duration-500"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>

        <div className="grid gap-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-5 flex items-center justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold">{activity.name}</h2>
                <p className="text-gray-500">
                  Target: {activity.target}
                </p>
              </div>

              <button
                onClick={() => toggleActivity(index)}
                className={`px-4 py-2 rounded-xl text-white transition hover:scale-105 ${
                  activity.completed ? 'bg-green-500' : 'bg-gray-500'
                }`}
              >
                {activity.completed ? 'Completed' : 'Mark Done'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Weekly Goals</h2>

          <ul className="space-y-2 text-gray-700">
            <li>• Improve pull-up strength</li>
            <li>• Stay consistent with armwrestling training</li>
            <li>• Stay disciplined daily</li>
            <li>• Focus on recovery and sleep</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
