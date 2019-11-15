// @ts-check
$(function() {
    // REDCap < 9.4.1
    if ($('div.projtitle.pnp').length) {
        $('div.projtitle.pnp').each(function() {
            var jqe = $(this)
            jqe.removeClass('pnp')
            jqe.removeAttr('pn')
        })
        $('#table-proj_table span.aGridsub').hide()
    }
    else if ($('i[data-toggle=popover]').length) {
        $('i[data-toggle=popover]').parent('span.aGridsub').remove()
    }
})