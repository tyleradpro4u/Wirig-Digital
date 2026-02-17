import Image from "next/image";

const BRAND = {
  name: "Wirig Digital",
  cityLine: "Provo • Orem • Utah County",
  phoneDisplay: "(702) 628-6274",
  phoneE164: "+17026286274",
  smsE164: "+17026286274",
  email: "TylerAdPro4U@gmail.com",
};

const LINKS = {
  primaryCta: "Book a Website Demo",
  secondaryCta: "Call/Text",
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
  return (
    <section id={id} className={cx("py-12 sm:py-16 lg:py-20", className)}>
      <Container>{children}</Container>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
      {children}
    </span>
  );
}

function PrimaryButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <a
        href="https://calendly.com/tywirig"
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 sm:h-12 sm:w-auto"
      >
        {LINKS.primaryCta}
      </a>
      <a
        href={`sms:${BRAND.smsE164}`}
        className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 sm:h-12 sm:w-auto"
      >
        {LINKS.secondaryCta}
      </a>
      <a
        href={`tel:${BRAND.phoneE164}`}
        className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 sm:hidden"
      >
        Call
      </a>
      <a
        href={`mailto:${BRAND.email}`}
        className="inline-flex h-11 w-full items-center justify-center rounded-xl px-2 text-sm font-semibold text-slate-600 hover:text-slate-900 sm:h-12 sm:w-auto"
      >
        Email →
      </a>
    </div>
  );
}

function HeroArt() {
  // Abstract “growth/dashboard” illustration (no licensing issues)
  return (
    <svg
      viewBox="0 0 560 420"
      className="h-auto w-full"
      role="img"
      aria-label="Abstract marketing dashboard illustration"
    >
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0ea5e9" stopOpacity="0.95" />
          <stop offset="0.55" stopColor="#6366f1" stopOpacity="0.85" />
          <stop offset="1" stopColor="#22c55e" stopOpacity="0.8" />
        </linearGradient>
        <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      <circle cx="140" cy="120" r="90" fill="url(#g1)" filter="url(#blur)" />
      <circle cx="420" cy="130" r="110" fill="url(#g1)" filter="url(#blur)" opacity="0.75" />
      <circle cx="320" cy="310" r="110" fill="url(#g1)" filter="url(#blur)" opacity="0.55" />

      <rect x="70" y="70" width="420" height="270" rx="22" fill="#0b1220" opacity="0.96" />
      <rect x="95" y="95" width="175" height="18" rx="9" fill="#1f2a44" />
      <rect x="95" y="130" width="370" height="12" rx="6" fill="#16213a" />
      <rect x="95" y="154" width="330" height="12" rx="6" fill="#16213a" />

      {[
        { x: 95, y: 190, w: 120, h: 90 },
        { x: 230, y: 190, w: 120, h: 90 },
        { x: 365, y: 190, w: 100, h: 90 },
      ].map((c, i) => (
        <g key={i}>
          <rect x={c.x} y={c.y} width={c.w} height={c.h} rx="16" fill="#101a2f" />
          <rect x={c.x + 14} y={c.y + 14} width={c.w - 28} height="10" rx="5" fill="#1f2a44" />
          <rect x={c.x + 14} y={c.y + 36} width={c.w - 46} height="10" rx="5" fill="#1f2a44" />
          <rect x={c.x + 14} y={c.y + 58} width={c.w - 34} height="10" rx="5" fill="#1f2a44" />
        </g>
      ))}

      <rect x="95" y="295" width="370" height="18" rx="9" fill="#101a2f" />
      <path
        d="M110 304 C 160 250, 220 330, 280 280 S 390 320, 450 265"
        fill="none"
        stroke="url(#g1)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-2xl font-semibold tracking-tight text-slate-900">
        {value}
      </div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  );
}

