fetch('header.html')
  .then(function(response) {
    response.text ().then (function (result) {
        document.querySelector ("body").innerHTML = result
        console.log (result)
        fetch ("header-ui.html")  
        .then(function(response) {
            response.text ().then (function (result) {
                document.querySelector ("body").innerHTML = result
                console.log (result)

            })
            // console.log (response.text ())
        })

        })
    })

    
