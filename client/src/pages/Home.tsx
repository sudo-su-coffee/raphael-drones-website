/* STYLE REMINDER — Field Notes / Modern Agronomy: editorial asymmetry, tactile field-report details, Space Grotesk + DM Sans, ivory/ink/forest with Survey Orange used as a signal. */
import { FormEvent, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Crosshair,
  Layers3,
  Leaf,
  MapPinned,
  Menu,
  MoveUpRight,
  Radio,
  Ruler,
  ScanLine,
  Send,
  ShieldCheck,
  X,
} from "lucide-react";
import { toast } from "sonner";

const HERO_IMAGE = "/manus-storage/raphael-hero-aerial-farm_732731a4.jpg";
const AGRICULTURE_IMAGE = "/manus-storage/raphael-agriculture-detail_2a3054d4.jpg";
const INSPECTION_IMAGE = "/manus-storage/raphael-inspection-detail_cc691209.jpg";
const MARK_IMAGE = "/manus-storage/raphael-drone-mark_713e1a54.png";

const navItems = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Field notes", href: "#field-notes" },
  { label: "Approach", href: "#approach" },
];

const capabilities = [
  {
    index: "01",
    icon: Leaf,
    title: "Precision agriculture",
    description: "See crop stress, irrigation patterns, and field variation before they become expensive problems.",
    tag: "Grow with clarity",
  },
  {
    index: "02",
    icon: MapPinned,
    title: "Mapping & GIS",
    description: "Turn complex terrain into reliable maps, orthomosaics, and spatial context your team can use.",
    tag: "Make the terrain legible",
  },
  {
    index: "03",
    icon: ScanLine,
    title: "Inspection intelligence",
    description: "Inspect roofs, solar assets, and infrastructure with less risk and more evidence in every frame.",
    tag: "Find the detail",
  },
  {
    index: "04",
    icon: ShieldCheck,
    title: "Public safety & training",
    description: "Build capability in your team with responsible operations, practical training, and mission-ready thinking.",
    tag: "Prepare the next move",
  },
];

const principles = [
  ["01", "Observe", "We begin where the decision begins: on the ground, with the real context in view."],
  ["02", "Capture", "The right flight plan turns a pass overhead into consistent, usable evidence."],
  ["03", "Translate", "We shape aerial data into maps, findings, and actions that teams can carry forward."],
];

