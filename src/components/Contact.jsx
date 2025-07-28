import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { MapPin, User, Mail, MessageSquare } from 'lucide-react';



const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		toast.loading('Sending message...');

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					access_key: '5556eabe-177c-417a-b296-f761b4b18757',
					...formData,
				}),
			});

			const data = await response.json();

			if (data.success) {
				toast.success('Message sent successfully!');
				setFormData({ name: '', email: '', message: '' });
			} else {
				toast.error('Failed to send message. Please try again.');
			}
		} catch (error) {
			toast.error('An error occurred. Please try again.');
		}
	};

	return (
		<div data-aos='fade-up' className="text-white min-h-fit mb-5 pt-32 pb-8 px-6 sm:px-6 lg:px-8">
			<Toaster position="top-center" toastOptions={{ duration: 5000 }} />
			<div className="max-w-7xl mx-auto">
				<h2 className="mx-auto mb-8 sm:mb-14 w-min whitespace-nowrap text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-primaryBlue via-cyan-200 to-lightBlue text-transparent bg-clip-text leading-tight sm:leading-none uppercase">
					Contact Us
				</h2>

				<div className="flex flex-col-reverse sm:flex-row gap-10">
					<div className="space-y-6 flex-1">
						<div className=''>
							{/* <h3 className="text-2xl font-semibold mb-4">Our Location</h3> */}
							<div style={{ width: '100%', height: '300px' }}>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.609076472004!2d74.59888257492179!3d16.845738683952064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1237f52c65db5%3A0xa3535676176ded0a!2sWalchand%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1733626750439!5m2!1sen!2sin"
									width="100%"
									height="100%"
									style={{ border: 0, borderRadius: '0.5rem' }}
									allowFullScreen={true}
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
									title="Google Map"
								></iframe>
							</div>
						</div>
						<div className="space-y-2 flex-1">
							<div className="flex items-center space-x-3">
								<MapPin className="h-6 w-6 text-purple-200" />
								<span>Walchand College of Engineering, Sangli</span>
							</div>
							<div className="flex items-center space-x-3">
								<Mail className="h-6 w-6 text-purple-200" />
								<span>wceacmsc@gmail.com</span>
							</div>

						</div>
					</div>
					
					
					<div className='flex-1'>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
						<div className="flex items-center space-x-2">
							<User className="h-5 w-5 text-gray-400" />
							<label htmlFor="name" className="text-sm font-medium text-gray-200">
							Full Name
							</label>
						</div>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							className="mt-1 block w-full py-2 bg-transparent border-b-2 border-gray-600 text-white text-md focus:outline-none focus:border-purple-400 focus:ring-0 placeholder-gray-400"
							placeholder="Enter your name"
						/>
						</div>

						<div>
						<div className="flex items-center space-x-2">
							<Mail className="h-5 w-5 text-gray-400" />
							<label htmlFor="email" className="text-sm font-medium text-gray-200">
							Email
							</label>
						</div>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="mt-1 block w-full py-2 bg-transparent border-b-2 border-gray-600 text-white focus:outline-none focus:border-purple-400 focus:ring-0 placeholder-gray-400"
							placeholder="Enter your email"
						/>
						</div>

						<div>
						<div className="flex items-center space-x-2">
							<MessageSquare className="h-5 w-5 text-gray-400" />
							<label htmlFor="message" className="text-sm font-medium text-gray-200">
							Message
							</label>
						</div>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							rows={4}
							required
							className="mt-1 block w-full py-2 bg-transparent border-b-2 border-gray-600 text-white focus:outline-none focus:border-purple-400 focus:ring-0 resize-none placeholder-gray-400"
							placeholder="Enter your message"
						></textarea>
						</div>

						<div>
						<button
							type="submit"
							className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md text-md px-6 py-2 transition duration-150 ease-in-out focus:ring-2 focus:ring-purple-300"
						>
							Send Message
						</button>
						</div>
					</form>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Contact;