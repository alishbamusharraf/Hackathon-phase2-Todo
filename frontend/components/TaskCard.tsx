'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toggleTaskCompletion, deleteTask, updateTask, Task } from '../lib/api';
import toast from 'react-hot-toast';
import GlassCard from './GlassCard';
import Modal from './Modal';
import TaskForm from './TaskForm';

interface TaskCardProps {
  task: Task;
  onTaskUpdate?: (updatedTask: Task) => void;
  onTaskDelete?: (taskId: string | number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onTaskUpdate, onTaskDelete }) => {
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleCompletion = async () => {
    try {
      const updatedTask = await toggleTaskCompletion(String(task.id));
      setIsCompleted(!isCompleted);
      onTaskUpdate && onTaskUpdate(updatedTask);
      toast.success(isCompleted ? 'Task marked as pending' : 'Task marked as completed');
    } catch (error) {
      console.error('Error toggling task completion:', error);
      toast.error('Failed to update task status');
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this task?')) {
      return;
    }

    setIsDeleting(true);
    try {
      await deleteTask(String(task.id));
      onTaskDelete && onTaskDelete(task.id);
      toast.success('Task deleted successfully');
    } catch (error) {
      console.error('Error deleting task:', error);
      toast.error('Failed to delete task');
      setIsDeleting(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdateTask = async (taskData: { title: string; description?: string }) => {
    try {
      const updatedTask = await updateTask(String(task.id), taskData);
      onTaskUpdate && onTaskUpdate(updatedTask);
      setIsEditing(false);
      toast.success('Task updated successfully');
    } catch (error) {
      console.error('Error updating task:', error);
      toast.error('Failed to update task');
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group"
    >
      <GlassCard
        hoverEffect={false}
        className="h-full flex flex-col relative overflow-hidden border-2 border-white/10 hover:border-purple-500/50 transition-all duration-300"
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-blue-500/10 transition-all duration-300 pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center flex-1">
              <motion.div
                className="relative"
                whileTap={{ scale: 1.2 }}
              >
                <input
                  type="checkbox"
                  id={`task-checkbox-${task.id}`}
                  checked={isCompleted}
                  onChange={handleToggleCompletion}
                  className="
                    h-6 w-6 rounded-lg border-2 border-purple-500/50
                    bg-white/5 text-purple-600
                    focus:ring-2 focus:ring-purple-500 focus:ring-offset-0
                    cursor-pointer transition-all
                    checked:bg-gradient-to-br checked:from-purple-500 checked:to-pink-500
                  "
                  aria-label={`Mark task "${task.title}" as ${isCompleted ? 'incomplete' : 'complete'}`}
                />
              </motion.div>

              <motion.label
                className={`ml-3 text-lg font-semibold cursor-pointer flex-1 ${isCompleted
                    ? 'line-through text-gray-400'
                    : 'text-white'
                  }`}
                animate={{
                  opacity: isCompleted ? 0.6 : 1,
                }}
                transition={{ duration: 0.3 }}
                htmlFor={`task-checkbox-${task.id}`}
              >
                {task.title}
              </motion.label>
            </div>

            <div className="flex space-x-2 ml-2">
              <motion.button
                className="
                  p-2 rounded-lg
                  bg-blue-500/20 hover:bg-blue-500/30
                  text-blue-400 hover:text-blue-300
                  border border-blue-500/30
                  transition-all
                "
                onClick={handleEdit}
                aria-label="Edit task"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </motion.button>

              <motion.button
                className="
                  p-2 rounded-lg
                  bg-red-500/20 hover:bg-red-500/30
                  text-red-400 hover:text-red-300
                  border border-red-500/30
                  transition-all
                "
                onClick={handleDelete}
                disabled={isDeleting}
                aria-label="Delete task"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </motion.button>
            </div>
          </div>

          {task.description && (
            <div className="text-gray-300 mb-4 flex-grow">
              <p className="text-sm leading-relaxed line-clamp-2">{task.description}</p>
            </div>
          )}

          <div className="flex items-center justify-between text-xs text-gray-400 mt-auto pt-3 border-t border-white/10">
            <div className="flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{new Date(task.created_at).toLocaleDateString()}</span>
            </div>
            {isCompleted && (
              <div className="flex items-center space-x-1 text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Done</span>
              </div>
            )}
          </div>
        </div>
      </GlassCard>

      {/* Edit Task Modal */}
      <Modal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        title="Edit Task"
      >
        <TaskForm
          task={task}
          onSubmit={handleUpdateTask}
          onCancel={() => setIsEditing(false)}
        />
      </Modal>
    </motion.div>
  );
};

export default TaskCard;