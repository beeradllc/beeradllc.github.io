/* BeeRad LLC site styles */
:root {
  --bg: #ffffff;
  --bg-soft: #f7f7f7;
  --panel: #ffffff;
  --text: #1a1a1a;
  --muted: #4d4d4d;
  --dark: #111111;
  --gold: #ffd700;
  --gold-strong: #d9a900;
  --gold-soft: #fff3b0;
  --line: #e6e6e6;
  --shadow: rgba(0,0,0,0.08);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.7;
}
a { color: inherit; }
img { max-width: 100%; display: block; }

header {
  background: var(--dark);
  color: #fff;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
}
header nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--gold);
}
.logo a {
  color: inherit;
  text-decoration: none;
}
nav a {
  color: #fff;
  text-decoration: none;
  margin: 0 0.7rem;
  font-weight: 600;
  transition: color 0.2s ease;
}
nav a:hover,
nav a:focus {
  color: var(--gold);
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
section {
  margin: 3rem 0;
}

.hero {
  background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
  color: #fff;
  padding: 4rem 2rem;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 3rem;
}
.hero h1 {
  margin: 0 0 1rem;
  font-size: clamp(2rem, 5vw, 3.2rem);
  color: var(--gold);
}
.hero h2 {
  margin: 0 0 1rem;
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: #fff;
}
.hero p {
  max-width: 850px;
  margin: 0 auto 1.5rem;
  color: #ddd;
  font-size: 1.12rem;
}
.hero-logo {
  max-width: 400px;
  width: 100%;
  height: auto;
  margin: 0 auto 1rem;
}

.btn {
  display: inline-block;
  padding: 0.85rem 1.5rem;
  margin: 0.4rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 800;
  transition: transform 0.2s ease, background 0.2s ease;
}
.btn:hover,
.btn:focus {
  transform: translateY(-2px);
}
.btn-primary {
  background: var(--gold);
  color: #1a1a1a;
}
.btn-secondary {
  background: transparent;
  color: #fff;
  border: 2px solid var(--gold);
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text);
}
h3 {
  margin-bottom: 0.5rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}
.card {
  background: var(--panel);
  padding: 1.5rem;
  border-radius: 9px;
  border: 2px solid var(--gold);
  box-shadow: 0 2px 8px var(--shadow);
}
.card p,
.card li,
.content p,
.content li,
.about-section p,
.about-section li {
  color: var(--muted);
}

.cta {
  background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
  color: #fff;
  padding: 3rem 2rem;
  border-radius: 10px;
  text-align: center;
  margin: 3rem 0;
}
.cta h2 {
  color: var(--gold);
}
.cta a {
  color: var(--gold);
}

.faq details {
  border-bottom: 1px solid var(--line);
  padding: 1rem 0;
}
.faq summary {
  font-weight: 800;
  cursor: pointer;
}

.content,
.about-section {
  background: var(--bg-soft);
  border-radius: 9px;
  padding: 2rem;
}
.content ul,
.about-section ul {
  padding-left: 1.5rem;
}

.project {
  overflow: hidden;
}
.project img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 6px;
  margin-bottom: 1rem;
}
.badge {
  display: inline-block;
  background: var(--gold);
  color: var(--dark);
  padding: 0.25rem 0.7rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
}

footer {
  background: var(--dark);
  color: #fff;
  padding: 2rem;
  text-align: center;
  margin-top: 3rem;
}
footer p {
  color: #ddd;
  margin: 0.35rem 0;
}
footer a {
  color: var(--gold);
  text-decoration: none;
}

@media (max-width: 768px) {
  header nav {
    justify-content: center;
  }
  .logo {
    width: 100%;
    text-align: center;
  }
  nav a {
    margin: 0.35rem;
  }
  .hero {
    padding: 3rem 1.25rem;
  }
  main {
    padding: 1rem;
  }
  .content,
  .about-section {
    padding: 1.25rem;
  }
}
