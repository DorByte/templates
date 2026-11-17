// ===============================
// TEXTOS Y DATOS
// ===============================

document.getElementById("nameTitle").innerText = CONFIG.businessName2 || CONFIG.businessName
document.getElementById("nameFront").innerText = CONFIG.businessName
document.getElementById("footerPhone").innerText = CONFIG.phoneText
document.getElementById("address").innerText = CONFIG.address
document.getElementById("hours").innerText = CONFIG.hours
if (CONFIG.businessName2) {
    document.getElementById("footerName").innerText = CONFIG.businessName2
}

// Hero
document.getElementById("heroTitle").innerText = CONFIG.heroTitle || ""
document.getElementById("heroSubtitle").innerText = CONFIG.heroSubtitle || ""
if (CONFIG.heroCta) {
    document.getElementById("whatsappHero").innerText = CONFIG.heroCta
}

// CTA final
if (CONFIG.ctaTitle) {
    document.querySelector(".cta h2").innerText = CONFIG.ctaTitle
}
if (CONFIG.ctaSubtitle) {
    document.querySelector(".cta p").innerText = CONFIG.ctaSubtitle
}
if (CONFIG.ctaButton) {
    document.getElementById("whatsappCta").innerText = CONFIG.ctaButton
}

// Categorías
document.getElementById("categoriesList").innerHTML = (CONFIG.categories || []).map(cat =>
    `<span class="cat">${cat}</span>`
).join("")

// Redes sociales
document.getElementById("instagramLink").href = CONFIG.instagram
    document.getElementById("facebookLink").href = CONFIG.facebook
if (CONFIG.socialText) {
    document.getElementById("socialText").innerText = CONFIG.socialText
}
if (!CONFIG.instagram && !CONFIG.facebook) {
    document.querySelector(".social").style.display = "none"
}

// ===============================
// WHATSAPP
// ===============================

const message = CONFIG.whatsappMessage || `Hola, estoy interesado en los productos de ${CONFIG.businessName}`
const whatsapp = `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(message)}`

;["whatsappNav", "whatsappHero", "whatsappCta"].forEach(id => {
    const el = document.getElementById(id)
    if (el) el.href = whatsapp
})

// ===============================
// PRODUCTOS
// ===============================

const container = document.getElementById("productList")

CONFIG.products.forEach(product => {

    const productMessage = `Hola, estoy interesado en ${product.name}`
    const whatsappLink = `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(productMessage)}`

const card = `
<div class="card">

<img src="${product.image}" alt="${product.name}" loading="lazy">

<h3>${product.name}</h3>

<p class="price colorInv">${product.price}</p>

<a target="_blank" class="btn colorComp" href="${whatsappLink}">Comprar</a>

</div>
`

container.innerHTML += card

})
