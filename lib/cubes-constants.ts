import { CubeFullView } from "@/components/ui/cube-full-view";
import { CubeFullViewClientForm } from "@/components/ui/cube-full-view-client-form";
import { CubeTopView } from "@/components/ui/cube-top-view";

// export const SVG_CUBE_VIEWS = {
//     "top-view": CubeTopView,
//     "full-view": CubeFullView,
// };

export const SVG_FORM_CUBE_VIEWS = {
    "full-view": CubeFullViewClientForm
}

export const CUBE_COLORS = {
    black: '#000000',
    yellow: '#FEFE00',
    blue: '#0000F2',
    green: '#00D800',
    red: '#EE0000',
    white: '#FFFFFF',
    orange: '#FFA100',
    default: '#232323'
}

export const CUBE_FACES_3X3 = [
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-4.9439549272153E-17,-0.74757064564692 0.19598754651203,-0.66277461469571 -1.6979580126642E-17,-0.57123720961754 -0.19598754651203,-0.66277461469571' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '0.23200530924361,-0.64654708450724 0.44357407294753,-0.55500967942906 0.24823152717746,-0.45589370157761 0.03601776273158,-0.55500967942906' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '0.48258385553552,-0.53743199405155 0.71166883865722,-0.4383160162001 0.51778341539206,-0.3306396536664 0.28724130976545,-0.43831601620009' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.23200530924361,-0.64654708450724 -0.03601776273158,-0.55500967942906 -0.24823152717746,-0.45589370157761 -0.44357407294753,-0.55500967942906' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-1.1906711768916E-17,-0.53743199405155 0.21221376444588,-0.43831601620009 1.3125827139793E-17,-0.3306396536664 -0.21221376444588,-0.43831601620009' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '0.25135344771691,-0.4192120352454 0.48189555334352,-0.31153567271171 0.27050899589682,-0.1941398664099 0.03913968327103,-0.31153567271171' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.48258385553552,-0.53743199405155 -0.28724130976545,-0.43831601620009 -0.51778341539206,-0.3306396536664 -0.71166883865722,-0.43831601620009' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.25135344771691,-0.4192120352454 -0.03913968327103,-0.31153567271171 -0.27050899589682,-0.1941398664099 -0.48189555334352,-0.31153567271171' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '1.9219742927126E-17,-0.29069716027551 0.23136931262579,-0.1733013539737 6.3251582941518E-17,-0.044807908897155 -0.23136931262579,-0.1733013539737' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '0.019572311898468,-0.01096266104553 0.25094162452426,-0.13945610612208 0.24139184674777,0.12672756322786 0.019572311898468,0.26171620101574' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '0.28930534489087,-0.16171652284677 0.50069190233757,-0.27911232914857 0.48317508531013,-0.019324131300046 0.27975556711438,0.10446714650317' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '0.53586287162127,-0.29952357725519 0.72974829488643,-0.40719993978888 0.70556381569579,-0.15366705164652 0.51834605459384,-0.039735379406663' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '0.018796486168384,0.30740091161998 0.24061602101769,0.1724122738321 0.23182332941007,0.41749346528561 0.018796486168384,0.55752511994163' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '0.27748498154717,0.14913168479738 0.48090449974292,0.025340406994164 0.46472097442439,0.26535483831193 0.26869228993956,0.39421287625089' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '0.51482272047627,0.0039202514920256 0.70204048157822,-0.11001142074783 0.6796261786066,0.12496419825545 0.49863919515774,0.24393468280979' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '0.018079821190449,0.59957070958542 0.23110666443214,0.4595390549294 0.22298446134887,0.68593152923737 0.018079821190449,0.82982754001392' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '0.26659321028119,0.43546258559693 0.46262189476603,0.30660454765797 0.44762501691219,0.52902006212629 0.25847100719792,0.6618550599049' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '0.49537315323635,0.28438159074811 0.67636013668521,0.16541110619376 0.65552852022793,0.38379496484358 0.4803762753825,0.50679710521643' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.73033661801848,-0.40664800069716 -0.53645119475332,-0.29897163816347 -0.51893437772588,-0.039183440314942 -0.70615213882784,-0.1531151125548' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.50139487638912,-0.27854802283962 -0.29000831894242,-0.16115221653782 -0.28045854116593,0.10503145281212 -0.48387805936169,-0.018759824991097' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.25178425197513,-0.13888300088285 -0.020414939349334,-0.010389555806295 -0.020414939349334,0.26228930625497 -0.24223447419864,0.12730066846709' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.70259025607703,-0.10956681966126 -0.51537249497507,0.0043648525785978 -0.49918896965654,0.24437928389636 -0.68017595310541,0.12540879934202' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.48155663212918,0.025787474064964 -0.27813711393343,0.14957875186818 -0.26934442232581,0.39465994332169 -0.46537310681065,0.26580190538273' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.24139184674777,0.17285724590871 -0.019572311898468,0.30784588369658 -0.019572311898468,0.55797009201823 -0.23259915514016,0.41793843736221' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.67687496656198,0.16576684053069 -0.49588798311312,0.28473732508503 -0.48089110525928,0.50715283955335 -0.6560433501047,0.38415069918051' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.46322848371637,0.30695545587912 -0.26719979923154,0.43581349381808 -0.25907759614827,0.66220596812605 -0.44823160586253,0.52937097034744' },
    { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.23182332941007,0.45988002752827 -0.018796486168384,0.59991168218429 -0.018796486168384,0.83016851261279 -0.2237011263268,0.68627250183624' }
]

export const CUBES_FACES_3X3_TOP_VIEW = {
    INNTER: [
        { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.52777777777778,-0.52777777777778 -0.21296296296296,-0.52777777777778 -0.21296296296296,-0.21296296296296 -0.52777777777778,-0.21296296296296' },
        { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.15740740740741,-0.52777777777778 0.15740740740741,-0.52777777777778 0.15740740740741,-0.21296296296296 -0.15740740740741,-0.21296296296296' },
        { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '0.21296296296296,-0.52777777777778 0.52777777777778,-0.52777777777778 0.52777777777778,-0.21296296296296 0.21296296296296,-0.21296296296296' },
        { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.52777777777778,-0.15740740740741 -0.21296296296296,-0.15740740740741 -0.21296296296296,0.15740740740741 -0.52777777777778,0.15740740740741' },
        { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.15740740740741,-0.15740740740741 0.15740740740741,-0.15740740740741 0.15740740740741,0.15740740740741 -0.15740740740741,0.15740740740741' },
        { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '0.21296296296296,-0.15740740740741 0.52777777777778,-0.15740740740741 0.52777777777778,0.15740740740741 0.21296296296296,0.15740740740741' },
        { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.52777777777778,0.21296296296296 -0.21296296296296,0.21296296296296 -0.21296296296296,0.52777777777778 -0.52777777777778,0.52777777777778' },
        { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.15740740740741,0.21296296296296 0.15740740740741,0.21296296296296 0.15740740740741,0.52777777777778 -0.15740740740741,0.52777777777778' },
        { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '0.21296296296296,0.21296296296296 0.52777777777778,0.21296296296296 0.52777777777778,0.52777777777778 0.21296296296296,0.52777777777778' }
    ],
    OUTER: [
        { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.54406130268199,0.5544061302682 -0.19591315453384,0.5544061302682 -0.18390804597701,0.7183908045977 -0.50804597701149,0.7183908045977' },
        { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.17445721583653,0.5544061302682 0.17369093231162,0.5544061302682 0.16168582375479,0.7183908045977 -0.16245210727969,0.7183908045977' },
        { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '0.19514687100894,0.5544061302682 0.54329501915709,0.5544061302682 0.50727969348659,0.7183908045977 0.18314176245211,0.7183908045977' },
        { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.5544061302682,-0.54406130268199 -0.5544061302682,-0.19591315453384 -0.7183908045977,-0.18390804597701 -0.7183908045977,-0.50804597701149' },
        { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.5544061302682,-0.17445721583653 -0.5544061302682,0.17369093231162 -0.7183908045977,0.16168582375479 -0.7183908045977,-0.16245210727969' },
        { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.5544061302682,0.19514687100894 -0.5544061302682,0.54329501915709 -0.7183908045977,0.50727969348659 -0.7183908045977,0.18314176245211' },
        { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '0.54406130268199,-0.5544061302682 0.19591315453384,-0.5544061302682 0.18390804597701,-0.7183908045977 0.50804597701149,-0.7183908045977' },
        { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '0.17445721583653,-0.5544061302682 -0.17369093231162,-0.5544061302682 -0.16168582375479,-0.7183908045977 0.16245210727969,-0.7183908045977' },
        { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '-0.19514687100894,-0.5544061302682 -0.54329501915709,-0.5544061302682 -0.50727969348659,-0.7183908045977 -0.18314176245211,-0.7183908045977' },
        { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '0.5544061302682,0.54406130268199 0.5544061302682,0.19591315453384 0.7183908045977,0.18390804597701 0.7183908045977,0.50804597701149' },
        { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '0.5544061302682,0.17445721583653 0.5544061302682,-0.17369093231162 0.7183908045977,-0.16168582375479 0.7183908045977,0.16245210727969' },
        { fill: CUBE_COLORS.default, stroke: CUBE_COLORS.black, points: '0.5544061302682,-0.19514687100894 0.5544061302682,-0.54329501915709 0.7183908045977,-0.50727969348659 0.7183908045977,-0.18314176245211' }
    ]
}

// <polygon
//                     fill="#0000F2"
//                     stroke="#000000"
//                     points="-0.54406130268199,0.5544061302682 -0.19591315453384,0.5544061302682 -0.18390804597701,0.7183908045977 -0.50804597701149,0.7183908045977"
//                 />
//                 <polygon
//                     fill="#0000F2"
//                     stroke="#000000"
//                     points="-0.17445721583653,0.5544061302682 0.17369093231162,0.5544061302682 0.16168582375479,0.7183908045977 -0.16245210727969,0.7183908045977"
//                 />
//                 <polygon
//                     fill="#0000F2"
//                     stroke="#000000"
//                     points="0.19514687100894,0.5544061302682 0.54329501915709,0.5544061302682 0.50727969348659,0.7183908045977 0.18314176245211,0.7183908045977"
//                 />
//                 <polygon
//                     fill="#FFA100"
//                     stroke="#000000"
//                     points="-0.5544061302682,-0.54406130268199 -0.5544061302682,-0.19591315453384 -0.7183908045977,-0.18390804597701 -0.7183908045977,-0.50804597701149"
//                 />
//                 <polygon
//                     fill="#FFA100"
//                     stroke="#000000"
//                     points="-0.5544061302682,-0.17445721583653 -0.5544061302682,0.17369093231162 -0.7183908045977,0.16168582375479 -0.7183908045977,-0.16245210727969"
//                 />
//                 <polygon
//                     fill="#FFA100"
//                     stroke="#000000"
//                     points="-0.5544061302682,0.19514687100894 -0.5544061302682,0.54329501915709 -0.7183908045977,0.50727969348659 -0.7183908045977,0.18314176245211"
//                 />
//                 <polygon
//                     fill="#00D800"
//                     stroke="#000000"
//                     points="0.54406130268199,-0.5544061302682 0.19591315453384,-0.5544061302682 0.18390804597701,-0.7183908045977 0.50804597701149,-0.7183908045977"
//                 />
//                 <polygon
//                     fill="#00D800"
//                     stroke="#000000"
//                     points="0.17445721583653,-0.5544061302682 -0.17369093231162,-0.5544061302682 -0.16168582375479,-0.7183908045977 0.16245210727969,-0.7183908045977"
//                 />
//                 <polygon
//                     fill="#00D800"
//                     stroke="#000000"
//                     points="-0.19514687100894,-0.5544061302682 -0.54329501915709,-0.5544061302682 -0.50727969348659,-0.7183908045977 -0.18314176245211,-0.7183908045977"
//                 />
//                 <polygon
//                     fill="#EE0000"
//                     stroke="#000000"
//                     points="0.5544061302682,0.54406130268199 0.5544061302682,0.19591315453384 0.7183908045977,0.18390804597701 0.7183908045977,0.50804597701149"
//                 />
//                 <polygon
//                     fill="#EE0000"
//                     stroke="#000000"
//                     points="0.5544061302682,0.17445721583653 0.5544061302682,-0.17369093231162 0.7183908045977,-0.16168582375479 0.7183908045977,0.16245210727969"
//                 />
//                 <polygon
//                     fill="#EE0000"
//                     stroke="#000000"
//                     points="0.5544061302682,-0.19514687100894 0.5544061302682,-0.54329501915709 0.7183908045977,-0.50727969348659 0.7183908045977,-0.18314176245211"
//                 />

export const SOLVE_CUBE_COLORS: Record<number, keyof typeof CUBE_COLORS> = {
    1: "yellow",
    2: "yellow",
    3: "yellow",
    4: "yellow",
    5: "yellow",
    6: "yellow",
    7: "yellow",
    8: "yellow",
    9: "yellow",
    10: "red",
    11: "red",
    12: "red",
    13: "red",
    14: "red",
    15: "red",
    16: "red",
    17: "red",
    18: "red",
    19: "blue",
    20: "blue",
    21: "blue",
    22: "blue",
    23: "blue",
    24: "blue",
    25: "blue",
    26: "blue",
    27: "blue"
}

export const F2L1_CUBE_COLORS: Record<number, keyof typeof CUBE_COLORS> = {
    6: "blue",
    9: "blue",
    10: "red",
    11: "red",
    14: "red",
    15: "red",
    17: "red",
    18: "red",
    21: "white",
    22: "blue",
    23: "blue",
    25: "blue",
    26: "blue"
}

export const OLL1_CUBE_COLORS: Record<number, keyof typeof CUBE_COLORS> = {
    5: "yellow",
    11: "yellow",
    19: "yellow",
    20: "yellow",
    21: "yellow"
}

export const PLLAa_CUBE_COLORS: Record<number, keyof typeof CUBE_COLORS> = {
    1: "yellow",
    2: "yellow",
    3: "yellow",
    4: "yellow",
    5: "yellow",
    6: "yellow",
    7: "yellow",
    8: "yellow",
    9: "yellow",
    10: "blue",
    11: "blue",
    12: "green",
    13: "green",
    14: "orange",
    15: "orange",
    16: "red",
    17: "green",
    18: "red",
    19: "orange",
    20: "red",
    21: "blue"
}

