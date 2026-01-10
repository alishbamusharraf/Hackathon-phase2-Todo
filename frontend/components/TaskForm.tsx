'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Task } from '../lib/api';

interface TaskFormProps {
  task?: Task;
  onSubmit: (data: { title: string; description?: string }) => void;
  onCancel: () => void;
  loading?: boolean;
}

const TaskForm: React.FC<TaskFormProps> = ({ task, onSubmit, onCancel, loading = false }) => {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const validateForm = () => {
    let isValid = true;

    if (!title.trim()) {
      setTitleError('Title is required');
      isValid = false;
    } else if (title.trim().length < 1) {
      setTitleError('Title must be at least 1 character');
      isValid = false;
    } else if (title.trim().length > 200) {
      setTitleError('Title must be less than 200 characters');
      isValid = false;
    } else {
      setTitleError('');
    }

    if (description && description.length > 1000) {
      setDescriptionError('Description must be less than 1000 characters');
      isValid = false;
    } else {
      setDescriptionError('');
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit({ title: title.trim(), description: description.trim() || undefined });
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {/* Title Input */}
      <div>
        <label htmlFor="task-title" className="block text-sm font-medium text-gray-300 mb-2">
          Task Title <span className="text-pink-400">*</span>
        </label>
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (titleError) setTitleError('');
          }}
          required
          placeholder="Enter task title"
          className="
            w-full px-4 py-3 rounded-xl
            bg-white/5 border-2 border-white/10
            text-white placeholder-gray-500
            focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20
            transition-all duration-300
            hover:border-white/20
          "
        />
        {titleError && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-xs mt-1"
          >
            {titleError}
          </motion.p>
        )}
      </div>

      {/* Description Input */}
      <div>
        <label htmlFor="task-description" className="block text-sm font-medium text-gray-300 mb-2">
          Description <span className="text-gray-500">(optional)</span>
        </label>
        <textarea
          id="task-description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            if (descriptionError) setDescriptionError('');
          }}
          placeholder="Enter task description (optional)"
          rows={4}
          className="
            w-full px-4 py-3 rounded-xl
            bg-white/5 border-2 border-white/10
            text-white placeholder-gray-500
            focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20
            transition-all duration-300
            hover:border-white/20
            resize-none
          "
        />
        {descriptionError && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-xs mt-1"
          >
            {descriptionError}
          </motion.p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-3 pt-4">
        <motion.button
          type="button"
          onClick={onCancel}
          className="
            px-6 py-3 rounded-xl text-sm font-semibold
            bg-white/10 hover:bg-white/20
            text-gray-300 hover:text-white
            border border-white/20 hover:border-white/40
            transition-all
          "
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Cancel
        </motion.button>

        <motion.button
          type="submit"
          disabled={loading}
          className="
            px-6 py-3 rounded-xl text-sm font-semibold
            btn-gradient
            text-white
            disabled:opacity-50 disabled:cursor-not-allowed
            shadow-lg shadow-purple-500/30
          "
          whileHover={{ scale: loading ? 1 : 1.02 }}
          whileTap={{ scale: loading ? 1 : 0.98 }}
        >
          {loading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {task ? 'Updating...' : 'Creating...'}
            </span>
          ) : (
            task ? 'Update Task' : 'Create Task'
          )}
        </motion.button>
      </div>
    </motion.form>
  );
};

export default TaskForm;