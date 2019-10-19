// @ts-check
$(function() {
    $('div.projtitle.pnp').each(function() {
        var titleDiv = $(this)
        titleDiv.removeClass('pnp')
        var text = titleDiv.attr('pn')
        var span = titleDiv.find('span').first()
        var img = span.find('img')
        img.removeClass('pnpimg')
        span.replaceWith('<span class="tooltip">' + span.html() + '<span class="tooltiptext">' + text + '</span></span>')
    })
    var cols = $('div.hDiv div table tbody tr th').length
    $('td.fldrrwparent').attr('colspan', cols);
})