import React from 'react';
import { Link } from 'react-router-dom';

function About() {
	return (
		<div id='aboutUs' className="flex flex-col items-center justify-center mx-auto px-6 md:px-28 pt-36 text-white overflow-x-hidden gap-20">
			{/* Section 1: About ACM */}
			<section className="w-full flex flex-col gap-12">
				<h1 data-aos="fade-up" className="text-center text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primaryBlue via-cyan-200 to-lightBlue uppercase">
					About ACM
				</h1>

				<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
					<div data-aos='fade-right' className="w-full lg:w-1/2 flex justify-center">
						<img className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[550px] h-auto rounded-lg shadow-2xl object-cover" 
							src="/wceacmgroup.jpg" alt="ACM Global" />
					</div>
					<div data-aos='fade-left' className="w-full lg:w-1/2 flex flex-col gap-6">
						<p className="text-lg leading-relaxed text-justify">
							The Association for Computing Machinery (ACM), founded in 1947, is the world’s largest computing society, uniting educators, researchers, and professionals to advance computing. With 100,000+ members, 38 Special Interest Groups (SIGs), and 860+ chapters, ACM fosters collaboration, research, and lifelong learning.

							A volunteer-driven organization, ACM champions diversity through initiatives like ACM-W and the Richard Tapia Celebration of Diversity. It supports students with scholarships, research competitions, and affordable memberships while honoring excellence with awards like the A.M. Turing Award ($1M prize). ACM also shapes public policy and advances research through its Digital Library and publications.

						</p>
						<a href="https://www.acm.org" target="_blank" rel="noopener noreferrer">
							<button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-700 text-white font-medium rounded-full text-lg px-8 py-3 w-full lg:w-fit">
								Visit ACM
							</button>
						</a>
					</div>
				</div>
			</section>

			{/* Section 2: About ACM India */}
			<section className="w-full flex flex-col gap-12">
				<h1 data-aos="fade-up" className="text-center text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primaryBlue via-cyan-200 to-lightBlue uppercase">
					About ACM India
				</h1>

				<div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-12">
					<div data-aos='fade-right' className="w-full lg:w-1/2 flex flex-col gap-6">
						<p className="text-lg leading-relaxed text-justify">
							ACM India, a branch of the world’s largest computing society, drives computing research, education, and industry collaboration across the country. It honors excellence with awards, travel grants, and conferences like ICSE and CODS-COMAD while connecting scholars through the Annual Academic Research Summit with Microsoft Research.

							In education, it offers Summer and Winter Schools, promotes computational thinking via CSPathshala, and strengthens learning through COMPUTE. ACM-W India champions women in tech, ensuring inclusivity. With over 860 ACM professional and student chapters, it fosters innovation and networking. Through the Eminent Speaker and Institutional Partner Programs, ACM India bridges academia and industry, shaping the future of computing in India.
						</p>
						<a href="https://india.acm.org/" target="_blank" rel="noopener noreferrer">
							<button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-700 text-white font-medium rounded-full text-lg px-8 py-3 w-full lg:w-fit">
								Visit ACM India
							</button>
						</a>
					</div>
					<div data-aos='fade-left' className="w-full lg:w-1/2 flex justify-center">
						<img className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[550px] h-auto rounded-lg shadow-2xl object-cover" 
							src="/wceacmgroup.jpg" alt="ACM India" />
					</div>
				</div>
			</section>

			{/* Section 3: About WCE ACM SC */}
			<section className="w-full flex flex-col gap-12">
				<h1 data-aos="fade-up" className="text-center text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primaryBlue via-cyan-200 to-lightBlue uppercase">
					About WCE ACM SC
				</h1>

				<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
					<div data-aos='fade-right' className="w-full lg:w-1/2 flex justify-center">
						<img className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[550px] h-auto rounded-lg shadow-2xl object-cover" 
							src="/wceacmgroup.jpg" alt="WCE ACM Team" />
					</div>
					<div data-aos='fade-left' className="w-full lg:w-1/2 flex flex-col gap-6">
						<p className="text-lg leading-relaxed text-justify">
							WCE ACM Student Chapter, established in 2016, fosters innovation, leadership, and technical excellence in computing. Through workshops, hackathons, and industry interactions, we bridge the gap between academics and real-world applications.

							Our initiatives, including coding competitions, technical talks, and mentorship programs, empower students to explore emerging technologies and develop problem-solving skills. Committed to continuous learning and professional growth, we cultivate a community that nurtures creativity, teamwork, and excellence, shaping future leaders in computing.
						</p>
						<Link to="/contact" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
							<button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-700 text-white font-medium rounded-full text-lg px-8 py-3 w-full lg:w-fit">
								Join WCE ACM SC
							</button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
