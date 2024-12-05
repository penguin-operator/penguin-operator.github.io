const lang = new URLSearchParams(URL.parse(window.location.href).search).get("lang") || "en"
document.querySelectorAll("[lang]").forEach(function(element) {
	if (element.tagName == "CODE") return
	if (element.lang != lang) element.remove()
})