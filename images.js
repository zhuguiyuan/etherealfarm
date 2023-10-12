/*
Ethereal Farm
Copyright (C) 2020-2023  Lode Vandevenne

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/



var fern_spring_header = 'l0:#844 l1:#d66 hg:#2f0';
var fern_summer_header = 'hg:#0f4';
var fern_autumn_header = 'q:#a30 g:#f70';
var fern_winter_header = 'q:#8ae g:#acf G:#cef Q:#eef';
var fern_ethereal_header = 'q:#ff8 g:#ffa G:#ffc Q:#ffe';
var fern_infernal_header = 'q:#f88 g:#f44 G:#f22 Q:#f00';

var fern_base_image = `
................
....g...........
....q.qg........
..gqqqg..g......
.....qgggqg.....
..gqqqqqqg......
.gqgggqgg.......
.....gq.ggg.....
..ggqqqqqqqgg...
.gqqgg.qgggqqg..
..gg.g.q.g.gg...
...gggqqqqggg...
..ggqq..qgqqgg..
.gqqgg..qgggqqg.
..gg....q..ggg..
................
`;

// bushy
var fern_base_image2 = `
....$...........
...$g$$$........
..$$q$qg$$......
.$gqqqg$$g$.....
..$$$qgggqg$....
.$gqqqqqqg$.....
$gqgggqgg$$.....
.$$$$gq$ggg$$...
.$ggqqqqqqqgg$..
$gqqgg$qgggqqg$.
.$gg$g$q$g$gg$..
..$gggqqqqggg$..
.$ggqq$$qgqqgg$.
$gqqgg$$qgggqqg$
.$gg$$$$q$$ggg$.
..$$....$..$$$..
`;

// idle
var fern_base_image3 = `
....]...........
...]g]]]........
..]]q]qg]]......
.]gqqqg]]g].....
..]]]qgggqg]....
.]gqqqqqqg].....
]gqgggqgg]].....
.]]]]gq]ggg]]...
.]ggqqqqqqqgg]..
]gqqgg]qgggqqg].
.]gg]g]q]g]gg]..
..]gggqqqqggg]..
.]ggqq]]qgqqgg].
]gqqgg]]qgggqqg]
.]gg]]]]q]]ggg].
..]]....]..]]]..
`;

var fern_base_image_ethereal = `
................
...........G....
........Gg.g....
......G..GgggG..
.....GgGGGg.....
......GggggggG..
.......GGgGGGgG.
.....GGG.gG.....
...GGgggggggGG..
..GggGGGg.GGggG.
...GG.G.g.G.GG..
...GGGggggGGG...
..GGggGg..ggGG..
.GggGGGg..GGggG.
..GGG..g....GG..
................
`;

var images_fern = [
  generateImageCanvas(fern_spring_header + fern_base_image),
  generateImageCanvas(fern_summer_header + fern_base_image),
  generateImageCanvas(fern_autumn_header + fern_base_image),
  generateImageCanvas(fern_winter_header + fern_base_image),
  generateImageCanvas(fern_ethereal_header + fern_base_image),
  generateImageCanvas(fern_infernal_header + fern_base_image),
];

var images_fern2 = [
  generateImageCanvas(fern_spring_header + fern_base_image2),
  generateImageCanvas(fern_summer_header + fern_base_image2),
  generateImageCanvas(fern_autumn_header + fern_base_image2),
  generateImageCanvas(fern_winter_header + fern_base_image2),
  generateImageCanvas(fern_ethereal_header + fern_base_image2),
  generateImageCanvas(fern_infernal_header + fern_base_image2),
];

var images_fern3 = [
  generateImageCanvas(fern_spring_header + fern_base_image3),
  generateImageCanvas(fern_summer_header + fern_base_image3),
  generateImageCanvas(fern_autumn_header + fern_base_image3),
  generateImageCanvas(fern_winter_header + fern_base_image3),
  generateImageCanvas(fern_ethereal_header + fern_base_image3),
  generateImageCanvas(fern_infernal_header + fern_base_image3),
];

var present_header = '0:#000';

var present_base_image0 = present_header + `
....00....00....
...0TT0..0TT0...
...0T0T00T0T0...
...00TTPPTT00...
.00PPUUTTUUPP00.
.0RPPPPUUPPPPr0.
.0RRRUUPPUUrrr0.
.0RRRTRPPrrtrr0.
.0RRRTRRrrrtrr0.
.0RRRTRRrrrtrr0.
.0RRRTRRrrrtrr0.
.0RRRTRRrrrtrr0.
.00RRTRRrrrtr00.
...00TRRrrr00...
.....00Rr00.....
.......00.......
`;

var present_base_image1 = present_header + `
....00....00....
...0AA0..0AA0...
...0A0A00A0A0...
...00AAXXAA00...
.00XX@@AA@@XX00.
.0OXXXX@@XXXXo0.
.0OOO@@XX@@ooo0.
.0OOOAOXXooaoo0.
.0OOOAOOoooaoo0.
.0OOOAOOoooaoo0.
.0OOOAOOoooaoo0.
.0OOOAOOoooaoo0.
.00OOAOOoooao00.
...00AOOooo00...
.....00Oo00.....
.......00.......
`;

var present_base_image2 = present_header + `
....00....00....
...0FF0..0FF0...
...0F0F00F0F0...
...00FFQQFF00...
.00QQ}}FF}}QQ00.
.0GQQQQ}}QQQQg0.
.0GGG}}QQ}}ggg0.
.0GGGFGQQggfgg0.
.0GGGFGGgggfgg0.
.0GGGFGGgggfgg0.
.0GGGFGGgggfgg0.
.0GGGFGGgggfgg0.
.00GGFGGgggfg00.
...00FGGggg00...
.....00Gg00.....
.......00.......
`;

var present_base_image3 = present_header + `
....00....00....
...0OO0..0OO0...
...0O0O00O0O0...
...00OO@@OO00...
.00@@XXOOXX@@00.
.0A@@@@XX@@@@a0.
.0AAAXX@@XXaaa0.
.0AAAOA@@aaoaa0.
.0AAAOAAaaaoaa0.
.0AAAOAAaaaoaa0.
.0AAAOAAaaaoaa0.
.0AAAOAAaaaoaa0.
.00AAOAAaaaoa00.
...00OAAaaa00...
.....00Aa00.....
.......00.......
`;



var present_images = [
  generateImageCanvas(present_base_image0),
  generateImageCanvas(present_base_image1),
  generateImageCanvas(present_base_image2),
  generateImageCanvas(present_base_image3),
];

var egg_header = '';

var egg_base_image0 = egg_header + `
................
.......000......
......09*90.....
.....09*9**0....
....09+***+*0...
....0P*+*+*r0...
...0P***+**gr0..
...099******g0..
...09*+**g+gg0..
...0*+*+*+grg0..
...0+**g+gggr0..
....0g*gg*gg0...
....0*g*gggg0...
.....00ggg00....
.......000......
................
`;

var egg_base_image1 = egg_header + `
................
.......000......
......09@90.....
.....09@9@@0....
....0PP@@@PP0...
....0PPPPPPR0...
...09@@PPP@A@0..
...099@@@@@@A0..
...09@@@@A@AA0..
...0PP@@@@APR0..
...0PPPRPRRRR0..
....0APRRPRA0...
....0@A@AAAA0...
.....00AAA00....
.......000......
................
`;

var egg_base_image2 = egg_header + `
................
.......000......
......0PQ90.....
.....09P9Q+0....
....099Q++QQ0...
....0P+9QQQQ0...
...0PQQ+QQ++Q0..
...0P9Q+Q+QQ+0..
...09++QQ+QG+0..
...0QQQQQQ++G0..
...0QQ++QGGGG0..
....0+QG+QGr0...
....0+GQ+GrG0...
.....00+GG00....
.......000......
................
`;

var egg_base_image3 = egg_header + `
................
.......000......
......0---0.....
.....0---YY0....
....0--Y-YYY0...
....0--YYYYY0...
...09PY-YYYRP0..
...099PPPPPPR0..
...09PPPPRPRR0..
...0PPPPPPRPR0..
...0@PPRPRRRA0..
....0A@AA@AA0...
....0@APAAAA0...
.....00AAA00....
.......000......
................
`;



var egg_images = [
  generateImageCanvas(egg_base_image0),
  generateImageCanvas(egg_base_image1),
  generateImageCanvas(egg_base_image2),
  generateImageCanvas(egg_base_image3),
];



var bunny_image = generateImageCanvas(`
...0000...0000..
..099900.009990.
.09N0N90.09N0N90
.0N0.0N0.0N0.0N0
.00...09090...00
.....0099900....
.....0909090....
...33099N990....
..3TQ0090900....
.33QT300000.....
3++3Q309990.....
3ZZ330909090....
3++300009000....
.3000999999000..
.09999000099990.
.000000..000000.
`);

// default header is: '#l0:#400 l1:#822 l2:#a55 l3:#faa'

// less saturated than the default for fields
var fieldimageheader = 'l0:#622 l1:#966 l2:#a88 l3:#fcc';
// a header with much higher saturation, for fruits and flowers
var fruitimageheader = 'l0:#800 l1:#c22 l2:#f44 l3:#f88';
// also higher saturation, but not as much as the fruits one
var nutsimageheader = 'l0:#744 l1:#b44 l2:#e66 l3:#f77';
// a header for green plants, the difference with standard palette is that it has less shadow, so you can make subtler shades
var subtleplantimageheader = 'l0:#600 l1:#822 l2:#a55 l3:#faa';
var subtleplantimageheader2 = 'l0:#700 l1:#933 l2:#b66 l3:#fbb';
// for watercress etc
var brassicaimageheader = 'l0:#600 l1:#822 l2:#a55 l3:#faa hl:#af0 hh:#4f0';

var fieldheader_spring = '+:#dbecc8 -:#c5e591';
var fieldheader_summer = '+:#bda -:#ba5';
var fieldheader_autumn = '+:#d3be9c -:#cea78b';
var fieldheader_winter = '+:#fff -:#eef';
var fieldheader_ethereal = '+:#9df -:#aaa';
var fieldheader_infernal = '+:#c42 -:#f63';
//var fieldheader_infinity = '+:#ab9 -:#ded';
//var fieldheader_infinity = '+:#efd -:#fdd';
var fieldheader_infinity = '+:#efd -:#ddf';
//var fieldheader_infinity = '+:#cdb -:#bbd';

var field0 = `
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++--++++++++++++
++++-++--+-++--+
++++++++++++++++
++++++++++++++++
+++-+--+--+--+++
++++++++++++++++
++++++++++++++++
++++++++++++++++
+++++++++++---++
+---+-+---++++++
++++++++++++++++
++++++++++++++++
`;

var field1 = `
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
+++--++-+---++++
++++++++-+++++++
++++++++++++++++
++++++++++++++++
++----++++----++
+++++++++++++++-
++++++++++++++++
++++++++++++-+++
+---+---++-+++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
`;

var field2 = `
++++++++++++++++
++++++++++++++++
++++++++++++++++
+---++++++++---+
+++++--+-++-++++
++++++++++++++++
+-++++++++++++++
++---+++++++++++
+++++++---+--+++
++++++++++++++++
++++++++++++++++
++++++++++++++++
+----+++----++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
`;

var field3 = `
++++++++++++++++
++++++++++++++++
+-+----+-+++++++
+++++++++-----++
++++++++++++++++
++++++++++++++++
++++++++++++++++
+---++--++++++++
++++++++++-----+
++++++++++++++++
++++++++++++++++
++++++++-+++++++
++-----++----+++
++++++++++++++++
++++++++++++++++
++++++++++++++++
`;

var field_empty = `
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
`;



// field array must have 5 values: 4 similar but slightly different patterns, and a patternless one for under tree

var field_spring = [
generateImageCanvas(fieldheader_spring + field0),
generateImageCanvas(fieldheader_spring + field1),
generateImageCanvas(fieldheader_spring + field2),
generateImageCanvas(fieldheader_spring + field3),
generateImageCanvas(fieldheader_spring + field_empty),
];

var field_summer = [
generateImageCanvas(fieldheader_summer + field0),
generateImageCanvas(fieldheader_summer + field1),
generateImageCanvas(fieldheader_summer + field2),
generateImageCanvas(fieldheader_summer + field3),
generateImageCanvas(fieldheader_summer + field_empty),
];

var field_autumn = [
generateImageCanvas(fieldheader_autumn + field0),
generateImageCanvas(fieldheader_autumn + field1),
generateImageCanvas(fieldheader_autumn + field2),
generateImageCanvas(fieldheader_autumn + field3),
generateImageCanvas(fieldheader_autumn + field_empty),
];

var field_winter = [
generateImageCanvas(fieldheader_winter + field0),
generateImageCanvas(fieldheader_winter + field1),
generateImageCanvas(fieldheader_winter + field2),
generateImageCanvas(fieldheader_winter + field3),
generateImageCanvas(fieldheader_winter + field_empty),
];

var field_ethereal = [
generateImageCanvas(fieldheader_ethereal + field0),
generateImageCanvas(fieldheader_ethereal + field1),
generateImageCanvas(fieldheader_ethereal + field2),
generateImageCanvas(fieldheader_ethereal + field3),
generateImageCanvas(fieldheader_ethereal + field_empty),
];

var field_infernal = [
generateImageCanvas(fieldheader_infernal + field0),
generateImageCanvas(fieldheader_infernal + field1),
generateImageCanvas(fieldheader_infernal + field2),
generateImageCanvas(fieldheader_infernal + field3),
generateImageCanvas(fieldheader_infernal + field_empty),
];

var field_infinity = [
generateImageCanvas(fieldheader_infinity + field0),
generateImageCanvas(fieldheader_infinity + field1),
generateImageCanvas(fieldheader_infinity + field2),
generateImageCanvas(fieldheader_infinity + field3),
generateImageCanvas(fieldheader_infinity + field_empty),
];

var images_field = [
  field_spring,
  field_summer,
  field_autumn,
  field_winter,
  field_ethereal,
  field_infernal,
  field_infinity,
];

var pond0 = `
aaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaa
aaaaaaaaaaaAaaaa
aaaAAaaaaaAaAaAA
aaAaaAAAaaaaaAaa
aaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaa
aaaaaaaaaaaaAaaa
aaaaaAaaaaaaaAAa
aaaaAaAaaAaaaaaa
aaaaaaaAAaaaaaaa
aaaaaaaaaaaaaaaa
aaAAaaaaaaaAAaaa
aAaaAaAaaaAaaAAa
aaaaaAaaaAaaaaaa
aaaaaaaaaaaaaaaa
`;

var pond1 = `
aaaaaaaaaaaaaaaa
aaaaAAaAaaaaaaaa
aaaAaaAaaaAaaaaa
aaaaaaaaaAaAaaAa
aaaaaaaaaaaaAAaa
aaAAaaaaaaaaaaaa
aAaaAaAAaaaaaaaa
aaaaaAaaaaaaAaaA
aaaaaaaaaaaAaAAa
aaaaaaaaaaaaaaaa
aaaaaaAAaaaaaaaa
aaaAaAaaAaaaaaaa
aaaaAaaaaaaAaaaa
aaaaaaaaaAAaAaAa
aAAaAaaaaaaaaAaa
AaaAaaaaaaaaaaaa
`;

var pond2 = `
aaaaaaaaaaaaaaaa
aaaaaaaaaaaAAaaa
aaaaaAaaaaaaaAaA
aaAaAaAaaaaaaaAa
aAaAaaaaaaaaaaaa
aaaaaaaaaaaaaaaa
aaaaaaaaaaAaaaaa
aaaaaaaaaAaAaAaa
aaAAaAaaaaaaAaaa
aaaaAaAaaaaaaaaa
aaaaaaaaaaaaaaaa
aaaaaaaaaAaaAaaa
aaaaaaaaAaAAaAaa
aAAaAaaaaaaaaaaa
aaaAaaaaaaaaaaaa
aaaaaaaaaaaaaaaa
`;

var pond3 = `
aaaaaaaaaaaaaaaa
aaaaaaaaaaAAAaAa
aaaaaaaaaaaaaAaa
aaaAAaaaaaaaaaaa
aaAaaAaAaaaaaaaa
aaaaaaAaaaaaAaAa
aaaaaaaaaaaAaAaa
aaaaaaaaaaaaaaaa
aaaaaaaAaAaaaaaa
aaaaaaAaAaaaaaaa
aaaaaaaaaaaaaaaa
aAAaAaaaaaaaaaaa
AaaAaaaaaaAAaaaa
aaaaaaaaaAaaAaaa
aaaaaaaaaaaaaAAa
aaaaaaaaaaaaaaaa
`;

// this one has infinity symbol, for the center
var pond4 = `
aaaaaaaaAAaaAaaa
aaaaaaaaaaAAaaaa
aaAaaaaaaaaaaaaa
aAaAaAaaaaaAaAaa
aaaaAaaaaaaaAaAa
aaaaaaaaaaaaaaaa
aaaaaaAaAaaaaaaa
aaaaaAaAaAaaaaaa
aaaaaaAaAaaaaaaa
aAAaaaaaaaaAAaAa
aaaAAaaaaaAaaAaa
aaaaaaaaaaaaaaaa
aaaaaaaaaaaAaaaa
aAAaaaaaaaAaAaAa
aaaAaAAaaaaaaAaa
aaaaAaaaaaaaaaaa
`;

var images_pond = [
generateImageCanvas(pond0),
generateImageCanvas(pond1),
generateImageCanvas(pond2),
generateImageCanvas(pond3),
generateImageCanvas(pond4),
];


var empty = generateImageCanvas(`
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
`);

var gray = generateImageCanvas(`
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
`);



var image_exclamation = generateImageCanvas(`
................
.....000000.....
...00------00...
..0----------0..
..0----00----0..
.0-----00-----0.
.0-----00-----0.
.0-----00-----0.
.0-----00-----0.
.0------------0.
.0-----00-----0.
..0----00----0..
..0----------0..
...00------00...
.....000000.....
................
`);



var image_exclamation_side_arrow = generateImageCanvas(`
................
................
................
........00000...
.......0-----0..
..0...0---0---0.
.0....0---0---0.
00000.0---0---0.
.0....0-------0.
..0...0---0---0.
.......0-----0..
........00000...
................
................
................
................
`);



var upgrade_arrow = generateImageCanvas(`
...........0....
..........0-0...
.........0---0..
........0-----0.
.......0000-0000
..........0-0...
..........0-0...
..........0-0...
..........000...
................
................
................
................
................
................
................
`);


var upgrade_arrow_small = generateImageCanvas(`
............0...
...........0Z0..
..........0ZZZ0.
.........000Z000
...........0Z0..
...........0Z0..
...........000..
................
................
................
................
................
................
................
................
................
`);


var image_seed = generateImageCanvas(`
................
................
................
................
........X.......
.......XOO......
.......XOO......
......XOOOo.....
.......OOo......
.......OOo......
........o.......
................
................
................
................
................
`);

var image_starting_seeds = generateImageCanvas(`
................
................
................
................
................
................
................
................
...OOoo...OOoo..
..Ooooxx.Ooooxx.
...oxxx...oxxx..
................
......OOoo......
.....Ooooxx.....
......oxxx......
................
`);

var image_spore = generateImageCanvas(`
................
................
................
................
................
................
.......22.......
......2110......
......2100......
.......00.......
................
................
................
................
................
................
`);

var image_spores = generateImageCanvas(`
................
................
................
................
...22...........
..2110....22....
..2100...2110...
...00....2100...
..........00....
......22........
.....2110.......
.....2100.......
......00........
................
................
................
`);

var image_resin = generateImageCanvas(`
................
................
................
........x.......
.......xx.......
......xxoo......
......xooo......
.....xxoooO.....
.....xooOOO.....
.....ooOOPO.....
.....oOOPXO.....
.....oOPX]O.....
......oOOO......
................
................
................
`);

var image_nuts = generateImageCanvas(`
................
................
....o....OO.....
...o....XOXO....
..oox...OXOo....
.oooxx...ooOOX..
.]eee[.....XOXO.
.]eee[.....OXOo.
.eeee[......oo..
..ee[...........
...[......O.....
.........OOo....
........sss%%...
........sss%%...
.........sx%....
................
`);

var image_mist = generateImageCanvas(`
................
................
......aaaa......
....aa@@@@a.....
...a@@@@@@@aaa..
...a@@@@@@@@@@a.
.aa@@@@@@@@@@@a.
a@@@@@@@@@@@@@@a
a@@@@@@@@@@@@@@a
.a@@@aaa@a@@@@a.
..aa........aa..
.....a.aaaa.....
................
....aaaaa.aa....
................
................
`);

var image_sun = generateImageCanvas(`
+:#ff08
................
................
......+---+.....
.....-ZZZZZ-....
....-ZZZZZZZ-...
...+ZZZZZZZZZ+..
...-ZZZZZZZZZ-..
...-ZZZZZZZZZ-..
...-ZZZZZZZZZ-..
...+ZZZZZZZZZ+..
....-ZZZZZZZ-...
.....-ZZZZZ-....
......+---+.....
................
................
................
`);


var image_rainbow = generateImageCanvas(`
................
...............+
..............+-
.......0......+-
......0.0....+-*
......0.0...+-**
y....0...0..+-*/
.y..0.....0+-*/I
..y0+++++++-*/IM
...y********/IMM
..0MMMMMMMMMMM..
..0.........0...
.0000000000000..
................
................
................
`);

var image_storm = generateImageCanvas(`
......aaaa......
....aa@@@@a.....
...a@@@@@@@aaa..
...a@@@@@@@@@@a.
.aa@@@@@@@@@@@a.
a@@@@@@@@@@@@@@a
a@@@@@@@@@@@@@@a
.a@@aaay-yaa@@a.
..aa..y-y...aa..
.....y-yyy......
....y-----y.....
....yyyy-y......
....y-y-y.......
....y--y........
....y---y.......
....yyyyy.......
`);

var image_lightning = generateImageCanvas(`
.......0000000..
.......09----0..
......09----0...
......09---0....
.....09---0.....
.....09--0000...
....09----Y0....
....000--Y0.....
......0-Y0......
.....0-Y0.......
.....0Y0........
....0Y0.........
....00..........
...00...........
...0............
................
`);

////////////////////////////////////////////////////////////////////////////////

// the metal colors for images. There is also tierNames, tierColors, tierColors_BG and medalheader[0..11] in images_medals.js, and stem_metal_header[0..11] in images_tree.js.
var metalheader0 = ' hm:#999'; // zinc
var metalheader1 = ' hm:#c70'; // bronze
var metalheader2 = ' N:#eee M:#bbb m:#888 n:#555'; // silver
var metalheader3 = ' hm:#cfa'; // electrum
var metalheader4 = ' hm:#fe0'; // gold
var metalheader5 = ' N:#fff M:#eee m:#ddd n:#ccc'; // platinum
var metalheader6 = ' N:#fee M:#ecc m:#dbb n:#caa'; // rhodium
var metalheader7 = ' N:#c8f M:#b7e m:#86d n:#75b'; // amethyst
var metalheader8 = ' hm:#00f'; // sapphire
var metalheader9 = ' hm:#0f0'; // emerald
var metalheader10 = ' hm:#f00'; // ruby
var metalheader11 = ' N:#fff M:#eee m:#ddd n:#ccc'; // diamond

var image_apple = `
................
.........h|.....
........h||.....
......0.||......
.......0........
.......0........
......N0MMN.....
....NNNMMNNm....
....NMNNNmmmn...
...NNMMmmmmnnn..
...NMMmmmmmmnn..
...NNMMmmmmnnn..
...NMMmmmmmmnn..
....NMMmmmmnn...
.....NMMnmnn....
................
`;


// spring fruit
var image_apricot = `
................
................
................
................
................
................
.....MMmMM......
...MMMmMMMMm....
...MMmMMMMMm....
..MMMmMMMMMmm...
..MMMmMMMMMmm...
..MMMmMMMMMmn...
..MMMmMMMMMmn...
...MMMMMMMmn....
....MMMMMmn.....
................
`;

// summer fruit
var image_pineapple = `
....|.|.|.|.....
.....|h|h|......
...|.||h||.|....
....|h|||h|.....
.....|h|h|......
.....M|||n......
....mMMnmmn.....
....Mmmmnnn.....
...mmMmnmnnn....
...MmMmnmmnm....
...mMmnmnnmn....
...mmMnnmnnm....
...MmMmnmmnn....
....Mmnmnnn.....
....mMmnmnn.....
.....mmnnn......
`;


// autumn fruit
var image_pear = `
................
........0.......
.......0........
.......0........
......mmn.......
.....MmMmn......
.....MMmmn......
.....MmMnn......
.....MMmmn......
....NMmMnnn.....
...NMmMmmnnn....
...NMMmMmmnn....
...MMmMmmnnn....
...MMMmMmmnn....
....MMMmmnn.....
................
`;

// winter fruit
var image_medlar = `
................
................
................
................
................
......0.0.......
.....0..0.0.....
.....0.00.0.....
.....n0nn00n....
....M000n00n....
....Mmn00nmm....
....MMmMmmmm....
....MMMmMmmm....
.....MmMmmm.....
......MmMm......
................
`;

// spring+summer fruit
var image_mango = `
................
.........0......
.....NNM0.0.....
....NMMmmm.0....
...NMMmmmm.hh...
...NMMmmmnHhh...
..NMMmmmmnHhh...
..NMMmmmnnHh|...
..NMmmmmnnHh|...
..NMmmmnnn.|....
..NMmmmnn.......
..NMmmnn........
..NMmmn.........
...Mmnn.........
....Mn..........
................
`;

// summer+autumn fruit
var image_plum = `
................
................
................
................
................
................
.....NM.M.......
....NMMmNM......
...NMMMmNMm.....
...NMMMmMmm.....
...NMMMMmmn.....
...NMMMmmnn.....
....MMmmnn......
.....mmnn.......
................
................
`;


// autumn+winter fruit
var image_quince = `
................
.....YY.........
.....Yyy........
......yy.00.....
........0..0....
......mMm.......
.....MMmmn......
.....MMMnn......
.....Mnnmnn.....
....NMmMnnn.....
...NMmMmmnnn....
...MMMmMmmmnn...
...MMmNmmnnmn...
...MmNmMmmnn....
......Nmmn......
................
`;
// winter+spring fruit
var image_kumquat = `
................
........|.......
.......|........
.......|........
.....MMMm.......
....MMNMmm......
....NMMmmm......
...MMMmmMmn.....
...NMNmmmnn.....
...MMMmMmnm.....
...MNMmmmnn.....
...MMMmMnmn.....
....MNmmnn......
....MMMmmn......
.....mmmn.......
................
`;

// all 4 seasons fruit
var image_starfruit = `
................
................
................
.....nn00.......
....nNNNN0000...
...nNNm0000mmn..
...nmmmmmM00mn..
...nmmmmMN0m0...
..nmmmmMNN0mn...
..nmmmMNNNnmn...
..nmmMNNNnmmn...
..nmMNNNNnmn....
....mNNNnmn.....
.....mmm........
................
................
`;

// all 4 seasons + apple fruit
var image_dragonfruit = `
.......M........
......NM........
......NM........
......NM...M....
......NN...M....
.....MMMm..M....
.N..MMMmmmMM....
.N..MMmMmmm.....
.NNMMMNmmmm.M...
..NNMMNmmmn.M...
...NMNNMmmmnM...
.N.MMNNMmnnn....
.N.MMMNmmmnn.M..
.NNMMMmmnmnnM...
..NNMMMmmnnM....
.....Mmnnn......
`;


// the different metal tiers for the fruits
var images_apple = [
generateImageCanvas(metalheader0 + image_apple),
generateImageCanvas(metalheader1 + image_apple),
generateImageCanvas(metalheader2 + image_apple),
generateImageCanvas(metalheader3 + image_apple),
generateImageCanvas(metalheader4 + image_apple),
generateImageCanvas(metalheader5 + image_apple),
generateImageCanvas(metalheader6 + image_apple),
generateImageCanvas(metalheader7 + image_apple),
generateImageCanvas(metalheader8 + image_apple),
generateImageCanvas(metalheader9 + image_apple),
generateImageCanvas(metalheader10 + image_apple),
generateImageCanvas(metalheader11 + image_apple),
];
var images_apricot = [
generateImageCanvas(metalheader0 + image_apricot),
generateImageCanvas(metalheader1 + image_apricot),
generateImageCanvas(metalheader2 + image_apricot),
generateImageCanvas(metalheader3 + image_apricot),
generateImageCanvas(metalheader4 + image_apricot),
generateImageCanvas(metalheader5 + image_apricot),
generateImageCanvas(metalheader6 + image_apricot),
generateImageCanvas(metalheader7 + image_apricot),
generateImageCanvas(metalheader8 + image_apricot),
generateImageCanvas(metalheader9 + image_apricot),
generateImageCanvas(metalheader10 + image_apricot),
generateImageCanvas(metalheader11 + image_apricot),
];
var images_pineapple = [
generateImageCanvas(metalheader0 + image_pineapple),
generateImageCanvas(metalheader1 + image_pineapple),
generateImageCanvas(metalheader2 + image_pineapple),
generateImageCanvas(metalheader3 + image_pineapple),
generateImageCanvas(metalheader4 + image_pineapple),
generateImageCanvas(metalheader5 + image_pineapple),
generateImageCanvas(metalheader6 + image_pineapple),
generateImageCanvas(metalheader7 + image_pineapple),
generateImageCanvas(metalheader8 + image_pineapple),
generateImageCanvas(metalheader9 + image_pineapple),
generateImageCanvas(metalheader10 + image_pineapple),
generateImageCanvas(metalheader11 + image_pineapple),
];
var images_pear = [
generateImageCanvas(metalheader0 + image_pear),
generateImageCanvas(metalheader1 + image_pear),
generateImageCanvas(metalheader2 + image_pear),
generateImageCanvas(metalheader3 + image_pear),
generateImageCanvas(metalheader4 + image_pear),
generateImageCanvas(metalheader5 + image_pear),
generateImageCanvas(metalheader6 + image_pear),
generateImageCanvas(metalheader7 + image_pear),
generateImageCanvas(metalheader8 + image_pear),
generateImageCanvas(metalheader9 + image_pear),
generateImageCanvas(metalheader10 + image_pear),
generateImageCanvas(metalheader11 + image_pear),
];
var images_medlar = [
generateImageCanvas(metalheader0 + image_medlar),
generateImageCanvas(metalheader1 + image_medlar),
generateImageCanvas(metalheader2 + image_medlar),
generateImageCanvas(metalheader3 + image_medlar),
generateImageCanvas(metalheader4 + image_medlar),
generateImageCanvas(metalheader5 + image_medlar),
generateImageCanvas(metalheader6 + image_medlar),
generateImageCanvas(metalheader7 + image_medlar),
generateImageCanvas(metalheader8 + image_medlar),
generateImageCanvas(metalheader9 + image_medlar),
generateImageCanvas(metalheader10 + image_medlar),
generateImageCanvas(metalheader11 + image_medlar),
];
var images_mango = [
generateImageCanvas(metalheader0 + image_mango),
generateImageCanvas(metalheader1 + image_mango),
generateImageCanvas(metalheader2 + image_mango),
generateImageCanvas(metalheader3 + image_mango),
generateImageCanvas(metalheader4 + image_mango),
generateImageCanvas(metalheader5 + image_mango),
generateImageCanvas(metalheader6 + image_mango),
generateImageCanvas(metalheader7 + image_mango),
generateImageCanvas(metalheader8 + image_mango),
generateImageCanvas(metalheader9 + image_mango),
generateImageCanvas(metalheader10 + image_mango),
generateImageCanvas(metalheader11 + image_mango),
];
var images_plum = [
generateImageCanvas(metalheader0 + image_plum),
generateImageCanvas(metalheader1 + image_plum),
generateImageCanvas(metalheader2 + image_plum),
generateImageCanvas(metalheader3 + image_plum),
generateImageCanvas(metalheader4 + image_plum),
generateImageCanvas(metalheader5 + image_plum),
generateImageCanvas(metalheader6 + image_plum),
generateImageCanvas(metalheader7 + image_plum),
generateImageCanvas(metalheader8 + image_plum),
generateImageCanvas(metalheader9 + image_plum),
generateImageCanvas(metalheader10 + image_plum),
generateImageCanvas(metalheader11 + image_plum),
];
var images_quince = [
generateImageCanvas(metalheader0 + image_quince),
generateImageCanvas(metalheader1 + image_quince),
generateImageCanvas(metalheader2 + image_quince),
generateImageCanvas(metalheader3 + image_quince),
generateImageCanvas(metalheader4 + image_quince),
generateImageCanvas(metalheader5 + image_quince),
generateImageCanvas(metalheader6 + image_quince),
generateImageCanvas(metalheader7 + image_quince),
generateImageCanvas(metalheader8 + image_quince),
generateImageCanvas(metalheader9 + image_quince),
generateImageCanvas(metalheader10 + image_quince),
generateImageCanvas(metalheader11 + image_quince),
];
var images_kumquat = [
generateImageCanvas(metalheader0 + image_kumquat),
generateImageCanvas(metalheader1 + image_kumquat),
generateImageCanvas(metalheader2 + image_kumquat),
generateImageCanvas(metalheader3 + image_kumquat),
generateImageCanvas(metalheader4 + image_kumquat),
generateImageCanvas(metalheader5 + image_kumquat),
generateImageCanvas(metalheader6 + image_kumquat),
generateImageCanvas(metalheader7 + image_kumquat),
generateImageCanvas(metalheader8 + image_kumquat),
generateImageCanvas(metalheader9 + image_kumquat),
generateImageCanvas(metalheader10 + image_kumquat),
generateImageCanvas(metalheader11 + image_kumquat),
];
var images_starfruit = [
generateImageCanvas(metalheader0 + image_starfruit),
generateImageCanvas(metalheader1 + image_starfruit),
generateImageCanvas(metalheader2 + image_starfruit),
generateImageCanvas(metalheader3 + image_starfruit),
generateImageCanvas(metalheader4 + image_starfruit),
generateImageCanvas(metalheader5 + image_starfruit),
generateImageCanvas(metalheader6 + image_starfruit),
generateImageCanvas(metalheader7 + image_starfruit),
generateImageCanvas(metalheader8 + image_starfruit),
generateImageCanvas(metalheader9 + image_starfruit),
generateImageCanvas(metalheader10 + image_starfruit),
generateImageCanvas(metalheader11 + image_starfruit),
];
var images_dragonfruit = [
generateImageCanvas(metalheader0 + image_dragonfruit),
generateImageCanvas(metalheader1 + image_dragonfruit),
generateImageCanvas(metalheader2 + image_dragonfruit),
generateImageCanvas(metalheader3 + image_dragonfruit),
generateImageCanvas(metalheader4 + image_dragonfruit),
generateImageCanvas(metalheader5 + image_dragonfruit),
generateImageCanvas(metalheader6 + image_dragonfruit),
generateImageCanvas(metalheader7 + image_dragonfruit),
generateImageCanvas(metalheader8 + image_dragonfruit),
generateImageCanvas(metalheader9 + image_dragonfruit),
generateImageCanvas(metalheader10 + image_dragonfruit),
generateImageCanvas(metalheader11 + image_dragonfruit),
];


var images_fruittypes = [
  images_apple,
  images_apricot,
  images_pineapple,
  images_pear,
  images_medlar,
  images_mango,
  images_plum,
  images_quince,
  images_kumquat,
  images_starfruit,
  images_dragonfruit
];

var images_rock = [generateImageCanvas(`
................
................
................
................
................
................
.......444......
.....444342.....
....44332221....
...4442322121...
..443232122111..
.4342222111212..
................
................
................
................
`), generateImageCanvas(`
................
................
................
................
.......444......
......444222....
.....44333222...
....434332221...
...44433333221..
..4433333322211.
.43433342333221.
.443.3431233221.
......43........
................
................
................
`),generateImageCanvas(`
................
................
................
................
.........422....
.........4442...
........444222..
.......4443322..
..4422.44332322.
..4322243333222.
.44332233332332.
.44332223.......
.4332332........
................
................
................
`),generateImageCanvas(`
................
................
................
................
......443.......
......4332......
.....443221.....
...44433221.....
..4443432211....
..4443322211....
.44433332221....
.444433222111...
.443332332111...
..43333311......
................
................
`)
];

var image_gear = generateImageCanvas(`
.......77.......
...7..7553..7...
..757.7553.753..
.75557555575553.
..755555555553..
...7555335553...
.775553..355533.
755553....755553
755553....755553
.335553..755533.
...7555775553...
..755555555553..
.75553555535553.
..353.3553.353..
...3..3553..3...
.......33.......
`);



var image_fruitsel_active = generateImageCanvas(`#:#4b4
................
................
................
................
................
................
................
..###########...
...#hhhhhhh#....
....#hhhhh#.....
.....#hhh#......
......#h#.......
.......#........
................
................
................
`);

var image_fruitsel_inactive = generateImageCanvas(`
................
................
................
................
................
................
................
..55555555555...
...533333335....
....5333335.....
.....53335......
......535.......
.......5........
................
................
................
`);


var image_fruitsel_active_automaton = generateImageCanvas(`#:#4b4
.......5........
......555.......
.....55.55......
......555.......
.......5........
................
................
..###########...
...#hhhhhhh#....
....#hhhhh#.....
.....#hhh#......
......#h#.......
.......#........
................
................
................
`);

var image_fruitsel_inactive_automaton = generateImageCanvas(`
.......5........
......555.......
.....55.55......
......555.......
.......5........
................
................
..55555555555...
...533333335....
....5333335.....
.....53335......
......535.......
.......5........
................
................
................
`);


var image_swap = generateImageCanvas(`
................
................
................
................
.....0....0.....
....00....00....
...0900000090...
..099999999990..
...0900000090...
....00....00....
.....0....0.....
................
................
................
................
................
`);



var image_pause = generateImageCanvas(`
................
................
................
..7777..7777....
..7553..7553....
..7553..7553....
..7553..7553....
..7553..7553....
..7553..7553....
..7553..7553....
..7553..7553....
..7553..7553....
..7333..7333....
................
................
................
`);


var image_paused = generateImageCanvas(`
................
................
................
..PPPP..PPPP....
..Prrp..Prrp....
..Prrp..Prrp....
..Prrp..Prrp....
..Prrp..Prrp....
..Prrp..Prrp....
..Prrp..Prrp....
..Prrp..Prrp....
..Prrp..Prrp....
..Pppp..Pppp....
................
................
................
`);

var image_close = generateImageCanvas(`
666......666
6336....6330
63336..63330
.6333663330.
..63333330..
...633330...
...633330...
..63333330..
.6333003330.
63330..03330
6330....0330
600......000
`);

var image_help = generateImageCanvas(`
....9999....
...955550...
..95000050..
..950..950..
..900..950..
......9500..
.....9500...
.....950....
.....900....
............
.....990....
.....900....
`);


var image_hourglass = generateImageCanvas(`
................
................
....&&&&&&&.....
...&.......&....
..&.........&...
..&989898989&...
...&9898989&....
....&&898&&.....
......&8&.......
....&&.9.&&.....
...&...8...&....
..&...898...&...
..&..89898..&...
...&8989898&....
....&&&&&&&.....
................
`);

var image_info = generateImageCanvas(`
................
................
......000.......
....0099900.....
...099000990....
..09000900090...
..09000000090...
.0900099000090..
.0900009000090..
.0900009000090..
..09009990090...
..09000000090...
...099000990....
....0099900.....
......000.......
................
`);

var image_stats = generateImageCanvas(`
................
.0........RRRR..
.0..........RR..
.0.........R.R..
.0....R...R..R..
.0...R.R.R......
.0..R...R...00..
.0.R........00..
.0....00....00..
.0....00.00.00..
.0.00.00.00.00..
.0.00.00.00.00..
.0.00.00.00.00..
.0.00.00.00.00..
.00000000000000.
................
`);

var image_checkbox_on = generateImageCanvas(`
000000000
088888880
089999090
089990090
080900990
080009990
089099990
089999990
000000000
`);

var image_checkbox_off = generateImageCanvas(`
000000000
088888880
089999990
089999990
089999990
089999990
089999990
089999990
000000000
`);


var image_squirrel_evolution = generateImageCanvas(`
....aaaaa.......
...aAAAAAaa.....
..aA@@@@@AAa....
..A@.....@@AXO..
.aA@..o....XOoo.
aA@oooaaa.XOoooo
aAoo0oAAAXOooooo
aAoooo@@@XOooooo
aA@.Xoo..XOo@oo.
aA@ooooo.XOoAa..
aA@.XXooOOooA@..
aA@..XXooooAa@A.
.aA@ooooaaaa.@Aa
..aAA@@@@@@@@Aa.
...aaAAAAAAAAa..
.....aaaaaaaa...
`);



var image_infinity = generateImageCanvas(`
................
................
................
................
................
....22...22.....
...2111.2111....
..21..111..10...
..21...1...10...
..21..111..10...
...1110.1110....
....00...00.....
................
................
................
................
`);


var image_palette = generateImageCanvas(`
................
................
......ooooo.....
.....oXX9XXo....
.....oXXXXXXo...
...ooXXoXXhXXo..
..oXXXo.oXXXXo..
.oXXXXXoXXX-Xo..
.oXXaXXXXXXXXXo.
..oXXXXXXXX$XXo.
...oXXmXXXXXXo..
....oXXXX+XXXo..
.....oooXXXXo...
........oooo....
................
................
`);


var image_beta = generateImageCanvas(`
..PPPPP..PPPPP..
..PRRRRr.PRrrr..
..PR..rr.PR.....
..PRRRr..PRRr...
..PRRRr..PRrr...
..PR..Rr.PR.....
..PRRRrr.PRRRr..
..rrrrr..rrrrr..
................
..PPPPPP.PPPPP..
..PRRrrr.PRRRr..
....Rr...PR.Rr..
....Rr...PRRRr..
....Rr...PRRRr..
....Rr...Pr.Rr..
....rr...rr.rr..
`);