function Icon({ name }: { name: "page" | "offer" | "track" | "ads" | "seo" | "direct" }) {
  const common = "h-5 w-5";
  switch (name) {
    case "page":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M14 3v4h4" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "offer":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M20 12V7a2 2 0 0 0-2-2h-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 12v5a2 2 0 0 0 2 2h5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M12 6v3" stroke="currentColor" strokeWidth="2" />
          <path d="M12 15v3" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "track":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 19V5" stroke="currentColor" strokeWidth="2" />
          <path d="M4 19h16" stroke="currentColor" strokeWidth="2" />
          <path
            d="M7 14l3-3 3 2 4-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "ads":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 9a2 2 0 0 1 2-2h5l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M9 13h6" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "seo":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M10 14a4 4 0 1 1 0-8h4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M14 10a4 4 0 1 1 0 8h-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "direct":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M7 4h3l2 5-2 1c1.2 2.6 3.3 4.7 5.9 5.9l1-2 5 2v3c0 1.1-.9 2-2 2C10.9 22 2 13.1 2 2c0-1.1.9-2 2-2h3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

function Card({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon?: "page" | "offer" | "track" | "ads" | "seo" | "direct";
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        {icon ? (
          <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
            <Icon name={icon} />
          </span>
        ) : null}
        <div>
          <div className="text-sm font-semibold text-slate-900">{title}</div>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white shadow-sm">
                W
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-tight">{BRAND.name}</div>
                <div className="text-xs text-slate-500">{BRAND.cityLine}</div>
              </div>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <Pill>Direct access (you talk to me)</Pill>
              <a
                href={`tel:${BRAND.phoneE164}`}
                className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Call {BRAND.phoneDisplay}
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <Section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              <Pill>Local service businesses</Pill>
              <Pill>Simple websites</Pill>
              <Pill>Direct access</Pill>
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Get more calls and texts from your website.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              I build clean one-page websites for Utah service businesses—designed to make it
              obvious how customers contact you. You can text/call/email me directly for changes,
              and I keep your site updated with easy, flexible updates.
            </p>

            <div className="mt-7">
              <PrimaryButtons />
              <p className="mt-3 text-sm text-slate-500">
                Quickest way to start: call or text me and tell me what you do.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Stat value="Fast" label="One-page builds that ship quickly" />
              <Stat value="Direct" label="Call/text/email me—no handoffs" />
              <Stat value="Simple" label="Easy, flexible updates" />
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <HeroArt />
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold">Direct communication</div>
                  <div className="mt-1 text-sm text-slate-600">
                    You can call/text/email me directly for changes. No handoffs.
                  </div>
                </div>
                <Pill>Direct access</Pill>
              </div>

              <div className="mt-6 space-y-3 text-sm text-slate-700">
                {[
                  "One-page website built for mobile",
                  "Clear call/text/email buttons",
                  "Direct communication for changes",
                  "Easy, flexible updates", 
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-slate-100 text-xs text-slate-900">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <PrimaryButtons />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What you get */}
      <Section id="services">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          What you get
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          The most important thing your marketing should point to: a page that converts, with clear call/text actions.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Card
            icon="page"
            title="Conversion-focused one-page site"
            body="Mobile-first layout, clear sections, and an obvious call/text next step. Built to turn visits into leads."
          />
          <Card
            icon="ads"
            title="Built for calls + texts"
            body="Sticky mobile CTA, tap-to-call, and fast “what happens next” messaging for higher conversion."
          />
          <Card
            icon="seo"
            title="Local-ready"
            body="Service areas, clean headings, and a structure that supports Google + Maps traffic."
          />
          <Card
            icon="track"
            title="Tracking + basics"
            body="Contact buttons, optional lead form, and simple analytics so you can measure results."
          />
          <Card
            icon="direct"
            title="Same-day updates"
            body="Need a change? Call or text me and I’ll update your site fast—no ticket system."
          />
          <Card
            icon="offer"
            title="Offer + review section"
            body="We add trust signals (reviews, guarantees, badges) so prospects choose you faster."
          />
        </div>
      </Section>

      {/* How it works */}
      <Section id="process" className="bg-slate-50">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How it works</h2>
            <p className="mt-3 max-w-xl text-slate-600">
              Simple process. Tight feedback loop. Get something live that you can run traffic to.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              {
                n: "1",
                t: "Plan",
                d: "You text me your business name, services, and the vibe you want. I send a quick outline.",
              },
              {
                n: "2",
                t: "Build",
                d: "I design and build your one-page website with clear call/text/email actions.",
              },
              {
                n: "3",
                t: "Direct review",
                d: "You send feedback by text/email (or a quick call) and I implement changes before it goes live.",
              },
              {
                n: "4",
                t: "Easy flexibility",
                d: "Need a change? Text/email me and I’ll update the site."
              },
            ].map((step) => (
              <div key={step.n} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
                  {step.n}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{step.t}</div>
                  <div className="mt-1 text-sm text-slate-600">{step.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Portfolio */}
      <Section id="portfolio" className="bg-slate-50">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Example sites</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Quick previews of what I build. These are demo layouts—your site will be customized to your business.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {[
            { name: "Plumber", href: "/demo/plumber" },
            { name: "Chiropractor", href: "/demo/chiropractor" },
            { name: "Dental", href: "/demo/dental" },
          ].map((site) => (
            <a
              key={site.name}
              href={site.href}
              className="block rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-sm font-semibold text-slate-900">{site.name} — Demo</div>
              <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                <Image
                  src={`/tiles/${site.name.toLowerCase()}.svg`}
                  alt={`${site.name} demo thumbnail`}
                  width={1200}
                  height={600}
                  className="h-36 w-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Clean hero, services, reviews, and big call/text buttons. Built for mobile.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Pill>Simple</Pill>
                <Pill>Call/Text</Pill>
                <span className="ml-auto text-sm font-semibold text-slate-900">View →</span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Pricing</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Simple pricing. No long contracts. Direct access to me.
        </p>

        <div className="mt-10">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-slate-900">Grand Slam Offer</div>
                <div className="mt-1 text-sm text-slate-600">
                  Conversion-focused website + ongoing updates — built to turn visitors into calls + texts.
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Pill>Build + Care</Pill>
                <Pill>Month-to-month</Pill>
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-start">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Pricing</div>
                <div className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">$499</div>
                <div className="mt-1 text-sm text-slate-600">one-time build fee</div>
                <div className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">$100/mo</div>
                <div className="mt-1 text-sm text-slate-600">hosting + maintenance + updates • cancel anytime</div>
                <div className="mt-4 text-sm text-slate-500">Typical launch: 7–14 days</div>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">What you get</div>
                <div className="mt-3 space-y-3 text-sm text-slate-700">
                  {[
                    "Conversion-focused 1-page website (mobile-first)",
                    "Copy + layout built to drive calls/texts",
                    "Services section (problem-based)",
                    "Reviews / trust section (Google snippets)",
                    "Contact / request form",
                    "Basic on-page SEO (titles, headings, speed)",
                    "Hosting included",
                    "Maintenance (keep it running + secure)",
                    "Unlimited small edits (text/photos/services)",
                    "Same-day updates (most requests)",
                    "Monthly “freshness” update (promo/review highlight)",
                    "Keep pages healthy (no broken links)",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-slate-100 text-xs text-slate-900">
                        ✓
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Bonuses (included)</div>
                  <div className="mt-3 space-y-3 text-sm text-slate-700">
                    {[
                      "Tracking + launch checklist (so you can measure results)",
                      "Sticky mobile call/text buttons",
                      "Same-day edits for 7 days after launch",
                    ].map((item) => (
                      <div key={item} className="flex gap-3">
                        <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-slate-100 text-xs text-slate-900">
                          ✓
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5">
                    <div className="text-sm font-semibold">Guardrails</div>
                    <p className="mt-1 text-sm text-slate-600">
                      Small edits are included. New pages, full redesigns, logos, and ad/SEO management are separate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Meet Tyler */}
      <Section id="about" className="hidden">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Meet Tyler</h2>
            <p className="mt-3 max-w-xl text-slate-600">
              I’m the person building your site—and the person you can text when you need an update.
              No account-manager roulette.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-700">
              {[
                "Direct communication (call/text/email)",
                "Fast turnaround and clean design",
                "Ongoing care so your site stays current",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-slate-100 text-xs text-slate-900">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <div className="flex h-64 items-center justify-center bg-gradient-to-br from-slate-200 to-slate-100 text-sm font-medium text-slate-600">
                Your photo goes here
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Send me a headshot you like and I’ll drop it in.
            </p>
          </div>
        </div>
      </Section>

      {/* Proof */}
      <Section id="proof">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Why this is different</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Big agencies sell a “team” and you get handed around. This is built for speed and accountability.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <Card
            title="Direct access"
            body="You can call/text/email me. You won’t get bounced between account managers."
          />
          <Card
            title="No lock-in"
            body="You own your domain and your site. No hostage setups."
          />
          <Card
            title="Built for speed"
            body="A clean one-page website + monthly care beats a complicated site nobody updates."
          />
        </div>
      </Section>

      {/* Guarantee */}
      <Section id="guarantee" className="bg-slate-50">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                7‑Day Satisfaction Guarantee
              </h2>
              <p className="mt-3 text-slate-600">
                Try the website for 7 days after it goes live. If you’re not happy, I’ll make it right—or I’ll refund the $499 build fee.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="text-sm font-semibold text-slate-900">No lock-in</div>
              <p className="mt-2 text-sm text-slate-600">
                The $100/mo care plan is month‑to‑month. Cancel anytime.
              </p>
              <p className="mt-2 text-sm text-slate-600">
                I keep a small client cap so communication stays fast.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Where we operate */}
      <Section id="location">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Where I work</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Based in Utah County. Serving Provo, Orem, and nearby cities.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Primary</div>
            <p className="mt-2 text-sm text-slate-600">
              Provo • Orem • Vineyard • Pleasant Grove • Lindon • American Fork
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Also available</div>
            <p className="mt-2 text-sm text-slate-600">
              Salt Lake City area (remote-friendly). Text me and I’ll confirm.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="bg-slate-50">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">FAQ</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Click a question to expand.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {[
            {
              q: "What do you need from me to start?",
              a: "Business name, services, service area, phone number, and a few examples of websites you like. If you have photos, reviews, or a logo, send those too.",
            },
            {
              q: "How long does it take?",
              a: "Fast. Once I have your info, I’ll send a draft quickly and we’ll finalize changes by text/call.",
            },
            {
              q: "What’s included in the $499 build?",
              a: "A conversion-focused one-page website with your services, service area, and clear call/text actions—built mobile-first. We review and revise before it goes live.",
            },
            {
              q: "What does the $100/mo care plan include?",
              a: "Hosting + maintenance + updates. That includes unlimited small edits (with guardrails): hours, services, pricing, photos, promos, and copy updates. Bigger requests (new pages, full redesigns, logo work) are quoted separately.",
            },
            {
              q: "What counts as a “small edit”?",
              a: "Swapping photos, updating hours, changing a price/offer, adding a new service line, updating text, or adding a review. If it’s bigger, I’ll tell you up front and quote it.",
            },
            {
              q: "Do I own the website?",
              a: "Yes. You own your domain and your site. No lock-in.",
            },
            {
              q: "How does payment work?",
              a: "Build fee is one-time. Monthly care is billed on Stripe and is month-to-month—you can cancel anytime.",
            },
            {
              q: "Can I cancel the plan?",
              a: "Yes—any time. The plan is for ongoing updates. If you cancel, your site stays live as-is.",
            },
          ].map((item) => (
            <details
              key={item.q}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-sm font-semibold text-slate-900">{item.q}</span>
                <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-slate-200 text-slate-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-slate-50">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Want a clean website you can be proud of?
              </h2>
              <p className="mt-3 text-slate-600">
                Text me your business name + services + any website examples you like. I’ll build a draft and we’ll review it by text/email (or a quick call).
              </p>
            </div>
            <div>
              <PrimaryButtons />
              <p className="mt-3 text-sm text-slate-500">
                Or email: <span className="font-medium text-slate-700">{BRAND.email}</span>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-slate-500">
              © {new Date().getFullYear()} {BRAND.name}. {BRAND.cityLine}.
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a className="text-slate-600 hover:text-slate-900" href={`tel:${BRAND.phoneE164}`}>
                Call
              </a>
              <a className="text-slate-600 hover:text-slate-900" href={`sms:${BRAND.smsE164}`}>
                Text
              </a>
              <a className="text-slate-600 hover:text-slate-900" href={`mailto:${BRAND.email}`}>
                Email
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
