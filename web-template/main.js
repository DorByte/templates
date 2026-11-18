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
`
document.head.appendChild(themeCSS)

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
  document.getElementById("heroContent").className = "bg-black bg-opacity-60 p-8 rounded-2xl backdrop-blur-sm"
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
