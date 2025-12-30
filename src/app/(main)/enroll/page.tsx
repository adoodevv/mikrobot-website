"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function EnrollPage() {
    const router = useRouter();
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        age: "",
        interest: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/forms", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    formType: "enroll",
                    ...formState
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                const data = await response.json();
                toast.error(data.error || "Failed to submit application. Please try again.");
                setIsSubmitting(false);
            }
        } catch (error) {
            toast.error("An error occurred. Please try again later.");
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
                <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-lg">
                    <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg
                            className="w-8 h-8 text-sky-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                        Welcome Aboard!
                    </h2>
                    <p className="text-slate-600 mb-8">
                        Thank you for enrolling in Mikrobot Academy. We've received your
                        details and will be in touch shortly with your next steps.
                    </p>
                    <button
                        onClick={() => router.push("/")}
                        className="w-full bg-sky-700 text-white hover:bg-sky-800 font-medium py-3 px-6 rounded-lg transition-colors"
                    >
                        Return to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-slate-50">
            {/* Left Side - Image (Hidden on mobile) */}
            <div className="hidden lg:block lg:w-1/2 relative">
                <Image
                    src="/about.jpg"
                    alt="Students at Mikrobot Academy"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-slate-900/10" />
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 py-20 lg:p-12 bg-white">
                <div className="max-w-lg w-full space-y-8">
                    <div className="space-y-4 text-center lg:text-left">
                        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                            Join Mikrobot
                        </h1>
                        <p className="text-lg text-slate-600">
                            Start your journey into the world of robotics. Apply now for our
                            upcoming cohort.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium text-slate-700"
                            >
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formState.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none transition-all"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium text-slate-700"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="age"
                                    className="text-sm font-medium text-slate-700"
                                >
                                    Age
                                </label>
                                <input
                                    id="age"
                                    name="age"
                                    type="number"
                                    min="0"
                                    max="100"
                                    required
                                    value={formState.age}
                                    onChange={handleChange}
                                    placeholder="14"
                                    className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="interest"
                                className="text-sm font-medium text-slate-700"
                            >
                                Why are you interested?
                            </label>
                            <textarea
                                id="interest"
                                name="interest"
                                required
                                value={formState.interest}
                                onChange={handleChange}
                                rows={4}
                                placeholder="I want to learn how to build robots because..."
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none transition-all resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-12 bg-sky-700 hover:bg-sky-800 text-white font-medium text-lg rounded-lg flex items-center justify-center transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Submitting..." : "Submit Application"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
