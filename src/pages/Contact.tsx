import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import "../styles/globals.css";

const ContactForm: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [status, setStatus] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        //Use API
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);

        fetch('https://formspree.io/f/mwplegez', {
            method: 'POST',
            body: formData,
        }).then(response => {
            if (response.ok) {
                setStatus("Your message has been sent");
                // Reset Fields
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus("Please try again.");
            }
        })
        .catch(error => {
            setStatus("Please try again.");
        });
    };

    return (
        <>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border-2 border-gray-400 rounded-md text-gray-700"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border-2 border-gray-400 rounded-md text-gray-700"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold">Message:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 border-2 border-gray-400 rounded-md text-gray-700 h-32"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-gray-700 text-white p-2 rounded-md cursor-pointer hover:bg-gray-600 transition duration-300"
            >
                Send
            </button>
        </form>
        </>
    );
};

const ContactPage: React.FC = () => {
    return (
        <>
        <div className="min-h-screen bg-gray-200">
                <Navbar />
                <ContactForm />
        </div>
        </>
    );
};

export default ContactPage;
