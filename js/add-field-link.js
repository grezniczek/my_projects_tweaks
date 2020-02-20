// @ts-check
if (typeof $ != 'undefined') $(function() {
    // Construct base link to project settings.
    var baselink = window['app_path_webroot'] + 'Design/online_designer.php?pid='
    // Rows.
    $('[class^="pid-cntf-"]').each(function() {
        var pid = this.className.split('-').reverse()[0]
        var $link = $('<a href="' + baselink + pid + '"></a>')
        $(this).wrap($link)
    })
})