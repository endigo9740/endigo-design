import { EffectDarkness } from "$lib/game/effects/Darkness";

// TODO: make less of these, but bigger to cover a wider area, render below GameObject layers

// Darkness
const darknessCoords: any = [
    {x: 118, y: 10},
    {x: 85, y: 12},
    {x: 109, y: 12},
    {x: 9, y: 13},
    {x: 18, y: 13},
    {x: 48, y: 13},
    {x: 39, y: 15},
    {x: 14, y: 18},
    {x: 113, y: 19},
    {x: 82, y: 21},
    {x: 75, y: 24},
    {x: 19, y: 34},
    {x: 44, y: 34},
    {x: 10, y: 38},
    {x: 53, y: 38},
    {x: 13, y: 43},
    {x: 109, y: 45},
    {x: 116, y: 47},
    {x: 111, y: 52},
    {x: 55, y: 58},
    {x: 111, y: 63},
    {x: 42, y: 64},
    {x: 57, y: 65},
    {x: 119, y: 65},
    {x: 48, y: 93},
    {x: 54, y: 99},
    {x: 33, y: 101},
    {x: 117, y: 102},
    {x: 25, y: 105},
    {x: 109, y: 106},
    {x: 30, y: 110},
    {x: 76, y: 110},
    {x: 113, y: 111},
    {x: 68, y: 117},
    {x: 72, y: 120},
];
export const darknessList: any = () => {
    const darknessArr: any[] = [];
    darknessCoords.forEach((coords: any) => {
        darknessArr.push(
            new EffectDarkness({
                x: coords.x,
                y: coords.y
            })
        );
    });
    return darknessArr;
};