import Link from "next/link";

export const dynamicParams = true;

const PLUMBING_PROS = {
  name: "Plumbing Pros of Provo",
  rating: "5.0",
  reviewCount: "51",
  phoneDisplay: "(385) 412-8168",
  phoneE164: "+13854128168",
  address: "281 W 1230 N, Provo, UT 84604",
  locatedIn: "North Park Plaza",
  serviceAreaLine: "Serving Provo + Utah County",
  googleMapsUrl:
    "https://www.google.com/maps/place/Plumbing+Pros+of+Provo/@40.2498532,-112.2404402,10z/data=!4m10!1m2!2m1!1splumber+Provo+UT!3m6!1s0x8bc9df04f6f79a13:0xfab89a191173023b!8m2!3d40.2498532!4d-111.663658!15sChBwbHVtYmVyIFByb3ZvIFVUkgEHcGx1bWJlcuABAA!16s%2Fg%2F11srv5sm4d?entry=ttu",
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>;
}

function Section({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <section className={cx("py-16 sm:py-20", className)}>{children}</section>;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function PlumberHeroArt() {
  // License-safe SVG (custom). Looks like a faucet/sink + water droplet.
  return (
    <svg
      viewBox="0 0 640 480"
      className="h-auto w-full"
      role="img"
      aria-label="Plumbing illustration"
    >
      <defs>
        <linearGradient id="pp_blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2563EB" stopOpacity="0.95" />
          <stop offset="1" stopColor="#06B6D4" stopOpacity="0.85" />
        </linearGradient>
        <filter id="pp_blur" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      <circle cx="160" cy="140" r="120" fill="url(#pp_blue)" filter="url(#pp_blur)" />
      <circle
        cx="470"
        cy="160"
        r="140"
        fill="url(#pp_blue)"
        filter="url(#pp_blur)"
        opacity="0.7"
      />
      <circle
        cx="370"
        cy="360"
        r="140"
        fill="url(#pp_blue)"
        filter="url(#pp_blur)"
        opacity="0.55"
      />

      <rect x="78" y="86" width="484" height="308" rx="28" fill="#0B1220" opacity="0.95" />

      {/* faucet */}
      <rect x="260" y="140" width="120" height="74" rx="22" fill="#0F172A" opacity="0.25" />
      <rect x="286" y="114" width="68" height="44" rx="14" fill="#0F172A" opacity="0.25" />
      <path
        d="M380 176h92c26 0 46 20 46 46v44h-70v-26c0-14-12-26-26-26h-42"
        stroke="url(#pp_blue)"
        strokeWidth="18"
        strokeLinecap="round"
        fill="none"
      />

      {/* sink */}
      <rect x="160" y="256" width="320" height="32" rx="14" fill="#0F172A" opacity="0.20" />
      <path
        d="M188 290h264c0 78-66 134-132 134s-132-56-132-134z"
        fill="#0F172A"
        opacity="0.22"
      />
      <path
        d="M220 318h200"
        stroke="#FFFFFF"
        strokeOpacity="0.32"
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* droplet */}
      <path
        d="M470 300c0 16-13 29-29 29s-29-13-29-29c0-24 29-54 29-54s29 30 29 54z"
        fill="url(#pp_blue)"
        opacity="0.95"
      />
      <circle cx="442" cy="346" r="7" fill="url(#pp_blue)" opacity="0.82" />

      {/* subtle UI bars */}
      <rect x="120" y="120" width="190" height="14" rx="7" fill="#1F2A44" />
      <rect x="120" y="150" width="320" height="10" rx="5" fill="#16213A" />
      <rect x="120" y="170" width="280" height="10" rx="5" fill="#16213A" />
    </svg>
  );
}

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{desc}</div>
    </div>
  );
}

function ReviewCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm text-slate-700">{children}</div>
    </div>
  );
}

function PlumbingProsSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-sm font-semibold text-white">
                PP
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">{PLUMBING_PROS.name}</div>
                <div className="text-xs text-slate-600">{PLUMBING_PROS.serviceAreaLine}</div>
              </div>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <a
                href={`tel:${PLUMBING_PROS.phoneE164}`}
                className="inline-flex h-10 items-center justify-center rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Call now
              </a>
              <a
                href="#request"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Request service
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Hero */}
      <Section className="pt-10 sm:pt-14">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Pill>
                  {PLUMBING_PROS.rating}★ rated on Google ({PLUMBING_PROS.reviewCount} reviews)
                </Pill>
                <Pill>Provo, UT</Pill>
                <Pill>Upfront, homeowner-friendly communication</Pill>
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Reliable plumbing help in Provo—without the guesswork.
              </h1>
              <p className="mt-4 max-w-xl text-lg text-slate-600">
                Plumbing Pros of Provo helps homeowners with clogs, leaks, water heaters,
                repairs, and installs. Clear options, clean work, and a simple path to getting
                it fixed.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={`tel:${PLUMBING_PROS.phoneE164}`}
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Call {PLUMBING_PROS.phoneDisplay}
                </a>
                <a
                  href="#request"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                >
                  Request service
                </a>
                <a
                  href={PLUMBING_PROS.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-slate-600 hover:text-slate-900"
                >
                  View on Google Maps →
                </a>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {["Clear options", "Clean work", "Local Provo"].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 shadow-sm"
                  >
                    {t}
                    <div className="mt-1 text-xs font-medium text-slate-600">
                      Built for homeowners
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
                <div className="font-semibold text-slate-900">Location</div>
                <div className="mt-1 text-slate-700">{PLUMBING_PROS.address}</div>
                <div className="mt-1 text-slate-600">Located in: {PLUMBING_PROS.locatedIn}</div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <PlumberHeroArt />
              <div className="mt-4 text-xs text-slate-500">
                Illustration is custom (license-safe). Replace with real photos later.
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section className="bg-slate-50/60">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Common plumbing needs</h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Problem-first sections convert better than generic service lists. These match how
                homeowners search and call.
              </p>
            </div>
            <div className="hidden sm:block">
              <a
                href={`tel:${PLUMBING_PROS.phoneE164}`}
                className="inline-flex h-10 items-center justify-center rounded-xl bg-slate-900 px-4 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Talk to a plumber
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard title="Clogged drains" desc="Kitchen, bathroom, main-line backups." />
            <ServiceCard title="Leaks" desc="Under sinks, walls/ceilings, outdoor lines." />
            <ServiceCard title="Toilets" desc="Running, clogged, leaking, installs." />
            <ServiceCard title="Water heaters" desc="No hot water, replacement, installs." />
            <ServiceCard title="Faucets & fixtures" desc="Repair or replace—clean finish." />
            <ServiceCard title="Disposals" desc="Jammed, leaking, or replacement." />
          </div>
        </Container>
      </Section>

      {/* Reviews */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Social proof (Google reviews)</h2>
              <p className="mt-2 text-sm text-slate-600">
                We can feature specific review quotes directly from Google. Right now, we’re
                showing the verified rating/count and a polished layout ready for real snippets.
              </p>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">
                  {PLUMBING_PROS.rating}★ rating ({PLUMBING_PROS.reviewCount} reviews)
                </div>
                <div className="mt-2 text-sm text-slate-600">
                  Add 3–6 short quotes here (verbatim) to mirror what customers say most.
                </div>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={PLUMBING_PROS.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                  >
                    Read reviews on Google
                  </a>
                  <a
                    href="#request"
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                  >
                    Request service
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <ReviewCard>
                <div className="font-semibold text-slate-900">“Clear communication.”</div>
                <div className="mt-1 text-slate-600">
                  Swap this placeholder for a real review quote.
                </div>
              </ReviewCard>
              <ReviewCard>
                <div className="font-semibold text-slate-900">“Quick and professional.”</div>
                <div className="mt-1 text-slate-600">
                  Swap this placeholder for a real review quote.
                </div>
              </ReviewCard>
              <ReviewCard>
                <div className="font-semibold text-slate-900">“Respectful and clean.”</div>
                <div className="mt-1 text-slate-600">
                  Swap this placeholder for a real review quote.
                </div>
              </ReviewCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-slate-50/60">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            This section reduces anxiety—people want to know what happens next.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {["Call or request service", "Quick diagnosis + options", "Approve the plan", "Repair + cleanup"].map(
              (step, idx) => (
                <div
                  key={step}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="text-xs font-semibold text-slate-500">Step {idx + 1}</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">{step}</div>
                  <div className="mt-2 text-sm text-slate-600">
                    Clear, homeowner-friendly communication at every step.
                  </div>
                </div>
              )
            )}
          </div>
        </Container>
      </Section>

      {/* Request form */}
      <Section>
        <Container>
          <div
            id="request"
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Request service</h2>
                <p className="mt-2 max-w-xl text-sm text-slate-600">
                  Short forms outperform long ones. This is designed for quick conversions.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <a
                  href={`tel:${PLUMBING_PROS.phoneE164}`}
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Call {PLUMBING_PROS.phoneDisplay}
                </a>
                <a
                  href={PLUMBING_PROS.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                >
                  Directions
                </a>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-xs font-semibold text-slate-700">Name</span>
                <input
                  className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none ring-blue-600/20 placeholder:text-slate-400 focus:border-blue-300 focus:ring-4"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-semibold text-slate-700">Phone</span>
                <input
                  className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none ring-blue-600/20 placeholder:text-slate-400 focus:border-blue-300 focus:ring-4"
                  placeholder="(###) ###-####"
                />
              </label>
              <label className="grid gap-2 md:col-span-2">
                <span className="text-xs font-semibold text-slate-700">What’s going on?</span>
                <textarea
                  rows={4}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-blue-600/20 placeholder:text-slate-400 focus:border-blue-300 focus:ring-4"
                  placeholder="Quick description (e.g., drain backing up, leak under sink, no hot water…)"
                />
              </label>
            </div>

            <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a
                href={`tel:${PLUMBING_PROS.phoneE164}`}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-slate-900 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Call to schedule
              </a>
              <div className="text-xs text-slate-500">
                Demo form only (no backend). For a real site, connect this to email/SMS.
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">
              Built as a demo by Wirig Digital
            </div>
            <p className="mt-2 text-sm text-slate-600">
              This is a sample redesign concept to show what a modern plumber website could look
              like. Want a version tailored to your exact services + photos + real reviews?
            </p>
            <div className="mt-5">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Contact Wirig Digital
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/90 p-3 backdrop-blur sm:hidden">
        <div className="mx-auto flex max-w-6xl gap-2 px-2">
          <a
            href={`tel:${PLUMBING_PROS.phoneE164}`}
            className="flex h-12 flex-1 items-center justify-center rounded-xl bg-blue-600 text-sm font-semibold text-white shadow-sm"
          >
            Call
          </a>
          <a
            href="#request"
            className="flex h-12 flex-1 items-center justify-center rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-900 shadow-sm"
          >
            Quote
          </a>
        </div>
      </div>
    </div>
  );
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry } = await params;

  if (industry === "plumber") {
    return <PlumbingProsSite />;
  }

  // Keep other industries as basic placeholders for now.
  const titles: Record<string, { title: string; subtitle: string }> = {
    dental: {
      title: "Dental Demo",
      subtitle: "New-patient-friendly layout with proof and clear next steps.",
    },
    chiropractor: {
      title: "Chiropractor Demo",
      subtitle: "Trust-first layout with your approach, reviews, and contact actions.",
    },
  };

  const data = titles[industry] ?? { title: "Demo", subtitle: "Example layout" };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-medium text-slate-500">Wirig Digital</div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              {data.title}
            </h1>
            <p className="mt-3 text-slate-600">{data.subtitle}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-4 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
          >
            Book a Website Demo
          </Link>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">
            Want this layout customized for your business?
          </div>
          <p className="mt-2 text-sm text-slate-600">
            Go to the contact page and send your business name + services + service area.
          </p>
          <div className="mt-5">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
