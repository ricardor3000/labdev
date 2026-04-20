import Link from 'next/link';
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/footer/FooterOne";

const capabilities = [
  {
    icon: "assets/images/service/icon/22.svg",
    title: "Sincronización de Inventario Multibodega en Tiempo Real",
    disc: (
      <>
        El problema de vender productos que no están físicamente disponibles es una de las mayores causas de fricción en el B2B.
        Esta solución utiliza los endpoints de stock de BSALE para consultar la disponibilidad exacta en cada bodega antes de permitir la finalización de un pedido en la web.<br /><br />
        <strong>Implementación:</strong> Un componente React que se comunica con una API Route de Next.js, la cual actúa como middleware para consultar la API de BSALE, garantizando que el usuario siempre vea stock real, incluso durante eventos de alta demanda.
      </>
    ),
  },
  {
    icon: "assets/images/service/icon/23.svg",
    title: "Generación Automatizada de Facturas Electrónicas (DTE) B2B",
    disc: (
      <>
        Para las empresas B2B, la boleta no es suficiente; la factura es el estándar.
        El sistema detecta automáticamente si el cliente requiere factura basándose en su perfil y emite el documento tributario electrónico (DTE) a través de BSALE en el momento del checkout.<br /><br />
        <strong>Impacto:</strong> Elimina la carga administrativa manual y asegura que cada venta cumpla estrictamente con la normativa del SII, enviando el documento automáticamente al correo del cliente.
      </>
    ),
  },
  {
    icon: "assets/images/service/icon/24.svg",
    title: "Portal de Autogestión de Cuentas Corrientes para Clientes",
    disc: (
      <>
        Los clientes mayoristas necesitan saber cuánto deben y descargar sus facturas pasadas.
        Se desarrolla un dashboard en React que consume el historial de documentos y estados de pago desde BSALE.<br /><br />
        <strong>UX/UI:</strong> Una interfaz limpia y profesional que permite al cliente ver su saldo, facturas pendientes de pago y descargar archivos PDF sin necesidad de contactar a un ejecutivo.
      </>
    ),
  },
  {
    icon: "assets/images/service/icon/22.svg",
    title: "Motor de Precios Diferenciados por Segmento de Cliente",
    disc: (
      <>
        En el B2B, los precios se negocian.
        Utilizando las listas de precios de BSALE, la plataforma en Next.js identifica al usuario logueado y muestra instantáneamente los precios que le corresponden según su contrato comercial.<br /><br />
        <strong>Estrategia:</strong> El uso de Server-Side Rendering (SSR) asegura que los precios personalizados no sean visibles para usuarios no autorizados, manteniendo la confidencialidad de los acuerdos comerciales.
      </>
    ),
  },
  {
    icon: "assets/images/service/icon/23.svg",
    title: "Control de Límites de Crédito Interno con Bloqueo de Pedido",
    disc: (
      <>
        Muchas transacciones B2B se realizan a crédito.
        El sistema consulta el atributo maxCredit en BSALE antes de autorizar una compra a cuenta.<br /><br />
        <strong>Solución:</strong> Si un cliente intenta comprar por encima de su límite, el sistema de React muestra alertas claras y ofrece alternativas de pago inmediatas para no detener la operación comercial.
      </>
    ),
  },
  {
    icon: "assets/images/service/icon/24.svg",
    title: "Formularios de Pedido Masivo (Quick Order Form)",
    disc: (
      <>
        Los compradores profesionales no navegan por banners; buscan eficiencia.
        Se implementa una interfaz de pedido rápido donde el usuario ingresa una lista de SKUs y cantidades, o carga un archivo CSV.<br /><br />
        <strong>Rendimiento:</strong> Gracias a React, la validación de SKUs y stock en BSALE ocurre en segundo plano, permitiendo agregar cientos de productos al carrito en segundos.
      </>
    ),
  },
  {
    icon: "assets/images/service/icon/22.svg",
    title: "Dashboards de Análisis de Ventas y Rotación en Tiempo Real",
    disc: (
      <>
        Los gerentes comerciales necesitan datos para decidir.
        Se integran librerías como Recharts en el frontend de React para visualizar las ventas consolidadas de BSALE.<br /><br />
        <strong>Insight:</strong> Permite identificar productos estrella y posibles quiebres de stock antes de que ocurran, integrando datos de múltiples sucursales en una sola vista.
      </>
    ),
  },
  {
    icon: "assets/images/service/icon/23.svg",
    title: "Integración de Seguimiento Logístico de Última Milla",
    disc: (
      <>
        El cliente B2B exige saber dónde está su carga.
        La solución conecta la guía de despacho de BSALE con operadores logísticos como Blue Express o Shipit.<br /><br />
        <strong>UX:</strong> Una página de seguimiento personalizada dentro de la web de la empresa que muestra el estado del despacho en tiempo real, reduciendo las consultas al servicio al cliente.
      </>
    ),
  },
  {
    icon: "assets/images/service/icon/24.svg",
    title: "Catálogos B2B Internacionales con i18n y Conversión de Moneda",
    disc: (
      <>
        Para empresas que exportan, Next.js permite manejar múltiples idiomas y monedas de forma nativa.
        Los precios se sincronizan desde BSALE en CLP y se convierten según la tasa del día para mercados extranjeros.<br /><br />
        <strong>Escalabilidad:</strong> El sistema detecta la ubicación del usuario y ajusta el catálogo, los impuestos y los métodos de envío correspondientes.
      </>
    ),
  },
  {
    icon: "assets/images/service/icon/22.svg",
    title: "Gestión de Retiro en Sucursal (BOPIS) con Control de Stock Local",
    disc: (
      <>
        El cliente elige retirar en una tienda específica.
        La aplicación en Next.js valida el stock de BSALE para esa ubicación exacta.<br /><br />
        <strong>Operación:</strong> Si no hay stock local, el sistema puede gestionar una guía de traslado interno en BSALE para mover el producto desde la bodega central hacia la sucursal de retiro.
      </>
    ),
  },
  {
    icon: "assets/images/service/icon/23.svg",
    title: "PWA para Equipos de Venta en Terreno (Offline-First)",
    disc: (
      <>
        Los vendedores que visitan clientes necesitan registrar pedidos incluso sin internet.
        Una Progressive Web App construida con Next.js almacena los datos localmente y los sincroniza con BSALE al recuperar señal.<br /><br />
        <strong>Beneficio:</strong> Aumenta la productividad del equipo comercial y asegura que la información de ventas se centralice correctamente sin doble digitación.
      </>
    ),
  },
  {
    icon: "assets/images/service/icon/24.svg",
    title: "Automatización de Notas de Crédito y Procesos de Devolución",
    disc: (
      <>
        Gestionar devoluciones manualmente es costoso.
        Se crea un flujo donde el cliente solicita la devolución desde el portal y, tras aprobación, el sistema emite la nota de crédito correspondiente en BSALE.<br /><br />
        <strong>Transparencia:</strong> El cliente recibe el documento legal instantáneamente y el stock de BSALE se reincorpora de forma automática.
      </>
    ),
  },
  {
    icon: "assets/images/service/icon/22.svg",
    title: "Landing Pages de Producto Optimizadas para SEO Técnico",
    disc: (
      <>
        En mercados especializados, aparecer en Google es clave.
        Next.js genera páginas estáticas para cada producto del catálogo de BSALE, garantizando que el contenido sea indexado con la máxima velocidad.<br /><br />
        <strong>Marketing:</strong> Permite capturar leads calificados que buscan especificaciones técnicas de productos industriales o suministros corporativos.
      </>
    ),
  },
  {
    icon: "assets/images/service/icon/23.svg",
    title: "Búsqueda Avanzada con Filtros Facetados por Atributos Técnicos",
    disc: (
      <>
        Los catálogos B2B suelen ser densos.
        Utilizando React, se construye un buscador que filtra por marca, material, dimensiones o cualquier atributo personalizado guardado en BSALE.<br /><br />
        <strong>UX:</strong> Resultados instantáneos mientras el usuario escribe, mejorando significativamente la experiencia de búsqueda en catálogos de miles de referencias.
      </>
    ),
  },
  {
    icon: "assets/images/service/icon/24.svg",
    title: "Sistema de Cotizaciones Formales con Workflow de Aprobación",
    disc: (
      <>
        Muchos procesos B2B requieren una cotización antes del pedido.
        La web permite cotizar productos de BSALE y genera un PDF profesional que el cliente puede presentar internamente.<br /><br />
        <strong>Conversión:</strong> El administrador puede convertir esa cotización en un pedido real en BSALE con un solo clic una vez recibida la orden de compra.
      </>
    ),
  },
  {
    icon: "assets/images/service/icon/22.svg",
    title: "Integración con Headless CMS para Gestión de Contenidos Estratégicos",
    disc: (
      <>
        Para LapDev Impulsamos tu negocio con tecnología, la educación del cliente es vital.
        Se integra Next.js con un CMS como Strapi para manejar blogs y guías técnicas, mientras los productos se gestionan en BSALE.<br /><br />
        <strong>Flexibilidad:</strong> El equipo de marketing puede publicar contenidos sin depender de desarrolladores, manteniendo una arquitectura limpia y desacoplada.
      </>
    ),
  },
  {
    icon: "assets/images/service/icon/23.svg",
    title: "Validación Automática de RUT y Datos de Empresa (API SII)",
    disc: (
      <>
        Durante el registro de nuevos clientes B2B, el sistema en React valida el RUT y recupera la razón social y giro desde bases de datos autorizadas, precargando la información en BSALE.<br /><br />
        <strong>Seguridad:</strong> Asegura que los datos de facturación sean correctos desde el primer día, evitando rechazos de documentos tributarios.
      </>
    ),
  },
  {
    icon: "assets/images/service/icon/24.svg",
    title: "Programa de Puntos y Fidelización B2B Integrado",
    disc: (
      <>
        Aprovechando las capacidades de fidelización de BSALE, la interfaz web muestra al comprador cuántos puntos acumula y le permite canjearlos por descuentos en futuras compras corporativas.<br /><br />
        <strong>Retención:</strong> Incentiva la lealtad del comprador recurrente, un factor crítico en la estabilidad de ingresos B2B.
      </>
    ),
  },
  {
    icon: "assets/images/service/icon/22.svg",
    title: "Alertas de Reposición y Stock Proactivas",
    disc: (
      <>
        Utilizando API Routes y cron jobs en Next.js, el sistema notifica a los clientes cuando un producto de su interés vuelve a tener existencias en BSALE o cuando hay una baja de precio.<br /><br />
        <strong>Automatización:</strong> Reduce la pérdida de ventas por falta de stock y mantiene a la marca presente en la mente del comprador.
      </>
    ),
  },
  {
    icon: "assets/images/service/icon/23.svg",
    title: "Roles y Permisos para Compras Corporativas (RBAC)",
    disc: (
      <>
        En una empresa, el que elige el producto no siempre es el que paga.
        La aplicación en Next.js permite definir roles: un usuario operador llena el carrito y un aprobador autoriza la compra final.<br /><br />
        <strong>Estructura:</strong> Refleja la realidad organizacional de los clientes B2B, ofreciendo una herramienta que se adapta a sus flujos de trabajo internos.
      </>
    ),
  },
  {
    icon: "assets/images/service/icon/24.svg",
    title: "Entornos de Desarrollo Efímeros para Pruebas de Integración (Lapdev)",
    disc: (
      <>
        Para garantizar que las actualizaciones de la web no rompan la conexión con BSALE, se utiliza la infraestructura de Lapdev para crear entornos que espejan la producción.<br /><br />
        <strong>Calidad:</strong> Permite a los desarrolladores probar nuevas funcionalidades de facturación o stock en contenedores Kubernetes aislados antes de lanzarlas a los clientes reales.
      </>
    ),
  },
  {
    icon: "assets/images/service/icon/22.svg",
    title: "Reportabilidad Consolidada para Holdings Multi-empresa",
    disc: (
      <>
        Si un cliente maneja varios RUTs en BSALE, el sistema permite unificar la vista de todas sus empresas en un solo portal desarrollado en Next.js.<br /><br />
        <strong>Eficiencia:</strong> El gerente del holding puede ver el consumo total de su grupo económico, descargar reportes consolidados y gestionar pagos masivos de forma centralizada.
      </>
    ),
  },
];

