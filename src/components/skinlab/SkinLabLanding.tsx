import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Instagram,
  Phone,
  MapPin,
  Play,
  Sparkles,
  Syringe,
  Waves,
  Gem,
  UserRound,
  HeartHandshake,
  Check,
  X,
  ChevronDown,
} from "lucide-react";
import logoAsset from "@/assets/skinlab-logo.png.asset.json";
import logoDarkAsset from "@/assets/skinlab-logo-dark.png.asset.json";
import teamAsset from "@/assets/team.png.asset.json";
import browsAsset from "@/assets/before-after-brows.jpg.asset.json";
import beforeLipsAsset from "@/assets/before-lips.jpg.asset.json";
import afterLipsAsset from "@/assets/after-lips.jpg.asset.json";

const INSTAGRAM = "https://www.instagram.com/skinlab_medspa/";
const PHONE_DISPLAY = "+1 (980) 309-3768";
const PHONE_HREF = "tel:+19803093768";
const ADDRESS = "4915 Albemarle Road, Charlotte, NC 28205";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`px-6 md:px-10 lg:px-16 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase font-medium text-gold">
      <span className="h-px w-8 bg-gold/60" />
      {children}
    </span>
  );
}

function CTAButton({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: "primary" | "ghost" | "gold";
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[13px] tracking-[0.22em] uppercase font-medium transition-all duration-300";
  const styles = {
    primary: "bg-forest text-cream hover:bg-forest-deep",
    gold: "bg-gold text-forest hover:bg-gold-soft",
    ghost: "border border-gold/60 text-gold hover:bg-gold hover:text-forest",
  };
  return (
    <a href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </a>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Why Skin Lab", "#why"],
    ["Treatments", "#treatments"],
    ["Results", "#results"],
    ["Our Team", "#team"],
    ["FAQ", "#faq"],
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-forest/95 backdrop-blur border-b border-gold/15">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16 h-24 md:h-28 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <img src={logoAsset.url} alt="Skin Lab Med Spa" className="h-28 md:h-44 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[12px] tracking-[0.22em] uppercase text-cream/80 hover:text-gold transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-cream/70 hover:text-gold transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="#consultation"
            className="hidden md:inline-flex items-center px-5 py-2.5 border border-gold text-gold text-[11px] tracking-[0.24em] uppercase hover:bg-gold hover:text-forest transition-colors"
          >
            Book Consultation
          </a>
          <button
            className="lg:hidden text-cream"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="space-y-1.5">
              <span className="block h-px w-6 bg-cream" />
              <span className="block h-px w-6 bg-cream" />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-gold/15 bg-forest">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-[12px] tracking-[0.24em] uppercase text-cream/80 hover:text-gold"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative pt-36 md:pt-44 pb-20 md:pb-28 bg-forest text-cream overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #B08B58 0%, transparent 50%), radial-gradient(circle at 80% 60%, #FFE3B4 0%, transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10 lg:px-16 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="lg:col-span-7"
        >
          <h1 className="mt-6 font-display text-[42px] leading-[1.05] md:text-6xl lg:text-[68px] font-light tracking-tight">
            Reclaim the pinnacle of{" "}
            <em className="text-gold not-italic font-normal">radiance</em>,{"\u00A0"}before time
            dulls your glow.
          </h1>
          <p className="mt-8 max-w-xl text-cream/75 leading-relaxed text-[15px] md:text-base">
            Facial fatigue, fine lines and volume loss quietly diminish your presence
            every day. Skin Lab Med Spa empowers you to sculpt your features and
            achieve flawless skin through state-of-the-art aesthetic technology,
            advanced procedures and remarkably natural results.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTAButton href="#consultation" variant="gold">
              Request Your Consultation
            </CTAButton>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[
              ["Boutique", "By-appointment care"],
              ["Medical", "Grade technology"],
              ["Natural", "Never overdone"],
            ].map(([t, s]) => (
              <div key={t}>
                <div className="font-display text-2xl text-gold">{t}</div>
                <div className="mt-1 text-[11px] tracking-[0.18em] uppercase text-cream/50">
                  {s}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute inset-0 border border-gold/30 pointer-events-none" />
          <div className="p-5">
            <img
              src={teamAsset.url}
              alt="Leticia and Guilherme, founding specialists at Skin Lab Med Spa"
              className="w-full h-[480px] md:h-[580px] object-cover object-top"
            />
          </div>
          <div className="absolute bottom-9 left-9 right-9 bg-forest/85 backdrop-blur px-5 py-4 border-l-2 border-gold">
            <div className="text-[10px] tracking-[0.28em] uppercase text-gold">
              Founding Specialists
            </div>
            <div className="mt-1 font-display text-xl">Leticia & Guilherme</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- WHY / DIFFERENTIALS ---------------- */
function Why() {
  const items = [
    {
      icon: Syringe,
      title: "Premium Injectables",
      body: "Strategically administered Botox and dermal fillers for facial balancing and wrinkle prevention.",
    },
    {
      icon: Waves,
      title: "Ultraformer MPT",
      body: "The gold standard in non-invasive face and body lifting — deep-layer collagen stimulation without surgery.",
    },
    {
      icon: Sparkles,
      title: "The Original Hydrafacial",
      body: "The red-carpet treatment for instant skin resurfacing, deep extraction and high-potency hydration.",
    },
    {
      icon: Gem,
      title: "Advanced Techniques",
      body: "High-performance aesthetic procedures engineered for maximum patient comfort.",
    },
    {
      icon: HeartHandshake,
      title: "Consultative Evaluations",
      body: "A tailored assessment of your goals — we recommend only what elevates your unique features.",
    },
    {
      icon: UserRound,
      title: "Exclusive Boutique Care",
      body: "Every session delivered personally by our founding specialists, Leticia and Guilherme.",
    },
  ];
  return (
    <Section id="why" className="bg-ivory">
      <div className="max-w-3xl">
        <h2 className="mt-5 font-display text-4xl md:text-5xl text-forest font-light leading-tight">
          A tailored age-management plan for a consistently refreshed presence.
        </h2>
        <p className="mt-6 text-forest/70 leading-relaxed">
          Refining your image amplifies your personal power. Skin Lab pairs
          next-generation medical technology with a sophisticated eye for advanced
          aesthetics to keep you looking pristine and elegant at any age.
        </p>
      </div>

      <div className="mt-14 relative aspect-video w-full bg-forest overflow-hidden group cursor-pointer">
        <img
          src={teamAsset.url}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-forest/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-cream">
          <div className="w-20 h-20 rounded-full border border-gold/70 flex items-center justify-center group-hover:bg-gold transition-colors">
            <Play className="h-6 w-6 fill-current" />
          </div>
          <div className="mt-6 text-[11px] tracking-[0.28em] uppercase text-gold">
            Watch the Skin Lab Experience
          </div>
          <div className="mt-2 font-display text-2xl md:text-3xl text-cream text-center max-w-md px-6">
            Advanced aesthetic technology & natural results
          </div>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-forest/10">
        {items.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="bg-ivory p-8 hover:bg-sand transition-colors group"
          >
            <Icon
              className="h-7 w-7 text-gold group-hover:scale-110 transition-transform"
              strokeWidth={1.25}
            />
            <h3 className="mt-5 font-display text-xl text-forest">{title}</h3>
            <p className="mt-3 text-sm text-forest/70 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- OBJECTIONS ---------------- */
function Objections() {
  const items = [
    {
      fear: "I'm afraid Botox or fillers will look fake or overdone.",
      truth:
        "Our benchmark is natural elegance. We meticulously map your anatomy to soften aging while preserving expression.",
    },
    {
      fear: "I'll need weeks of downtime after any treatment.",
      truth:
        "Most of our signature procedures — Hydrafacial, Ultraformer MPT — require zero downtime. Resume life immediately.",
    },
    {
      fear: "It's too early. I don't need aesthetic care yet.",
      truth:
        "Prevention outperforms correction. Starting now protects structure and radiance for decades to come.",
    },
    {
      fear: "Med spas all deliver the same cookie-cutter results.",
      truth:
        "Every plan at Skin Lab is authored personally by Leticia and Guilherme — engineered for your face, not a template.",
    },
  ];
  return (
    <Section id="objections" className="bg-forest text-cream">
      <div className="max-w-2xl">
        <h2 className="mt-5 font-display text-4xl md:text-5xl font-light leading-tight">
          The truths that separate boutique care from the rest.
        </h2>
      </div>
      <div className="mt-14 grid md:grid-cols-2 gap-6">
        {items.map(({ fear, truth }, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="border border-gold/20 p-8 hover:border-gold/50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <X className="h-5 w-5 text-gold/60 shrink-0 mt-1" />
              <p className="italic text-cream/70">"{fear}"</p>
            </div>
            <div className="mt-5 flex items-start gap-3">
              <Check className="h-5 w-5 text-gold shrink-0 mt-1" />
              <p className="text-cream leading-relaxed">{truth}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- TREATMENTS ---------------- */
function Treatments() {
  const list = [
    {
      name: "Botox & Dermal Fillers",
      tag: "Premium Injectables",
      body: "Facial balancing, wrinkle prevention and structural restoration mapped to your unique anatomy.",
    },
    {
      name: "Ultraformer MPT",
      tag: "Non-Invasive Lifting",
      body: "Micro-focused ultrasound generates intense collagen synthesis from the deepest structural layers.",
    },
    {
      name: "The Original Hydrafacial",
      tag: "Signature Facial",
      body: "Vortex-fusion technology for instant resurfacing, deep extraction and high-potency hydration.",
    },
    {
      name: "Age-Management Blueprint",
      tag: "Custom Plan",
      body: "A monthly maintenance protocol tailored to keep cellular aging at bay and radiance consistent.",
    },
    {
      name: "Body Contouring",
      tag: "Firming & Sculpting",
      body: "Advanced protocols targeting localized fat, laxity and skin quality across the body.",
    },
    {
      name: "Medical-Grade Skincare",
      tag: "At-Home Protocols",
      body: "Curated home regimens that extend and amplify every in-clinic result.",
    },
  ];
  return (
    <Section id="treatments" className="bg-sand">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-forest font-light leading-tight">
            Advanced procedures engineered for elegance.
          </h2>
        </div>
        <a
          href="#consultation"
          className="text-[12px] tracking-[0.24em] uppercase text-forest/70 hover:text-gold border-b border-forest/20 hover:border-gold pb-1 w-fit"
        >
          Design My Plan →
        </a>
      </div>
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((t) => (
          <motion.div
            key={t.name}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="bg-ivory p-8 border-t-2 border-gold/40 hover:border-gold transition-colors"
          >
            <div className="text-[10px] tracking-[0.28em] uppercase text-gold">
              {t.tag}
            </div>
            <h3 className="mt-3 font-display text-2xl text-forest">{t.name}</h3>
            <p className="mt-4 text-sm text-forest/70 leading-relaxed">{t.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- RESULTS ---------------- */
function Results() {
  const items = [
    {
      title: "Brow Lamination & Design",
      subtitle: "Redefining natural architecture",
      before: browsAsset.url,
      after: browsAsset.url,
      single: true,
    },
    {
      title: "Lip Enhancement",
      subtitle: "Natural volume, refined proportion",
      before: afterLipsAsset.url,
      after: beforeLipsAsset.url,
      single: false,
    },
  ];
  return (
    <Section id="results" className="bg-ivory">
      <div className="max-w-2xl">
        <h2 className="mt-5 font-display text-4xl md:text-5xl text-forest font-light leading-tight">
          Before & after — natural, never overdone.
        </h2>
      </div>
      <div className="mt-14 grid md:grid-cols-2 gap-8">
        {items.map((it) => (
          <div key={it.title} className="group">
            {it.single ? (
              <div className="relative overflow-hidden">
                <img
                  src={it.before}
                  alt={it.title}
                  className="w-full h-[520px] object-cover"
                />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-1">
                <div className="relative">
                  <img
                    src={it.before}
                    alt={`${it.title} — before`}
                    className="w-full h-[520px] object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-forest/85 text-cream px-3 py-1 text-[10px] tracking-[0.28em] uppercase">
                    Before
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={it.after}
                    alt={`${it.title} — after`}
                    className="w-full h-[520px] object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-gold text-forest px-3 py-1 text-[10px] tracking-[0.28em] uppercase">
                    After
                  </span>
                </div>
              </div>
            )}
            <div className="mt-5">
              <div className="text-[10px] tracking-[0.28em] uppercase text-gold">
                {it.subtitle}
              </div>
              <h3 className="mt-2 font-display text-2xl text-forest">{it.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- TEAM ---------------- */
function Team() {
  return (
    <Section id="team" className="bg-forest text-cream">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-5 border border-gold/30 -translate-x-4 -translate-y-4" />
          <img
            src={teamAsset.url}
            alt="Leticia and Guilherme, founding specialists"
            className="relative w-full h-[560px] object-cover"
          />
        </div>
        <div className="lg:col-span-7">
          <h2 className="mt-5 font-display text-4xl md:text-5xl font-light leading-tight">
            Leticia & Guilherme
          </h2>
          <p className="mt-2 text-gold text-[11px] tracking-[0.28em] uppercase">
            Founders · Skin Lab Med Spa
          </p>
          <p className="mt-8 text-cream/75 leading-relaxed">
            A duo of aesthetic specialists trained across Brazil and the United
            States, Leticia and Guilherme built Skin Lab to bridge global clinical
            innovation with the intimacy of true boutique care. Every consultation,
            every injection, every protocol is authored personally — never delegated.
          </p>
          <p className="mt-4 text-cream/75 leading-relaxed">
            Their philosophy: enhance the features you already love, restore what
            time softens, and refuse anything that reads artificial. Elegance,
            science and precision — in equal measure.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton href="#consultation" variant="gold">
              Book With Us
            </CTAButton>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.24em] uppercase text-cream/70 hover:text-gold"
            >
              <Instagram className="h-4 w-4" /> @skinlab_medspa
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    {
      q: "Is the Hydrafacial comfortable? Will my skin look damaged after?",
      a: "It's exceptionally comfortable. The Hydrafacial uses advanced vortex-fusion technology that feels like a refreshing massage. A slight, healthy flush may appear for a few minutes and quickly subsides to reveal immediate radiance. You can resume your normal routine immediately after.",
    },
    {
      q: "How often should I schedule facial maintenance treatments?",
      a: "To maintain a fresh appearance and keep cellular aging at bay, we recommend a clinical maintenance session once a month, or as outlined in your custom Age-Management Blueprint.",
    },
    {
      q: "What is the Skin Lab philosophy on Botox and dermal fillers?",
      a: "Natural elegance is our absolute benchmark. We meticulously map your unique facial anatomy to soften the signs of aging and restore structure, completely avoiding an over-treated, expressionless look.",
    },
    {
      q: "What sets the Ultraformer MPT apart from other lifting alternatives?",
      a: "The Ultraformer MPT represents the pinnacle of non-invasive lifting. It micro-targets the deep structural layers of the skin using focused ultrasound to generate intense collagen synthesis from the inside out. Results are highly predictable, safe, and require zero downtime.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" className="bg-ivory">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-forest font-light leading-tight">
            Answers, before you ask.
          </h2>
        </div>
        <div className="lg:col-span-8">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-forest/15">
                <button
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-display text-lg md:text-xl text-forest">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gold shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="pb-6 pr-10 text-forest/70 leading-relaxed">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- CONSULTATION FORM ---------------- */
const OBJECTIVES = [
  "Smooth Fine Lines & Wrinkles",
  "Improve Contours & Firmness (Non-Invasive Lifting)",
  "Restore Skin Radiance & Texture",
  "Target Sun Damage, Spots, or Imperfections",
  "Reduce Localized Fat & Body Laxity",
] as const;

const consultationSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(30),
  email: z.string().trim().email("Please enter a valid email").max(255),
  objectives: z.array(z.string()).min(1, "Select at least one objective"),
  prior: z.enum(["yes", "no"]),
});
type ConsultationForm = z.infer<typeof consultationSchema>;

function Consultation() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationForm>({
    resolver: zodResolver(consultationSchema),
    defaultValues: { objectives: [], prior: "no" },
  });

  const onSubmit = (data: ConsultationForm) => {
    const body = [
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Objectives: ${data.objectives.join(", ")}`,
      `Prior treatments (12mo): ${data.prior}`,
    ].join("\n");
    const url = `mailto:hello@skinlb.com?subject=${encodeURIComponent(
      "New Consultation Request — Skin Lab",
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setSubmitted(true);
  };

  return (
    <Section id="consultation" className="bg-forest text-cream">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <h2 className="mt-5 font-display text-4xl md:text-5xl font-light leading-tight">
            Design your personalized aesthetic plan.
          </h2>
          <p className="mt-6 text-cream/70 leading-relaxed">
            Complete the form and our team will contact you to schedule a private
            evaluation with Leticia or Guilherme. All consultations are strictly
            by appointment.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-3 text-cream/80 hover:text-gold"
            >
              <Phone className="h-4 w-4 text-gold" /> {PHONE_DISPLAY}
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-cream/80 hover:text-gold"
            >
              <Instagram className="h-4 w-4 text-gold" /> @skinlab_medspa
            </a>
            <div className="flex items-start gap-3 text-cream/80">
              <MapPin className="h-4 w-4 text-gold mt-0.5" /> {ADDRESS}
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:col-span-7 bg-forest-deep border border-gold/20 p-8 md:p-10 space-y-6"
          noValidate
        >
          {(["name", "phone", "email"] as const).map((field) => (
            <div key={field}>
              <label className="block text-[10px] tracking-[0.28em] uppercase text-gold mb-2">
                {field === "name" ? "Full Name" : field === "phone" ? "Phone Number" : "E-mail Address"}
              </label>
              <input
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                {...register(field)}
                className="w-full bg-transparent border-b border-cream/30 focus:border-gold outline-none py-2 text-cream placeholder:text-cream/30"
              />
              {errors[field] && (
                <p className="mt-2 text-xs text-gold-soft">{errors[field]?.message}</p>
              )}
            </div>
          ))}
          <div>
            <label className="block text-[10px] tracking-[0.28em] uppercase text-gold mb-3">
              Primary aesthetic objective
            </label>
            <div className="space-y-2">
              {OBJECTIVES.map((o) => (
                <label
                  key={o}
                  className="flex items-start gap-3 text-sm text-cream/85 cursor-pointer hover:text-cream"
                >
                  <input
                    type="checkbox"
                    value={o}
                    {...register("objectives")}
                    className="mt-1 accent-gold"
                  />
                  <span>{o}</span>
                </label>
              ))}
            </div>
            {errors.objectives && (
              <p className="mt-2 text-xs text-gold-soft">{errors.objectives.message}</p>
            )}
          </div>
          <div>
            <label className="block text-[10px] tracking-[0.28em] uppercase text-gold mb-3">
              Received advanced aesthetic treatments in the past 12 months?
            </label>
            <div className="flex gap-6 text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" value="yes" {...register("prior")} className="accent-gold" />{" "}
                Yes
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" value="no" {...register("prior")} className="accent-gold" />{" "}
                No
              </label>
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold text-forest py-4 text-[12px] tracking-[0.28em] uppercase font-medium hover:bg-gold-soft transition-colors disabled:opacity-60"
          >
            {submitted ? "Request Sent — We'll be in touch" : "Reserve My Consultation"}
          </button>
        </form>
      </div>
    </Section>
  );
}

/* ---------------- FINAL CTA + FOOTER ---------------- */
function FinalCTA() {
  return (
    <Section className="bg-sand text-forest text-center">
      <h2 className="mt-5 font-display text-4xl md:text-6xl font-light leading-tight max-w-3xl mx-auto">
        Do not wait for time to deepen what elegance can prevent today.
      </h2>
      <p className="mt-6 max-w-xl mx-auto text-forest/70 leading-relaxed">
        Skin Lab Med Spa bridges global clinical innovation with high-touch
        boutique care to deliver the sophisticated, natural results you deserve.
      </p>
      <div className="mt-10">
        <CTAButton href="#consultation" variant="primary">
          Book Your Consultation
        </CTAButton>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="bg-forest-deep text-cream border-t border-gold/15">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <img src={logoAsset.url} alt="Skin Lab" className="h-10 w-auto" />
          <p className="mt-5 text-sm text-cream/60 leading-relaxed max-w-xs">
            Advanced Aesthetics · Natural Results · Medical-Grade Technology
          </p>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.28em] uppercase text-gold">
            Visit
          </div>
          <p className="mt-3 text-sm text-cream/75 leading-relaxed">{ADDRESS}</p>
          <p className="mt-3 text-xs text-cream/50">By Appointment Only</p>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.28em] uppercase text-gold">
            Contact
          </div>
          <a
            href={PHONE_HREF}
            className="mt-3 flex items-center gap-2 text-sm text-cream/75 hover:text-gold"
          >
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 text-sm text-cream/75 hover:text-gold"
          >
            <Instagram className="h-4 w-4" /> @skinlab_medspa
          </a>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16 py-6 text-xs text-cream/40 flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} Skin Lab Med Spa. All rights reserved.</span>
          <span className="tracking-[0.2em] uppercase">Charlotte · NC</span>
        </div>
      </div>
    </footer>
  );
}

export function SkinLabLanding() {
  return (
    <div className="min-h-screen bg-ivory text-forest font-sans antialiased">
      <Nav />
      <Hero />
      <Why />
      <Objections />
      <Treatments />
      <Results />
      <Team />
      <FAQ />
      <Consultation />
      <FinalCTA />
      <Footer />
      {/* Preload dark logo variant reference for future light-mode sections */}
      <link rel="preload" as="image" href={logoDarkAsset.url} />
    </div>
  );
}