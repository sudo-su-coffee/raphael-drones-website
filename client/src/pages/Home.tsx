/* STYLE REMINDER — Clear Signal: logo-led, fast, spacious, black/white/soft-gray canvas with Raphael Cyan #5DE7E6 for actions and flight-path accents. */
import { FormEvent, useState } from "react";
import { ArrowRight, Check, ChevronDown, Menu, MapPin, Mail, Phone, X } from "lucide-react";
import { toast } from "sonner";

const LOGO = "/manus-storage/raphael-logo_4f5b0bc1.png";
const WHITE_LOGO = "/manus-storage/raphael-logo-white_d95b054a.png";
const HERO = "/manus-storage/raphael-hero-aerial-farm_732731a4.jpg";
const AGRICULTURE = "/manus-storage/raphael-agriculture-detail_2a3054d4.jpg";
const INSPECTION = "/manus-storage/raphael-inspection-detail_cc691209.jpg";

const services = [
  { number: "01", title: "Agricultural drone spraying", text: "Efficient, precise spraying support for farms and field teams." },
  { number: "02", title: "GIS & LiDAR services", text: "Surveying, mapping, feature extraction, and point-cloud workflows." },
  { number: "03", title: "Drone training", text: "Practical learning for students, pilots, and teams building real capability." },
  { number: "04", title: "Mapping & inspection", text: "Indoor mapping, infrastructure views, and clearer site information." },
  { number: "05", title: "Drone light shows", text: "Creative aerial experiences for events and public moments." },
  { number: "06", title: "Drone solutions", text: "Technology, equipment, and support shaped around your requirement." },
];

