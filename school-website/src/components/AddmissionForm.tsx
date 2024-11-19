// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import { useMutation } from '@apollo/client';
// import { ADD_ADMISSION } from '../services/graphql';

// interface AdmissionFormData {
//   student_name: string;
//   email: string;
//   phone_number: string;
//   class_applied_for: string;
//   message?: string;
// }

// const AdmissionForm: React.FC = () => {
//   const [formData, setFormData] = useState<AdmissionFormData>({
//     student_name: '',
//     email: '',
//     phone_number: '',
//     class_applied_for: '',
//     message: '',
//   });

//   const [addAdmission, { loading, error, data }] = useMutation(ADD_ADMISSION);

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     try {
//       await addAdmission({
//         variables: formData,
//       });
//       alert('Form submitted successfully!');
//       setFormData({
//         student_name: '',
//         email: '',
//         phone_number: '',
//         class_applied_for: '',
//         message: '',
//       });
//     } catch (err) {
//       console.error('Error submitting form:', err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border shadow rounded">
//       <h1 className="text-2xl font-bold mb-4">Admission Form</h1>

//       <div className="mb-4">
//         <label htmlFor="student_name" className="block text-sm font-bold mb-2">
//           Student Name
//         </label>
//         <input
//           id="student_name"
//           type="text"
//           name="student_name"
//           value={formData.student_name}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border rounded"
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="email" className="block text-sm font-bold mb-2">
//           Email
//         </label>
//         <input
//           id="email"
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border rounded"
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="phone_number" className="block text-sm font-bold mb-2">
//           Phone Number
//         </label>
//         <input
//           id="phone_number"
//           type="text"
//           name="phone_number"
//           value={formData.phone_number}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border rounded"
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="class_applied_for" className="block text-sm font-bold mb-2">
//           Class Applied For
//         </label>
//         <select
//           id="class_applied_for"
//           name="class_applied_for"
//           value={formData.class_applied_for}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border rounded"
//         >
//           <option value="" disabled>
//             Select Class
//           </option>
//           <option value="Nursery">Nursery</option>
//           <option value="Class 1">Class 1</option>
//           <option value="Class 2">Class 2</option>
//           <option value="Class 10">Class 10</option>
//           {/* Add more classes */}
//         </select>
//       </div>

//       <div className="mb-4">
//         <label htmlFor="message" className="block text-sm font-bold mb-2">
//           Message (Optional)
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />
//       </div>

//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
//       >
//         {loading ? 'Submitting...' : 'Submit'}
//       </button>

//       {error && <p className="text-red-500 mt-2">Error: {error.message}</p>}
//       {data && <p className="text-green-500 mt-2">Admission successful!</p>}
//     </form>
//   );
// };

// export default AdmissionForm;
