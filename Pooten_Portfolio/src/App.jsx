export default function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>AL JONES T. POOTEN</h1>
        <p>
          Aspiring Virtual Assistant | Administrative Support | Web Developer
        </p>
      </header>

      <nav className="nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#works">Work Samples</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="about" className="card">
        <h2>About Me</h2>
        <p>
          Motivated IT student with experience in data entry, office work,
          online research, and basic programming using Java and PHP.
        </p>
      </section>

      <section id="projects" className="card">
        <h2>Projects</h2>
        <ul>
          <li>Java Applications</li>
          <li>PHP Systems</li>
          <li>Data Entry Projects</li>
          <li>Documentation and Reports</li>
        </ul>
      </section>

      <section id="works" className="card">
        <h2>Work Samples</h2>
        <p>Add screenshots, Google Drive links, or PDF work samples here.</p>
      </section>

      <section id="contact" className="card">
        <h2>Contact</h2>
        <p>Email: pootenaljones04@gmail.com</p>
        <p>Phone: 09387111056</p>
      </section>
    </div>
  )
}
