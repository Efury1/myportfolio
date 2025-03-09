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

        // Use API
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
            <form
                onSubmit={handleSubmit}
                className="space-y-4 p-6 w-full max-w-md mx-auto bg-gradient-to-r from-blue-200 to-blue-500 shadow-xl border border-black mt-8 mb-8"
            >
                <div>
                    <label htmlFor="name" className="block text-black font-semibold">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border-2 border-black rounded-md text-black font-tahoma"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-black font-semibold">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border-2 border-black rounded-md text-black font-tahoma"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-black font-semibold">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-2 border-2 border-black rounded-md text-black font-tahoma h-32"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gray-300 to-gray-500 text-black p-2 rounded-md cursor-pointer hover:bg-gradient-to-l hover:from-gray-400 hover:to-gray-600 font-tahoma"
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
            <Navbar />
            <div className="min-h-screen bg-gray-200 font-tahoma flex flex-col items-center">
                <div className="flex-grow flex justify-center items-center w-full px-4">
                    <ContactForm />
                </div>
            </div>
        </>
    );
};

export default ContactPage;
