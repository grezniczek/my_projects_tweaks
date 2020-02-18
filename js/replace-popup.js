// @ts-check
if (typeof $ != 'undefined') $(function() {
    // REDCap < 9.4.1
    if ($('div.projtitle.pnp').length) {
        $('div.projtitle.pnp').each(function() {
            var titleDiv = $(this)
            titleDiv.removeClass('pnp')
            var text = titleDiv.attr('pn')
            var span = titleDiv.find('span').first()
            var img = span.find('img')
            img.removeClass('pnpimg')
            span.replaceWith('<span class="tooltip">' + span.html() + '<span class="tooltiptext">' + text + '</span></span>')
        })
    }
    else {
        $('i[data-toggle=popover]').each(function() {
            const $i = $(this)
            const $old = $i.parent('span.aGridsub')
            const text = $i.attr('data-content')
            $old.replaceWith('<span class="tooltip"><i class="far fa-sticky-note fs11" style="color:#000088;"></i><span class="tooltiptext">' + text + '</span></span>')
            $old.remove()
        })
    }
})