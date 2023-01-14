function ui_script (url) {
    s = document.createElement ("script")
    s.src = url
    document.head.appendChild (s)
}

function ui_stylesheet (url) {
    s = document.createElement ("link")
    s.href = url
    s.rel = "stylesheet"
    document.head.appendChild (s)
}

function ui_element (element, attrs) {
    s = document.createElement (element)
    for (_list of attrs) {
        s[_list [0]] = _list [1]
    }

    return s
}

function ui_create (tag, text = "", classes = []) {
    e = document.createElement (tag)
    e.innerText = text
    for (c of classes) {
        e.classList.add (c)
    }

    return e
}

uic = ui_create
uid = document.getElementById
uiq = document.querySelector