const nav = ["Services", "About", "Founder", "Training", "Contact"];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menu, setMenu] = useState(false);

  const navigate = (label: string) => {
    setMenu(false);
    scrollTo(`#${label.toLowerCase()}`);
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Thanks — your enquiry is ready to send.", { description: "Connect this form to your inbox or CRM to receive submissions." });
    event.currentTarget.reset();
  };

  return (
    <main id="top" className="min-h-screen bg-white text-night">
      <div className="topline"><div className="site-width flex items-center justify-between gap-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em]"><span>Raphael Drones & GIS Services</span><span className="hidden sm:block">Rajapalayam · Tamil Nadu · India</span></div></div>
      <header className="site-header"><div className="site-width flex h-[82px] items-center justify-between gap-8"><a href="#top" className="logo-lockup" aria-label="Raphael Drones home"><img src={LOGO} alt="Raphael Drones" /></a><nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">{nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={(event) => { event.preventDefault(); navigate(item); }} className="header-link">{item}</a>)}</nav><div className="flex items-center gap-3"><a href="mailto:info@raphaeldrones.com" className="header-cta hidden sm:inline-flex">Talk to our team <ArrowRight size={15} /></a><button className="menu-button md:hidden" onClick={() => setMenu(!menu)} aria-label={menu ? "Close menu" : "Open menu"}>{menu ? <X size={20} /> : <Menu size={20} />}</button></div></div>{menu && <div className="mobile-menu md:hidden"><div className="site-width flex flex-col">{nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={(event) => { event.preventDefault(); navigate(item); }} className="mobile-link">{item}<ArrowRight size={17} /></a>)}<a href="mailto:info@raphaeldrones.com" className="mobile-cta">Talk to our team <ArrowRight size={16} /></a></div></div>}</header>

      <section className="hero-section"><div className="site-width hero-grid"><div className="hero-copy"><div className="eyebrow cyan-line">Aerial technology · GIS · training</div><h1>Better decisions<br /><span>start with</span><br /><strong>a better view.</strong></h1><p>Raphael Drones brings drone solutions, GIS services, precision agriculture, and practical training together for people building what comes next.</p><div className="hero-actions"><button onClick={() => scrollTo("#contact")} className="primary-button">Start a conversation <ArrowRight size={17} /></button><button onClick={() => scrollTo("#services")} className="text-button">Explore services <ArrowRight size={16} /></button></div><div className="hero-meta"><span>Founded 2024</span><span className="meta-dot" /><span>Made in Tamil Nadu</span></div></div><div className="hero-visual"><div className="hero-image"><img src={HERO} alt="Aerial view of agricultural fields" /></div><div className="hero-badge"><span className="badge-dot" /> Precision from above</div><div className="flight-path" /><div className="mission-panel"><span className="mission-kicker">Mission / 001</span><strong>Field intelligence</strong><span className="mission-status"><i /> Signal ready</span></div><div className="hero-coordinates">09° 55' N<br />77° 35' E</div></div></div></section>

      <section id="services" className="section services-section"><div className="site-width"><div className="section-heading"><div><div className="eyebrow cyan-line">What we do</div><h2>Practical technology.<br /><span>Real-world use.</span></h2></div><p>From a single field survey to a larger GIS workflow, we make aerial technology easier to use and easier to act on.</p></div><div className="service-grid">{services.map((service) => <button key={service.number} onClick={() => toast(service.title, { description: service.text })} className="service-card"><span className="service-number">{service.number}</span><span className="service-title">{service.title}<ArrowRight size={18} /></span><span className="service-text">{service.text}</span></button>)}</div></div></section>

      <section id="about" className="section about-section"><div className="site-width about-grid"><div className="about-image"><img src={AGRICULTURE} alt="Agricultural field captured from above" /><span className="image-label">Field perspective / 01</span></div><div className="about-copy"><div className="eyebrow cyan-line">About Raphael Drones</div><h2>Built close to<br /><span>the ground.</span></h2><p>We are an independent drone and GIS services company based in Rajapalayam, Tamil Nadu. Our work connects aerospace technology with farming, mapping, learning, and local problem-solving.</p><p>We believe the best aerial work is not just impressive to look at. It gives a farmer, a student, a surveyor, or a decision-maker something useful to do next.</p><a href="https://in.linkedin.com/company/raphael-drones-and-gis-services" target="_blank" rel="noreferrer" className="outline-button">See our company profile <ArrowRight size={16} /></a><div className="about-facts"><div><strong>2024</strong><span>Founded</span></div><div><strong>2–10</strong><span>Team size</span></div><div><strong>India</strong><span>Based in</span></div></div></div></div></section>

      <section id="founder" className="founder-section"><div className="site-width founder-grid"><div className="founder-photo"><img src="/manus-storage/raphael-ceo_90095459.webp" alt="CEO and Founder of Raphael Drones in the company workshop" /><div className="founder-photo-label"><span className="badge-dot" /> Founder / CEO</div></div><div className="founder-copy"><div className="eyebrow cyan-line">The person behind the view</div><h2>Built with<br /><span>purpose.</span></h2><p>Raphael Drones was founded to bring practical drone technology, GIS, and precision agriculture closer to the people and teams who can use it every day.</p><p>From the workshop to the field, the company is shaped by a simple belief: technology matters most when it makes real work clearer, safer, and more capable.</p><div className="founder-signoff"><strong>CEO & Founder</strong><span>Raphael Drones & GIS Services</span></div></div></div></section>

      <section id="training" className="training-section"><div className="site-width training-grid"><div><div className="eyebrow cyan-line">Learn to operate</div><h2>Skills that<br /><span>take flight.</span></h2><p>We support the next generation of drone pilots, GIS practitioners, and innovators through practical training and hands-on learning.</p><a href="mailto:info@raphaeldrones.com?subject=Training enquiry" className="primary-button">Ask about training <ArrowRight size={17} /></a></div><div className="training-list"><div className="training-list-head"><span>Training focus</span><span>Built for</span></div>{["Drone technology", "GIS & spatial thinking", "Precision agriculture", "Pilot readiness"].map((item, index) => <div key={item} className="training-row"><span className="row-index">0{index + 1}</span><strong>{item}</strong><span className="row-check"><Check size={15} /></span></div>)}</div></div></section>

      <section className="section capability-section"><div className="site-width capability-grid"><div className="capability-copy"><div className="eyebrow cyan-line">From data to direction</div><h2>See more.<br /><span>Do more.</span></h2><p>We turn aerial capture into maps, evidence, and workflows that help teams move with more confidence.</p><a href="mailto:info@raphaeldrones.com?subject=Project enquiry" className="outline-button">Discuss your project <ArrowRight size={16} /></a></div><div className="capability-image"><img src={INSPECTION} alt="Aerial inspection of a solar installation" /><div className="capability-tag"><MapPin size={15} /> Survey-ready information</div></div></div></section>

      <section id="contact" className="contact-section"><div className="site-width contact-grid"><div><img src={WHITE_LOGO} alt="Raphael Drones" className="contact-logo" /><div className="eyebrow cyan-line">Let’s talk</div><h2>Have a project<br /><span>in view?</span></h2><p>Tell us what you are working on. We’ll help you find a practical next step.</p><div className="contact-details"><a href="mailto:info@raphaeldrones.com"><Mail size={17} /> info@raphaeldrones.com</a><a href="tel:+919025821440"><Phone size={17} /> Talk to our team</a><a href="https://maps.google.com/?q=Perumalpatti,Tenkasi,Tamil+Nadu" target="_blank" rel="noreferrer"><MapPin size={17} /> Perumalpatti, Tenkasi, Tamil Nadu</a></div></div><form className="contact-form" onSubmit={submit}><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label><label>What do you need help with?<textarea required name="message" rows={4} placeholder="Tell us a little about the field, site, team, or idea..." /></label><button className="primary-button" type="submit">Send enquiry <ArrowRight size={17} /></button></form></div></section>

      <footer className="footer"><div className="site-width flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between"><span className="footer-brand"><img src={WHITE_LOGO} alt="Raphael Drones" /> <span>© 2026 Raphael Drones & GIS Services</span></span><div className="flex gap-6"><a href="#top" onClick={(event) => { event.preventDefault(); scrollTo("#top"); }}>Back to top</a><a href="https://www.raphaeldrones.com" target="_blank" rel="noreferrer">raphaeldrones.com</a></div></div></footer>
    </main>
  );
}
