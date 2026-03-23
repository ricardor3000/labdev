import Head from 'next/head';
import "../../public/assets/css/plugins/swiper.min.css";
import "../../public/assets/css/plugins/fontawesome-5.css";
import "../../public/assets/css/plugins/animate.min.css";
import "../../public/assets/css/plugins/unicons.css";

import "../../public/assets/css/vendor/bootstrap.min.css";
import "../../public/assets/css/style.css";
import Script from 'next/script';


export const metadata = {
  title: "LapDev Impulsamos tu negocio con tecnología",
  description: "LapDev Impulsamos tu negocio con tecnología",
  icons: {
    icon: "assets/images/fav3.png", // Ensure the path is correct
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <title>Lapdev.cl</title>
        <meta name="author" content="themewant" />
        <meta name="description" content="LapDev Impulsamos tu negocio con tecnología" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/fav3.png" />
      </Head>
      <body className='index-one'
      suppressHydrationWarning
      >
            
        {children}

      </body>
    </html>
  );
}
