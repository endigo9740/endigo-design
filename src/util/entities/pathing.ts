export const pathing: any = {

    "idle": [],

    "left-right": [
        {path: 'right'},
        {path: 'wait', delay: 3000},
        {path: 'left'},
        {path: 'left'},
        {path: 'wait', delay: 3000},
        {path: 'right'},
    ],

    "circle": [
        {path: 'right'},
        {path: 'wait', delay: 4000},
        {path: 'down'},
        {path: 'wait', delay: 4000},
        {path: 'left'},
        {path: 'wait', delay: 4000},
        {path: 'up'},
        {path: 'wait', delay: 4000},
    ]

};