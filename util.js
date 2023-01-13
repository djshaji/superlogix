menus = {
    "About": {
        "About us": "about.html",
        "Careers": "careers.html",
        "Press": "press.html"
    }, "Platforms" : {
        "Gaming": "gaming.html",
        "Crypto": "crypto.html",
        "Dating": "dating.html",
        "Streaming": "streaming.html",
        "Home Survelliance": "home.html",
        "Electronics": "electroncs.html",
        "Marketplace": "marketplace.html"
    }, "Solutions": {
        "Customer Experience": "customer.html",
        "Growth Strategy": "growth.html",
        "Business Intelligence": "business.html",
    }
}

function populate_menu () {
    ul = document.querySelector (".navbar-nav")
    for (m in menus) {
        li = document.createElement ("li")
        ul.prepend (li)
        for (c of ["nav-item", "dropdown"])
            li.classList.add (c)
        
        li.innerHTML =
            `<a href="#" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink1" data-toggle="dropdown">\
                <p>${m}</p>\
            </a>`

        div = document.createElement ("div")
        div.classList.add ("dropdown-menu")
        div.classList.add ("dropdown-menu-right")
        li.appendChild (div)
        for (s in menus [m]) {
            a = document.createElement ("a")
            a.innerHTML = `<a class="text-dark dropdown-item" href="${menus [m][s]}">${s}</a>`
            div.appendChild (a)
        }
    }
}

populate_menu ()