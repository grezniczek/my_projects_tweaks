// @ts-check
if (typeof $ != 'undefined') $(function() {
    var $collapse = $('<button data-my-project-tweaks-action="collapse-all" class="btn btn-defaultrc btn-xs" style="margin-left:10px;color:#004000;"><i class="fas fa-folder-minus"></i> Collapse All</button>') // tt-fy
    $collapse.on('click', function() {
        $('td.fldrrwparent').each(function() {
            var $td = $(this)
            var id = $td.find('span.fldrrwtoggle span:visible').attr('id')
            if (id.substr(0, 3) == 'col') {
                $td.trigger('click')
            }
        })
    })
    $('button[onclick="organizeProjects();"]').after($collapse)
})