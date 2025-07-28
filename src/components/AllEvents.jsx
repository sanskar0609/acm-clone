import React, { useState, useRef, useEffect } from "react";
import { Calendar, Users, ChevronRight, X } from "lucide-react";
import PastEvents from "../jsdata/PastEvents";

const EventCard = ({ event }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="flex flex-col md:flex-row items-center mb-12 relative">
      {/* Event Image Section */}
      <div
        data-aos="fade-right"
        className="w-full md:w-1/2 sm:px-4 mb-6 md:mb-0"
      >
        <div className="transform transition duration-500 hover:scale-[1.02] min-h-full relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={event.images}
            alt={event.title}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-neutral-200 mb-1 flex items-center">
                {/* <Calendar className="mr-2" size={16} />
								{event.date} */}
              </p>
              <p className="text-sm text-neutral-200 flex items-center">
                <Users className="mr-2" size={16} />
                {event.attendees} Attendees
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details Section */}
      <div data-aos="fade-left" className="w-full md:w-1/2 sm:px-5">
        <div className="bg-gradient-to-bl from-neutral-800/70 to-neutral-600/70 backdrop-blur-md p-6 rounded-lg shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-br">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-200 to-purple-400 w-fit mb-3">
            {event.title}
          </h3>
          <p className="text-neutral-200 mb-4">
            {event.description.length > 100
              ? `${event.description.substring(0, 100)}...`
              : event.description}
          </p>
          <h4 className="text-lg w-fit font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-00 to-red-300 mb-2">
            Highlights:
          </h4>
          <ul className="list-disc list-inside text-neutral-200 space-y-2 mb-4">
            {event.highlights.slice(0, 2).map((highlight, idx) => (
              <li key={idx} className="leading-relaxed">
                {highlight}
              </li>
            ))}
          </ul>
          <button
            onClick={toggleModal}
            className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center hover:from-teal-600 hover:to-blue-600 transition-all duration-300"
          >
            Learn More
            <ChevronRight size={20} className="ml-2" />
          </button>
        </div>
      </div>

      {/* Modal with Click Outside to Close Feature */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity duration-300 overflow-hidden">
          <div
            ref={modalRef}
            className="relative bg-gradient-to-bl from-neutral-800/80 to-neutral-700/80 backdrop-blur-md p-6 rounded-2xl 
  w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl hover:bg-gradient-to-br 
  transition-all duration-500 ease-out transform scale-95 animate-fade-in-up scrollbar-hide"
          >
            {/* Close Button */}
          <button
  onClick={toggleModal}
  className="group absolute top-4 right-4 w-10 h-10 rounded-full 
   text-white  hover:text-black 
  flex items-center justify-center shadow-lg transition-all duration-300 
  border border-neutral-300"
  aria-label="Close Modal"
>
  <X size={27} className="transition-transform group-hover:rotate-90" />
</button>


            {/* Modal Image */}
            <img
              src={event.images}
              alt={event.title}
              className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
            />

            {/* Modal Title */}
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4 text-center">
              {event.title}
            </h2>

            {/* Full Description */}
            <p className="text-neutral-200 text-lg leading-relaxed mb-4 text-center">
              {event.description}
            </p>

            {/* Highlights Section */}
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
              Highlights:
            </h3>
            <ul className="list-disc list-inside text-neutral-200 space-y-2 mb-6">
              {event.highlights.map((highlight, idx) => (
                <li key={idx} className="leading-relaxed">
                  {highlight}
                </li>
              ))}
            </ul>

            {/* Additional Details */}
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-500 mb-2">
              Additional Details:
            </h3>
            <p className="text-neutral-200 text-lg leading-relaxed mb-4">
              {event.Additional_Section}
            </p>

            {/* Event Details */}
            <div className="flex flex-col md:flex-row justify-between items-center text-neutral-400">
              <p className="flex items-center">
                <Users className="mr-2" size={16} />
                {event.attendees} Attendees
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function AllEvents() {
  return (
    <div className="pt-32">
      <div className="w-full sm:max-w-6xl flex flex-col gap-8 sm:gap-14 items-center mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          data-aos="fade-up"
          className="w-min whitespace-nowrap text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-primaryBlue via-cyan-200 to-lightBlue text-transparent bg-clip-text leading-tight sm:leading-none uppercase"
        >
          Our Event Journey
        </h2>
        <div className="relative">
          <div
            data-aos="fade-up"
            className="absolute left-1/2 rounded-full transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400 via-blue-500 to-purple-600 hidden md:block"
          ></div>
          {PastEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
