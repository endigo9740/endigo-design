export const presetPaths: any = {

    "idle": [],

    // NPCS

    "npc-up-down": [
        {path: 'down'},
        {path: 'wait', delay: 8000},
        {path: 'up'},
        {path: 'up'},
        {path: 'wait', delay: 8000},
        {path: 'down'},
    ],
    
    "npc-left-right": [
        {path: 'right'},
        {path: 'wait', delay: 5000},
        {path: 'left'},
        {path: 'left'},
        {path: 'left'},
        {path: 'wait', delay: 5000},
        {path: 'right'},
        {path: 'right'},
    ],

    "npc-circle": [
        {path: 'wait', delay: 4000},
        {path: 'right'},
        {path: 'wait', delay: 6000},
        {path: 'down'},
        {path: 'wait', delay: 4000},
        {path: 'left'},
        {path: 'wait', delay: 6000},
        {path: 'up'},
    ],

    // Critters

    "critter-up-down": [
        {path: 'down'},
        {path: 'up'},
        {path: 'up'},
        {path: 'down'},
    ],

    "critter-lr-sm": [
        {path: 'left'},
        {path: 'left'},
        {path: 'right'},
        {path: 'right'},
    ],
    "critter-lr-md": [
        {path: 'left'},
        {path: 'left'},
        {path: 'left'},
        {path: 'right'},
        {path: 'right'},
        {path: 'right'},
    ],
    "critter-lr-lg": [
        {path: 'left'},
        {path: 'left'},
        {path: 'left'},
        {path: 'left'},
        {path: 'right'},
        {path: 'right'},
        {path: 'right'},
        {path: 'right'},
    ],

};