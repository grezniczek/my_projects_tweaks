// @ts-check
if (typeof $ != 'undefined') $(function() {
    // Construct base link to project settings.
    var version = $('#footer a[href="https://projectredcap.org"]').text().split(' ')[1]
    var baselink = location.href.split('index.php?')[0] + 'redcap_v' + version + '/ControlCenter/edit_project.php?project='
    // Header.
    var THr = $('div.hDiv div table tbody tr th')[1]
    var THp = $('<th align="center"><div style="text-align:center;width:52px;">PID</div></th>')
    $(THr).before(THp)
    // Rows.
    $('[class^="pid-cntr-"]').each(function() {
        var pid = this.className.split('-').reverse()[0]
        // @ts-ignore
        var link = super_user ? ' href="' + baselink + pid + '"' : ''
        // @ts-ignore
        var tag = super_user ? 'a' : 'span'
        var TDr = $(this).closest('td')
        var TDp = $('<td align="center"><div class="fc" style="width:52px; padding-left:10px;"><' + tag + link + '><span class="pid-cnt-h">' + pid + '</span>' + pid + '</' + tag +'></div></td>')
        $(TDp).attr('style', TDr.attr('style'))
        TDr.before(TDp)
    })
    // Fix column number in header rows.
    var cols = $('div.hDiv div table tbody tr th').length
    $('td.fldrrwparent').attr('colspan', cols)
})