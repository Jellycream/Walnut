let walnut = false

chrome.storage.sync.get('walnut-state', function (data) {
    walnut = data['walnut-state']

    if (walnut) {
        chrome.storage.sync.get(['walnut-accent', 'walnut-btn', 'walnut-hover'], function (data) {
            console.log("Walnut theme active")

            let accent = data["walnut-accent"]
            let btnCol = data["walnut-btn"]
            let hovCol = data["walnut-hover-hover"]

            var head = document.head;
            var link = document.createElement("link");

            link.setAttribute("id", "walnut-style")
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = "https://cdn.glitch.com/81ee3d12-7133-45c8-8abd-ecc9c82cceca%2Fstyles_1.6.0.css?v=1581382936916";

            head.appendChild(link);

            let root = document.documentElement;

            if (accent) {
                root.style.setProperty('--walnut-accent', accent)
                root.style.setProperty('--walnut-btn', btnCol)
                root.style.setProperty('--walnut-hover', hovCol)
            } else {
                root.style.setProperty('--walnut-accent', 'rgb(187, 134, 252)')
                root.style.setProperty('--walnut-btn', 'rgb(55, 0, 179)')
                root.style.setProperty('--walnut-hover', 'rgb(90, 96, 231)')
            }

            // Override navbar classes
            let nav = document.getElementsByClassName("navbar")
            if (nav.length > 0) {
                nav = nav[0]
                nav.classList.remove("bg-white")
                nav.classList.remove("navbar-light")
                nav.classList.add("navbar-walnut")

                nav.children[0].children[0].classList.add("btn-walnut")
            }

            let btnD = document.getElementsByClassName("btn-light")

            for (let i = 0; i < btnD.length; i++) {
                btnD[i].classList.remove("bg-gray")
                btnD[i].classList.add("btn-dark")
                btnD[i].classList.remove("btn-light")
            }

            document.body.className += ' ' + 'fade-in';
        })
    } else {
        document.body.style = "background-color: #FFFFFF !important"
        document.body.className += ' ' + 'show';
    }
})