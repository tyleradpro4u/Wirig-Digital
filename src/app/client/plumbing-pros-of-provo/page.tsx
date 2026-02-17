import Image from "next/image";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";

const BRAND = {
  name: "Plumbing Pros of Provo",
  altName: "Provo Plumbing — Drain & Rooter Pros",
  rating: "5.0",
  reviewCount: "51",
  phoneDisplay: "(801) 921-6010",
  phoneE164: "+18019216010",
  address: "63 N 300 E, Provo, UT 84606",
  locatedIn: "",
  cityLine: "Serving Provo, Orem, Springville, and Mapleton",
  googleMapsUrl:
    "https://www.google.com/maps/place/Plumbing+Pros+of+Provo/@40.2498532,-112.2404402,10z/data=!4m10!1m2!2m1!1splumber+Provo+UT!3m6!1s0x8bc9df04f6f79a13:0xfab89a191173023b!8m2!3d40.2498532!4d-111.663658!15sChBwbHVtYmVyIFByb3ZvIFVUkgEHcGx1bWJlcuABAA!16s%2Fg%2F11srv5sm4d?entry=ttu",
  logoSrc: "/clients/plumbing-pros/logo.jpg",
};

// Approximated from their logo.
const COLORS = {
  blue: "#0B5DBB",
  red: "#D32F2F",
  ink: "#0B1220",
  slate: "#0F172A",
  paper: "#F6F7F9",
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>;
}

function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  // scroll-mt ensures anchor links don't hide the section under the sticky header.
  return (
    <section
      id={id}
      className={cx(
        "py-14 sm:py-16",
        id ? "scroll-mt-28 sm:scroll-mt-32" : null,
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
  external?: boolean;
}) {
  const base =
    "inline-flex h-12 items-center justify-center px-6 text-sm font-extrabold uppercase tracking-wide shadow-sm transition";

  const styles =
    variant === "primary"
      ? "text-white hover:brightness-105"
      : variant === "dark"
        ? "bg-slate-900 text-white hover:bg-slate-800"
        : "bg-white text-slate-900 ring-2 ring-inset ring-slate-200 hover:bg-slate-50";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cx(base, styles, className)}
      style={
        variant === "primary"
          ? {
              background: COLORS.blue,
              clipPath:
                "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%)",
            }
          : variant === "secondary"
            ? {
                clipPath:
                  "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%)",
              }
            : {
                clipPath:
                  "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%)",
              }
      }
    >
      {children}
    </a>
  );
}

