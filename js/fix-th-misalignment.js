// @ts-check
if (typeof $ != 'undefined') $(function() {
    // Are folders enabled?
    if ($('td.fldrrwparent').length > 0) {
        $('div#proj_table div.hDiv div table tbody tr th div').first().css('width', '507px')
    }
})