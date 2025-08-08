import '../css/herosection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-bg"></div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Welcome to <span style={{ color: '#facc15' }}>My Anime List</span>
          </h1>
          <p className="hero-description">
            This is my website💻 to track anime which I had watched in past few years,
            and discover new gems ✨
          </p>
          <a href="#anime-list" className="hero-button">
            Browse Anime
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
