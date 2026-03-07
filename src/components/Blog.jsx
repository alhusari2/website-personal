import { blogPosts } from '../data/projectsData';
import './Blog.css';

export default function Blog() {
  return (
    <section className="section section-alt" id="blog">
      <div className="container">
        <h2 className="section-title">Blog</h2>
        {blogPosts.length === 0 ? (
          <p className="coming-soon">Blog posts coming soon...</p>
        ) : (
          <div className="blog-grid">
            {blogPosts.map((post, i) => (
              <article className="blog-card" key={i}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="blog-date">{post.date}</span>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
