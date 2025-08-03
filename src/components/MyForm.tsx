import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// ✅ Zod Schema for validation
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  age: z.number().min(18, 'You must be at least 18'),
});

// ✅ TypeScript type derived from schema
type FormData = z.infer<typeof formSchema>;

const MyForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // ✅ Request validation already handled via zod before this
    try {
      console.log('Form Submitted:', data);

      // Mock sending request
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      alert('Form submitted successfully!');
    } catch (err) {
      alert(`Error: ${(err as Error).message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-green">
      <div>
        <label>Name:</label>
        <input {...register('name')} className="border px-2 py-1" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input {...register('email')} className="border px-2 py-1" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label>Age:</label>
        <input type="number" {...register('age', { valueAsNumber: true })} className="border px-2 py-1" />
        {errors.age && <p className="text-red-500">{errors.age.message}</p>}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default MyForm;
