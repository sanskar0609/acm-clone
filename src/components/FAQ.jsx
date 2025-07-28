import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import FAQData from '../jsdata/FAQData';

const FAQ = () => {
    return (
        <div data-aos='fade-up' className='mx-auto px-6 md:px-28 pt-32 text-white overflow-x-hidden' >
            <h2 className="mx-auto w-min whitespace-nowrap text-4xl sm:text-5xl mb-4 sm:mb-10 font-extrabold text-center bg-gradient-to-r from-primaryBlue via-cyan-200 to-lightBlue text-transparent bg-clip-text leading-tight sm:leading-none uppercase"            >
                FAQs
            </h2>
            <div className="w-full">
                {FAQData.map((faq) => (
                    <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
                ))}
                <FAQItem
                    question="Contact Information"
                    answer={
                        <div>
                            <p className="mb-2">
                                For queries contact:
                                <br />
                                Hamza Shaikh - 9420889797
                                <br />
                                Sharaneshwar Punjal - 9075945885
                                <br />
                                Manaswi Devekar - 7218594020
                            </p>
                            <p>
                                You can also reach us by email at:
                                <br />
                                - wceacmsc@gmail.com
                                <br />
                            </p>
                        </div>
                    }
                />
            </div>
        </div>
    );
};

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="border-b-2 border-gray-700">
            <button className="flex justify-between items-center w-full py-4 text-left transition-all duration-300  rounded-lg px-4" onClick={() => setIsOpen(!isOpen)}>
                <span className="text-lg font-semibold bg-gradient-to-l from-blue-200 to-purple-400 text-transparent bg-clip-text">{question}</span>
                {!isOpen && <ChevronDown className="text-blue-200 transition-all duration-300" />}
                {isOpen && <ChevronUp className="text-blue-200 transition-all duration-300" />}
            </button>
            <div>
                {isOpen && (
                    <div className="overflow-hidden">
                        <div className="pb-4 text-gray-200 px-4 leading-normal">
                            {typeof answer === 'string' ? <p>{answer}</p> : answer}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FAQ;

