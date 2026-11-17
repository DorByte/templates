// ===============================
// TEXTOS Y DATOS
// ===============================

document.getElementById("nameTitle").innerText = CONFIG.businessName2
document.getElementById("nameFront").innerText = CONFIG.businessName

document.getElementById("address").innerText = CONFIG.address
document.getElementById("hours").innerText = CONFIG.hours

document.getElementById("footerName").innerText = "© "+new Date().getFullYear()+" "+CONFIG.businessName2
document.getElementById("footerPhone").innerText = CONFIG.phoneText

// Hero
document.getElementById("heroTitle").innerText = CONFIG.heroTitle || ""
document.getElementById("heroSubtitle").innerText = CONFIG.heroSubtitle || ""
if (CONFIG.heroCta) {
    document.getElementById("btnR").innerText = CONFIG.heroCta
}
if (CONFIG.contactCta) {
    document.getElementById("btnC").innerText = CONFIG.contactCta
}

// Redes sociales
document.getElementById("instagramLink").href = CONFIG.instagram
document.getElementById("facebookLink").href = CONFIG.facebook
if (CONFIG.socialText) {
    document.getElementById("socialText").innerText = CONFIG.socialText
}

// Mapa
if (CONFIG.mapQuery) {
    const q = CONFIG.mapQuery || CONFIG.address.replace(/^[^A-Za-zÀ-ÿ0-9]+/, "")
    document.getElementById("mapFrame").src =
        `https://maps.google.com/maps?q=${encodeURIComponent(q)}&t=&z=16&ie=UTF8&iwloc=&output=embed`
}

// ===============================
// WHATSAPP
// ===============================

const message = CONFIG.whatsappMessage || `Hola, quiero información sobre ${CONFIG.businessName}`
const whatsapp = `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(message)}`

;["btnR", "btnC", "whatsappFloat"].forEach(id => {
    const el = document.getElementById(id)
    if (el) {
        el.href = whatsapp
        el.style.backgroundColor = CONFIG.color
        el.style.color = CONFIG.contrast
    }
})

// ===============================
// SERVICIOS DINÁMICOS
// ===============================

const grid = document.getElementById("servicesGrid")

if (grid && CONFIG.services && CONFIG.services.length) {
    grid.innerHTML = CONFIG.services.map(service => `
    <div class="service">
      <h3>${service.name || service.title}</h3>
      <p>${service.description || service.detail || ""}</p>
    </div>
    `).join("")
}
