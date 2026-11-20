// ===============================
// 🔹 1. LEER PARÁMETROS DE URL
// ===============================

const params = new URLSearchParams(window.location.search)

const typeFromURL = params.get("type")
const nameFromURL = params.get("name")
const phoneFromURL = params.get("phone")
const addressFromURL = params.get("address")

// ===============================
// 🔹 2. VALIDAR Y SOBRESCRIBIR CONFIG
// ===============================

if (typeFromURL && DATA[typeFromURL]) {
  CONFIG.type = typeFromURL
}

if (nameFromURL) {
  CONFIG.businessName = decodeURIComponent(nameFromURL)
}

if (phoneFromURL) {
  CONFIG.phone = phoneFromURL.replace(/\D/g, "")
}

if (addressFromURL) {
  CONFIG.address = decodeURIComponent(addressFromURL)
}

// ===============================
// 🔹 3. OBTENER DATA DEL NEGOCIO
// ===============================

const info = DATA[CONFIG.type]

if (!info) {
  document.body.innerHTML = `
    <div style="font-family:sans-serif;text-align:center;padding:80px 20px">
      <h1>Plantilla no encontrada</h1>
      <p>El tipo "${CONFIG.type}" no existe en data.js</p>
    </div>`
  throw new Error("Tipo de negocio inválido: " + CONFIG.type)
}

// Normalizar servicios: acepta "texto" u objeto {title/name, detail/description}
const services = (info.services || []).map(s =>
  typeof s === "string" ? { title: s, detail: "" } : { title: s.title || s.name, detail: s.detail || s.description || "" }
)

const gallery = info.gallery || []
const badges = info.badges || []
const stats = info.stats || []
const plans = info.plans || []
const testimonials = CONFIG.testimonials && CONFIG.testimonials.length
  ? CONFIG.testimonials
  : ["Excelente servicio, muy recomendados", "Atención rápida y profesional", "Volvería sin dudarlo"]

// ===============================
// 🔹 4. TEMA POR TIPO DE NEGOCIO
// ===============================

const theme = info.theme || {}

if (theme.primary) document.documentElement.style.setProperty("--brand", theme.primary)
if (theme.secondary) document.documentElement.style.setProperty("--brand-2", theme.secondary)
if (theme.font) document.body.style.fontFamily = theme.font

const themeCSS = document.createElement("style")
themeCSS.textContent = `
  #whatsappNav, #whatsappHero, #downloadButton {
    background-color: var(--brand, #000) !important;
  }
  #ctaSection {
    background: linear-gradient(120deg, var(--brand, #111) 0%, var(--brand-2, #333) 100%) !important;
  }
  blockquote { border-left-color: var(--brand, #000) !important; }
  .plan-card { border-top: 4px solid var(--brand, #000) !important; }
`
document.head.appendChild(themeCSS)

