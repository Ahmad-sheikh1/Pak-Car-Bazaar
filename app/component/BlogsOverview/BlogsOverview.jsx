"use client";
import React, { useState } from "react";
import Container from "../Container/Container";

// Six blogs added to the array
const blogs = [
    {
        id: 1,
        title: "Noteworthy technology acquisitions 2021",
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    },
    {
        id: 2,
        title: "The Future of AI and Machine Learning",
        description: "A comprehensive guide to the most recent developments in AI and machine learning technologies.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        title: "Exploring Cloud Computing Trends 2024",
        description: "An overview of the top cloud computing trends and how they are shaping the future of IT.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 4,
        title: "Cybersecurity in the Age of IoT",
        description: "Understanding the challenges and solutions in the world of cybersecurity for IoT devices.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 5,
        title: "Digital Transformation: Trends and Insights",
        description: "How digital transformation is reshaping industries in 2024 and beyond.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 6,
        title: "Blockchain: Beyond Cryptocurrency",
        description: "Exploring the applications of blockchain technology in various sectors beyond finance.",
        image: "https://via.placeholder.com/150",
    },
];

const BlogsOverview = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleBlogs = 2; // Number of blogs to show per slide

    // Function to move to the next set of blogs
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + visibleBlogs) % blogs.length);
    };

    // Function to move to the previous set of blogs
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - visibleBlogs + blogs.length) % blogs.length);
    };

    return (
        <section className="bg-[] py-10">
            <Container>
                <div className="w-full mx-auto  relative">
                    {/* Slider Container */}
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        {blogs.slice(currentIndex, currentIndex + visibleBlogs).map((blog) => (
                            <div key={blog.id} className="max-w-sm w-full lg:max-w-full lg:flex">
                                <div
                                    className="h-52 lg:h-52 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                                    style={{ backgroundImage: `url(${blog.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                    title={blog.title} // Using the blog title for accessibility
                                />
                                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                    <div className="mb-8">
                                    
                                        <div className="text-gray-900 font-bold text-xl mb-2">{blog.title}</div>
                                        <p className="text-gray-700 text-base">{blog.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Slider Buttons */}
                    <div className="flex justify-between items-center mt-6">
                        <button
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
                            onClick={prevSlide}
                        >
                            Prev
                        </button>
                        <button
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
                            onClick={nextSlide}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default BlogsOverview;
