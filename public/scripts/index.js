const ipField = $('#mc-ip')
const ipText = $('#mc-ip-text')
const ipCopyText = $('#mc-ip-copy-text')
const oldText = ipCopyText.html()
const clipboard = new ClipboardJS('#mc-ip')

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

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