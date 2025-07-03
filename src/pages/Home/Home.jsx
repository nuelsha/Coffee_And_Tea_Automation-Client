import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="sparkle-icon">✨</span>
            AAiT Innovation Lab
          </div>

          <h1 className="hero-title">
            Take a <span className="highlight">Perfect</span> Sip?
          </h1>

          <p className="hero-description">
            Experience the future of brewing with our AI-powered automated tea &
            coffee machine. Crafted perfection, delivered instantly at AAiT
            campus.
          </p>

          <div className="hero-buttons">
            <Link to="/user/coupon" className="btn-primary">
              Create Your Coupon
              <span className="arrow-icon">→</span>
            </Link>
            <button className="btn-secondary">Watch Demo</button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="star-icon">⭐</span>
              <span>4.9/5 Rating</span>
            </div>
            <div className="stat-item">
              <span className="users-icon">👥</span>
              <span>500+ Happy Students</span>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Why Choose Our Machine?</div>
            <h2 className="section-title">
              Brewing Excellence, <span className="highlight">Automated</span>
            </h2>
            <p className="section-description">
              Our state-of-the-art machine combines precision engineering with
              AI to deliver the perfect cup every single time.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon zap-icon">⚡</div>
              <h3 className="feature-title">Instant Brewing</h3>
              <p className="feature-description">
                Get your perfect cup in under 60 seconds. Our advanced heating
                system ensures optimal temperature every time.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon coffee-icon">☕</div>
              <h3 className="feature-title">Premium Quality</h3>
              <p className="feature-description">
                Sourced from the finest coffee beans and tea leaves. Each cup is
                crafted with precision and care.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon clock-icon">🕐</div>
              <h3 className="feature-title">24/7 Available</h3>
              <p className="feature-description">
                Whether its early morning study sessions or late-night
                projects, were here to fuel your ambitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge light">Simple Process</div>
            <h2 className="section-title light">
              How It <span className="highlight-light">Works</span>
            </h2>
            <p className="section-description light">
              Three simple steps to your perfect cup of coffee or tea
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-item">
              <div className="step-number">01</div>
              <h3 className="step-title">Create Coupon</h3>
              <p className="step-description">
                Generate your digital coupon through our easy-to-use interface
              </p>
            </div>

            <div className="step-item">
              <div className="step-number">02</div>
              <h3 className="step-title">Select & Customize</h3>
              <p className="step-description">
                Choose your beverage and customize strength, size, and
                temperature
              </p>
            </div>

            <div className="step-item">
              <div className="step-number">03</div>
              <h3 className="step-title">Enjoy Fresh Brew</h3>
              <p className="step-description">
                Collect your perfectly brewed drink and savor every sip
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Cups Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Students</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15</div>
              <div className="stat-label">Beverage Options</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Service Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready for Your <span className="highlight">Perfect Cup</span>?
            </h2>
            <p className="cta-description">
              Join hundreds of AAiT students who start their day with our
              premium automated brewing experience.
            </p>

            <div className="cta-buttons">
              <Link to="/user/coupon" className="btn-primary">
                Get Started Now
                <span className="arrow-icon">→</span>
              </Link>
            </div>

            <div className="cta-features">
              <div className="cta-feature">
                <span className="check-icon">✓</span>
                <span>No setup required</span>
              </div>
              <div className="cta-feature">
                <span className="check-icon">✓</span>
                <span>Instant digital coupons</span>
              </div>
              <div className="cta-feature">
                <span className="check-icon">✓</span>
                <span>Premium quality guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="footer-icon">☕</span>
              <span className="footer-title">AAiT Brew</span>
            </div>
            <p className="footer-subtitle">
              Automated Tea & Coffee Machine - Addis Ababa Institute of
              Technology
            </p>
            <div className="footer-copyright">
              © 2024 AAiT Innovation Lab. Crafted with ❤️ for coffee lovers.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
