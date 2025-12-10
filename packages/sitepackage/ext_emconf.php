<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'sitepackage',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '13.4.0-14.4.99',
            'fluid_styled_content' => '13.4.0-14.4.99',
            'rte_ckeditor' => '13.4.0-14.4.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Wmgraphix\\Sitepackage\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Mario Philipp',
    'author_email' => 'm.philipp@wmgraphix.de',
    'author_company' => 'w.m.graphiX',
    'version' => '14.0.0',
];
