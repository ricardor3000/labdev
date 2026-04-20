import "../../public/assets/css/vendor/bootstrap.min.css";
import "../../public/assets/css/plugins/swiper.min.css";
import "../../public/assets/css/plugins/fontawesome-5.css";
import "../../public/assets/css/plugins/animate.min.css";
import "../../public/assets/css/plugins/unicons.css";
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
        {children}
      </body>
    </html>
  );
}