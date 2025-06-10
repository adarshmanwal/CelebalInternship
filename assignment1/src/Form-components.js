import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function FormComponents() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        country: '',
        city: '',
        pan: '',
        aadhar: '',
    });

    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const validateField = (name, value) => {
        let error = '';
        if (!value.trim()) {
            error = `${name} is required`;
        } else {
            if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                error = 'Invalid email format';
            }
            if (name === 'phoneNumber' && !/^\d{10}$/.test(value)) {
                error = 'Phone must be 10 digits';
            }
            if (name === 'aadhar' && !/^\d{12}$/.test(value)) {
                error = 'Aadhar must be 12 digits';
            }
            if (name === 'pan' && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)) {
                error = 'Invalid PAN format';
            }
        }
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));

        setErrors((prev) => ({
            ...prev,
            [name]: validateField(name, value)
        }));
    };

    useEffect(() => {
        const hasErrors = Object.values(errors).some((e) => e);
        const hasEmptyFields = Object.values(formData).some((v) => v.trim() === '');
        setIsFormValid(!hasErrors && !hasEmptyFields);
    }, [formData, errors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/success', { state: formData });
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {[
                    { name: 'firstName', label: 'First Name' },
                    { name: 'lastName', label: 'Last Name' },
                    { name: 'username', label: 'Username' },
                    { name: 'email', label: 'Email' },
                    { name: 'password', label: 'Password', type: 'password' },
                    { name: 'phoneNumber', label: 'Phone Number' },
                    { name: 'pan', label: 'PAN No.' },
                    { name: 'aadhar', label: 'Aadhar No.' }
                ].map(({ name, label, type = 'text' }) => (
                    <div key={name}>
                        <label className="block mb-1">{label}</label>
                        <input
                            type={type}
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            className={`w-full border px-3 py-2 rounded ${errors[name] ? 'border-red-500' : ''
                                }`}
                        />
                        {errors[name] && (
                            <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
                        )}
                    </div>
                ))}

                <div>
                    <label className="block mb-1">Country</label>
                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={`w-full border px-3 py-2 rounded ${errors.country ? 'border-red-500' : ''
                            }`}
                    >
                        <option value="">Select Country</option>
                        <option>India</option>
                        <option>USA</option>
                        <option>Canada</option>
                    </select>
                    {errors.country && (
                        <p className="text-red-500 text-sm mt-1">{errors.country}</p>
                    )}
                </div>

                <div>
                    <label className="block mb-1">City</label>
                    <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={`w-full border px-3 py-2 rounded ${errors.city ? 'border-red-500' : ''
                            }`}
                    >
                        <option value="">Select City</option>
                        <option>Delhi</option>
                        <option>Mumbai</option>
                        <option>New York</option>
                        <option>Toronto</option>
                    </select>
                    {errors.city && (
                        <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-full bg-blue-600 text-white py-2 rounded ${!isFormValid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                        }`}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
