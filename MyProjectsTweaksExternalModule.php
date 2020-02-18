<?php

namespace DE\RUB\MyProjectsTweaksExternalModule;

use ExternalModules\AbstractExternalModule;

class MyProjectsTweaksExternalModule extends AbstractExternalModule {

    private $settings; 

    function redcap_every_page_top($project_id = null) {

        // Are we on the My Projects page? If not .. bye bye.
        if (!strpos($_SERVER[REQUEST_URI], "action=myprojects")) return;

        $this->settings = new MyProjectsTweaksSettings($this);

        // Hide the action.
        echo "<style>body{display:none}</style>";

        // Apply column header misalignment fix.
        $this->includeScriptlet("fix-th-misalignment");

        // Add PID column.
        if ($this->settings->addPIDColumn) {
            $this->includeScriptlet("add-pid-column");
        }
        
        // Suppress project description popup.
        if ($this->settings->suppressDescription) {
            $include = true;
            if (count($this->settings->suppressDescriptionWhitelist)) {
                $include = in_array(USERID, $this->settings->suppressDescriptionWhitelist);
            }
            else if (count($this->settings->suppressDescriptionBlacklist)) {
                $include = !in_array(USERID, $this->settings->suppressDescriptionBlacklist);
            }
            if ($include) $this->includeScriptlet("suppress-popup");
        }

        // Replace the project description popup with a nicer version.
        if ($this->settings->replaceDescription) {
            $this->includeCSS("tooltip");
            $this->includeScriptlet("replace-popup");
        }

        // Reveal the results.
        echo "<script>
            (function() {
                var callback = function() {
                    document.body.style.display = 'block'
                }
                if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
                    callback()
                }
                else {
                    document.addEventListener('DOMContentLoaded', callback)
                }
            })()
        </script>";
    }

    private function includeScriptlet($name) {
        if ($this->settings->debugMode) {
            echo '<script type="text/javascript" src="' . $this->framework->getUrl("js/{$name}.js") . '"></script>';
        }
        else {
            $path = __DIR__ . "/js/{$name}.js";
            $script = file_get_contents($path);
            echo "<script type=\"text/javascript\">{$script}</script>";
        }
    }

    private function includeCSS($name) {
        if ($this->settings->debugMode) {
            echo '<script type="text/javascript">(function(){ var css = document.createElement("link"); css.setAttribute("rel", "stylesheet"); css.setAttribute("type", "text/css"); css.setAttribute("href", "'. $this->framework->getUrl("css/{$name}.css") . '"); document.head.appendChild(css); })(); </script>';
        } 
        else {
            $path = __DIR__ . "/css/{$name}.css";
            $css = file_get_contents($path);
            echo "<style>{$css}</style>";
        }
    }

}

/**
 * Helper class for retrieving module config.
 */
class MyProjectsTweaksSettings {

    private $m;
    /**
     * Indicates whether the module has been instantiated in a project setting.
     */
    public $isProject = false;
    
    public $debugMode = false;
    public $addPIDColumn = false;
    public $suppressDescription = false;
    public $suppressDescriptionWhitelist = array();
    public $suppressDescriptionBlacklist = array();
    public $replaceDescription = false;

    function __construct($module) 
    {
        $this->isProject = isset($GLOBALS["project_id"]);
        $this->m = $module;

        // System Settings.
        $this->debugMode = $this->getSS("debug_mode", false);
        $this->addPIDColumn = $this->getSS("add_pid", false);
        $this->suppressDescription = $this->getSS("suppress_description", false);
        if ($this->suppressDescription) {
            $whitelist = $this->getSS("suppress_description_whitelist", "");
            $blacklist = $this->getSS("suppress_description_blacklist", "");
            $process = function($text) {
                $raw_list = explode("\n", $text);
                $list = array();
                foreach ($raw_list as $item) {
                    $item = trim($item);
                    if (strlen($item)) array_push($list, $item);
                }
                return $list;
            };
            $this->suppressDescriptionWhitelist = $process($whitelist);
            $this->suppressDescriptionBlacklist = $process($blacklist);
        }
        $this->replaceDescription = $this->getSS("replace_description", false);

        // Settings in the context of a project.
        if ($this->isProject) {
            // None at the moment.
        }
    }

    /**
     * Get a project setting value.
     * @param string $name The key of the setting.
     * @param mixed $default A default value.
     * @return mixed The value of the setting.
     */
    private function getPS($name, $default) 
    {
        $value = $this->m->getProjectSetting($name);
        return strlen($value) ? $value : $default;
    }

    /**
     * Get a system setting value.
     * @param string $name The key of the setting.
     * @param mixed $default A default value.
     * @return mixed The value of the setting.
     */
    private function getSS($name, $default) 
    {
        $value = $this->m->getSystemSetting($name);
        return strlen($value) ? $value : $default;
    }
}

