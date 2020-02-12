// let walnut

let root = document.documentElement;
let toggle = document.getElementById("toggle")
let activeBtn

toggle.disabled = false

chrome.storage.sync.get('walnut-state', function (data) {
    walnut = data['walnut-state']

    if (walnut) {
        toggle.checked = true
    }

    toggle.disabled = false
})


function updateState() {
    console.log(toggle.checked)

    chrome.storage.sync.set({
        'walnut-state': true
    }, function () {
        console.log('state saved');
    });
}

toggle.addEventListener('change', event => {
    chrome.storage.sync.set({
        'walnut-state': toggle.checked
    }, function () {
        chrome.tabs.query({
            url: "https://acorn.acadiau.ca/*"
        }, tabs => {
            console.log(tabs)

            for (let i = 0; i < tabs.length; i++) {
                chrome.tabs.update(tabs[i].id, {
                    url: tabs[0].url
                });
            }
        })
    });
})

let btns = document.getElementsByClassName("btn")

chrome.storage.sync.get('walnut-accent', function (data) {
    let current = data["walnut-accent"]

    root.style.setProperty('--walnut-accent', current)

    for (let i = 0; i < btns.length; i++) {
        if (btns[i].style.backgroundColor == current) {
            btns[i].classList.add("active")
            activeBtn = btns[i]
        }

        btns[i].disabled = false

        btns[i].addEventListener("click", function (event) {
            let colour = event.toElement.getAttribute('data-link')
            let btnCol = event.toElement.getAttribute('data-btn')
            let hovCol = event.toElement.getAttribute('data-hover')

            activeBtn.classList.remove("active")
            event.toElement.classList.add("active")
            activeBtn = event.toElement

            root.style.setProperty('--walnut-accent', colour)

            chrome.storage.sync.set({
                'walnut-accent': colour
            }, chrome.storage.sync.set({
                'walnut-btn': btnCol
            }, chrome.storage.sync.set({
                'walnut-btn-hover': hovCol
            }, function () {
                console.log('colours saved');

                chrome.tabs.query({
                    url: "https://acorn.acadiau.ca/*"
                }, tabs => {
                    for (let i = 0; i < tabs.length; i++) {
                        chrome.tabs.update(tabs[i].id, {
                            url: tabs[0].url
                        });
                    }
                })
            })));
        })
    }
})