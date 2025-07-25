import Banner1 from '../assets/images/hero-banner-1.jpg';
import Banner2 from '../assets/images/hero-banner-2.jpg';

export default function Home() {
    const categories = [
        {
            id: 1,
            title: 'Online Degree Programs',
            description: 'Lorem ipsum dolor consec tur elit adicing sed umod tempor.',
            courses: 7,
            bg: 'bg-teal-50',
            badgeColor: 'bg-teal-200 text-teal-800',
            icon: '🎓',
        },
        {
            id: 2,
            title: 'Non-Degree Programs',
            description: 'Lorem ipsum dolor consec tur elit adicing sed umod tempor.',
            courses: 4,
            bg: 'bg-pink-50',
            badgeColor: 'bg-pink-200 text-pink-800',
            icon: '📡',
        },
        {
            id: 3,
            title: 'Off-Campus Programs',
            description: 'Lorem ipsum dolor consec tur elit adicing sed umod tempor.',
            courses: 8,
            bg: 'bg-indigo-50',
            badgeColor: 'bg-indigo-200 text-indigo-800',
            icon: '💻',
        },
        {
            id: 4,
            title: 'Hybrid Distance Programs',
            description: 'Lorem ipsum dolor consec tur elit adicing sed umod tempor.',
            courses: 8,
            bg: 'bg-yellow-50',
            badgeColor: 'bg-yellow-200 text-yellow-800',
            icon: '💊',
        },
    ];
    return (
        <>
            <section className="bg-[#f7f3ed] py-16 px-6 md:px-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    {/* Left Section */}
                    <div className="md:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
                            The Best Program to <span className="text-pink-500">Enroll</span> for Exchange
                        </h1>
                        <p className="text-gray-600">
                            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
                        </p>
                        <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2">
                            Find courses →
                        </button>
                    </div>

                    {/* Right Section */}
                    <div className="md:w-1/2 relative">
                        {/* Image 1 (Top Left) */}
                        <div className="rounded-full overflow-hidden w-48 h-48 md:w-52 md:h-52 border-4 border-white shadow-lg absolute top-0 left-0 z-10">
                            <img
                                src={Banner1}
                                alt="Student 1"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Image 2 (Bottom Right) */}
                        <div className="rounded-xl overflow-hidden w-48 h-60 md:w-52 md:h-64 ml-auto mt-32 md:ml-32 md:mt-40 shadow-xl bg-yellow-400 flex items-center justify-center">
                            <img
                                src={Banner2}
                                alt="Student 2"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Support Box */}
                        <div className="absolute bottom-0 left-0 bg-white p-4 rounded-xl shadow-md flex items-center gap-4 w-[260px] md:w-[280px]">
                            <div className="bg-pink-100 text-pink-600 rounded-full p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.293 1.293a1 1 0 000 1.414l.293.293M17 13l1.293 1.293a1 1 0 01.293.707v.707a1 1 0 01-.293.707l-.293.293M13 17h-2m4 0h-2m-2 0H7" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">ONLINE SUPPORT</p>
                                <p className="text-lg font-semibold text-pink-600">+012 (345) 6789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Section */}
            <section className="py-16 px-4 md:px-20 bg-white">
                <div className="text-center mb-12">
                    <p className="text-sm uppercase text-pink-500 tracking-wide">Categories</p>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">
                        Online <span className="text-teal-500">Classes</span> For Remote Learning.
                    </h2>
                    <p className="mt-3 text-gray-500">
                        Consectetur adipiscing elit sed do eiusmod tempor.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className={`${cat.bg} rounded-xl p-6 text-center shadow-sm transition hover:shadow-md`}
                        >
                            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full text-2xl bg-white shadow-md">
                                {cat.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{cat.title}</h3>
                            <p className="text-sm text-gray-600 mb-4">{cat.description}</p>
                            <span className={`text-xs px-3 py-1 rounded-full font-semibold ${cat.badgeColor}`}>
                                {cat.courses} Courses
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

