const blogData = {
  1: {
    id: 1,
    title: "Web Design Trends in 2022",
    date: "01 Dec, 2022",
    category: "Web Design",
    image: "img/project5.jpg",
    excerpt:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from",
    content: `
            <h2>Introduction</h2>
            <p>Web design is constantly evolving, and 2022 has brought us some exciting new trends that are reshaping how we think about user experience and visual design. In this comprehensive guide, we'll explore the most important web design trends that are defining the digital landscape.</p>
            
            <h2>Minimalist Design Approaches</h2>
            <p>Minimalism continues to dominate web design, but with new twists. Clean layouts, plenty of white space, and simplified navigation are still key, but designers are now incorporating subtle animations and micro-interactions to add personality without cluttering the interface.</p>
            
            <h2>Dark Mode and Color Schemes</h2>
            <p>Dark mode has become more than just a trend—it's now an expectation. Users appreciate the reduced eye strain and improved battery life on mobile devices. Designers are creating sophisticated dark themes that maintain brand identity while providing excellent usability.</p>
            
            <h2>Mobile-First Design</h2>
            <p>With mobile traffic continuing to dominate, mobile-first design is no longer optional. Responsive design techniques are becoming more sophisticated, with designers paying careful attention to touch targets, thumb-friendly navigation, and performance optimization.</p>
            
            <p>These trends represent more than aesthetic choices—they reflect a deeper understanding of user behavior and technological capabilities in our increasingly digital world.</p>
        `,
  },
  2: {
    id: 2,
    title: "Modern Programming Techniques",
    date: "15 Nov, 2022",
    category: "Programming",
    image: "img/project4.jpg",
    excerpt:
      "Discover the latest programming methodologies and best practices that are shaping modern software development.",
    content: `
            <h2>Evolution of Programming</h2>
            <p>Programming has evolved dramatically over the past few years. New methodologies, frameworks, and best practices are constantly emerging, making it essential for developers to stay current with modern techniques.</p>
            
            <h2>Clean Code Principles</h2>
            <p>Writing clean, maintainable code is more important than ever. Modern programming emphasizes readability, modularity, and testability. These principles help teams work more efficiently and reduce technical debt over time.</p>
            
            <h2>DevOps Integration</h2>
            <p>The integration of development and operations has revolutionized how we build and deploy software. Continuous integration and continuous deployment (CI/CD) pipelines are now standard practice in modern development workflows.</p>
            
            <h2>API-First Development</h2>
            <p>Modern applications are built with APIs at their core. This approach enables better scalability, easier integration with third-party services, and more flexible architecture that can adapt to changing business needs.</p>
            
            <p>These techniques are not just technical improvements—they represent a fundamental shift toward more collaborative, efficient, and sustainable software development practices.</p>
        `,
  },
  3: {
    id: 3,
    title: "Digital Marketing Strategies",
    date: "20 Oct, 2022",
    category: "Marketing",
    image: "img/project2.jpg",
    excerpt:
      "Learn effective digital marketing strategies that can help your business grow in the competitive online landscape.",
    content: `
            <h2>The Digital Marketing Landscape</h2>
            <p>Digital marketing continues to evolve at a rapid pace. With new platforms, technologies, and consumer behaviors emerging constantly, marketers need to stay agile and adaptive to remain effective.</p>
            
            <h2>Content Marketing Excellence</h2>
            <p>Quality content remains king in digital marketing. However, the definition of quality has evolved to include not just well-written text, but also engaging visuals, interactive elements, and personalized experiences that resonate with specific audience segments.</p>
            
            <h2>Social Media Strategy</h2>
            <p>Social media marketing has matured beyond simple posting schedules. Successful brands now focus on community building, authentic engagement, and leveraging user-generated content to build trust and loyalty.</p>
            
            <h2>Data-Driven Decision Making</h2>
            <p>Analytics and data interpretation have become crucial skills for digital marketers. Understanding customer journey mapping, conversion optimization, and performance metrics enables more effective campaign planning and execution.</p>
            
            <p>The future of digital marketing lies in the integration of these strategies with emerging technologies like AI, voice search, and augmented reality to create more immersive and personalized customer experiences.</p>
        `,
  },
};
function loadBlogPosts() {
  const blogContainer = document.getElementById("blog-container");
  if (!blogContainer) return;

  let blogHTML = "";

  Object.values(blogData).forEach((blog) => {
    blogHTML += `
            <div class="col-md-4">
                <article class="blog-post blog-clickable" data-blog-id="${blog.id}">
                    <img src="${blog.image}" alt="${blog.title}">
                    <a href="#" class="tag">${blog.category}</a>
                    <div class="content">
                        <small>${blog.date}</small>
                        <h5>${blog.title}</h5>
                        <p>${blog.excerpt}</p>
                    </div>
                </article>
            </div>
        `;
  });

  blogContainer.innerHTML = blogHTML;

  addBlogClickListeners();
}

function addBlogClickListeners() {
  const blogPosts = document.querySelectorAll(".blog-clickable");

  blogPosts.forEach((post) => {
    post.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        return;
      }

      const blogId = this.getAttribute("data-blog-id");
      window.location.href = `blog-detail.html?id=${blogId}`;
    });

    post.addEventListener("mouseenter", function () {
      this.style.cursor = "pointer";
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  loadBlogPosts();
});