export default function Home() {
  const breadcrumbs = [
    { label: 'Inicio', link: '/' },
    { label: 'Capacidades' }
  ];

  return (
    <div className="">
      <HeaderOne />
      <Breadcrumb title="Nuestras Capacidades" breadcrumbs={breadcrumbs} />

      <div className="rts-service-area home-seven rts-section-gap" id="service">
        <div className="shape-business-service">
          <img src="assets/images/service/icon/shape-1.png" alt="shape" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-area-with-btn-home-6">
                <div className="title-area-style-six text-start">
                  <div className="pre-title">
                    <img
                      src="assets/images/banner/shape/pre-title.png"
                      alt="pre-title"
                    />
                    <span className="pre">NUESTRA METODOLOGÍA</span>
                    <img
                      className="two"
                      src="assets/images/banner/shape/pre-title.png"
                      alt="pre-title"
                    />
                  </div>

                  <h2 className="title">
                    Estrategia, Arquitectura y <br /> Ejecución con Estándar Corporativo
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row gx-5 gy-5 mt--80">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"
              >
                <div className="service-single-style-six h-100 mb--60">
                  <div className="icon">
                    <img src={item.icon} alt="service_icon" />
                  </div>
                  <h5 className="title">{item.title}</h5>
                  <p className="disc">{item.disc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FooterOne />
      <BackToTop />
    </div>
  );
}