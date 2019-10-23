// @ts-check
$(function() {
    // Header.
    var THr = $('div.hDiv div table tbody tr th')[1]
    var THp = $('<th align="center"><div style="text-align:center;width:52px;">PID</div></th>')
    $(THr).before(THp)
    // Rows.
    $('[class^="pid-cntr-"]').each(function() {
        var pid = this.className.split('-').reverse()[0]
        var TDr = $(this).closest('td')
        var TDp = $('<td align="center"><div class="fc" style="width:52px; padding-left:10px;"><span><span class="pid-cnt-h">' + pid + '</span>' + pid + '</span></div></td>')
        $(TDp).attr('style', TDr.attr('style'))
        TDr.before(TDp)
    })
    // Fix column number in header rows.
    var cols = $('div.hDiv div table tbody tr th').length
    $('td.fldrrwparent').attr('colspan', cols)
})