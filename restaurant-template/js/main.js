// ===============================
// TEXTOS Y DATOS
// ===============================

document.getElementById("businessName").innerText = CONFIG.businessName
document.getElementById("title").innerText = CONFIG.businessName

document.getElementById("address").innerText = CONFIG.address
document.getElementById("hours").innerText = CONFIG.hours

document.getElementById("footerName").innerText = CONFIG.businessName
document.getElementById("footerPhone").innerText = CONFIG.phoneText

// Hero
document.getElementById("heroTitle").innerText = CONFIG.heroTitle || ""
document.getElementById("heroSubtitle").innerText = CONFIG.heroSubtitle || ""
if (CONFIG.heroImage) {
    document.getElementById("heroImage").src = CONFIG.heroImage
}
if (CONFIG.heroCta) {
    document.getElementById("whatsappHero").innerText = CONFIG.heroCta
}
if (CONFIG.menuTitle) {
    document.getElementById("menuTitle").innerText = CONFIG.menuTitle
}

// Menú descargable
if (CONFIG.download) {
    const btn = document.getElementById("downloadButton")
    btn.href = CONFIG.download
    btn.innerText = CONFIG.downloadLabel || "Ver menú completo"
    btn.classList.remove("hidden")
}

// Mapa
if (CONFIG.mapQuery) {
    const q = CONFIG.mapQuery || CONFIG.address.replace(/^[^A-Za-zÀ-ÿ0-9]+/, "")
    document.getElementById("mapFrame").src =
        `https://maps.google.com/maps?q=${encodeURIComponent(q)}&t=&z=16&ie=UTF8&iwloc=&output=embed`
}

// Redes sociales
document.getElementById("instagramLink").href = CONFIG.instagram
document.getElementById("facebookLink").href = CONFIG.facebook
if (CONFIG.socialText) {
    document.getElementById("socialText").innerText = CONFIG.socialText
}

// ===============================
// WHATSAPP
// ===============================

const message = CONFIG.whatsappMessage || `Hola, quiero hacer un pedido en ${CONFIG.businessName}`
const whatsapp = `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(message)}`

;["whatsappNav", "whatsappHero", "whatsappFinal", "whatsappFloat"].forEach(id => {
    const el = document.getElementById(id)
    if (el) el.href = whatsapp
})

const badgeMsg = `Hola, me interesa una página web como esta demo`
document.getElementById("demoBadge").href =
    `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(badgeMsg)}`

// Colores de marca
document.getElementById("section_footer").style.backgroundColor = CONFIG.color
document.getElementById("section_footer").style.color = CONFIG.contrast

const whatsappFinal = document.getElementById("whatsappFinal")
whatsappFinal.style.backgroundColor = CONFIG.contrast
whatsappFinal.style.color = CONFIG.color

const whatsappNav = document.getElementById("whatsappNav")
whatsappNav.style.backgroundColor = CONFIG.color
whatsappNav.style.color = CONFIG.contrast

const whatsappHeroBtn = document.getElementById("whatsappHero")
whatsappHeroBtn.style.backgroundColor = CONFIG.color
whatsappHeroBtn.style.color = CONFIG.contrast

// ===============================
// MENÚ DESTACADO
// ===============================

const menuGrid = document.getElementById("menuGrid")

if (menuGrid && CONFIG.menu && CONFIG.menu.length) {
    menuGrid.innerHTML = CONFIG.menu.map(item => `
    <div class="bg-white rounded-xl shadow overflow-hidden">
      <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover" loading="lazy" />
      <div class="p-4">
        <h4 class="font-semibold text-lg">${item.name}</h4>
        <p class="text-gray-600 text-sm">${item.description || ""}</p>
        <p class="mt-2 font-bold">${item.price || ""}</p>
      </div>
    </div>
    `).join("")
}
