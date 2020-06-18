# My Projects Tweaks - Manual Testing Procedure

Version 1 - 2020-04-13

## Prerequisites

- _My Projects Tweaks_ is enabled on the system.
- A test project that has some content in _Project notes_ (Project Settings).
- A non-super user account that is a user of the test project.

## Test Procedure

1. Using an admin account, configure the module **on the system level**:
   - Turn on **all options** (except _Debug mode_).
   - Leave the _Suppress the description only for these users_ and _Do not suppress the description for these users_ boxes empty.
1. As a super user, go to the _My Projects_ page and verify the following:
   - A _PID_ column is shown before the _Records_ column.
   - Clicking on project id links in the _PID_ column takes you to the corresponding _Edit a Project's Settings_ page.
   - The numbers in the _Records_ column are links that take you to the corresponding _Record Status Dashboard_ page.
   - The numbers in the _Fields_ column are links that take you to the corresponding _Codebook_ page.
   - None of the projects in the list have the description icon.
   - There is a project filter icon (with a tooltip: 'Toggle filter persistence') before the _Filter projects by title_ text box that can be toggled between an on and off state.
   - There is a clear icon (x) after the _Filter projects by title_ text box.
1. With the project filter persistence enabled, enter a search string.
1. Navigate away from the _My Projects_ page (e.g. by clicking on a project in the filtered list).
1. Go back to _My Projects_ and verify the following:
   - The filter value is still present and the list of projects filtered accordingly.
   - Clicking on the clear icon next to the filter text box clears the value and shows the complete list.
1. Turn off filter persistence, filter the list, and navigate away from the _My Projects_ page.
1. Go back to _My Projects_ and verify the following:
   - There is no filter set and the entire list is shown.
1. Using an admin account, configure the module **on the system level**:
   - Enter the user name of the non-super user account into _Suppress the description only for these users_.
1. With this non-super user account, go to the _My Projects_ page and verify the following:
   - None of the projects in the list have the description icon.
   - Numbers in _PID_ and _Fields_ columns are not links.
   - The numbers in the _Records_ column are links to the corresponding _Record Status Dashboard_.
1. As a super user, go to the _My Projects_ page and verify the following:
   - Description icons are showing.
   - Hovering over these icons reveals a tooltip.
   - The tooltip is clickable and takes you to the corresponding project.
1. Using an admin account, configure the module **on the system level**:
   - Move the user name of the non-super user account from _Suppress the description only for these users_ to _Do not suppress the description for these users_.
1. With this non-super user account, go to the _My Projects_ page and verify the following:
   - Description icons are showing.
1. As a super user, go to the _My Projects_ page and verify the following:
   - None of the projects in the list have the description icon.
1. Using an admin account, configure the module **on the system level**:
   - Turn off all options.
1. Go to the _My Projects_ page and verfiy the following:
   - The filter persistence toggle and clear buttons are gone.
   - The _PID_ column is gone.
   - The numbers in the _Records_ and _Fields_ columns are not links.
   - The standard REDCap tooltip icon is shown.

Done.

## Reporting Errors

Before reporting errors:
- Make sure there is no interference with any other external module by turning off all others and repeating the tests.
- Check if you are using the latest version of the module. If not, see if updating fixes the issue.

To report an issue:
- Please report errors by opening an issue on [GitHub](https://github.com/grezniczek/my_projects_tweaks/issues) or on the community site (please tag @gunther.rezniczek). 
- Include essential details about your REDCap installation such as **version** and platform (operating system, PHP version).
- If the problem occurs only in conjunction with another external module, please provide its details (you may also want to report the issue to that module's authors).
