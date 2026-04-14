
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceEleven from "@/components/service/ServiceEleven";
import FaqTwo from "@/components/faq/FaqTwo";
import FooterOne from "@/components/footer/FooterOne";
import PricingThree from "@/components/pricing/PricingThree";
import AboutFive from "@/components/about/AboutFive";
import ServiceOne from "@/components/service/ServiceOne";
import AboutCompany from "@/components/about/AboutCompany";
import ContactTwo from "@/components/contactform/ContactTwo";
import ContactFormThree from "@/components/contactform/ContactFormThree";
import ContactFormFour from "@/components/contactform/ContactFormFour";

export default function Home() {
    const breadcrumbs = [
        { label: 'Inicio', link: '/' },
        { label: 'Servicios' }
    ];
    return (

        <div className="">
            <HeaderOne />
            {/* <Breadcrumb title="Nuestros Servicios" breadcrumbs={breadcrumbs} /> */}
             <AboutFive />
             <ServiceOne />
             <AboutCompany />
           {/*  <ServiceEleven />   */}          
           {/*  <FaqTwo /> */}
            {/* <ContactTwo /> */}
            {/* <ContactFormThree /> */}
            <ContactFormFour />
            <FooterOne />

            <BackToTop />
        </div>

    );
}
