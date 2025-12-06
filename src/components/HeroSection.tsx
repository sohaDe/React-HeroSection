import React from "react";
import heroIllustration from "../assets/hero-illustration.jpg";

type Props = {
    onGetStarted?: () => void;
    onWatchDemo?: () => void;
};

const HeroSection: React.FC<Props> = ({ onGetStarted, onWatchDemo }) => {
    return (
        <section className="w-full px-6 py-12 md:py-20 md:px-16">
            <div className="mx-auto max-w-7xl rounded-2xl bg-white shadow-md p-6 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-center">
                            {["UNLOCK", "YOUR", "CREATIVE", "FLOW"].map((word, index) => (
                                <span
                                    key={index}
                                    className="word inline-block mr-2"
                                    style={{ animationDelay: `${index * 0.25}s` }}
                                >
                                    {word}
                                </span>
                            ))}
                        </h1>

                        <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl text-center">
                            {[
                                "Simplify", "your", "projects,", "collaborate", "effortlessly,",
                                "and", "bring", "ideas", "to", "life", "with", "our", "intuitive", "platform."
                            ].map((word, index) => (
                                <span
                                    key={index}
                                    className="inline-block mr-1 paragraph-word"
                                    style={{ animationDelay: `${0.5 + index * 0.15}s` }}
                                >
                                    {word}
                                </span>
                            ))}
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
                            <button
                                onClick={() => (onGetStarted ? onGetStarted() : console.log("Get Started"))}
                                className="gradient-button bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500  
                                text-center font-semibold text-white rounded-xl px-6 py-3 inline-block transition
                                transform duration-300 hover:shadow-xl focus:outline-none focus:ring-1 focus:ring-indigo-200"
                            >
                                Get Started
                            </button>

                            <button
                                onClick={onWatchDemo}
                                className="rounded-xl px-6 py-3 border border-indigo-200 text-indigo-600 font-semibold
                                 transition bg-white transform duration-300 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-1 focus:ring-indigo-200"
                                aria-label="Watch demo"
                            >
                                Watch Demo
                            </button>
                        </div>

                    </div>
                    <div className="flex justify-center md:justify-end">
                        <div className="w-full max-w-md md:max-w-lg">
                            <img src={heroIllustration} alt="Hero" className="w-full h-auto object-contain rounded-xl shadow-sm"
                                loading="lazy" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
