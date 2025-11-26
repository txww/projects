import { ContentData } from './types';

export const CONTENT: Record<'ar' | 'en', ContentData> = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      projects: "مشاريعنا",
      contact: "اتصل بنا",
      quote: "طلب عرض سعر"
    },
    hero: {
      headline: "شركة بلوميريا للتعهدات والمقاولات",
      subheadline: "نرسخ معايير جديدة في عالم البناء، حيث تلتقي الدقة الهندسية بالرؤية الفنية لبناء مستقبل مستدام.",
      cta: "ابدأ مشروعك",
      learnMore: "تعرف علينا"
    },
    stats: [
      { value: "+15", label: "عاماً من الخبرة", iconName: "Clock" },
      { value: "+200", label: "مشروع منجز", iconName: "CheckCircle" },
      { value: "+50", label: "خبير ومختص", iconName: "Users" },
      { value: "100%", label: "رضا العملاء", iconName: "Star" }
    ],
    about: {
      title: "عن بلوميريا",
      slogan: "الريادة في التعهدات العامة ومواد البناء",
      whoWeAreTitle: "من نحن؟",
      whoWeAreText: "نسعى أن تكون شركتنا رائدة عالمياً في مجال البناء والتطوير العقاري ومواكبة الحداثة والتكنولوجيا على مستوى سوريا، ونسعى أن تكون شركتنا الخيار الأفضل والأول لكل من يبحث عن الجودة والتميز في تنفيذ المشاريع.",
      visionTitle: "الرؤية",
      visionText: "نعمل على إنشاء مشاريع عالية الجودة تتميز بالكفاءة ومواكبة التطور والحداثة وإعتماد أحدث لتقنيات في مجال الحفر والردم والبناء....",
      missionTitle: "الرسالة",
      missionText: "توفير مواد البناء (بحص ،رمل ، حصيات ، عدسية ، سمسمية ، .... وبلوك ومواد بناء عالية الجودة ، بأسعار مدروسة مع خدمات احترافية ",

    },
    features: {
      title: "لماذا بلوميريا؟",
      subtitle: "قيمنا الأساسية التي نلتزم بها في كل مشروع",
      items: [
        {
          title: "جودة لا تضاهى",
          description: "نلتزم بأعلى معايير الجودة العالمية في جميع مراحل التنفيذ لضمان المتانة والاستدامة.",
          iconName: "Award"
        },
        {
          title: "التزام بالمواعيد",
          description: "نقدر قيمة الوقت، ونلتزم بتسليم المشاريع ضمن الجداول الزمنية المتفق عليها بدقة.",
          iconName: "Clock"
        },
        {
          title: "فريق احترافي",
          description: "نمتلك كادراً من المهندسين والفنيين ذوي الخبرة العالية لضمان تنفيذ احترافي.",
          iconName: "Users"
        },
        {
          title: "حلول مبتكرة",
          description: "نقدم حلولاً هندسية ذكية تناسب متطلبات العصر وتوفر التكاليف على عملائنا.",
          iconName: "Lightbulb"
        }
      ]
    },
    services: {
      title: "خدماتنا",
      subtitle: "حلول إنشائية متكاملة تناسب جميع الاحتياجات",
      items: [
        {
          title: "مواد بناء",
          description: "توريد كافة مواد البناء الأساسية بجودة عالية: إسمنت، بلوك، حديد، ورمل لكافة أنواع المشاريع.",
          iconName: "BrickWall"
        },
        {
          title: "تعبيد وتزفيت الطرق",
          description: "تنفيذ أعمال الطرق وتزفيت الساحات العامة والخاصة باستخدام أفضل الآليات الحديثة.",
          iconName: "Route"
        },
        {
          title: "نقل وترحيل",
          description: "أسطول متكامل لنقل المواد وترحيل الأنقاض والمخلفات من المواقع الإنشائية بسرعة وأمان.",
          iconName: "Truck"
        },
        {
          title: "هدم وإزالة",
          description: "خدمات هدم فنية مدروسة للمباني والمنشآت القديمة مع مراعاة أقصى معايير السلامة العامة.",
          iconName: "Hammer"
        }
      ]
    },
    portfolio: {
      title: "معرض الأعمال",
      subtitle: "مقتطفات من مشاريعنا التي نفخر بإنجازها",
      items: [
        {
          title: "مجمع سكني حديث",
          category: "إنشاءات",
          image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
        },
        {
          title: "تعبيد طريق سريع",
          category: "طرق وبنية تحتية",
          image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop"
        },
        {
          title: "برج تجاري",
          category: "تطوير عقاري",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
        },
        {
          title: "مشروع بنية تحتية",
          category: "حفريات وتجهيز",
          image: "https://images.unsplash.com/photo-1590644365607-1c5a29846519?q=80&w=2071&auto=format&fit=crop"
        }
      ]
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "فريقنا جاهز للإجابة على استفساراتكم ومناقشة تفاصيل مشروعكم القادم.",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      message: "تفاصيل المشروع",
      send: "إرسال الطلب",
      sending: "جاري الإرسال...",
      successMessage: "تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا، سيقوم فريقنا بالرد عليك قريباً.",
      errorMessage: "عذراً، حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.",
      addressTitle: "مقر الشركة",
      address: "ريف دمشق -التل - حارة الوادي - مواجه نزلة الدولة",
      phoneTitle: "أرقام التواصل",
      phones: ["0980438576", "0999119202"]
    },
    footer: {
      aboutTitle: "عن الشركة",
      aboutText: "شركة بلوميريا للتعهدات والمقاولات، شريككم الاستراتيجي في البناء والتطوير، ملتزمون بالجودة والتميز منذ التأسيس.",
      linksTitle: "روابط سريعة",
      contactTitle: "معلومات الاتصال",
      rights: "جميع الحقوق محفوظة © 2025 شركة بلوميريا للمقاولات"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      quote: "Get Quote"
    },
    hero: {
      headline: "Plumeria Contracting Company",
      subheadline: "Setting new standards in construction, where engineering precision meets artistic vision to build a sustainable future.",
      cta: "Start Your Project",
      learnMore: "Learn More"
    },
    stats: [
      { value: "+15", label: "Years Experience", iconName: "Clock" },
      { value: "+200", label: "Projects Done", iconName: "CheckCircle" },
      { value: "+50", label: "Expert Staff", iconName: "Users" },
      { value: "100%", label: "Client Satisfaction", iconName: "Star" }
    ],
    about: {
      title: "About Plumeria",
      slogan: "Leadership in General Contracting & Building Materials",
      whoWeAreTitle: "Who We Are?",
      whoWeAreText: "We strive to be a globally leading company in construction and real estate development, keeping pace with modernity and technology in Syria. We aim to be the first and best choice for anyone seeking quality and excellence in project execution.",
      visionTitle: "Our Vision",
      visionText: "To ensure continuity of work with clients by providing the best quality, modern technologies, and innovative global solutions in project execution.",
      missionTitle: "Our Mission",
      missionText: "Focusing on ensuring the highest levels of accuracy in execution. Our mission and vision complement each other, committed to always providing the best expertise to our clients."
    },
    features: {
      title: "Why Plumeria?",
      subtitle: "Core values we uphold in every project",
      items: [
        {
          title: "Unmatched Quality",
          description: "We adhere to the highest international quality standards in all phases of execution.",
          iconName: "Award"
        },
        {
          title: "On-Time Delivery",
          description: "We value time and are committed to delivering projects within agreed timelines strictly.",
          iconName: "Clock"
        },
        {
          title: "Professional Team",
          description: "We possess a cadre of highly experienced engineers and technicians ensuring professional execution.",
          iconName: "Users"
        },
        {
          title: "Innovative Solutions",
          description: "We provide smart engineering solutions that fit modern requirements and save costs for our clients.",
          iconName: "Lightbulb"
        }
      ]
    },
    services: {
      title: "Our Services",
      subtitle: "Integrated construction solutions for all needs",
      items: [
        {
          title: "Building Materials",
          description: "Supply of all essential high-quality building materials: Cement, Blocks, Steel, and Sand for all project types.",
          iconName: "BrickWall"
        },
        {
          title: "Road Paving",
          description: "Execution of road works and paving for public and private areas using the best modern machinery.",
          iconName: "Route"
        },
        {
          title: "Transport & Removal",
          description: "Integrated fleet for material transport and safe debris removal from construction sites.",
          iconName: "Truck"
        },
        {
          title: "Demolition",
          description: "Technical demolition services for old buildings and structures adhering to maximum safety standards.",
          iconName: "Hammer"
        }
      ]
    },
    portfolio: {
      title: "Our Portfolio",
      subtitle: "Highlights from projects we are proud to have delivered",
      items: [
        {
          title: "Modern Residential Complex",
          category: "Construction",
          image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
        },
        {
          title: "Highway Paving",
          category: "Infrastructure",
          image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop"
        },
        {
          title: "Commercial Tower",
          category: "Real Estate",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
        },
        {
          title: "Infrastructure Project",
          category: "Excavation",
          image: "https://images.unsplash.com/photo-1590644365607-1c5a29846519?q=80&w=2071&auto=format&fit=crop"
        }
      ]
    },
    contact: {
      title: "Contact Us",
      subtitle: "Our team is ready to answer your inquiries and discuss your next project details.",
      name: "Full Name",
      email: "Email Address",
      message: "Project Details",
      send: "Send Inquiry",
      sending: "Sending...",
      successMessage: "Message sent successfully! Thank you for contacting us, our team will reply shortly.",
      errorMessage: "Sorry, something went wrong while sending. Please try again or contact us directly.",
      addressTitle: "Headquarters",
      address: "Rural Damascus - Al-Tal - Corniche - Aabidah Building",
      phoneTitle: "Phone Numbers",
      phones: ["+963 980 438 576", "+963 999 119 202"]
    },
    footer: {
      aboutTitle: "About Company",
      aboutText: "Plumeria Contracting Company, your strategic partner in construction and development, committed to quality and excellence since establishment.",
      linksTitle: "Quick Links",
      contactTitle: "Contact Info",
      rights: "All rights reserved © 2025 Plumeria"
    }
  }
};