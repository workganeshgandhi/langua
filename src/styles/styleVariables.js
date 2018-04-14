import * as Color from 'color'
import { harmoniousMix, mixNeutral } from './styleFunctions'

/*
 * Modular Scale
 * https://alistapart.com/article/more-meaningful-typography
 * 1rem @ 1:1.333
 * 1.1665rem @ 1:1.333
 * http://www.modularscale.com/?1,1.1665&em&1.333
 */

// All sizes are given as pure numbers, so must be given the unit 'rem'

export const ratio = 1.333
export const ms1 = 1.000
export const ms0 = ms1 / Math.pow(ratio, 1) // 0.750
export const ms2 = ms1 * Math.pow(ratio, 1) // 1.333
export const ms3 = ms1 * Math.pow(ratio, 2) // 1.777
export const ms4 = ms1 * Math.pow(ratio, 3) // 2.369
export const ms5 = ms1 * Math.pow(ratio, 4) // 3.157
export const ms6 = ms1 * Math.pow(ratio, 5) // 4.209
export const lnht = ms2 / 2 //                 0.6665

// Colors based on https://tallys.github.io/color-theory/

const bluPmy = Color('hsla(124, 100%, 50%, 1)')
const ongPmy = Color('hsla(33, 100%, 50%, 1)')
const redPmy = Color('hsla(0, 100%, 50%, 1)')

export const blu = harmoniousMix(ongPmy, bluPmy).darken(0.1)
export const ong = harmoniousMix(bluPmy, ongPmy)
export const red = harmoniousMix(bluPmy, redPmy)
export const bluNtl = mixNeutral(blu)
export const ongNtl = mixNeutral(ong)
export const redNtl = mixNeutral(red)
export const white = bluNtl.lighten(0.99)
export const black = bluNtl.darken(0.99)
