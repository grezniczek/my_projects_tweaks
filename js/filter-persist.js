// @ts-check
(function() {
    var COOKIE_NAME = "redcap_my_project_tweaks_filterString"
    var on = false
    var empty = ''
    var $search
    /**
     * Sets a cookie with an optional expiration date.
     * @param {string} name 
     * @param {string} value 
     * @param {number?} days 
     */
    function setCookie(name, value, days) {
        var expires =''
        if (days) {
            var date = new Date()
            date.setTime(date.getTime() + (days*24*60*60*1000))
            expires = "; expires=" + date.toUTCString()
        }
        document.cookie = name + '=' + value + expires + '; path=/'
    }
    /**
     * Gets a cookie.
     * @param {string} name
     */
    function getCookie(name) {
        name = name + '='
        var cookies = document.cookie.split('; ')
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i]
            if (cookie.substr(0, name.length) == name) {
                return cookie.substr(name.length)
            }
        }
        return ""
    }
    /**
     * Performs the search.
     * @param {string} filter 
     */
    function apply(filter) {
        // @ts-ignore
        if ($.fn.projsearch !== undefined) {
            $search.focus()
            $search.val(filter)
            $search.trigger("keyup")
        }
        else { // Need to wait for REDCap to have completed initializations.
            setTimeout(() => {
                apply(filter)
            }, 100)
        }
    }
    function toggle(override = null) {
        on = (override != null && typeof override == 'boolean') ? override : !on
        var html = on ? 
            '<i class="fas fa-filter fa-stack-1x" style="color:#008000;"></i>' : 
            '<i class="fas fa-filter fa-stack-1x"></i><i class="fas fa-slash fa-stack-1x" style="color:red;"></i>' 
        $('#myProjectTweaksEM-persistenceIndicator').html(html)
    }
    function clear() {
        $search.val('')
        $search.trigger("keyup")
        $search.focus()
    }
    if (typeof $ != 'undefined') $(function() {
        var cookie = getCookie(COOKIE_NAME)
        on = (cookie == '') ? false : (cookie[0] == '+')
        var filter = cookie.substr(1)
        $search = $("#proj_search")
        empty = $search.val().toString()
        $search.before('<button id="myProjectTweaksEM-persistenceToggle" class="btn btn-defaultrc btn-xs" style="margin-right:5px;"><span class="tooltip" style="margin-top:-2px;"><span id="myProjectTweaksEM-persistenceIndicator" class="fa-stack fs10"></span><span class="tooltiptext">Toggle filter persistence</span></span></button>') // tt-fy
        $search.after('<button id="myProjectTweaksEM-clearFilter" class="btn btn-defaultrc btn-xs" style=";margin-left:5px;"><i class="fas fa-times fs11" style="color:darkred"></i></button>')
        $('#myProjectTweaksEM-persistenceToggle').on('click', toggle)
        $('#myProjectTweaksEM-clearFilter').on('click', clear)
        toggle(on)
        if (empty == filter) empty = null // Browser back-function fix.
        $(window).bind('beforeunload', function() {
            var text = $search.val().toString()
            if (text == empty) text = ''
            setCookie(COOKIE_NAME, (on ? '+' : '-') + text, 60)
        })
        if (on && filter != '') {
            apply(filter)
        }
    })
})()