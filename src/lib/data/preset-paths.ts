export const presetPaths: any = {

    "idle": [],

    "up-down": [
        {path: 'down'},
        {path: 'wait', delay: 8000},
        {path: 'up'},
        {path: 'up'},
        {path: 'wait', delay: 8000},
        {path: 'down'},
    ],
    
    "left-right": [
        {path: 'right'},
        {path: 'wait', delay: 5000},
        {path: 'left'},
        {path: 'left'},
        {path: 'left'},
        {path: 'wait', delay: 5000},
        {path: 'right'},
        {path: 'right'},
    ],

    "circle": [
        {path: 'wait', delay: 4000},
        {path: 'right'},
        {path: 'wait', delay: 6000},
        {path: 'down'},
        {path: 'wait', delay: 4000},
        {path: 'left'},
        {path: 'wait', delay: 6000},
        {path: 'up'},
    ]

};