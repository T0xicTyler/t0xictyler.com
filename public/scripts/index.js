const ipField = $('#mc-ip')
const ipCopyText = $('#mc-ip-copy-text')
const oldText = ipCopyText.html()

$(() => {
    ipCopyText.hide()

    ipField.on('mouseover', () => ipCopyText.show()).on('mouseout', () => ipCopyText.hide())

    ipField.on('click',() => {
        clip()
    })
})

function clip() {
    console.log('Copied server IP to clipboard.')

    ipCopyText.text('IP copied to clipboard!').addClass('accent-text')

    setTimeout(function () {
        ipCopyText.text(oldText).removeClass('accent-text')
    }, 4000)
}