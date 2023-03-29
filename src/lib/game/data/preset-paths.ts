export const presetPaths: any = {

    "idle": [],

    // NPCS

    "npc-up-down": [
        {direction: 'down'},
        {direction: 'wait', delay: 8000},
        {direction: 'up'},
        {direction: 'up'},
        {direction: 'wait', delay: 8000},
        {direction: 'down'},
    ],
    
    "npc-left-right": [
        {direction: 'right'},
        {direction: 'wait', delay: 5000},
        {direction: 'left'},
        {direction: 'left'},
        {direction: 'left'},
        {direction: 'wait', delay: 5000},
        {direction: 'right'},
        {direction: 'right'},
    ],

    "npc-circle": [
        {direction: 'wait', delay: 4000},
        {direction: 'right'},
        {direction: 'wait', delay: 6000},
        {direction: 'down'},
        {direction: 'wait', delay: 4000},
        {direction: 'left'},
        {direction: 'wait', delay: 6000},
        {direction: 'up'},
    ],

    // Critters

    "critter-up-down": [
        {direction: 'down'},
        {direction: 'down'},
        {direction: 'wait', delay: 500},
        {direction: 'up'},
        {direction: 'up'},
        {direction: 'wait', delay: 500},
    ],

    "critter-lr-sm": [
        {direction: 'left'},
        {direction: 'left'},
        {direction: 'wait', delay: 500},
        {direction: 'right'},
        {direction: 'right'},
        {direction: 'wait', delay: 500},
    ],
    "critter-lr-md": [
        {direction: 'left'},
        {direction: 'left'},
        {direction: 'left'},
        {direction: 'wait', delay: 500},
        {direction: 'right'},
        {direction: 'right'},
        {direction: 'right'},
        {direction: 'wait', delay: 500},
    ],
    "critter-lr-lg": [
        {direction: 'left'},
        {direction: 'left'},
        {direction: 'left'},
        {direction: 'left'},
        {direction: 'wait', delay: 500},
        {direction: 'right'},
        {direction: 'right'},
        {direction: 'right'},
        {direction: 'right'},
        {direction: 'wait', delay: 500},
    ],

    "critter-circle-cw": [
        {direction: 'wait', delay: 500},
        {direction: 'right'},
        {direction: 'wait', delay: 500},
        {direction: 'down'},
        {direction: 'wait', delay: 500},
        {direction: 'left'},
        {direction: 'wait', delay: 500},
        {direction: 'up'},
    ],
    
    "critter-circle-ccw": [
        {direction: 'wait', delay: 500},
        {direction: 'left'},
        {direction: 'wait', delay: 500},
        {direction: 'down'},
        {direction: 'wait', delay: 500},
        {direction: 'right'},
        {direction: 'wait', delay: 500},
        {direction: 'up'},
    ],

};