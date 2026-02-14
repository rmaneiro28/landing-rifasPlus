export interface Story {
    id: number;
    title: string;
    quote: string;
    description: string;
    image: string;
    raised: string;
    name: string;
    role: string;
    avatar: string;
    stats: { value: string; label: string; color: string }[];
    videoUrl?: string;
    color: string;
    fullContent?: string; // Content for the detail page
    challenge?: string;
    solution?: string;
}

export const stories: Story[] = [
    {
        id: 1,
        title: "Fundación Esperanza Venezuela",
        quote: "Logramos financiar la operación de 5 niños en tiempo récord",
        description: "Antes de RifasPlus, perdíamos el 30% de los interesados porque el proceso de pago manual era muy lento. Con la automatización de WhatsApp, cerramos ventas al instante. La transparencia que le dimos a nuestros donantes con el ticket digital fue clave.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5d7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        raised: "$15,400",
        name: "María Rodríguez",
        role: "Directora de Fundación Esperanza",
        avatar: "https://ui-avatars.com/api/?name=Maria+Rodriguez&background=random&color=fff",
        color: "bg-[#8b5cf6]",
        stats: [
            { value: "3.5k", label: "Boletos Vendidos", color: "border-[#8b5cf6]" },
            { value: "100%", label: "Transparencia", color: "border-[#ec4899]" }
        ],
        challenge: "La fundación necesitaba recaudar fondos urgentemente para costear operaciones médicas de niños de bajos recursos. Sus métodos tradicionales (rifas de papel, alcancías) eran lentos, inseguros y requerían demasiada logística manual, perdiendo muchas donaciones potenciales.",
        solution: "Implementaron RifasPlus para digitalizar su Gran Rifa Anual. Utilizaron la integración con WhatsApp para enviar tickets automáticamente tras la confirmación del pago móvil. El dashboard les permitió auditar cada bolívar en tiempo real, generando confianza total en su comunidad."
    },
    {
        id: 2,
        title: "Sorteo Bera SBR",
        quote: "Vendí mi moto en 48 horas y me sobró para comprar otra",
        description: "Yo no sabía nada de tecnología. Configuré mi rifa en 10 minutos desde el celular. La gente confiaba porque el sistema les daba el ticket automático. Es la herramienta definitiva para cualquiera que quiera hacer dinero extra.",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        raised: "$3,200",
        name: "Carlos 'El Turco'",
        role: "Influencer & Rifa de Motos",
        avatar: "https://ui-avatars.com/api/?name=Carlos+El+Turco&background=random&color=fff",
        color: "bg-[#ec4899]",
        stats: [],
        videoUrl: "#",
        challenge: "Carlos tenía una moto y necesitaba capital rápido para invertir en un nuevo negocio. Venderla directamente era lento y le ofrecían poco dinero. Quería maximizar su valor a través de un sorteo, pero no quería lidiar con talonarios impresos ni desconfianza de sus seguidores.",
        solution: "Creó una rifa exprés en RifasPlus. Promocionó el enlace en sus estados de WhatsApp e Instagram. La plataforma gestionó la asignación de números (00-99) y la gente podía ver en vivo qué números quedaban disponibles, creando un sentido de urgencia que aceleró la venta."
    },
    {
        id: 3,
        title: "Escuela Técnica Industrial",
        quote: "Equipamos el laboratorio de computación en un mes",
        description: "Necesitábamos 20 computadoras nuevas. La comunidad de egresados se volcó a apoyar cuando vieron lo profesional que era la plataforma. El panel de control nos permitió auditar cada pago recibido.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        raised: "$8,500",
        name: "Ing. Pedro Méndez",
        role: "Coordinador Académico",
        avatar: "https://ui-avatars.com/api/?name=Pedro+Mendez&background=random&color=fff",
        color: "bg-[#fbbf24]",
        stats: [
            { value: "20", label: "Equipos Nuevos", color: "border-[#fbbf24]" },
            { value: "1.2k", label: "Donantes", color: "border-[#8b5cf6]" }
        ],
        challenge: "El laboratorio de informática estaba obsoleto, afectando la educación de 500 estudiantes. El presupuesto oficial era insuficiente. Necesitaban una forma transparente y masiva de recolectar fondos de ex-alumnos dispersos por todo el mundo.",
        solution: "Lanzaron 'Un Bit por el Futuro', una rifa virtual gestionada con RifasPlus. La plataforma permitió recibir reportes de pagos en divisas y bolívares. El enlace público de la rifa se viralizó en grupos de egresados, logrando la meta mucho antes de lo previsto."
    },
    {
        id: 4,
        title: "Parroquia San José",
        quote: "La remodelación del techo es una realidad",
        description: "La feligresía participó masivamente. Lo mejor fue poder enviar los tickets por WhatsApp directamente a los abuelos que no manejaban bien el correo electrónico. Fue inclusivo y efectivo.",
        image: "https://images.unsplash.com/photo-1548625361-bd8caf6935c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        raised: "$12,000",
        name: "Padre Antonio",
        role: "Párroco",
        avatar: "https://ui-avatars.com/api/?name=Padre+Antonio&background=random&color=fff",
        color: "bg-[#8b5cf6]",
        stats: [
            { value: "100%", label: "Meta Cumplida", color: "border-[#ec4899]" }
        ],
        challenge: "El techo de la iglesia tenía filtraciones graves. La comunidad quería ayudar, pero la recolección en las misas no era suficiente y era difícil de trazar. Se necesitaba una actividad que involucrara a toda la comunidad, desde jóvenes hasta ancianos.",
        solution: "El Consejo Parroquial organizó una rifa monumental. RifasPlus facilitó la venta: los jóvenes compraban por la web, y los ancianos compraban en efectivo en la secretaría, donde los administradores registraban la venta manualmente en el sistema y les enviaban el ticket por SMS/WhatsApp."
    }
];