// Helpers de color
function hexA(hex, alpha) {
  const n = parseInt(hex.slice(1), 16)
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`
}

// ===============================
// 🔹 5. TEXTOS
// ===============================

document.getElementById("title").innerText = CONFIG.businessName
document.getElementById("businessName").innerText = CONFIG.businessName

document.getElementById("heroTitle").innerText = info.title || CONFIG.businessName
document.getElementById("heroSubtitle").innerText = info.subtitle || ""

document.getElementById("address").innerText = CONFIG.address
document.getElementById("phone").innerText = CONFIG.phoneText
document.getElementById("hours").innerText = CONFIG.hours
document.getElementById("footerName").innerText = `${CONFIG.businessName} - ${CONFIG.type}`

if (info.titleGallery) {
  document.getElementById("galleryTitle").innerText = info.titleGallery
}
if (info.buttonDownloadLabel) {
  document.getElementById("downloadButton").innerText = info.buttonDownloadLabel
}
if (info.download) {
  const btn = document.getElementById("downloadButton")
  btn.href = info.download
  btn.classList.remove("hidden")
}

// Mapa configurable (CONFIG.mapQuery o fallback a la dirección)
const mapQuery = CONFIG.mapQuery || CONFIG.address.replace(/^[^A-Za-zÀ-ÿ0-9]+/, "")
document.getElementById("mapFrame").src =
  `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`

// Redes sociales: ocultar sección si no hay links
const socialSection = document.getElementById("socialSection")
if (CONFIG.socialText) {
  document.getElementById("socialText").innerText = CONFIG.socialText
}
if (!CONFIG.instagram && !CONFIG.facebook) {
  socialSection.style.display = "none"
}

// Testimonios
const testimonialsEl = document.getElementById("testimonials")
testimonialsEl.innerHTML = testimonials
  .map(t => `<blockquote class="border-l-4 border-black pl-4 text-left italic">“${t}”</blockquote>`)
  .join("")

// Badges del hero (se ven sobre el overlay oscuro del banner)
if (badges.length && info.banner) {
  document.getElementById("heroBadges").innerHTML = badges
    .map(b => `<span class="bg-white/10 border border-white/25 text-white text-xs font-medium px-4 py-1.5 rounded-full backdrop-blur-sm">${b}</span>`)
    .join("")
}

// Estadísticas
if (stats.length) {
  document.getElementById("statsSection").classList.remove("hidden")
  document.getElementById("statsGrid").innerHTML = stats
    .map(s => `
      <div>
        <p class="text-4xl font-bold" style="color:var(--brand,#111)">${s.num}</p>
        <p class="text-sm text-gray-500 mt-1">${s.label}</p>
      </div>`)
    .join("")
}

// Planes / precios
if (plans.length) {
  document.getElementById("plansSection").classList.remove("hidden")
  document.getElementById("plansGrid").innerHTML = plans
    .map(p => `
      <div class="plan-card bg-white rounded-2xl shadow-sm border p-8 text-left flex flex-col">
        <h4 class="font-semibold text-lg">${p.name}</h4>
        <p class="text-3xl font-bold my-3" style="color:var(--brand,#111)">${p.price}</p>
        <ul class="space-y-2 text-sm text-gray-500 mb-6 flex-1">
          ${(p.features || []).map(f => `<li>✔ ${f}</li>`).join("")}
        </ul>
        <a href="https://wa.me/${CONFIG.phone}" target="_blank" class="block text-center text-white py-2.5 rounded-xl text-sm font-semibold hover:opacity-80 transition" style="background-color:var(--brand,#000)">Elegir plan</a>
      </div>`)
    .join("")
}

// Secciones opcionales
if (!services.length) {
  document.getElementById("servicesSection").style.display = "none"
}
if (!gallery.length) {
  document.getElementById("gallerySection").style.display = "none"
}

// ===============================
// 🔹 6. WHATSAPP
// ===============================

const message = CONFIG.whatsappMessage || `Hola, quiero información sobre ${CONFIG.businessName}`
const link = `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(message)}`

;["whatsappNav", "whatsappHero", "whatsappFinal", "whatsappFloat"].forEach(id => {
  const el = document.getElementById(id)
  if (el) el.href = link
})

const badgeMsg = `Hola, me interesa una página web como esta demo`
document.getElementById("demoBadge").href =
  `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(badgeMsg)}`

// ===============================
// 🔹 7. SERVICIOS DINÁMICOS
// ===============================

const servicesContainer = document.getElementById("services")

if (servicesContainer && services.length) {
  servicesContainer.innerHTML = services
    .map(service => `
    <div class="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition text-left">
      ${service.icon ? `<p class="text-3xl mb-3">${service.icon}</p>` : ""}
      <h4 class="font-semibold text-lg mb-2">${service.title}</h4>
      <p class="text-gray-500 text-sm">${service.detail}</p>
    </div>`)
    .join("")
}

// ===============================
// 🔹 8. GALERÍA + LIGHTBOX
// ===============================

const galleryContainer = document.getElementById("gallery")
const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightboxImg")

if (galleryContainer && gallery.length) {
  galleryContainer.innerHTML = gallery
    .map(img => `
    <div class="overflow-hidden rounded-2xl cursor-pointer">
      <img src="${img}" loading="lazy" alt="${CONFIG.businessName}"
      class="w-full h-52 object-cover hover:scale-110 transition duration-300"
      onclick="openLightbox('${img}')">
    </div>`)
    .join("")
}

// ===============================
// 🔹 9. LIGHTBOX FUNCIONAL
// ===============================

window.openLightbox = function(src) {
  lightbox.classList.remove("hidden")
  lightbox.classList.add("flex")
  lightboxImg.src = src
}

if (lightbox) {
  lightbox.onclick = function () {
    lightbox.classList.add("hidden")
    lightbox.classList.remove("flex")
  }
}

// ===============================
// 🔹 10. Banner
// ===============================

if (info.banner) {
  const hero = document.getElementById("hero")
  hero.style.backgroundImage = `url('${info.banner}')`
  hero.style.backgroundSize = "cover"
  hero.style.backgroundPosition = "center"
  hero.style.backgroundRepeat = "no-repeat"
  document.getElementById("heroTitle").style.color = "white"
  document.getElementById("heroSubtitle").style.color = "white"
  hero.className = "h-[70vh] flex items-center justify-center bg-gray-100 text-center"
  const heroContent = document.getElementById("heroContent")
  heroContent.className = "p-8 rounded-2xl backdrop-blur-sm"
  if (theme.primary && theme.secondary) {
    heroContent.style.background = `linear-gradient(135deg, ${hexA(theme.primary, 0.88)}, ${hexA(theme.secondary, 0.88)})`
  } else {
    heroContent.style.background = "rgba(0,0,0,0.6)"
  }
  document.getElementById("whatsappHero").classList.add("border-2", "border-white")
}

// ===============================
// 🔹 11. REDES SOCIALES
// ===============================

const instagramLink = document.getElementById("instagramLink")
const facebookLink = document.getElementById("facebookLink")

if (CONFIG.instagram) instagramLink.href = CONFIG.instagram
else instagramLink.parentElement.style.display = "none"

if (CONFIG.facebook) facebookLink.href = CONFIG.facebook
else facebookLink.parentElement.style.display = "none"
