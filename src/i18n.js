import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Traducciones
const resources = {
  en: {
    translation: {
      header_text: "We create digital solutions that transform your business",
      lets_talk: "Let's talk",
      philosophy: "Our Philosophy",
      innovate: "Innovate",
      code: "Code",
      transform: "Transform",
      driven: "Driven by Innovation",
      goal: "Our goal is to transform your ideas into digital solutions that drive growth and success.",
      // About Section
      about_company: "About Cruz Negra",
      // Contact Section
      contact_title: "Let's Work Together",
      contact_subtitle:
        "We're ready to help you bring your ideas to life. Contact us today and let's start creating something amazing.",
      // Footer
      footer_impact: "Let's Make an Impact Together",
      footer_rights: "All rights reserved.",
      // Form
      name_label: "Name",
      name_placeholder: "Enter your name",
      email_label: "Email",
      email_placeholder: "Enter your email",
      message_label: "Message",
      message_placeholder: "Write your message here...",
      submit: "Send",
      sending: "Sending...",
      form_success_title: "Message Sent!",
      form_success_text:
        "Thank you for contacting us. We'll get back to you soon.",
      form_success_ok: "OK",
      form_error_title: "Error",
      form_error_text:
        "There was an error sending your message. Please try again.",
      form_error_ok: "OK",
      // Servicios
      service1_title: "Web Development",
      service1_desc:
        "We create modern and responsive websites that adapt to your needs and help you achieve your business goals.",
      service1_tech: "React, Next.js, Node.js, Express, MongoDB",
      service2_title: "Mobile Applications",
      service2_desc:
        "We develop native and cross-platform mobile applications that provide an exceptional user experience.",
      service2_tech: "React Native, Flutter, Swift, Kotlin",
      service3_title: "UI/UX Design",
      service3_desc:
        "We design intuitive and attractive interfaces that improve user experience and increase engagement.",
      service3_tech: "Figma, Adobe XD, Sketch, InVision",
      service4_title: "E-commerce Solutions",
      service4_desc:
        "We implement online stores with secure payment systems and inventory management.",
      service4_tech: "Shopify, WooCommerce, Magento, Stripe",
      service5_title: "Cloud Services",
      service5_desc:
        "We help you migrate and manage your applications in the cloud for better scalability and security.",
      service5_tech: "AWS, Azure, Google Cloud, Docker",
      service6_title: "Digital Marketing",
      service6_desc:
        "We develop strategies to increase your online presence and reach your target audience.",
      service6_tech: "SEO, SEM, Social Media, Analytics",
      service7_title: "API Development",
      service7_desc:
        "We create robust and secure APIs that allow integration between different systems and services.",
      service7_tech: "REST, GraphQL, Node.js, Python",
      service8_title: "Maintenance & Support",
      service8_desc:
        "We provide continuous maintenance and technical support to ensure your systems run smoothly.",
      service8_tech: "Monitoring, Updates, Security, Optimization",
    },
  },
  es: {
    translation: {
      header_text: "Creamos soluciones digitales que transforman tu negocio",
      lets_talk: "Hablemos",
      philosophy: "Nuestra Filosofía",
      innovate: "Innovar",
      code: "Codificar",
      transform: "Transformar",
      driven: "Impulsados por la Innovación",
      goal: "Nuestro objetivo es transformar tus ideas en soluciones digitales que impulsen el crecimiento y el éxito.",
      // About Section
      about_company: "Sobre Cruz Negra",
      // Contact Section
      contact_title: "Trabajemos Juntos",
      contact_subtitle:
        "Estamos listos para ayudarte a dar vida a tus ideas. Contáctanos hoy y empecemos a crear algo increíble.",
      // Footer
      footer_impact: "Hagamos un Impacto Juntos",
      footer_rights: "Todos los derechos reservados.",
      // Form
      name_label: "Nombre",
      name_placeholder: "Ingresa tu nombre",
      email_label: "Correo electrónico",
      email_placeholder: "Ingresa tu correo electrónico",
      message_label: "Mensaje",
      message_placeholder: "Escribe tu mensaje aquí...",
      submit: "Enviar",
      sending: "Enviando...",
      form_success_title: "¡Mensaje Enviado!",
      form_success_text:
        "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
      form_success_ok: "OK",
      form_error_title: "Error",
      form_error_text:
        "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.",
      form_error_ok: "OK",
      // Servicios
      service1_title: "Desarrollo Web",
      service1_desc:
        "Creamos sitios web modernos y responsivos que se adaptan a tus necesidades y te ayudan a alcanzar tus objetivos de negocio.",
      service1_tech: "React, Next.js, Node.js, Express, MongoDB",
      service2_title: "Aplicaciones Móviles",
      service2_desc:
        "Desarrollamos aplicaciones móviles nativas y multiplataforma que brindan una experiencia de usuario excepcional.",
      service2_tech: "React Native, Flutter, Swift, Kotlin",
      service3_title: "Diseño UI/UX",
      service3_desc:
        "Diseñamos interfaces intuitivas y atractivas que mejoran la experiencia del usuario y aumentan el engagement.",
      service3_tech: "Figma, Adobe XD, Sketch, InVision",
      service4_title: "Soluciones E-commerce",
      service4_desc:
        "Implementamos tiendas en línea con sistemas de pago seguros y gestión de inventario.",
      service4_tech: "Shopify, WooCommerce, Magento, Stripe",
      service5_title: "Servicios en la Nube",
      service5_desc:
        "Te ayudamos a migrar y gestionar tus aplicaciones en la nube para mejor escalabilidad y seguridad.",
      service5_tech: "AWS, Azure, Google Cloud, Docker",
      service6_title: "Marketing Digital",
      service6_desc:
        "Desarrollamos estrategias para aumentar tu presencia en línea y llegar a tu audiencia objetivo.",
      service6_tech: "SEO, SEM, Redes Sociales, Analytics",
      service7_title: "Desarrollo de APIs",
      service7_desc:
        "Creamos APIs robustas y seguras que permiten la integración entre diferentes sistemas y servicios.",
      service7_tech: "REST, GraphQL, Node.js, Python",
      service8_title: "Mantenimiento y Soporte",
      service8_desc:
        "Brindamos mantenimiento continuo y soporte técnico para asegurar el funcionamiento óptimo de tus sistemas.",
      service8_tech: "Monitoreo, Actualizaciones, Seguridad, Optimización",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // idioma por defecto
    fallbackLng: "es",
    debug: true, // activar en desarrollo para ver mensajes de depuración
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, // desactivar Suspense para evitar problemas de renderizado
    },
  });

export default i18n;
