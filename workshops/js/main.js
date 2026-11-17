// ===============================
// TEXTOS Y DATOS
// ===============================

document.getElementById("businessName").innerText = CONFIG.businessName
document.getElementById("title").innerText = CONFIG.businessName2 || CONFIG.businessName

document.getElementById("address").innerText = CONFIG.address
document.getElementById("phone").innerText = CONFIG.phoneText
document.getElementById("hours").innerText = CONFIG.hours
document.getElementById("footerName").innerText = CONFIG.businessName2 || CONFIG.businessName

// Hero
document.getElementById("heroTitle").innerText = CONFIG.heroTitle || ""
document.getElementById("heroSubtitle").innerText = CONFIG.heroSubtitle || ""
if (CONFIG.heroCta) {
    document.getElementById("whatsappHero").innerText = CONFIG.heroCta
}

// Servicios
document.getElementById("servicesGrid").innerHTML = (CONFIG.services || []).map(service => `
<div class="p-6 shadow rounded-xl bg-white">
<h4 class="font-semibold">${service.name || service.title}</h4>
<p class="text-gray-500 text-sm mt-1">${service.description || service.detail || ""}</p>
</div>
`).join("")

// Galería
document.getElementById("galleryGrid").innerHTML = (CONFIG.gallery || []).map(img => `
<img src="${img}" alt="${CONFIG.businessName}" loading="lazy" class="rounded-lg w-full h-52 object-cover">
`).join("")
if (!CONFIG.gallery || !CONFIG.gallery.length) {
    document.getElementById("gallerySection").style.display = "none"
}

// Por qué elegirnos
document.getElementById("trustList").innerHTML = (CONFIG.trust || []).map(item =>
    `<p>✔ ${item}</p>`
).join("")
if (!CONFIG.trust || !CONFIG.trust.length) {
    document.getElementById("trustSection").style.display = "none"
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
if (!CONFIG.instagram && !CONFIG.facebook) {
    document.getElementById("socialSection").style.display = "none"
}

// ===============================
// WHATSAPP
// ===============================

const message = CONFIG.whatsappMessage || `Hola, necesito servicio en ${CONFIG.businessName}`
const link = `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(message)}`

;["whatsappNav", "whatsappHero", "whatsappFinal", "whatsappFloat"].forEach(id => {
    const el = document.getElementById(id)
    if (el) el.href = link
})
