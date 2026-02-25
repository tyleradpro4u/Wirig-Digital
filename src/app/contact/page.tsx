export const metadata = {
  title: "Wirig Digital — Contact",
  description: "Contact Wirig Digital to start your website.",
};

const CONTACT = {
  phoneDisplay: "(702) 628-6274",
  phoneE164: "+17026286274",
  smsE164: "+17026286274",
  email: "wirigdigital@outlook.com",
};

function Card({
  title,
  body,
  href,
  cta,
}: {
  title: string;
  body: string;
  href: string;
  cta: string;
}) {
  return (
    <a
      href={href}
      className="block rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
      <div className="mt-4 text-sm font-semibold text-slate-900">{cta} →</div>
    </a>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Contact Wirig Digital
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Fastest way to start: text me your business name + services + service
            area (cities) + your current website (if you have one).
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Card
              title="Call"
              body={`Talk it through now: ${CONTACT.phoneDisplay}`}
              href={`tel:${CONTACT.phoneE164}`}
              cta="Call"
            />
            <Card
              title="Text"
              body="Send your business info and any example sites you like."
              href={`sms:${CONTACT.smsE164}`}
              cta="Text"
            />
            <Card
              title="Email"
              body={`Send details and files: ${CONTACT.email}`}
              href={`mailto:${CONTACT.email}`}
              cta="Email"
            />
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-sm font-semibold text-slate-900">What to send</div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>Business name</li>
              <li>Services (top 5)</li>
              <li>Service area (cities)</li>
              <li>Phone number + email you want on the site</li>
              <li>Any photos/reviews/logo you have (optional)</li>
            </ul>
          </div>

          <div className="mt-8 text-sm text-slate-500">
            You’ll always have direct access. No handoffs.
          </div>
        </div>
      </div>
    </div>
  );
}
