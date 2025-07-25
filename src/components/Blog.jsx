import React from "react";

const blogData = [
  {
    title: "Become A Better Blogger: Content Planning",
    date: "Oct 10, 2021",
    comments: "Com 09",
    image:
      "https://codewithsadee.github.io/eduweb/assets/images/blog-1.jpg",
  },
  {
    title: "Become A Better Blogger: Content Planning",
    date: "Oct 10, 2021",
    comments: "Com 09",
    image:
      "https://codewithsadee.github.io/eduweb/assets/images/blog-2.jpg",
  },
  {
    title: "Become A Better Blogger: Content Planning",
    date: "Oct 10, 2021",
    comments: "Com 09",
    image:
      "https://codewithsadee.github.io/eduweb/assets/images/blog-3.jpg",
  },
];

const Blog = () => {
  return (
    <section className="bg-[#f9f6f1] py-16 px-6">
      <div className="text-center mb-12">
        <p className="text-sm uppercase text-gray-500 tracking-widest">
          Latest Articles
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          Get News With Eduweb
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogData.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <div className="relative">
              <img
                src={post.image}
                alt="Blog"
                className="w-full h-56 object-cover"
              />
              <div className="absolute bottom-[-1.25rem] right-5 bg-green-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">→</span>
              </div>
            </div>
            <div className="p-5 pt-8">
              <p className="text-xs text-gray-500 uppercase mb-1">Online</p>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                <span>📅 {post.date}</span>
                <span>💬 {post.comments}</span>
              </div>
              <p className="text-gray-400 text-sm">
                Lorem Ipsum Dolor Sit Amet Cons Teturs Adipisicing Sed.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;