function scrollToId(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filmOpen, setFilmOpen] = useState(false);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    scrollToId(href);
  };

  const handleBriefSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Your brief is staged.", {
      description: "Connect this form to your inbox or CRM to make enquiries live.",
    });
    event.currentTarget.reset();
  };

  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink selection:bg-orange selection:text-paper">
      <div className="field-strip">
        <div className="container flex items-center justify-between gap-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em]">
          <span>Raphael Drones & GIS Services</span>
          <span className="hidden items-center gap-2 sm:flex"><span className="live-dot" /> Field intelligence, from above</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-xl">
        <div className="container flex h-[76px] items-center justify-between gap-8">
          <a href="#top" onClick={(event) => { event.preventDefault(); handleNav("#top"); }} className="group flex items-center gap-3" aria-label="Raphael Drones home">
            <span className="brand-mark flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-ink">
              <img src={MARK_IMAGE} alt="" className="h-8 w-8 object-contain" />
            </span>
            <span className="font-display text-[15px] font-bold uppercase leading-[0.9] tracking-[-0.03em]">
              Raphael<br />Drones
            </span>
          </a>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={(event) => { event.preventDefault(); handleNav(item.href); }} className="nav-link text-xs font-bold uppercase tracking-[0.16em] text-ink/65 hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-paper transition-transform hover:-translate-y-0.5 active:scale-[0.97] sm:flex" onClick={() => handleNav("#contact")}>
              Start a brief <ArrowUpRight size={15} strokeWidth={2.4} />
            </button>
            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition hover:border-ink hover:bg-ink hover:text-paper lg:hidden" onClick={() => setMenuOpen((current) => !current)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-ink/10 bg-paper px-4 pb-5 pt-3 lg:hidden">
            <div className="container flex flex-col gap-1">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={(event) => { event.preventDefault(); handleNav(item.href); }} className="flex items-center justify-between border-b border-ink/10 py-4 text-sm font-bold uppercase tracking-[0.14em]">
                  {item.label}<ArrowUpRight size={16} />
                </a>
              ))}
              <button onClick={() => handleNav("#contact")} className="mt-4 flex items-center justify-between rounded-full bg-orange px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] text-paper">
                Start a brief <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        )}
      </header>

      <section id="top" className="relative isolate overflow-hidden bg-forest text-paper">
        <div className="contour-overlay pointer-events-none absolute inset-0 opacity-45" />
        <div className="container relative grid min-h-[680px] items-end gap-12 pb-10 pt-20 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 lg:pb-14 lg:pt-24">
          <div className="relative z-10 max-w-[560px] self-center">
            <div className="eyebrow mb-7 flex items-center gap-3 text-paper/65"><span className="h-px w-8 bg-orange" /> Aerial intelligence for the field</div>
            <h1 className="font-display text-[clamp(3.75rem,8vw,7.5rem)] font-bold leading-[0.86] tracking-[-0.085em]">
              Data that moves at <em className="text-orange">field speed.</em>
            </h1>
            <p className="mt-8 max-w-[440px] text-[17px] leading-7 text-paper/70">
              Founded in 2024 in Rajapalayam, Tamil Nadu, Raphael Drones combines drone technology, GIS services, training, and precision agriculture to help teams work with a clearer view from above.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button onClick={() => handleNav("#contact")} className="group flex items-center gap-3 rounded-full bg-orange px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-paper transition hover:-translate-y-1 active:scale-[0.97]">
                Map a better next move <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button onClick={() => setFilmOpen(true)} className="group flex items-center gap-3 px-4 py-4 text-xs font-bold uppercase tracking-[0.15em] text-paper/75 transition hover:text-paper">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/35 transition group-hover:border-orange group-hover:bg-orange"><Radio size={14} /></span>
                See the field film
              </button>
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-[560px]">
            <div className="hero-image absolute inset-x-0 bottom-0 top-0 overflow-hidden rounded-t-[180px] rounded-br-[18px] border border-paper/15 bg-black/20 lg:left-5">
              <img src={HERO_IMAGE} alt="Drone view of geometric crop fields at sunrise" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/65 via-transparent to-transparent" />
            </div>
            <div className="absolute -left-3 top-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-paper/60 [writing-mode:vertical-rl] lg:left-0">
              17° 23' 44.6" N / 78° 29' 22.1" E
            </div>
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 lg:left-10 lg:right-10">
              <span className="rounded-full border border-paper/25 bg-forest/30 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur-sm">Field note 001</span>
              <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-paper/60"><span className="live-dot" /> Live perspective</span>
            </div>
            <div className="absolute -bottom-1 -right-1 hidden translate-x-1/4 rounded-full bg-orange p-5 text-paper shadow-2xl sm:block lg:-right-8 lg:p-7">
              <Crosshair size={34} strokeWidth={1.2} />
            </div>
          </div>
        </div>
        <div className="container relative flex items-center justify-between border-t border-paper/15 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-paper/50">
          <span>Built for decisions with a view</span>
          <button onClick={() => handleNav("#capabilities")} className="group flex items-center gap-2 text-paper/70 hover:text-orange">Scroll to explore <ArrowDownRight size={15} className="transition-transform group-hover:translate-y-1" /></button>
        </div>
      </section>

      <section className="border-b border-ink/15 bg-paper py-12 lg:py-16">
        <div className="container grid gap-8 lg:grid-cols-[1fr_1.65fr] lg:items-center">
          <div><div className="eyebrow mb-4 flex items-center gap-3 text-ink/50"><span className="h-px w-8 bg-orange" /> On the ground</div><h2 className="font-display text-3xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-4xl">Small team.<br /><span className="text-forest">Wide field of view.</span></h2></div>
          <div className="grid gap-6 sm:grid-cols-3 sm:divide-x sm:divide-ink/15"><div className="sm:px-6 sm:first:pl-0"><div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-orange">Based in</div><p className="font-display text-xl font-bold tracking-[-0.04em]">Rajapalayam</p><p className="mt-1 text-xs text-ink/50">Tamil Nadu, India</p></div><div className="sm:px-6"><div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-orange">Founded</div><p className="font-display text-xl font-bold tracking-[-0.04em]">2024</p><p className="mt-1 text-xs text-ink/50">Independent practice</p></div><div className="sm:px-6"><div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-orange">Also in focus</div><p className="font-display text-xl font-bold tracking-[-0.04em]">LiDAR + GIS</p><p className="mt-1 text-xs text-ink/50">Point clouds, maps, insight</p></div></div>
        </div>
      </section>

      <section id="capabilities" className="bg-paper py-24 lg:py-36">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.55fr_1fr] lg:gap-24">
            <div>
              <div className="eyebrow mb-6 flex items-center gap-3 text-ink/50"><span className="h-px w-8 bg-orange" /> What we see</div>
              <h2 className="font-display text-[clamp(3rem,6vw,6.5rem)] font-bold leading-[0.88] tracking-[-0.075em]">Precision,<br /><span className="text-forest">not just</span><br />perspective.</h2>
              <p className="mt-8 max-w-[340px] text-[16px] leading-7 text-ink/60">From first flight to final finding, we keep the work close to the decision it needs to support — with drone solutions, GIS, and training built for practical use.</p>
              <div className="mt-12 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-ink/45"><Ruler size={17} className="text-orange" /> Measure what matters</div>
            </div>
            <div className="divide-y divide-ink/15 border-y border-ink/15">
              {capabilities.map((capability) => {
                const Icon = capability.icon;
                return (
                  <button key={capability.index} onClick={() => toast(capability.title, { description: capability.description })} className="capability-row group grid w-full grid-cols-[42px_1fr_auto] items-start gap-4 py-7 text-left transition hover:bg-sage/30 sm:grid-cols-[54px_1fr_170px_auto] sm:gap-6">
                    <span className="pt-1 text-xs font-bold tracking-[0.16em] text-orange">{capability.index}</span>
                    <span>
                      <span className="mb-3 flex items-center gap-3 font-display text-[22px] font-bold tracking-[-0.04em] sm:text-[28px]">{capability.title}<Icon size={19} strokeWidth={1.8} className="text-orange opacity-0 transition group-hover:opacity-100" /></span>
                      <span className="block max-w-[440px] text-sm leading-6 text-ink/58">{capability.description}</span>
                    </span>
                    <span className="hidden self-center text-[10px] font-bold uppercase tracking-[0.15em] text-ink/40 sm:block">{capability.tag}</span>
                    <ArrowUpRight size={21} className="mt-1 text-ink/35 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="field-notes" className="bg-sage/40 py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 flex flex-col justify-between gap-5 border-b border-ink/15 pb-7 sm:flex-row sm:items-end">
            <div><div className="eyebrow mb-4 flex items-center gap-3 text-ink/50"><span className="h-px w-8 bg-orange" /> Selected field notes</div><h2 className="font-display text-4xl font-bold tracking-[-0.06em] sm:text-5xl">The work, in context.</h2></div>
            <button onClick={() => toast("Field notes are being prepared", { description: "A case study library can be connected here as your portfolio grows." })} className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-ink/65 hover:text-orange">Browse all notes <ArrowUpRight size={16} /></button>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1.4fr_0.85fr]">
            <article className="group relative min-h-[560px] overflow-hidden bg-forest text-paper">
              <img src={AGRICULTURE_IMAGE} alt="Agricultural crop rows seen from above" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/10 to-transparent" />
              <div className="relative flex min-h-[560px] flex-col justify-between p-6 sm:p-9"><span className="flex w-fit items-center gap-2 border border-paper/25 bg-forest/30 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur-sm"><Leaf size={13} className="text-orange" /> Precision agriculture</span><div><div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-paper/55"><span className="h-1.5 w-1.5 rounded-full bg-orange" /> Field note 002</div><h3 className="max-w-[600px] font-display text-[clamp(2.4rem,5vw,5rem)] font-bold leading-[0.9] tracking-[-0.07em]">A clearer read on every row.</h3><p className="mt-5 max-w-[430px] text-sm leading-6 text-paper/70">Crop intelligence that puts variation, irrigation, and timing in the same frame.</p></div></div>
            </article>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <article className="group relative min-h-[270px] overflow-hidden bg-ink text-paper lg:min-h-0 lg:flex-1"><img src={INSPECTION_IMAGE} alt="Drone survey over a solar installation" className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-[1.04]" /><div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" /><div className="relative flex h-full min-h-[270px] flex-col justify-end p-6"><div className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-orange">Field note 003</div><h3 className="font-display text-3xl font-bold leading-[0.92] tracking-[-0.06em]">See the detail<br />before the risk.</h3><div className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-paper/60">Asset inspection <ArrowUpRight size={15} /></div></div></article>
              <article className="relative flex min-h-[270px] flex-col justify-between overflow-hidden bg-orange p-6 text-paper lg:min-h-0 lg:flex-1"><div className="flex items-start justify-between"><span className="text-[10px] font-bold uppercase tracking-[0.2em] text-paper/70">A company milestone</span><Layers3 size={28} strokeWidth={1.2} /></div><div><div className="font-display text-[42px] font-bold leading-[0.9] tracking-[-0.08em]">Vayal<br />Vimaani</div><p className="mt-3 max-w-[250px] text-sm leading-6 text-paper/80">A community-led agri-drone initiative shared after a 3-day seminar and MoU with RVCE Sivakasi.</p></div></article>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="bg-ink py-24 text-paper lg:py-32">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div><div className="eyebrow mb-6 flex items-center gap-3 text-paper/45"><span className="h-px w-8 bg-orange" /> How we work</div><h2 className="font-display text-[clamp(3.3rem,6.5vw,7rem)] font-bold leading-[0.84] tracking-[-0.08em]">See it.<br /><span className="text-orange">Shape it.</span><br />Move.</h2><p className="mt-9 max-w-[340px] text-[16px] leading-7 text-paper/58">Aerial work is only useful when it creates momentum on the ground.</p></div>
            <div className="divide-y divide-paper/15 border-y border-paper/15">{principles.map(([number, title, description]) => <div key={number} className="grid gap-5 py-8 sm:grid-cols-[58px_180px_1fr] sm:items-start"><span className="text-xs font-bold tracking-[0.16em] text-orange">{number}</span><h3 className="font-display text-2xl font-bold tracking-[-0.05em]">{title}</h3><p className="max-w-[380px] text-sm leading-6 text-paper/55">{description}</p></div>)}</div>
          </div>
          <div className="mt-20 flex flex-col gap-5 border-t border-paper/15 pt-7 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.17em] text-paper/50"><span className="live-dot" /> Responsible by design</div><button onClick={() => handleNav("#contact")} className="group flex items-center gap-3 self-start rounded-full border border-paper/25 px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] transition hover:border-orange hover:bg-orange">Talk through a mission <MoveUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button></div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-paper py-24 lg:py-32">
        <div className="contour-overlay pointer-events-none absolute right-[-20%] top-[-30%] h-[800px] w-[800px] opacity-35" />
        <div className="container relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div><div className="eyebrow mb-6 flex items-center gap-3 text-ink/50"><span className="h-px w-8 bg-orange" /> Your next field note</div><h2 className="max-w-[600px] font-display text-[clamp(3.4rem,7vw,7.5rem)] font-bold leading-[0.84] tracking-[-0.085em]">Let’s make the <span className="text-forest">unknown</span> useful.</h2><p className="mt-8 max-w-[390px] text-[16px] leading-7 text-ink/60">Tell us what needs a clearer view. We’ll help shape the right flight, capture, and output for the decision ahead.</p><div className="mt-10 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-ink/45"><Send size={16} className="text-orange" /> No pressure. Just a useful first conversation.</div></div>
          <form onSubmit={handleBriefSubmit} className="relative border-t border-ink/15 pt-7 lg:mt-10">
            <div className="grid gap-7 sm:grid-cols-2"><label className="field-label">Your name<input required name="name" placeholder="Name" /></label><label className="field-label">Work email<input required type="email" name="email" placeholder="you@company.com" /></label></div>
            <label className="field-label mt-7 block">What are you working on?<textarea required name="brief" rows={4} placeholder="A field, site, asset, or team that needs a better view..." /></label>
            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><button type="submit" className="group flex items-center justify-center gap-3 rounded-full bg-ink px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-paper transition hover:-translate-y-1 active:scale-[0.97]">Send the brief <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button><span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-ink/45"><Check size={15} className="text-orange" /> Built for a clear next step</span></div>
          </form>
        </div>
      </section>

      <footer className="bg-forest text-paper">
        <div className="container flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between"><div><div className="mb-5 flex items-center gap-3"><span className="brand-mark flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-paper"><img src={MARK_IMAGE} alt="" className="h-7 w-7 object-contain" /></span><span className="font-display text-sm font-bold uppercase leading-[0.9] tracking-[-0.03em]">Raphael<br />Drones</span></div><p className="max-w-[280px] text-sm leading-6 text-paper/55">Drones, GIS, training, and a more useful view from above.</p></div><div className="flex flex-col gap-3 text-right text-[10px] font-bold uppercase tracking-[0.17em] text-paper/50"><button onClick={() => handleNav("#top")} className="flex items-center justify-end gap-2 hover:text-orange">Back to top <ArrowUpRight size={14} /></button><span>© 2026 Raphael Drones & GIS Services</span></div></div>
      </footer>

      {filmOpen && <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-5 backdrop-blur-md" role="dialog" aria-modal="true" aria-label="Field film preview"><div className="relative w-full max-w-4xl overflow-hidden bg-forest text-paper shadow-2xl"><button onClick={() => setFilmOpen(false)} className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-paper/30 bg-forest/50 text-paper backdrop-blur-sm transition hover:bg-orange" aria-label="Close field film"><X size={18} /></button><div className="relative aspect-video"><img src={HERO_IMAGE} alt="Aerial view of fields" className="h-full w-full object-cover opacity-60" /><div className="absolute inset-0 bg-forest/45" /><div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"><span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange"><Radio size={22} /></span><p className="eyebrow text-paper/65">Field film / 00:42</p><h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.06em] sm:text-6xl">The view changes<br /><span className="text-orange">the next move.</span></h2><p className="mt-5 max-w-md text-sm leading-6 text-paper/65">A motion-led film slot for your flight footage, team stories, and on-the-ground outcomes.</p></div></div></div></div>}
    </main>
  );
}
