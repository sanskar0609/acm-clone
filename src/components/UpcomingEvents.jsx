import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import UpcomingEventsData from "../jsdata/UpcomingEventsData";

function UpcomingEvents() {
	const [current, setCurrent] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const [isHovering, setIsHovering] = useState(false);
	const carouselRef = useRef(null);

	useEffect(() => {
		const timer = setInterval(() => {
			nextSlide();
		}, 5000);

		return () => clearInterval(timer);
	}, []);

	const nextSlide = () => {
		if (!isTransitioning) {
			setIsTransitioning(true);
			setCurrent((prev) => (prev === UpcomingEventsData.length - 1 ? 0 : prev + 1));
		}
	};

	const prevSlide = () => {
		if (!isTransitioning) {
			setIsTransitioning(true);
			setCurrent((prev) => (prev === 0 ? UpcomingEventsData.length - 1 : prev - 1));
		}
	};

	const handleTransitionEnd = () => {
		setIsTransitioning(false);
	};

	return (
		<div id="upcomingEvents" className="flex flex-col items-center justify-center gap-8 sm:gap-14 px-6 sm:px-6 lg:px-8 pt-24">
			<h1 data-aos="fade-up" className="w-min mt-5 mb-3 whitespace-wrap sm:whitespace-nowrap text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-primaryBlue via-cyan-200 to-lightBlue text-transparent bg-clip-text leading-snug sm:leading-none uppercase" >
				Upcoming Events
			</h1>
			<div
				ref={carouselRef}
				data-aos="zoom-in"
				className="carousel-container relative w-full max-w-7xl mx-auto overflow-hidden rounded-xl shadow-2xl h-[30rem]"
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}
			>
				{UpcomingEventsData.map((item, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === current ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
							}`}
						onTransitionEnd={handleTransitionEnd}
					>
						<div className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-in-out hover:scale-110"
							style={{
								backgroundImage: `url(${item.image})`,
								transform: 'perspective(1000px) rotateX(calc(var(--mouse-y, 0.5) * 5deg - 2.5deg)) rotateY(calc(var(--mouse-x, 0.5) * 5deg - 2.5deg))',
							}}
						>
							<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
						</div>
						<div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-12 lg:p-16">
							<div className="space-y-2">
								<h1 className="text-2xl sm:text-2xl md:text-4xl font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-l from-blue-200 to-purple-400 w-fit">
									{item.name}
								</h1>
								<p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold flex flex-wrap items-center text-white gap-4">
									<span className="flex items-center">
										<Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-cyan-300" />
										{item.date}
									</span>
									<span className="flex items-center">
										<MapPin className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-cyan-300" />
										{item.location}
									</span>
								</p>
								<p className="text-sm sm:text-sm md:text-base lg:text-lg text-gray-200 text-shadow-sm">
									{item.description}
								</p>
							</div>
						</div>
					</div>
				))}

				<button
					className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-cyan-300 transition-all duration-300 z-10 ${isHovering ? 'opacity-100' : 'opacity-0'
						}`}
					onClick={prevSlide}
				>
					<ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
				</button>
				<button
					className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-cyan-300 transition-all duration-300 z-10 ${isHovering ? 'opacity-100' : 'opacity-0'
						}`}
					onClick={nextSlide}
				>
					<ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
				</button>

				<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
					{UpcomingEventsData.map((_, index) => (
						<button
							key={index}
							className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === current ? "bg-cyan-300 scale-125" : "bg-white/50 hover:bg-white/75"
								}`}
							onClick={() => setCurrent(index)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default UpcomingEvents;