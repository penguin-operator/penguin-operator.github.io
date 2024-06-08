const args = new URLSearchParams(window.location.search)
const search = document.getElementsByName("search")[0]

search.value = args.get("search")
