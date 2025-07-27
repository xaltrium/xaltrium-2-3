import { motion } from "framer-motion";

const Section = ({ children, className }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className={`max-w-5xl mx-auto p-8 ${className}`}
  >
    {children}
  </motion.section>
);

export default function App() {
  return (
    <main className="bg-white text-dark">
      <header className="sticky top-0 bg-white shadow z-50 flex items-center justify-between px-6 py-4">
        <img src="/logo.png" alt="Xaltrium logo" className="h-10" />
        <nav className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#services" className="hover:text-primary">Services</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
      </header>

      <section className="bg-gradient-to-br from-primary to-accent text-white py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Xaltrium</h1>
        <p className="text-lg md:text-xl mb-6">Bold design. Smart strategy. AI-powered creativity.</p>
        <a href="#contact" className="inline-block bg-white text-dark px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Let's Work</a>
      </section>

      <Section className="text-center" id="about">
        <h2 className="text-3xl font-bold mb-4 text-primary">About</h2>
        <p className="text-gray-700">Xaltrium is a creative agency combining cutting-edge design, targeted marketing, and AI tools to build next-gen brands.</p>
      </Section>

      <Section id="services">
        <h2 className="text-3xl font-bold mb-8 text-secondary text-center">Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {["Branding", "Web Design", "AI Tools"].map(service => (
            <motion.div
              key={service}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 p-6 rounded-2xl shadow text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-gray-600">High-impact {service.toLowerCase()} to grow your brand.</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="contact" className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-teal">Let’s Talk</h2>
        <p className="text-gray-700 mb-6">Ready to make something incredible? Let's connect.</p>
        <a href="mailto:your@email.com" className="bg-dark text-white px-6 py-3 rounded-full font-semibold hover:bg-black transition">Contact Us</a>
      </Section>

      <footer className="text-center text-gray-400 text-sm py-6">
        © {new Date().getFullYear()} Xaltrium. All rights reserved.
      </footer>
    </main>
  );
}