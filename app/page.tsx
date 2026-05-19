import Card from "@/components/card/Card";

const projects = [
  {
    icon: "🚀",
    title: "SpaceX Launches",
    description:
      "Real-time SpaceX launch explorer using the public API. Filters by year, rocket and mission status.",
    tags: ["React", "REST API"],
    accent: "#e8602c",
    iconBg: "rgba(232,96,44,0.12)",
    href: "https://v2-spacex-mission-control.vercel.app",
  },
  {
    icon: "🔐",
    title: "Auth System",
    description:
      "Login e cadastro funcional com Firebase, rotas protegidas e persistência de sessão.",
    tags: ["Firebase", "Next.js"],
    accent: "#4285f4",
    iconBg: "rgba(66,133,244,0.10)",
    href: "#",
  },
];

const stack = ["React", "TypeScript", "Tailwind", "Next.js", "Firebase"];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0f] text-[#f0ede8] font-sans">

      {/* ── Nav ── */}
      <nav className="sticky top-0 z-10 flex items-center justify-between px-10 py-5 border-b border-white/[0.07] bg-[#0d0d0f]/90 backdrop-blur-md">
        <span className="font-black text-xl tracking-tight" style={{ fontFamily: "Syne, sans-serif" }}>
          Z<span className="text-[#7c6fff]">.</span>
        </span>
        <ul className="flex gap-8 list-none">
          {["Início", "Projetos", "Sobre", "Contato"].map((item) => (
            <li key={item}>
              <a href="#" className="text-sm text-white/40 hover:text-white/90 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Hero ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-5xl mx-auto px-10 py-10 min-h-[calc(100vh-65px)]">

        {/* Left */}
        <div className="flex flex-col gap-6">
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Gilvan<br />
            <span className="text-[#7c6fff]">Zacarias</span>
          </h1>

          <p className="text-white/50 text-base leading-relaxed max-w-md font-light">
            Web frontend developer passionate about building interfaces that people actually enjoy using. Based in London.
          </p>

          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="text-xs px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-white/50"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="flex gap-3 mt-2">
            <a
              href="#projects"
              className="px-6 py-2.5 rounded-lg bg-[#7c6fff] text-white text-sm font-medium hover:bg-[#9585ff] transition-all hover:-translate-y-0.5"
            >
              See projects
            </a>
            <a
              href="/downloads/Gilvan_Zacarias_CV.docx"
              download
              className="px-6 py-2.5 rounded-lg border border-white/[0.12] text-white/50 text-sm hover:border-white/30 hover:text-white/90 transition-all"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right — foto */}
        <div className="flex justify-center">
          <div className="relative w-72 h-96">
            <div className="absolute inset-0 rounded-2xl border border-[#7c6fff]/20 bg-gradient-to-br from-[#7c6fff]/10 to-transparent" />
            <img
              src="/zack.png"
              className="absolute w-full bottom-0 left-1/2 -translate-x-1/2 w-64 h-[22rem] object-cover object-top rounded-xl"
            />
            <div className="absolute -top-3 -right-3 bg-[#0d0d0f] border border-[#7c6fff]/25 rounded-xl px-3.5 py-2.5 text-xs text-white/60">
              <strong
                className="block text-base text-[#7c6fff]"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                1+
              </strong>
              anos de exp.
            </div>
          </div>
        </div>
      </section>

      <hr className="border-white/[0.07] mx-10" />

      {/* ── Projects ── */}
      <section id="projects" className="max-w-5xl mx-auto px-10 py-20">
        <p className="text-xs font-medium tracking-[0.12em] uppercase text-[#7c6fff] mb-2">
          Projects
        </p>
        <h2
          className="text-3xl font-extrabold tracking-tight text-[#f0ede8] mb-10"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          What I built
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <Card key={project.title} {...project} />
          ))}

          {/* Card placeholder */}
          <div className="rounded-2xl border border-dashed border-[#7c6fff]/20 bg-white/[0.015] p-6 flex flex-col gap-3 opacity-50">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl bg-[#7c6fff]/08">
              ＋
            </div>
            <p className="font-bold text-[#f0ede8]/40" style={{ fontFamily: "Syne, sans-serif" }}>
              Soon
            </p>
            <p className="text-sm text-white/25 leading-relaxed">
              Always building something new.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-white/[0.07] mx-10" />

      {/* ── Contact ── */}
      <section className="max-w-5xl mx-auto px-10 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="text-xs font-medium tracking-[0.12em] uppercase text-[#7c6fff] mb-2">
            Contact
          </p>
          <h2
            className="text-3xl font-extrabold tracking-tight text-[#f0ede8] mb-1"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Let's talk?
          </h2>
          <p className="text-white/40 text-sm">Open to opportunities, freelance work, and collaborations.</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a
            href="mailto:gilvan.zacarias@outlook.com"
            className="px-5 py-2.5 rounded-lg border border-white/[0.12]  text-white text-sm font-medium transition-all hover:bg-[#7c6fff]"
          >
            gilvan.zacarias@outlook.com
          </a>
          <a
            href="github.com/GilvanZ"
            className="px-5 py-2.5 rounded-lg border border-white/[0.12] text-white text-sm font-medium transition-all hover:bg-[#7c6fff]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gilvan-zacarias-7804211b9/"
            className="px-5 py-2.5 rounded-lg border border-white/[0.12]  text-sm hover:border-white/30 hover:text-white/90 transition-all hover:bg-[#7c6fff]"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="border-t border-white/[0.07] text-center py-6 text-xs text-white/20">
        Made with Next.js and Tailwind · Zacarias © 2026
      </footer>

    </div>
  );
}
