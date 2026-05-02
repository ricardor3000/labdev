import Link from "next/link";
import { notFound } from "next/navigation";
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/footer/FooterOne";
import Services from "@/data/Services.json";

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

  const breadcrumbs = [
    { label: "Inicio", link: "/" },
    { label: "Nuestros Servicios", link: "/#service" },
    { label: service.title },
  ];

  const otherServices = Services.filter((item) => item.slug !== service.slug);

  return (
    <div>
      <HeaderOne />
      <Breadcrumb title={service.title} breadcrumbs={breadcrumbs} />

      <div className="rts-service-details-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-12 col-sm-12 col-12 service-mobile-padding">
              <div className="service-detials-step-1">
                <div className="thumbnail">
                  <img
                    className="shadow-lg"
                    style={{borderRadius:20}}
                    src={`/assets/images/service/${service.image}`}
                    alt={service.title}
                  />
                </div>
              </div>

              {service.sections.map((section, index) => (
                <div
                  key={index}
                  className={`service-detials-step-2 ${index > 0 ? "mt--40" : "mt--30"}`}
                >
                  <h4 className="title">{section.title}</h4>

                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className={`disc ${pIndex === 0 ? "mb--25" : ""}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 pl--50 pl_md--0 pl-lg-controler pl_sm--0 service-sidebar-mobile">
              <div className="rts-single-wized Categories service">
                <div className="wized-header">
                  <h5 className="title">Categoría</h5>
                </div>
                <div className="wized-body">
                  <ul className="single-categories">
                    <li>
                      <Link href="#">
                        {service.category} <i className="far fa-long-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rts-single-wized Categories service mt--30">
                <div className="wized-header">
                  <h5 className="title">Otros Servicios</h5>
                </div>
                <div className="wized-body">
                  {otherServices.map((item) => (
                    <ul className="single-categories" key={item.id}>
                      <li>
                        <Link href={`/service-details/${item.slug}`}>
                          {item.title} <i className="far fa-long-arrow-right" />
                        </Link>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>

               {/* single wizered start */}
                <div className="rts-single-wized contact" style={{backgroundColor:"#f2f2f2"}}>
                    <div className="wized-header">
                        <a href="#">
                            <img src="/assets/images/logo/lapDevLogo20266.svg" alt="Business_logo" width={180} />
                        </a>
                    </div>
                    <div className="wized-body">
                        <h5 className="title" style={{color:"#1D2539"}}>Necesitas ayuda. Tenemos la solución que necesitas.?</h5>
                        <Link className="rts-btn btn-primary" target='blank' href="https://api.whatsapp.com/send?phone=+56936533800&text=Quiero%20informaci%C3%B3n">
                            Contáctanos
                        </Link>
                    </div>
                </div>
                {/* single wizered End */}
            </div>
          </div>
        </div>
      </div>

      <FooterOne />
      <BackToTop />
    </div>
  );
}