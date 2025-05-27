import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Strava() {
  const [activities, setActivities] = useState([]);

  const CLIENT_ID = import.meta.env.VITE_STRAVA_CLIENT_ID;
    const CLIENT_SECRET = import.meta.env.VITE_STRAVA_CLIENT_SECRET;
    const REFRESH_TOKEN = import.meta.env.VITE_STRAVA_REFRESH_TOKEN;


  useEffect(() => {
    const fetchStravaActivities = async () => {
      try {
        const tokenRes = await axios.post('https://www.strava.com/api/v3/oauth/token', {
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          refresh_token: REFRESH_TOKEN,
          grant_type: 'refresh_token'
        });

        const accessToken = tokenRes.data.access_token;

        const activitiesRes = await axios.get(
          'https://www.strava.com/api/v3/athlete/activities?per_page=10',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        );

        const runs = activitiesRes.data.filter(activity => activity.type === 'Run');
        setActivities(runs.slice(0, 5)); // Show only the 5 most recent runs
      } catch (error) {
        console.error('Error fetching Strava data:', error);
      }
    };

    fetchStravaActivities();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-white">
      <div className="flex justify-center items-center mb-6">
        <a
          href="https://www.strava.com/athletes/35334537"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
          <span className="text-orange-400 font-semibold text-sm">View My Strava Profile</span>
        </a>
      </div>

      <h2 className="text-3xl font-bold mb-3 text-center"> My Running Portfolio</h2>
      <p className="text-md text-gray-300 mb-8 text-center max-w-xl mx-auto">
        I’ve always enjoyed running, but lately I’ve been diving in more seriously. Here's a look at my stats! 
        If you're into running too, follow me on Strava! 💪
      </p>

      {activities.length === 0 ? (
        <p className="text-center text-gray-400">No recent runs found or still loading...</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="border border-blue-400 rounded-lg p-4 shadow-md bg-gray-800"
            >
              <h3 className="text-lg font-semibold mb-1">{activity.name}</h3>
              <p className="text-sm text-gray-300">
                📅 {new Date(activity.start_date).toLocaleDateString()} · 🛣️{' '}
                {(activity.distance / 1000).toFixed(2)} km
              </p>
              <p className="text-sm text-gray-300">
                ⏱️ {(activity.moving_time / 60).toFixed(1)} min · 🏃{' '}
                {(activity.moving_time / 60 / (activity.distance / 1000)).toFixed(2)} min/km
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}