'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import { getTasks, createTask, Task } from '../../lib/api';
import ProtectedRoute from '../../components/ProtectedRoute';
import Navbar from '../../components/Navbar';
import TaskCard from '../../components/TaskCard';
import GlassCard from '../../components/GlassCard';
import Modal from '../../components/Modal';
import TaskForm from '../../components/TaskForm';
import toast from 'react-hot-toast';

const DashboardPage = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksData = await getTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchTasks();
  }, [user]);

  const handleCreateTask = async (taskData: { title: string; description?: string }) => {
    try {
      const newTask = await createTask(taskData);
      setTasks([newTask, ...tasks]);
      toast.success('Task created successfully!');
      setIsModalOpen(false);
    } catch (error) {
      console.error('Failed to create task:', error);
      toast.error('Failed to create task');
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen particle-bg pt-28 pb-16 relative overflow-hidden">
        <Navbar />

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-4 mb-16 text-center relative"
        >
          <div className="inline-block mb-6">
            <motion.div
              className="text-6xl md:text-7xl mb-4"
              animate={{
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              🎯
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-4 gradient-text" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Your Tasks
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Organize your life with style and efficiency ✨
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold gradient-text">{tasks.length}</div>
              <div className="text-sm text-gray-400">Total Tasks</div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold gradient-text">
                {tasks.filter(t => t.completed).length}
              </div>
              <div className="text-sm text-gray-400">Completed</div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold gradient-text">
                {tasks.filter(t => !t.completed).length}
              </div>
              <div className="text-sm text-gray-400">Pending</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Tasks Grid */}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 6 }).map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <GlassCard className="h-52 animate-pulse">
                  <div className="h-full flex flex-col justify-center items-center space-y-4">
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full w-16 h-16"></div>
                    <div className="h-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded w-3/4"></div>
                    <div className="h-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded w-1/2"></div>
                  </div>
                </GlassCard>
              </motion.div>
            ))
          ) : tasks.length > 0 ? (
            tasks.map((task, idx) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <TaskCard
                  task={task}
                  onTaskUpdate={(updatedTask) =>
                    setTasks((prev) =>
                      prev.map((t) =>
                        String(t.id) === String(updatedTask.id) ? updatedTask : t
                      )
                    )
                  }
                  onTaskDelete={(taskId) =>
                    setTasks((prev) => prev.filter((t) => String(t.id) !== String(taskId)))
                  }
                />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <GlassCard className="inline-block p-12 max-w-md">
                  <div className="text-6xl mb-6">📝</div>
                  <h3 className="text-2xl font-bold gradient-text mb-3">
                    No tasks yet
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Start your productivity journey by creating your first task!
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn-gradient px-6 py-3 rounded-xl font-semibold text-white"
                  >
                    Create Your First Task
                  </button>
                </GlassCard>
              </motion.div>
            </div>
          )}
        </div>

        {/* Floating Add Button */}
        <motion.button
          className="
            fixed bottom-8 right-8 w-16 h-16 md:w-20 md:h-20 
            rounded-full 
            bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500
            flex items-center justify-center 
            text-white shadow-2xl z-40
            border-2 border-white/30
          "
          whileHover={{
            scale: 1.15,
            rotate: 90,
            boxShadow: "0 0 40px rgba(147, 51, 234, 0.8)"
          }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(147, 51, 234, 0.5)",
              "0 0 40px rgba(236, 72, 153, 0.8)",
              "0 0 20px rgba(147, 51, 234, 0.5)"
            ]
          }}
          transition={{
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            default: { duration: 0.3 }
          }}
          onClick={() => setIsModalOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </motion.button>

        {/* Task Creation Modal */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Task">
          <TaskForm onSubmit={handleCreateTask} onCancel={() => setIsModalOpen(false)} />
        </Modal>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage;
