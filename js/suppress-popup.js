// @ts-check
$(function() {
    $('div.projtitle.pnp').each(function() {
        var jqe = $(this)
        jqe.removeClass('pnp')
        jqe.removeAttr('pn')
    })
    $('#table-proj_table span.aGridsub').hide()
})