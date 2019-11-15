# _My Projects_ Tweaks

A REDCap External Module allowing some tweaking of the _My Projects_ page.

View [this page](https://github.com/grezniczek/my_projects_tweaks) on GitHub. Please see the [changelog](https://github.com/grezniczek/my_projects_tweaks/blob/master/CHANGELOG.md) for a detailed version history.

**Pull requests (against _master_) are welcome!**

## Requirements

REDCAP 8.11.6 or newer (EM Framework v2).  
Tested with REDCap 9.3.6 on a system running PHP 7.0.33).

## Installation

- Clone this repo into `<redcap-root>/modules/redcap_field_help_v<version-number>`, or
- Obtain this module from the Consortium REDCap Repo via the Control Center.
- Go to Control Center > Technical / Developer Tools > External Modules and enable this module.
- This module does not need to be enabled for any projects.

## Configuration

A few **system settings** are available. There are no project-specific settings.

- **Debug mode**: Check to have JavaScript snippets included as separate files. This may be useful for debugging in the browser developer tools.
- **Add project PIDs**: Adds a new _PID_ column (in between _Project Title_ and _Records_). The PIDs are links that lead to the _Project's Settings_ page.
- **Suppress description popups**: Does just that. This can be finetuned by limitiing the effect to certain users only (whitelist) or to exclude certain users from the benefits of this effect (blacklist).
- **Replace description popups**: When activated, the popups remain, but only trigger when the mouse hovers over the icons (which are now right-aligend). The popups also don't flicker and when clicked with the mouse, the corresponding project will be loaded. You don't like the colors? --> Submit a pull request that makes this configurable ;)

A fix for the misaligned column headers in the _My Projects_ table when folders are used is **always** active.

## Notes to developers

- `package-lock.json` is an artifact of having enhanced tooling support in VS Code for JS files (via the `// @ts-check` directive - _highly recommended_).
