// ===============================
// TEXTOS Y DATOS
// ===============================

document.getElementById("nameTitle").innerText = CONFIG.businessName2
document.getElementById("nameFront").innerText = CONFIG.businessName
document.getElementById("footerPhone").innerText = CONFIG.phoneText
document.getElementById("address").innerText = CONFIG.address
document.getElementById("hours").innerText = CONFIG.hours
document.getElementById("instagramLink").href = CONFIG.instagram
document.getElementById("facebookLink").href = CONFIG.facebook
document.getElementById("footerName").innerText = CONFIG.businessName

// Hero
document.getElementById("heroTitle").innerText = CONFIG.heroTitle || ""
document.getElementById("heroSubtitle").innerText = CONFIG.heroSubtitle || ""
if (CONFIG.heroImage) {
    document.getElementById("heroSection").style.backgroundImage = `url('${CONFIG.heroImage}')`
}
if (CONFIG.heroCta) {
    document.getElementById("whatsappHero").innerText = CONFIG.heroCta
}
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

;["whatsappNav", "whatsappHero", "whatsappFloat"].forEach(id => {
    const el = document.getElementById(id)
    if (el) el.href = whatsapp
})

const badgeMsg = `Hola, me interesa una página web como esta demo`
document.getElementById("demoBadge").href =
    `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(badgeMsg)}`

// ===============================
// PRODUCTOS
// ===============================

const container = document.getElementById("products")

function render(list){

container.innerHTML = ""

list.forEach(product => {

const productMessage = `Hola, quiero este producto: ${product.name}`
const link = `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(productMessage)}`

container.innerHTML += `
<div class="group">

<div class="overflow-hidden rounded-xl">
<img src="${product.image}" alt="${product.name}" loading="lazy" class="w-full h-80 object-cover group-hover:scale-110 transition">
</div>

<h3 class="mt-3 font-semibold">${product.name}</h3>

<p class="text-gray-500">${product.price}</p>

<a href="${link}" target="_blank"
class="mt-2 inline-block text-sm underline">
Comprar por WhatsApp
</a>

</div>
`
})

}

function filterCategory(cat){

if(cat === "all"){
render(CONFIG.PRODUCTS)
}else{
render(CONFIG.PRODUCTS.filter(p => p.category === cat))
}

}

render(CONFIG.PRODUCTS)
