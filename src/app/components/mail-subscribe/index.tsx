'use client'
import React, { useState } from 'react'

interface EmailInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const EmailInput: React.FC<EmailInputProps> = ({ value, onChange, placeholder = 'Enter your email' }) => {
    const [touched, setTouched] = useState(false);

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleBlur = () => {
        setTouched(true);
    };

    const isValid = validateEmail(value);
    const showError = touched && !isValid;

    return (
        <div className='border-2 rounded-full lg:w-[366px] w-[303px] bg-[#F5F5F5] '>
            <input
                type="email"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onBlur={handleBlur}
                placeholder={placeholder}
                className={` px-7 py-2 font-bold text-sm rounded-full bg-[#F5F5F5]  ${showError ? 'border-red-500' : 'border-gray-300'}`}
                required
            />
            {showError && <p className="text-danger absolute text-sm mt-1">Please enter a valid email address.</p>}
        </div>
    );
};


const MailSubscribe = () => {

    const [email, setEmail] = useState('');

    const handleEmailChange = (newEmail: string) => {
        setEmail(newEmail);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateEmail(email)) {
            console.log('Valid email submitted:', email);
        } else {
            console.log('Invalid email:', email);
        }
    };

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    return (
        <div className='border-y-2 py-14 lg:py-9 flex flex-col gap-4 lg:flex-row justify-between'>
            <div className='text-center lg:text-left'>
                <h1 className='font-bold text-xl'>Subscribe to our newsletter</h1>
                <p>and get exclusive discounts!</p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='flex justify-center'>
                        <EmailInput value={email} onChange={handleEmailChange} />
                        <button type="submit" className="px-7 -ml-24 py-2 rounded-full bg-danger text-white font-bold text-sm">
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MailSubscribe