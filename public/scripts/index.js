const body = $('body')
const footer = $('footer')

const ipField = $('#mc-ip')
const ipCopyText = $('#mc-ip-copy-text')
const oldText = ipCopyText.html()

const buttons = $('.btn')

$(() => {
    ipCopyText.hide()

    loadTheme()

    const btnDark = $('#btn-dark')
    const btnLight = $('#btn-light')

    btnDark.on('click', () => {
        body.addClass('light-mode')
        loadTheme()
    })

    btnLight.on('click', () => {
        body.removeClass('light-mode')
        loadTheme()
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
