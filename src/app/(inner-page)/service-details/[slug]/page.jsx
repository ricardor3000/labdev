import { notFound } from "next/navigation";
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import Services from "@/data/Services.json";

import AboutTwo from "@/components/about/AboutTwo";
import CaseSix from "@/components/businesscase/CaseSix";

export async function generateStaticParams() {
  return Services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailsPage({ params }) {
  const { slug } = await params;

  const service = Services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div>
      <HeaderOne />

      <AboutTwo service={service} />

      <CaseSix />

      <FooterOne />
      <BackToTop />
    </div>
  );
}