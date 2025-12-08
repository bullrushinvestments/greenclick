import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface TestFormValues {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TestFormValues>();

  const onSubmit = async (data: TestFormValues) => {
    try {
      setLoading(true);
      await axios.post('/api/tests', data);
      reset();
    } catch (err) {
      setError('An error occurred while submitting the test.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:space-y-4">
      <h1 className="text-xl font-bold">Write a Test</h1>
      {error && <p role="alert" aria-live="assertive" className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">Title</label>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'This field is required' })}
            aria-invalid={errors.title ? true : false}
            aria-describedby={errors.title ? 'title-error' : undefined}
            className={`w-full px-3 py-2 border rounded ${errors.title ? 'border-red-500 focus:border-red-500' : ''}`}
          />
          {errors.title && <p id="title-error" role="alert" aria-live="polite" className="text-sm text-red-500">{errors.title.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium">Description</label>
          <textarea
            id="description"
            {...register('description', { required: 'This field is required' })}
            aria-invalid={errors.description ? true : false}
            aria-describedby={errors.description ? 'description-error' : undefined}
            rows={4}
            className={`w-full px-3 py-2 border rounded ${errors.description ? 'border-red-500 focus:border-red-500' : ''}`}
          />
          {errors.description && <p id="description-error" role="alert" aria-live="polite" className="text-sm text-red-500">{errors.description.message}</p>}
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 ${loading ? 'bg-gray-300' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium rounded`}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface TestFormValues {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TestFormValues>();

  const onSubmit = async (data: TestFormValues) => {
    try {
      setLoading(true);
      await axios.post('/api/tests', data);
      reset();
    } catch (err) {
      setError('An error occurred while submitting the test.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:space-y-4">
      <h1 className="text-xl font-bold">Write a Test</h1>
      {error && <p role="alert" aria-live="assertive" className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">Title</label>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'This field is required' })}
            aria-invalid={errors.title ? true : false}
            aria-describedby={errors.title ? 'title-error' : undefined}
            className={`w-full px-3 py-2 border rounded ${errors.title ? 'border-red-500 focus:border-red-500' : ''}`}
          />
          {errors.title && <p id="title-error" role="alert" aria-live="polite" className="text-sm text-red-500">{errors.title.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium">Description</label>
          <textarea
            id="description"
            {...register('description', { required: 'This field is required' })}
            aria-invalid={errors.description ? true : false}
            aria-describedby={errors.description ? 'description-error' : undefined}
            rows={4}
            className={`w-full px-3 py-2 border rounded ${errors.description ? 'border-red-500 focus:border-red-500' : ''}`}
          />
          {errors.description && <p id="description-error" role="alert" aria-live="polite" className="text-sm text-red-500">{errors.description.message}</p>}
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 ${loading ? 'bg-gray-300' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium rounded`}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;