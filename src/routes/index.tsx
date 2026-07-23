import { createFileRoute } from "@tanstack/react-router";
import { Nav, StickyBookButton } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import {
  SocialProof, Problem, Solution, HowItWorks, AiDeepDive,
  Features, Results, Industries, BeforeAfter, Testimonials,
  CaseStudies, FAQ, FinalCta,
} from "@/components/site/Sections";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Revvex Digital — AI-Powered Websites That Book Clients" },
      {
        name: "description",
        content:
          "We build AI-powered websites that turn visitors into booked consultations — for law firms, trades, local businesses, and B2B companies.",
      },
      { property: "og:title", content: "Revvex Digital — AI-Powered Websites That Book Clients" },
      {
        property: "og:description",
        content:
          "We build AI-powered websites that turn visitors into booked consultations — for law firms, trades, local businesses, and B2B companies.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Revvex Digital",
          description:
            "AI-powered websites that generate qualified appointments for law firms, trades, local businesses, and B2B companies.",
          areaServed: "US",
          serviceType: [
            "AI-Powered Websites",
            "AI Appointment Booking",
            "SEO",
            "Review Automation",
            "CRM Integration",
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <HowItWorks />
        <AiDeepDive />
        <Features />
        <Results />
        <Industries />
        <BeforeAfter />
        <Testimonials />
        <CaseStudies />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  );
}
