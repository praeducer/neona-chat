<?php

require 'config.php';

function parseTemplate ($form_data) {
    global $template_color;

    $template = file_get_contents('templates/template.html');

    if ($template)
    {
        $site = 'http' . (isset($_SERVER['HTTPS']) ? 's' : '') . '://' . $_SERVER['HTTP_HOST'];

        $template = str_replace('%MESSAGE%', $form_data['message'], $template);
        $template = str_replace('%NAME%', $form_data['name'], $template);
        $template = str_replace('%CONTACT%', $form_data['email'], $template);
        $template = str_replace('%SITE%', $site, $template);

        return $template;
    }
    else
    {
        return 'Template missing. Make sure the path is correct.';
    }

}
