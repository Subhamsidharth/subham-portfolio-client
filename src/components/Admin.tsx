import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Lock, Home } from 'lucide-react';
import moment from 'moment';

type User = {
  id: number;
  name: string;
  email: string;
  subject?: string;
  message?: string;
  createdAt?: string;
};

type WeeklyComparison = {
  currentWeek: number;
  previousWeek: number;
  change: string;
  trend: string;
};

type AnalyticsData = {
  success: boolean;
  weeklyComparison: {
    getHired: WeeklyComparison;
    resumeDownloaded: WeeklyComparison;
    discussProject: WeeklyComparison;
  };
};

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch contacts data
      const contactsResponse = await fetch("https://subham-portfolio-api.onrender.com/api/contact");
      if (!contactsResponse.ok) throw new Error("Failed to fetch contacts");
      const contactsData = await contactsResponse.json();
      setUsers(contactsData?.data || []);
      
      // Fetch analytics data
      const analyticsResponse = await fetch("https://subham-portfolio-api.onrender.com/api/analytics");
      if (!analyticsResponse.ok) throw new Error("Failed to fetch analytics");
      const analyticsData: AnalyticsData = await analyticsResponse.json();
      
      setAnalytics(analyticsData);
      
    } catch (err) {
      console.error("Error fetching data:", err);
      setError('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Subham@2001') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
  };

  const goHome = () => {
    navigate('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-2xl p-8 max-w-md w-full"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Admin Access</h2>
            <p className="text-gray-400 mt-2">Enter password to access dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-gray-300 mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                placeholder="Enter admin password"
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Login
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={goHome}
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mx-auto"
            >
              <Home size={16} />
              Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading dashboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-red-400 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold gradient-text">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={goHome}
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Home size={16} />
              Home
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-6">
        {/* Weekly Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Get Hired Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-xl p-6"
          >
            <h3 className="text-lg font-bold text-white">Get Hired</h3>
            <div className="text-2xl font-bold text-cyan-400">{analytics?.weeklyComparison.getHired.currentWeek}</div>
            <p className="text-gray-400">Previous Week: {analytics?.weeklyComparison.getHired.previousWeek}</p>
            <p className="text-gray-400">Change: {analytics?.weeklyComparison.getHired.change}</p>
          </motion.div>

          {/* Resume Downloaded Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="glass-card rounded-xl p-6"
          >
            <h3 className="text-lg font-bold text-white">Resume Downloaded</h3>
            <div className="text-2xl font-bold text-green-400">{analytics?.weeklyComparison.resumeDownloaded.currentWeek}</div>
            <p className="text-gray-400">Previous Week: {analytics?.weeklyComparison.resumeDownloaded.previousWeek}</p>
            <p className="text-gray-400">Change: {analytics?.weeklyComparison.resumeDownloaded.change}</p>
          </motion.div>

          {/* Discuss Project Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card rounded-xl p-6"
          >
            <h3 className="text-lg font-bold text-white">Discuss Project</h3>
            <div className="text-2xl font-bold text-purple-400">{analytics?.weeklyComparison.discussProject.currentWeek}</div>
            <p className="text-gray-400">Previous Week: {analytics?.weeklyComparison.discussProject.previousWeek}</p>
            <p className="text-gray-400">Change: {analytics?.weeklyComparison.discussProject.change}</p>
          </motion.div>
        </div>

        {/* Messages Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card rounded-xl p-6 overflow-hidden"
        >
          <h3 className="text-xl font-bold text-white mb-6">Recent Messages</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 text-left text-white min-w-[120px]">Name</th>
                  <th className="py-3 px-4 text-left text-gray-300 min-w-[180px]">Email</th>
                  <th className="py-3 px-4 text-left text-gray-300 min-w-[150px]">Subject</th>
                  <th className="py-3 px-4 text-left text-gray-300 min-w-[200px]">Message</th>
                  <th className="py-3 px-4 text-left text-gray-400">Date</th>
                </tr>
              </thead>
              <tbody>
                {users.map((message) => (
                  <motion.tr
                    key={message.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="border-b border-gray-700 hover:bg-gray-800 transition-colors group"
                  >
                    {/* Name with hover tooltip */}
                    <td className="py-3 px-4 text-white">
                      <div className="relative">
                        <span className="block truncate max-w-[120px]">{message.name}</span>
                        <div className="absolute z-10 invisible group-hover:visible bg-gray-900 text-white px-2 py-1 rounded text-sm max-w-xs break-words shadow-lg border border-gray-700">
                          {message.name}
                        </div>
                      </div>
                    </td>

                    {/* Email with hover tooltip */}
                    <td className="py-3 px-4 text-gray-300">
                      <div className="relative">
                        <span className="block truncate max-w-[180px]">{message.email}</span>
                        <div className="absolute z-10 invisible group-hover:visible bg-gray-900 text-white px-2 py-1 rounded text-sm max-w-xs break-words shadow-lg border border-gray-700">
                          {message.email}
                        </div>
                      </div>
                    </td>

                    {/* Subject with hover tooltip */}
                    <td className="py-3 px-4 text-gray-300">
                      <div className="relative">
                        <span className="block truncate max-w-[150px]">{message.subject}</span>
                        <div className="absolute z-10 invisible group-hover:visible bg-gray-900 text-white px-2 py-1 rounded text-sm max-w-xs break-words shadow-lg border border-gray-700">
                          {message.subject}
                        </div>
                      </div>
                    </td>

                    {/* Message with hover tooltip */}
                    <td className="py-3 px-4 text-gray-300">
                      <div className="relative">
                        <span className="block truncate max-w-[200px]">{message.message}</span>
                        <div className="absolute z-10 invisible group-hover:visible bg-gray-900 text-white px-2 py-1 rounded text-sm max-w-xs break-words shadow-lg border border-gray-700">
                          {message.message}
                        </div>
                      </div>
                    </td>

                    {/* Date */}
                    <td className="py-3 px-4 text-gray-400">
                      {moment(message.createdAt).format("DD-MM-YYYY")}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Admin;