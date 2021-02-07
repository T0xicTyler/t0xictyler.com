const body = $('body')
const footer = $('footer')

const ipField = $('#mc-ip')
const ipCopyText = $('#mc-ip-copy-text')
const oldText = ipCopyText.html()

const buttons = $('.btn')

$(() => {
    const clipboard = new ClipboardJS('#mc-ip') // Instantiates Clipboard.js for easy IP copying

    ipCopyText.hide()

    if (Cookies.get('color_scheme') === 'light') {
        body.addClass('light-mode')
    }

    loadTheme()

    const btnDark = $('#btn-dark')
    const btnLight = $('#btn-light')

    btnDark.on('click', () => {
        body.addClass('light-mode')
        loadTheme()
        Cookies.set('color_scheme', 'light')
    })

    btnLight.on('click', () => {
        body.removeClass('light-mode')
        loadTheme()
        Cookies.set('color_scheme', 'dark')
    })

    ipCopyText.hide()

    ipField
        .on('mouseover', () => ipCopyText.show())
        .on('mouseout', () => ipCopyText.hide())
        .on('click', () => clip())
})

function clip() {
    console.log('Copied server IP to clipboard.')

    ipCopyText.text('IP copied to clipboard!').addClass('accent-text')

    setTimeout(function () {
        ipCopyText.text(oldText).removeClass('accent-text')
    }, 4000)
}

function loadTheme() {
    if (body.hasClass('light-mode')) {
        $('#btn-dark').hide()
        $('#btn-light').show()
        buttons.removeClass('btn-outline-light').addClass('btn-outline-dark')
        footer.addClass('light-mode')
    } else {
        $('#btn-light').hide()
        $('#btn-dark').show()
        buttons.removeClass('btn-outline-dark').addClass('btn-outline-light')
        footer.removeClass('light-mode')
    }
}
