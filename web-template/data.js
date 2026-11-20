const DATA = {

taller: {
title: "Servicio técnico confiable",
subtitle: "Diagnóstico rápido y atención inmediata",
banner: "assets/images/taller.webp",
theme: { primary: "#f59e0b", secondary: "#d97706", font: "'Oswald', sans-serif" },
badges: ["🔧 Diagnóstico gratis","⚙️ Garantía escrita","⏱️ Atención express"],
stats: [
    {num:"15+",label:"Años de experiencia"},
    {num:"3.000+",label:"Servicios realizados"},
    {num:"98%",label:"Clientes satisfechos"},
    {num:"24h",label:"Asistencia en carretera"}
],
services: [
    {icon:"🔧",title:"Cambio de aceite",detail: "Servicio garantizado"}, 
    {icon:"🔍",title:"Diagnóstico",detail: "Técnicos certificados"}, 
    {icon:"🔧",title:"Reparación",detail: "Atención personalizada"}],
gallery: [
"https://images.unsplash.com/photo-1486006920555-c77dcf18193c",
"https://images.unsplash.com/photo-1503376780353-7e6692767b70",
"https://images.unsplash.com/photo-1515923256482-1c04580b477c"
]
},

peluqueria: {
title: "Tu estilo empieza aquí",
banner: "assets/images/peluqueria.jpg",
subtitle: "Cortes modernos y coloración profesional",
theme: { primary: "#ec4899", secondary: "#f472b6", font: "'Playfair Display', serif" },
badges: ["💈 Reserva tu cita","✨ Productos premium","💆‍♀️ Atención personalizada"],
stats: [
    {num:"8+",label:"Años de experiencia"},
    {num:"5.000+",label:"Clientes felices"},
    {num:"12",label:"Estilistas expertos"},
    {num:"4.9★",label:"Calificación promedio"}
],
services: [
    {icon:"✂️",title:"Corte", detail: "Cortes modernos"}, 
    {icon:"🎨",title:"Color", detail: "Coloración profesional"}, 
    {icon:"💇‍♀️",title:"Peinados", detail: "Peinados personalizados"}
],
gallery: [
"https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f",
"https://images.unsplash.com/photo-1562322140-8baeececf3df",
"https://images.unsplash.com/photo-1519699047748-de8e457a634e"
]
},

restaurante: {
title: "Sabores que enamoran",
banner: "assets/images/hero.jpg",
subtitle: "Comida deliciosa para todos",
theme: { primary: "#dc2626", secondary: "#ea580c", font: "'Poppins', sans-serif" },
badges: ["🛵 Domicilios a toda la ciudad","📅 Reservas por WhatsApp","⭐ Menú del día"],
stats: [
    {num:"12+",label:"Años de tradición"},
    {num:"40+",label:"Platos en el menú"},
    {num:"2.000+",label:"Pedidos al mes"},
    {num:"4.8★",label:"Calificación"}
],
titleGallery: "Menu destacado",
download: "assets/files/menu.jpg",
buttonDownloadLabel: "Descargar menú",
services: [
    {icon:"🍽️",title:"Platos", detail: "Especialidades locales"}, 
    {icon:"🛵",title:"Domicilios", detail: "Entrega rápida y segura"}, 
    {icon:"📅",title:"Reservas", detail: "Mesas disponibles"}],
gallery: [
"https://images.unsplash.com/photo-1504674900247-0877df9cc836",
"https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
"https://images.unsplash.com/photo-1551218808-94e220e084d2"
]
},

ropa:{
title: "Moda que inspira",
banner: "assets/images/hero.webp",
subtitle: "Ropa de calidad para todos los estilos",
theme: { primary: "#4f46e5", secondary: "#8b5cf6", font: "'Poppins', sans-serif" },
badges: ["🚚 Envíos nacionales","🔄 Cambios gratis 30 días","🆕 Nuevas colecciones"],
stats: [
    {num:"500+",label:"Prendas disponibles"},
    {num:"3.000+",label:"Clientes"},
    {num:"4.8★",label:"Calificación"},
    {num:"24h",label:"Despacho express"}
],
services: [
    {icon:"👕",title:"Hombres", detail: "Moda masculina"},
    {icon:"👗",title:"Mujeres", detail: "Moda femenina"},
    {icon:"🧒",title:"Niños", detail: "Moda para niños"}
],
gallery: [
"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
"https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
"https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
]
             
},

tecnologia:{
title: "Tecnología a tu alcance",
banner: "assets/images/tecno.avif",
subtitle: "Los mejores dispositivos para ti",
theme: { primary: "#0284c7", secondary: "#06b6d4", font: "'Poppins', sans-serif" },
badges: ["📱 Garantía oficial","🔄 Cambios fáciles","🛠️ Soporte técnico"],
stats: [
    {num:"8+",label:"Años de experiencia"},
    {num:"1.500+",label:"Productos"},
    {num:"500+",label:"Clientes"},
    {num:"4.9★",label:"Calificación"}
],
titleGallery: "Productos destacados",
services: [
    {icon:"📱",title:"Smartphones", detail: "Últimos modelos"}, 
    {icon:"🎧",title:"Accesorios", detail: "Complementos perfectos"}, 
    {icon:"🛠️",title:"Soporte", detail: "Asistencia técnica confiable"}
],
gallery: [
"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
"https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80"
]
},

veterinaria:{
title: "Cuidamos a tu mascota como se merece",
subtitle: "Consultas, vacunas y emergencias con amor",
theme: { primary: "#059669", secondary: "#34d399", font: "'Poppins', sans-serif" },
badges: ["🚨 Emergencias 24/7","💉 Vacunas a domicilio","🐾 Amor por los animales"],
stats: [
    {num:"10+",label:"Años de experiencia"},
    {num:"8.000+",label:"Mascotas atendidas"},
    {num:"4",label:"Especialistas"},
    {num:"24/7",label:"Emergencias"}
],
banner: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1600&q=80",
services: [
    {icon:"🩺",title:"Consultas generales", detail: "Revisión completa de tu mascota"},
    {icon:"💉",title:"Vacunación", detail: "Esquemas completos para cachorros y adultos"},
    {icon:"🏥",title:"Cirugías", detail: "Procedimientos con equipamiento moderno"},
    {icon:"🛁",title:"Peluquería canina", detail: "Baño, corte y spa para tu mascota"}
],
gallery: [
"https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",
"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
"https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80"
]
},

gimnasio:{
title: "Tu mejor versión empieza aquí",
subtitle: "Entrenadores certificados y maquinaria de última generación",
theme: { primary: "#ea580c", secondary: "#dc2626", font: "'Oswald', sans-serif" },
badges: ["🏋️ Primera clase gratis","🥗 Plan de nutrición","⏰ Abierto 24 horas"],
stats: [
    {num:"6+",label:"Años de experiencia"},
    {num:"400+",label:"Miembros activos"},
    {num:"15+",label:"Entrenadores"},
    {num:"20+",label:"Clases por semana"}
],
plans: [
    {name:"Plan Básico",price:"$60.000/mes",features:["Acceso a musculación y cardio","Lockers incluidos","1 clase grupal por semana"]},
    {name:"Plan Premium",price:"$90.000/mes",features:["Todo lo del Básico","Clases grupales ilimitadas","Plan de nutrición"]},
    {name:"Plan VIP",price:"$140.000/mes",features:["Todo lo del Premium","Entrenador personal 2x/mes","Acceso 24 horas","Invitado gratis"]},
],
banner: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80",
services: [
    {icon:"🏋️‍♂️",title:"Musculación", detail: "Zona de pesas y máquinas"},
    {icon:"🧘‍♀️",title:"Clases grupales", detail: "Spinning, yoga, crossfit y más"},
    {icon:"👨‍🏫",title:"Entrenamiento personal", detail: "Planes a medida con coach"},
    {icon:"🥗",title:"Planes de nutrición", detail: "Acompañamiento profesional"}
],
gallery: [
"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
"https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80"
]
},

dentista:{
title: "Sonrisas saludables y radiante",
subtitle: "Odontología moderna sin dolor ni esperas",
theme: { primary: "#0891b2", secondary: "#22d3ee", font: "'Poppins', sans-serif" },
badges: ["😷 Odontología sin dolor","📅 Citas el mismo día","🦷 Tecnología digital"],
stats: [
    {num:"12+",label:"Años de experiencia"},
    {num:"15.000+",label:"Sonrisas tratadas"},
    {num:"6",label:"Especialistas"},
    {num:"98%",label:"Pacientes satisfechos"}
],
banner: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1600&q=80",
services: [
    {icon:"🦷",title:"Limpieza dental", detail: "Profilaxis profesional"},
    {icon:"😁",title:"Ortodoncia", detail: "Brackets y alineadores invisibles"},
    {icon:"🦷",title:"Endodoncia", detail: "Tratamiento de conductos sin dolor"},
    {icon:"✨",title:"Estética dental", detail: "Blanqueamiento y carillas"}
],
gallery: [
"https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
"https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
"https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
]
},

inmobiliaria:{
title: "Encuentra el hogar de tus sueños",
subtitle: "Casas, apartamentos y lotes en las mejores zonas",
theme: { primary: "#1d4ed8", secondary: "#3b82f6", font: "'Playfair Display', serif" },
badges: ["📍 Propiedades verificadas","⚖️ Asesoría legal incluida","💬 Atención personalizada"],
stats: [
    {num:"15+",label:"Años de experiencia"},
    {num:"350+",label:"Propiedades vendidas"},
    {num:"500+",label:"Clientes"},
    {num:"$2.000M+",label:"En ventas cerradas"}
],
banner: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
services: [
    {icon:"🏠",title:"Venta de inmuebles", detail: "Propiedades verificadas"},
    {icon:"🏢",title:"Arriendo", detail: "Opciones para cada presupuesto"},
    {icon:"📊",title:"Tasaciones", detail: "Avalúos profesionales"},
    {icon:"⚖️",title:"Asesoría legal", detail: "Trámites sin complicaciones"}
],
gallery: [
"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
"https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
]
}



}