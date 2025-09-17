function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function loadBlogContent() {
  const blogId = getUrlParameter("id");
  const blog = blogData[blogId];

  if (blog) {
    document.getElementById("blog-title").textContent = blog.title;
    document.getElementById("blog-date").textContent = blog.date;
    document.getElementById("blog-category").textContent = blog.category;
    document.getElementById("blog-image").src = blog.image;
    document.getElementById("blog-image").alt = blog.title;
    document.getElementById("blog-content").innerHTML = blog.content;
    document.title = blog.title + " - UNIPIC Studio";
  } else {
    window.location.href = "index.html";
  }
}

document.addEventListener("DOMContentLoaded", loadBlogContent);
