/* STYLE REMINDER — Minimal optimistic archive: warm sand, deep navy, copper signals, generous space, and simple list-first browsing. */
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, ChevronDown, Filter, Instagram, Linkedin, MapPin, X } from "lucide-react";
import { Link } from "wouter";

const LOGO = "/manus-storage/raphael-logo_4f5b0bc1.png";

type Entry = { year: string; category: "Milestone" | "Training" | "Field work"; title: string; summary: string; detail: string; image: string; alt: string };

const entries: Entry[] = [
  { year: "2026", category: "Milestone", title: "Vayal Vimaani application demo launch", summary: "A farmer-first drone service idea brought into the public conversation.", detail: "The Vayal Vimaani application was introduced during a Raphael Drones and GIS Services milestone event, connecting agricultural drone work with practical support for farmers.", image: "/manus-storage/raphael-agri-drone-spraying_6c1d95c4.jpg", alt: "Agricultural drone spraying a green crop field" },
  { year: "2026", category: "Training", title: "RVCE Sivakasi seminar and collaboration", summary: "A shared space for drone technology, GIS, skill development, and innovation.", detail: "Raphael Drones participated in an RVCE Sivakasi seminar and collaboration milestone focused on building useful knowledge around drone technology and precision agriculture.", image: "/manus-storage/raphael-rpto-training_5cdcbb57.jpg", alt: "Drone pilot trainee practicing a field operation with an instructor" },
  { year: "2024", category: "Milestone", title: "Raphael Drones begins", summary: "Founded in Tamil Nadu with a practical view of aerial technology.", detail: "Raphael Drones and GIS Services began from Rajapalayam, bringing together drone solutions, GIS services, precision agriculture, and hands-on training.", image: "/manus-storage/raphael-ceo_90095459.webp", alt: "Raphael Drones founder in the company workshop" },
  { year: "Ongoing", category: "Field work", title: "From field capture to useful direction", summary: "A growing archive of agricultural, GIS, LiDAR, and learning work.", detail: "This archive is designed for the team to keep adding verified work, training moments, product demonstrations, and community milestones over time.", image: "/manus-storage/raphael-inspection-detail_cc691209.jpg", alt: "Drone inspection work over a modern industrial site" },
];

export default function Gallery() {
  const [filter, setFilter] = useState<"All" | Entry["category"]>("All");
  const [open, setOpen] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<Entry | null>(null);
  const visible = filter === "All" ? entries : entries.filter((entry) => entry.category === filter);

  useEffect(() => { document.title = "Gallery — Raphael Drones"; }, []);
  useEffect(() => { document.body.style.overflow = lightbox ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [lightbox]);

  return (
    <div className="archive-page">
      <header className="archive-header"><div className="archive-topline"><span>Raphael Drones & GIS Services</span><span>Rajapalayam · Tamil Nadu · India</span></div><div className="site-width archive-nav"><Link href="/" className="archive-brand"><img src={LOGO} alt="Raphael Drones" /></Link><nav><Link href="/">Home</Link><Link href="/gallery" className="active">Gallery</Link><Link href="/journal">Journal</Link></nav><a href="https://www.linkedin.com/company/raphael-drones-and-gis-services" target="_blank" rel="noreferrer" className="archive-social"><Linkedin size={15} /> LinkedIn <ArrowUpRight size={13} /></a></div></header>
      <main>
        <section className="archive-hero"><div className="site-width archive-hero-grid"><div><Link href="/" className="back-link"><ArrowLeft size={15} /> Back to Raphael Drones</Link><div className="eyebrow copper-line">Gallery / field archive</div><h1>Work that<br /><span>moves forward.</span></h1></div><div className="archive-intro"><p>A simple, growing record of the people, places, training, and field work behind Raphael Drones.</p><div className="archive-location"><MapPin size={15} /> Rajapalayam, Tamil Nadu</div></div></div></section>
        <section className="archive-list-section"><div className="site-width"><div className="archive-toolbar"><div><span className="eyebrow copper-line">Verified archive</span><strong>{visible.length} visible records</strong></div><div className="filter-wrap"><Filter size={14} />{(["All", "Milestone", "Training", "Field work"] as const).map((item) => <button key={item} className={filter === item ? "filter-button active" : "filter-button"} onClick={() => setFilter(item)}>{item}</button>)}</div></div><div className="timeline-list">{visible.map((entry) => <article className={open === entry.title ? "timeline-item open" : "timeline-item"} key={entry.title}><div className="timeline-year">{entry.year}</div><div className="timeline-marker" /><div className="timeline-content"><div className="timeline-meta"><span>{entry.category}</span><button aria-expanded={open === entry.title} aria-label={`Show details for ${entry.title}`} onClick={() => setOpen(open === entry.title ? null : entry.title)}><ChevronDown size={17} /></button></div><div className="timeline-entry-grid"><button className="timeline-thumb" onClick={() => setLightbox(entry)} aria-label={`View image for ${entry.title}`}><img src={entry.image} alt={entry.alt} /><span>View image</span></button><div><h2>{entry.title}</h2><p>{entry.summary}</p>{open === entry.title && <div className="timeline-detail"><p>{entry.detail}</p><span>More verified entries can be added here as the archive grows.</span></div>}</div></div></div></article>)}</div><div className="archive-empty"><strong>Your next milestone belongs here.</strong><span>Keep adding real events, field visits, training sessions, and project images to build a living record of the work.</span></div></div></section>
      </main>
      <footer className="archive-footer"><div className="site-width archive-footer-inner"><div><img src={LOGO} alt="Raphael Drones" /><p>Practical aerial technology for fields, teams, and what comes next.</p></div><div className="archive-footer-links"><Link href="/journal">Read the Journal <ArrowUpRight size={14} /></Link><a href="https://www.linkedin.com/company/raphael-drones-and-gis-services" target="_blank" rel="noreferrer"><Linkedin size={14} /> LinkedIn</a><a href="https://www.instagram.com/raphael_drones_gis_services/" target="_blank" rel="noreferrer"><Instagram size={14} /> Instagram</a></div></div></footer>
      {lightbox && <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`${lightbox.title} image`} onClick={() => setLightbox(null)}><button className="lightbox-close" aria-label="Close image viewer" onClick={() => setLightbox(null)}><X size={22} /></button><div className="lightbox-frame" onClick={(event) => event.stopPropagation()}><img src={lightbox.image} alt={lightbox.alt} /><div><span>{lightbox.category} · {lightbox.year}</span><strong>{lightbox.title}</strong></div></div></div>}
    </div>
  );
}
