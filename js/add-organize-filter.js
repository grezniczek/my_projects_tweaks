// @ts-check
if (typeof $ != 'undefined') $(function() {
    var orig = window.getProjectFolders
    window.getProjectFolders = function() {
        orig()
        var $filter = $('[data-my-project-tweaks="organize-filter"]')
        if (!$filter.length) {
            // Find the places.
            var $tr = $('#select_folders').parent().parent()
            var $select = $('#folder_id')
            var $tbody = $tr.parent()
            $('#hide_assigned').parent().remove()
            var $new_tr = $('<tr><td style="padding-top:7px;"><input id="hide_assigned" onclick="hideAssigned();" type="checkbox"><span style="font-size:11px; color:#000;font-weight:normal;">Hide projects already assigned</span></td><td></td></tr>')
            $tbody.append($new_tr)
            var $td = $('<td><input data-my-project-tweaks="organize-filter" type="text" class="x-form-text x-form-field" placeholder="Filter projects" style="margin-top:8px;max-width:200px;"> <button style="margin-top: 6px;" class="btn btn-defaultrc btn-xs">&times;</button></td>')
            $tr.append($td)
            $filter = $td.find('input')
            $td.find('button').on('click', function() {
                $filter.val('')
                $filter.trigger('change')
            })
            function applyFilter(e) {
                var filter = $filter.val().toString().toLowerCase()
                $('#projects tr').each(function() {
                    if (filter == '' || this.innerText.toLowerCase().includes(filter)) {
                        $(this).show()
                    }
                    else {
                        $(this).hide()
                    }
                })
                if (filter != '') {
                    $('#projects td.header').parent().hide()
                }
            }
            $filter.on('keyup change', applyFilter)
            $('#projects').bind('DOMSubtreeModified', function(e) {
                if (e.target.innerHTML.length > 0) {
                    applyFilter(e)
                }
              });
        }
    }
})