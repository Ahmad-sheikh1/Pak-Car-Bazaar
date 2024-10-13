"use client";
import { useState } from "react";
import Container from "../Container/Container";

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    // FAQs ko array me daal diya
    const faqs = [
        {
            question: "What types of hosting plans do you offer?",
            answer: "We offer shared hosting, VPS hosting, dedicated server hosting, and cloud hosting plans."
        },
        {
            question: "What is the uptime guarantee for your hosting services?",
            answer: "We guarantee an uptime of 99.9% for all our hosting services."
        },
        {
            question: "Do you provide website migration assistance?",
            answer: "Yes, we offer free website migration assistance for new customers."
        },
        {
            question: "What security measures do you have in place?",
            answer: "We employ advanced security measures including firewalls, DDoS protection, and regular security audits."
        }
    ];

    // Button click event handler
    const handleToggle = (index) => {
        if (openIndex === index) {
            setOpenIndex(null); // Close the FAQ if it is already open
        } else {
            setOpenIndex(index); // Open the clicked FAQ
        }
    };

    return (
        
            <section className="sm:py-10 py-3">
                {/* <section className="max-w-5xl mx-auto py-10 sm:"> */}
                    <Container>
                        <div className="flex items-center justify-center flex-col gap-y-2 py-5">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
                            <p className="text-lg font-medium text-slate-700/70">Questions related to web hosting</p>
                        </div>
                        <div className="w-full   py-4">
                            <div className=" w-full  border-b border-b-slate-400/20 rounded-lg bg-white">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-[#0A071B]/10">
                                        <button
                                            className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 focus:outline-none p-5"
                                            onClick={() => handleToggle(index)}
                                        >
                                            <span>{faq.question}</span>
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 24 24"
                                                className={`mt-1.5 md:mt-0 flex-shrink-0 transform h-5 w-5 text-[#5B5675] ${openIndex === index ? "rotate-180" : ""
                                                    }`}
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                                            </svg>
                                        </button>
                                        <div
                                            className="answer pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium"
                                            style={{
                                                display: openIndex === index ? "block" : "none"
                                            }}
                                        >
                                            {faq.answer}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                {/* </section> */}
            </section>
       
    );
};

export default FAQs;
