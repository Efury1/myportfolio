import React, { useState } from 'react';

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
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-md mx-auto mt-8 mb-8 bg-[#ECECEC] border border-[#B0B0B0] rounded-sm shadow-md"
        >
            {/* Classic Windows-style title bar, kept flat and minimal */}
            <div className="bg-[#D8D8D8] border-b border-[#B0B0B0] px-4 py-2">
                <span className="text-sm font-bold text-gray-800 font-tahoma">Contact</span>
            </div>

            <div className="space-y-4 p-6">
                <div>
                    <label htmlFor="name" className="block text-gray-900 font-semibold font-tahoma">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 bg-white border border-[#A0A0A0] rounded-sm text-black font-tahoma focus:outline-none focus:ring-2 focus:ring-blue-700"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-gray-900 font-semibold font-tahoma">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 bg-white border border-[#A0A0A0] rounded-sm text-black font-tahoma focus:outline-none focus:ring-2 focus:ring-blue-700"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-gray-900 font-semibold font-tahoma">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-2 bg-white border border-[#A0A0A0] rounded-sm text-black font-tahoma h-32 focus:outline-none focus:ring-2 focus:ring-blue-700"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#D8D8D8] text-gray-900 p-2 rounded-sm border border-[#A0A0A0] cursor-pointer hover:bg-[#C8C8C8] active:bg-[#BEBEBE] font-tahoma font-semibold focus:outline-none focus:ring-2 focus:ring-blue-700"
                >
                    Send
                </button>

                {status && (
                    <p className="text-sm text-gray-800 font-tahoma" role="status">
                        {status}
                    </p>
                )}
            </div>
        </form>
    );
};

const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">

            <div className="flex-grow flex justify-center items-center w-full px-4">
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactPage;