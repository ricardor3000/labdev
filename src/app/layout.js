import Script from "next/script";

import "../../public/assets/css/plugins/swiper.min.css";
import "../../public/assets/css/plugins/fontawesome-5.css";
import "../../public/assets/css/plugins/animate.min.css";
import "../../public/assets/css/plugins/unicons.css";
import "../../public/assets/css/vendor/bootstrap.min.css";
import "../../public/assets/css/style.css";

export const metadata = {
  title: "LapDev Impulsamos tu negocio con tecnología",
  description: "LapDev Impulsamos tu negocio con tecnología",
  icons: {
    icon: "/assets/images/fav3.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="index-one" suppressHydrationWarning>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PVCMCHV8');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google Tag Manager noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PVCMCHV8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager noscript */}

        {children}
      </body>
    </html>
  );
}