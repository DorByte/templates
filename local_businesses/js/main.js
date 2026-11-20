// ===============================
// TEXTOS Y DATOS
// ===============================

document.getElementById("businessName").innerText = CONFIG.businessName
document.getElementById("title").innerText = CONFIG.businessName2 || CONFIG.businessName

document.getElementById("address").innerText = CONFIG.address
document.getElementById("phone").innerText = CONFIG.phoneText
document.getElementById("hours").innerText = CONFIG.hours
document.getElementById("footerName").innerText = CONFIG.businessName

// Hero
document.getElementById("heroTitle").innerText = CONFIG.heroTitle || ""
document.getElementById("heroSubtitle").innerText = CONFIG.heroSubtitle || ""
if (CONFIG.heroCta) {
    document.getElementById("whatsappHero").innerText = CONFIG.heroCta
}

// Servicios
document.getElementById("servicesGrid").innerHTML = (CONFIG.services || []).map(service => `
<div class="p-6 shadow rounded-xl bg-white">
${service.icon ? `<p style="font-size:2rem;margin-bottom:10px">${service.icon}</p>` : ""}
<h4 class="font-semibold">${service.name || service.title}</h4>
<p class="text-gray-500 text-sm mt-1">${service.description || service.detail || ""}</p>
</div>
`).join("")

// Hero badges (hero claro → estilo oscuro)
document.getElementById("heroBadges").innerHTML = (CONFIG.heroBadges || [])
    .map(b => `<span style="background:rgba(0,0,0,.06);border:1px solid rgba(0,0,0,.15);color:#374151;font-size:12px;font-weight:600;padding:6px 14px;border-radius:20px">${b}</span>`)
    .join("")

// Stats
if (CONFIG.stats && CONFIG.stats.length) {
    document.getElementById("statsSection").classList.remove("hidden")
    document.getElementById("statsGrid").innerHTML = CONFIG.stats.map(s => `
    <div>
      <p class="text-4xl font-bold text-green-600">${s.num}</p>
      <p class="text-sm text-gray-500 mt-1">${s.label}</p>
    </div>`).join("")
}

// Productos (sección opcional)
if (CONFIG.products && CONFIG.products.length) {
    document.getElementById("productsSection").classList.remove("hidden")
    document.getElementById("productsGrid").innerHTML = CONFIG.products.map(product => {
        const msg = `Hola, me interesa: ${product.name}`
        const link = `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(msg)}`
        return `
<div>
<div class="overflow-hidden rounded-xl">
<img src="${product.image}" alt="${product.name}" loading="lazy" class="w-full h-64 object-cover">
</div>
<h3 class="mt-3 font-semibold">${product.name}</h3>
<p class="text-gray-500">${product.price || ""}</p>
<a href="${link}" target="_blank" class="mt-2 inline-block text-sm underline">Consultar por WhatsApp</a>
</div>
`
    }).join("")
}

// Galería
document.getElementById("galleryGrid").innerHTML = (CONFIG.gallery || []).map(img => `
<img src="${img}" alt="${CONFIG.businessName}" loading="lazy" class="rounded-lg w-full h-52 object-cover">
`).join("")
if (!CONFIG.gallery || !CONFIG.gallery.length) {
    document.getElementById("gallerySection").style.display = "none"
}

// Testimonios
document.getElementById("testimonials").innerHTML = (CONFIG.testimonials || []).map(t => `
<blockquote class="border-l-4 border-green-500 pl-4 text-left italic">“${t}”</blockquote>
`).join("")

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

const message = CONFIG.whatsappMessage || `Hola, quiero información sobre ${CONFIG.businessName}`
const link = `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(message)}`

;["whatsappNav", "whatsappHero", "whatsappFinal", "whatsappFloat"].forEach(id => {
    const el = document.getElementById(id)
    if (el) el.href = link
})

const badgeMsg = `Hola, me interesa una página web como esta demo`
document.getElementById("demoBadge").href =
    `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(badgeMsg)}`
