# _My Projects_ Tweaks

A REDCap External Module allowing some tweaking of the _My Projects_ page.

View [this page](https://github.com/grezniczek/my_projects_tweaks) on GitHub.

**Pull requests (against _master_) are welcome!**

## Requirements

REDCAP 8.11.6 or newer (EM Framework v2).  
Tested with REDCap 9.7.3 on a system running PHP 7.3).

## Installation

- Clone this repo into `<redcap-root>/modules/redcap_field_help_v<version-number>`, or
- Obtain this module from the Consortium REDCap Repo via the Control Center.
- Go to Control Center > Technical / Developer Tools > External Modules and enable this module.
- This module does not need to be enabled for any projects.

## Configuration

A few **system settings** are available. There are no project-specific settings.

- **Debug mode**: Check to have JavaScript snippets included as separate files. This may be useful for debugging in the browser developer tools.
- **Add project PIDs**: Adds a new _PID_ column (in between _Project Title_ and _Records_). For super users, the PIDs are links that lead to the _Project's Settings_ page.
- **Link to Online Designer**: Adds links to the Online Designer page of projects in the _Fields_ column (for admins only).
- **Link to Record Status Dashboard**: Add links to the Record Status Dashboard in the _Records_ column.
- **Suppress description popups**: Does just that. This can be finetuned by limitiing the effect to certain users only (whitelist) or to exclude certain users from the benefits of this effect (blacklist).
- **Replace description popups**: When activated, the popups remain, but only trigger when the mouse hovers over the icons (which are now right-aligend). The popups also don't flicker and when clicked with the mouse, the corresponding project will be loaded. You don't like the colors? --> Submit a pull request that makes this configurable ;)
- **Collapse All**: Adds a _Collapse All_ button next to the _Organize_ button that collapses all project folders.

A fix for the misaligned column headers in the _My Projects_ table when folders are used is **always** active.

## Notes to developers

- `package-lock.json` is an artifact of having enhanced tooling support in VS Code for JS files (via the `// @ts-check` directive - _highly recommended_).

## Testing

Instructions for testing the module can be found [here](?prefix=my_projects_tweaks&page=tests/MyProjectsTweaksManualTest.md).

## Changelog

Version | Updates
------- | ----------
1.3.1   | _Bug fix:_ Fix collapse all.
1.3.0   | _New feature:_ Add a collapse all button that collapses all project folders.
1.2.1   | _Bug fixes:_ Set tooltip icon z-index; enable Record Status Dashboard links for all users.<br>_Misc:_ Add instructions for testing the module.
1.2.0   | _New features:_ Persistence of project filter, links to the Record Status Dashboard (_Records_ column), and to the Online Designer (_Fields_ column; admins only).
1.1.1   | _Bug fix:_ When jQuery was missing, the module might cause blank pages.
1.1.0   | _Enhancement:_ For super users, the PIDs are now links to the Project's Settings page.<br>_Update:_ REDCap 9.4.1 changed the tooltips on the my project page. This updated takes this into consideration.
1.0.2   | _Enhancement:_ The misalignment of headers in the _My Projects_ table, which is present in vanilla REDCap when folders are used, gets fixed by this update. This effect is always on as long as this module is enabled.
1.0.1   | _Bug fixes:_ When using folders and adding the PID column, folder title rows were one column short. When using folders, the PID column would not honor folder colors.<br>_Enhancements:_ Link to the modules GitHub page is included in its description.
1.0.0   | Initial release.
