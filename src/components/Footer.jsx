import React from 'react'
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-5 gap-10">
                <div>
                    <a href="/" className="text-3xl font-bold text-white mb-4 block">
                        EduWeb
                    </a>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos consequatur laudantium facere earum reiciendis assumenda libero, hic amet eius atque illo! Itaque, impedit!
                    </p>
                    <div className="flex space-x-4 mt-6">
                        <a href="/"><Facebook className="w-5 h-5 hover:text-teal-400" /></a>
                        <a href="/"><Twitter className="w-5 h-5 hover:text-teal-400" /></a>
                        <a href="/"><Instagram className="w-5 h-5 hover:text-teal-400" /></a>
                        <a href="/"><Linkedin className="w-5 h-5 hover:text-teal-400" /></a>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Explore</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="/" className="hover:text-teal-400">About</a></li>
                        <li><a href="/" className="hover:text-teal-400">Courses</a></li>
                        <li><a href="/" className="hover:text-teal-400">Instructor</a></li>
                        <li><a href="/" className="hover:text-teal-400">Events</a></li>
                        <li><a href="/" className="hover:text-teal-400">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Categories</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="/" className="hover:text-teal-400">Design</a></li>
                        <li><a href="/" className="hover:text-teal-400">Development</a></li>
                        <li><a href="/" className="hover:text-teal-400">Marketing</a></li>
                        <li><a href="/" className="hover:text-teal-400">Business</a></li>
                        <li><a href="/" className="hover:text-teal-400">Lifestyle</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
                    <ul className="space-y-4 text-sm text-gray-300">
                        <li className="flex items-start space-x-2">
                            <MapPin className="w-4 h-4 mt-1 text-teal-400" />
                            <span>Ahmedabad, Gujarat, India</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <Mail className="w-4 h-4 mt-1 text-teal-400" />
                            <span>support@eduweb.com</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <Phone className="w-4 h-4 mt-1 text-teal-400" />
                            <span>+91 12345 67890</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
                    <p className="text-sm text-gray-300 mb-4">
                        Subscribe to get the latest courses, offers, and news.
                    </p>
                    <form className="flex flex-col space-y-3">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="px-4 py-2 bg-white text-black focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
                &copy; 2025 EduWeb. All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer;