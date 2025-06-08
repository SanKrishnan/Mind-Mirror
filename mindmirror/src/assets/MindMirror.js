// Utility: Load blogs from localStorage
function loadBlogs() {
    return JSON.parse(localStorage.getItem('blogs')) || [];
}

// Utility: Save blogs to localStorage
function saveBlogs(blogs) {
    localStorage.setItem('blogs', JSON.stringify(blogs));
}

// Render blog list on homepage
function renderBlogList() {
    const blogList = document.getElementById('blog-list');
    if (!blogList) return; // Not on homepage

    let blogs = loadBlogs();
    if (blogs.length === 0) {
        blogList.innerHTML = `<p style="text-align:center;color:#888;">No blog posts yet. Be the first to create one!</p>`;
        return;
    }
    blogList.innerHTML = ""; // Clear existing
    blogs.slice().reverse().forEach(blog => {
        const post = document.createElement('div');
        post.className = 'blog-post';
        post.innerHTML = `
            <div class="blog-title">${blog.title}</div>
            <div class="blog-meta">By ${blog.author || "Anonymous"} on ${new Date(blog.date).toLocaleString()}</div>
            <div class="blog-content">${blog.content.replace(/\n/g, "<br>")}</div>
        `;
        blogList.appendChild(post);
    });
}

// Handle blog creation on create.html
function setupBlogForm() {
    const form = document.getElementById('blogForm');
    if (!form) return; // Not on create page

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('title').value.trim();
        const author = document.getElementById('author').value.trim();
        const content = document.getElementById('content').value.trim();
        if (!title || !content) return;

        let blogs = loadBlogs();
        blogs.push({
            title,
            author,
            content,
            date: new Date().toISOString()
        });
        saveBlogs(blogs);

        document.getElementById('successMsg').style.display = 'block';
        setTimeout(() => window.location.href = 'index.html', 1200);
    });
}

// Initialize based on page
document.addEventListener('DOMContentLoaded', function() {
    renderBlogList();
    setupBlogForm();
});
