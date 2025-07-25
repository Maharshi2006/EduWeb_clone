

const courses = [
  {
    title: "Build Responsive Real-World Websites with HTML and CSS",
    duration: "3 Weeks",
    level: "Beginner",
    rating: "4.7 (120 reviews)",
    price: "$29.00",
    lessons: "12 Lessons",
    students: "25 Students",
    image:"https://codewithsadee.github.io/eduweb/assets/images/course-1.jpg",
  },
  {
    title: "Java Programming Masterclass for Software Developers",
    duration: "4 Weeks",
    level: "Advanced",
    rating: "4.9 (145 reviews)",
    price: "$49.00",
    lessons: "16 Lessons",
    students: "35 Students",
    image:
      "https://codewithsadee.github.io/eduweb/assets/images/course-2.jpg",
  },
  {
    title: "The Complete Camtasia Course for Content Creators",
    duration: "2 Weeks",
    level: "Intermediate",
    rating: "4.8 (78 reviews)",
    price: "$32.00",
    lessons: "10 Lessons",
    students: "20 Students",
    image:
      "https://codewithsadee.github.io/eduweb/assets/images/course-3.jpg",
  },
];

const Courses = () => {
  return (
    <section className="bg-[#f9f6f1] py-16 px-4 text-center">
      {/* Header */}
      <div className="mb-12">
        <p className="text-sm text-gray-500 uppercase tracking-wider">Popular Courses</p>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">Pick A Course To Get Started</h2>
      </div>

      {/* Course Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-5 text-left">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{course.level}</span>
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">{course.duration}</span>
              </div>
              <h3 className="text-base font-semibold mb-2">{course.title}</h3>
              <p className="text-sm text-yellow-600 mb-1">⭐ {course.rating}</p>
              <p className="text-green-600 font-bold mb-2">{course.price}</p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>📘 {course.lessons}</span>
                <span>👥 {course.students}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Browse Button */}
      <div className="mt-8">
        <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
          Browse more courses →
        </button>
      </div>

      {/* Video Section */}
      <div className="mt-16 max-w-4xl mx-auto relative">
        <img
          src="https://codewithsadee.github.io/eduweb/assets/images/video-banner.jpg"
          alt="Video Preview"
          className="rounded-lg shadow-md"
        />
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl shadow-lg">
            ▶
          </div>
        </button>
      </div>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
        <div className="bg-[#e7f8f3] rounded-lg py-4">
          <h3 className="text-xl font-bold text-green-600">29.3k</h3>
          <p className="text-sm text-gray-600">STUDENT ENROLLED</p>
        </div>
        <div className="bg-[#ffeef2] rounded-lg py-4">
          <h3 className="text-xl font-bold text-red-600">32.4K</h3>
          <p className="text-sm text-gray-600">CLASS COMPLETED</p>
        </div>
        <div className="bg-[#f0efff] rounded-lg py-4">
          <h3 className="text-xl font-bold text-purple-600">100%</h3>
          <p className="text-sm text-gray-600">SATISFACTION RATE</p>
        </div>
        <div className="bg-[#fff8e5] rounded-lg py-4">
          <h3 className="text-xl font-bold text-yellow-600">354+</h3>
          <p className="text-sm text-gray-600">TOP INSTRUCTORS</p>
        </div>
      </div>
    </section>
  );
};

export default Courses;
