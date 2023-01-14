function header_create () {
    document.head.appendChild (ui_element ("meta", [
        ["charset", "utf-8"]
    ]));

    document.head.appendChild (ui_element ("meta",[
        ["http-equiv", "X-UA-Compatible"],
        ["content", "IE=edge,chrome=1"]
    ])) ;

    document.head.appendChild (uic ("title", "Supalogix"));
    document.head.appendChild (ui_element ("meta", [
        ["content", 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no'],
        ["name", "viewport"]
    ]));

    
    ui_script ("./assets/js/core/jquery.min.js")
    ui_script ("./assets/js/core/popper.min.js")
    ui_script ("./assets/js/core/bootstrap.min.js")
    ui_script ("./assets/js/plugins/bootstrap-switch.js")
    ui_script ("./assets/js/plugins/nouislider.min.js")
    ui_script ("./assets/js/plugins/bootstrap-datepicker.js")
    ui_script ("./assets/js/now-ui-kit.js?v=1.3.0")
    ui_stylesheet ("https://fonts.googleapis.com/css?family=Montserrat:400,700,200")
    ui_stylesheet ("https://fonts.googleapis.com/css2?family=Orbitron&family=VT323&display=swap")
    ui_stylesheet ("https://site-assets.fontawesome.com/releases/v6.2.1/css/all.css")
    ui_stylesheet ("https://demos.creative-tim.com/now-ui-kit-pro-react/static/css/main.5ac76a86.chunk.css")
    ui_stylesheet ("https://demos.creative-tim.com/now-ui-kit-pro-react/static/css/main.5ac76a86.chunk.css")
    ui_stylesheet ("./assets/css/now-ui-kit.css?v=1.3.0")

    ui_script ("util.js")
    document.body.classList.add ("index-page")
    document.body.classList.add ("sidebar-collapse")
    navbar = uic ("nav", "", ["navbar", "navbar-expand-lg", "bg-primary", "fixed-top", "navbar-transparenta"])
    document.body.appendChild (navbar)
    nContainer = uic ("container")
    navbar.appendChild (nContainer)
    
    nTranslate = uic ("div")
    nContainer.appendChild (nTranslate)

    nContainer_a = uic ("a", "Supalogix", [
        "navbar-brand"
    ]) ;    
    nTranslate.appendChild (nContainer_a);

    nTranslate_b = uic ("button", "", [
        "navbar-toggler"
    ])

    nTranslate.appendChild (nTranslate_b);

    nTranslate_b.dataset.toggle = "collapse"
    nTranslate_b.dataset.target = "#navigation"
    nTranslate_b.setAttribute ("aria-controls", "navigation-index")
    nTranslate_b.setAttribute ("aria-expanded", "false")
    nTranslate_b.setAttribute ("aria-label", "Toggle Navigation")

    span1 = uic ("span", "", [
        "navbar-toggler-bar",
        "top-bar"
    ]);
    nTranslate_b.appendChild (span1);
    span2 = uic ("span", "", [
        "navbar-toggler-bar",
        "middle-bar"
    ]);
    nTranslate_b.appendChild (span2);
    
    span3 = uic ("span", "", [
        "navbar-toggler-bar",
        "bottom-bar"
    ]);
    nTranslate_b.appendChild (span3);
    
    div1 = uic ("div", "", [
        "collapse",
        "navbar-collapse",
        "justify-content-end"
    ])
    navbar.appendChild (div1)

    div1.id = "navigation"
    div1.setAttribute ("data-nav-image", "./assets/img/blurred-image-1.jpg")

    ul = uic ("ul", "", [
        "navbar-nav"
    ]);
    div1.appendChild (ul)

    contact = uic ("li", "", ["nav-item"])
    contact_a = uic ("a", "Contact Us", [
        "nav-link",
        "btn",
        "btn-neutral"
    ])
    contact_a.href = "/contact.html"
    contact.appendChild (contact_a)
}

header_create ()