function TopBar() {
  return (
    <div className="border-b border-black/10" style={{ background: COLORS.paper }}>
      <Container>
        <div className="flex flex-col gap-2 py-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-semibold text-slate-800">
            <span className="inline-flex items-center gap-2">
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ background: COLORS.red }}
              />
              {BRAND.cityLine}
            </span>
            <span className="text-slate-500">•</span>
            <span>
              {BRAND.rating}★ ({BRAND.reviewCount} Google reviews)
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${BRAND.phoneE164}`}
              className="font-extrabold tracking-wide"
              style={{ color: COLORS.red }}
            >
              CALL: {BRAND.phoneDisplay}
            </a>
            <a
              href={BRAND.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-slate-700 hover:text-slate-900"
            >
              Directions
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

function NavBar() {
  const links = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "Why us" },
    { href: "#reviews", label: "Reviews" },
    { href: "#areas", label: "Areas" },
    { href: "#request", label: "Contact" },
  ];

  return (
    <div
      className="sticky top-0 z-40 border-b border-black/10 bg-white/90 backdrop-blur"
      style={{ boxShadow: "0 8px 30px rgba(0,0,0,.04)" }}
    >
      <Container>
        <div className="flex h-18 items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-black/10 bg-white">
              <Image
                src={BRAND.logoSrc}
                alt={`${BRAND.name} logo`}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div className="leading-tight">
              <div className="text-base font-black tracking-tight text-slate-900">
                {BRAND.name}
              </div>
              <div className="text-xs font-semibold text-slate-600">{BRAND.altName}</div>
            </div>
          </div>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-extrabold uppercase tracking-wider text-slate-800 hover:text-slate-950"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <Button href={`tel:${BRAND.phoneE164}`} variant="primary" className="h-11">
              Call now
            </Button>
            <Button href="#request" variant="secondary" className="h-11">
              Request service
            </Button>
          </div>
        </div>
      </Container>

      <div className="border-t border-black/5 lg:hidden">
        <Container>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-extrabold uppercase tracking-wider text-slate-700 hover:text-slate-950"
              >
                {l.label}
              </a>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative overflow-hidden" style={{ background: COLORS.paper }}>
      {/* angled background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(11,93,187,0.14), rgba(211,47,47,0.10))",
        }}
      />
      <div
        className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full"
        style={{ background: "rgba(11,93,187,0.18)", filter: "blur(18px)" }}
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full"
        style={{ background: "rgba(211,47,47,0.14)", filter: "blur(20px)" }}
      />

      <Section className="relative pt-10 sm:pt-12">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-3">
              <span
                className="inline-flex items-center px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white"
                style={{ background: COLORS.red }}
              >
                Provo, UT
              </span>
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                Drain • Rooter • Repairs
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Provo plumbing service you can trust.
            </h1>
            <p className="mt-4 max-w-xl text-lg font-medium text-slate-700">
              Fast response, clean workmanship, and clear communication—backed by a 5.0★ Google
              rating.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={`tel:${BRAND.phoneE164}`} variant="primary">
                Call {BRAND.phoneDisplay}
              </Button>
              <Button href="#request" variant="secondary">
                Request service
              </Button>
              <a
                href={BRAND.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-extrabold uppercase tracking-wider text-slate-700 hover:text-slate-950"
              >
                View reviews →
              </a>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {["Upfront options", "Clean work", "Local Provo"].map((t) => (
                <div
                  key={t}
                  className="border border-black/10 bg-white p-4"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%, 12px 50%)",
                  }}
                >
                  <div className="text-sm font-black text-slate-900">{t}</div>
                  <div className="mt-1 text-xs font-semibold text-slate-600">
                    Built for homeowners
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 border border-black/10 bg-white p-5">
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                Location
              </div>
              <div className="mt-2 text-sm font-bold text-slate-900">{BRAND.address}</div>
              {BRAND.locatedIn ? (
                <div className="mt-1 text-sm text-slate-700">Located in: {BRAND.locatedIn}</div>
              ) : null}
            </div>
          </div>
          </Reveal>

          {/* Hero visual */}
          <Reveal delayMs={120}>
            <div className="border border-black/10 bg-white p-6">
            <div className="flex items-center justify-between">
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                Service highlights
              </div>
              <div
                className="px-3 py-1 text-xs font-extrabold uppercase tracking-wider"
                style={{ background: "rgba(211,47,47,0.1)", color: COLORS.red }}
              >
                {BRAND.rating}★ ({BRAND.reviewCount})
              </div>
            </div>

            <div className="mt-4 grid gap-3">
              {[
                {
                  t: "Quick response",
                  d: "Call and get a clear next step—fast.",
                },
                {
                  t: "Trust-first service",
                  d: "Straight answers, simple explanations.",
                },
                {
                  t: "Clean finish",
                  d: "Respect for your home + cleanup after.",
                },
                {
                  t: "Drain & rooter expertise",
                  d: "Clogs, backups, and flow problems.",
                },
              ].map((x) => (
                <div
                  key={x.t}
                  className="border border-black/10 bg-white p-4 transition"
                  style={{
                    boxShadow: "0 6px 18px rgba(0,0,0,.04)",
                    transform: "translateZ(0)",
                  }}
                >
                  <div className="text-sm font-black text-slate-900">{x.t}</div>
                  <div className="mt-1 text-sm text-slate-700">{x.d}</div>
                </div>
              ))}
            </div>

            <div
              className="mt-5 border border-black/10 p-4 text-xs font-semibold text-slate-700"
              style={{ background: "rgba(11,93,187,0.06)" }}
            >
              Licensed & insured • Upfront options • Respectful, clean work
            </div>
          </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}

// Service list uses the FAQ-style <Accordion /> now.

function Reviews() {
  return (
    <Section id="reviews">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-slate-950">Reviews</h2>
          <p className="mt-3 text-sm font-semibold text-slate-700">
            Homeowners choose plumbers they can trust. Here’s what customers are saying.
          </p>

          <div className="mt-6 border border-black/10 bg-white p-6">
            <div className="text-sm font-black text-slate-900">
              {BRAND.rating}★ on Google ({BRAND.reviewCount} reviews)
            </div>
            <p className="mt-2 text-sm text-slate-700">
              Strong ratings are one of the biggest conversion drivers for plumbing.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button href={BRAND.googleMapsUrl} external variant="primary" className="h-11">
                Read reviews
              </Button>
              <Button href="#request" variant="secondary" className="h-11">
                Request service
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-3">
          {["Clear communication and professional service.", "Quick response and quality work.", "Respectful, clean, and reliable."].map(
            (q) => (
              <figure key={q} className="border border-black/10 bg-white p-5">
                <blockquote className="text-sm text-slate-800">“{q}”</blockquote>
                <figcaption className="mt-3 text-xs font-extrabold uppercase tracking-wider text-slate-600">
                  Google Review
                </figcaption>
              </figure>
            )
          )}
        </div>
      </div>
    </Section>
  );
}

function Request() {
  return (
    <Section id="request" className="bg-white">
      <div className="border border-black/10 bg-white p-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-950">Request service</h2>
            <p className="mt-3 text-sm font-semibold text-slate-700">
              Prefer a callback? Fill this out and we’ll follow up.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button href={`tel:${BRAND.phoneE164}`} variant="primary" className="h-11">
              Call now
            </Button>
            <Button href={BRAND.googleMapsUrl} external variant="secondary" className="h-11">
              Directions
            </Button>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
              Name
            </span>
            <input
              className="h-11 border border-black/10 bg-white px-4 text-sm font-semibold outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-600/15"
              placeholder="Your name"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
              Phone
            </span>
            <input
              className="h-11 border border-black/10 bg-white px-4 text-sm font-semibold outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-600/15"
              placeholder="(###) ###-####"
            />
          </label>
          <label className="grid gap-2 md:col-span-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
              What’s going on?
            </span>
            <textarea
              rows={4}
              className="border border-black/10 bg-white px-4 py-3 text-sm font-semibold outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-600/15"
              placeholder="Quick description (e.g., drain backing up, leak under sink, no hot water…)"
            />
          </label>
        </div>

        <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <Button href={`tel:${BRAND.phoneE164}`} variant="dark" className="h-12">
            Call to schedule
          </Button>
          <div className="text-xs font-semibold text-slate-600">
            Prefer to talk now? Call and we’ll help you schedule service.
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          { t: "Phone", v: BRAND.phoneDisplay },
          { t: "Address", v: BRAND.address },
          { t: "Service area", v: BRAND.cityLine },
        ].map((x) => (
          <div key={x.t} className="border border-black/10 bg-white p-5">
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
              {x.t}
            </div>
            <div className="mt-2 text-sm font-bold text-slate-900">{x.v}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default function PlumbingProsOfProvoPage() {
  return (
    <div className="min-h-screen text-slate-900">
      <TopBar />
      <NavBar />
      <Hero />

      <Section id="services" className="bg-white">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-950">Services</h2>
            <p className="mt-3 max-w-2xl text-sm font-semibold text-slate-700">
              Organized by the problems homeowners actually search for.
            </p>
          </div>
          <div className="hidden sm:block">
            <Button href={`tel:${BRAND.phoneE164}`} variant="dark" className="h-11">
              Talk to a plumber
            </Button>
          </div>
        </div>

        <Reveal>
          <Accordion
            className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            defaultOpenIndex={null}
            items={[
              {
                title: "Clogged drains / backups",
                content: (
                  <ul className="grid gap-2">
                    <li>We’ll locate the blockage and restore flow fast.</li>
                    <li>Clear explanation of what caused it and how to prevent repeats.</li>
                    <li>Best for: slow drains, standing water, recurring clogs.</li>
                  </ul>
                ),
              },
              {
                title: "Leaks (under sink / wall / ceiling)",
                content: (
                  <ul className="grid gap-2">
                    <li>Find the source and stop damage quickly.</li>
                    <li>Repair/replace the right parts (not guesswork).</li>
                    <li>Best for: water stains, dripping valves, mystery wet spots.</li>
                  </ul>
                ),
              },
              {
                title: "Toilet repair / replacement",
                content: (
                  <ul className="grid gap-2">
                    <li>Fix running, leaking, or weak-flush toilets.</li>
                    <li>Reset, rebuild, or replace based on what’s most cost-effective.</li>
                    <li>Best for: clogs, wobble, constant running, leaking at the base.</li>
                  </ul>
                ),
              },
              {
                title: "Water heater issues",
                content: (
                  <ul className="grid gap-2">
                    <li>Diagnose no hot water, inconsistent temps, or leaks.</li>
                    <li>Repair options first—replacement only when it makes sense.</li>
                    <li>Best for: pilot/ignition issues, cold showers, rusty water.</li>
                  </ul>
                ),
              },
              {
                title: "Faucets & fixtures",
                content: (
                  <ul className="grid gap-2">
                    <li>Stop drips, improve water pressure, and fix noisy fixtures.</li>
                    <li>Install upgrades cleanly and test everything before we leave.</li>
                    <li>Best for: kitchen/bath faucets, shower valves, outdoor spigots.</li>
                  </ul>
                ),
              },
              {
                title: "Garbage disposals",
                content: (
                  <ul className="grid gap-2">
                    <li>Unjam, diagnose, or replace failing disposals.</li>
                    <li>Check wiring/switch and verify proper drainage.</li>
                    <li>Best for: humming, leaks, clogs, bad odors, non-working units.</li>
                  </ul>
                ),
              },
            ]}
          />
        </Reveal>

        <div className="mt-8 border border-black/10 bg-white p-6" id="about">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                Why homeowners choose us
              </div>
              <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                Honest answers. Clean work. Clear next steps.
              </h3>
              <p className="mt-3 text-sm font-semibold text-slate-700">
                The best plumber websites remove uncertainty: how fast you respond, what happens
                next, and how you treat the home.
              </p>
            </div>
            <div className="border border-black/10 bg-slate-50 p-5">
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                Quick contact
              </div>
              <div className="mt-3 text-sm font-black text-slate-900">{BRAND.phoneDisplay}</div>
              <div className="mt-2 text-sm text-slate-700">{BRAND.address}</div>
              <div className="mt-4">
                <Button href={`tel:${BRAND.phoneE164}`} variant="primary" className="h-11 w-full">
                  Call now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Reveal>
        <Reviews />
      </Reveal>

      <Section id="areas" className="bg-white">
        <Reveal>
          <div className="border border-black/10 bg-white p-7">
            <h2 className="text-3xl font-black tracking-tight text-slate-950">Areas we serve</h2>
            <p className="mt-3 text-sm font-semibold text-slate-700">{BRAND.cityLine}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {["Provo", "Orem", "Springville", "Mapleton"].map((a, i) => (
                <Reveal key={a} delayMs={i * 60}>
                  <div className="border border-black/10 bg-white p-4 text-sm font-black text-slate-900">
                    {a}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <Reveal>
        <Request />
      </Reveal>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 p-3 backdrop-blur sm:hidden">
        <div className="mx-auto flex max-w-6xl gap-2 px-2">
          <a
            href={`tel:${BRAND.phoneE164}`}
            className="flex h-12 flex-1 items-center justify-center text-sm font-extrabold uppercase tracking-wide text-white shadow-sm"
            style={{
              background: COLORS.blue,
              clipPath:
                "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%)",
            }}
          >
            Call
          </a>
          <a
            href="#request"
            className="flex h-12 flex-1 items-center justify-center border border-black/10 bg-white text-sm font-extrabold uppercase tracking-wide text-slate-900 shadow-sm"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%)",
            }}
          >
            Quote
          </a>
        </div>
      </div>

      <footer className="border-t border-black/10 bg-white py-10">
        <Container>
          <div className="flex flex-col gap-2 text-sm font-semibold text-slate-700 sm:flex-row sm:items-center sm:justify-between">
            <div>
              © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
            </div>
            <a
              href={BRAND.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="font-extrabold uppercase tracking-wider text-slate-700 hover:text-slate-950"
            >
              Google Maps listing →
            </a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
