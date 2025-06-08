import React from 'react';

const CreateMain = () => {
  return (
    <main>
      <form id="blogForm" autoComplete="off">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" required placeholder="Enter your blog title" />

        <label htmlFor="author">Author:</label>
        <input type="text" id="author" placeholder="Optional" />

        <label htmlFor="content">Content:</label>
        <textarea id="content" rows="8" required placeholder="Write your blog content here..." />

        <button type="submit">Post Blog</button>
      </form>
      <div id="successMsg" style={{ display: 'none' }}>
        Blog posted! Redirecting to home...
      </div>
    </main>
  );
};

export default CreateMain;
