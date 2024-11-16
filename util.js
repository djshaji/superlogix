menus = {
    "About": {
        "About us": "about.html",
        "Careers": "careers.html",
        "Press": "press.html"
    }, "Skills" : {
        "Virtual Assistant": "virtual.html",
        "Customer Support": "support.html",
        "Contact Center": "center.html"

    }, "Solutions": {
        "Customer Experience": "customer.html",
        "Growth Strategy": "growth.html",
        "Business Intelligence": "business.html",
    }, 
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
                <b>${m}</b>\
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

