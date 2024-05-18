// cSpell:disable

/**
 * This file implements a lookup table for the ColorBrewer color schemes.
 * see: https://colorbrewer2.org/
 *
 * @credit
 * The original ColorBrewer (v1.0) was funded by the NSF Digital Government
 * program during 2001-02, and was designed at the GeoVISTA Center at Penn State
 * (National Science Foundation Grant No. 9983451, 9983459, 9983461).
 *
 * @license
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The
 * Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed
 * under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

// prettier-ignore
/**
 * ColorBrewer color schemes collection by types.
 */
export const ColorNames = {
    Sequential: ["OrRd","PuBu","BuPu","Oranges","BuGn","YlOrBr","YlGn","Reds","RdPu","Greens","YlGnBu","Purples","GnBu","Greys","YlOrRd","PuRd","Blues","PuBuGn","Viridis"],
    SequentialSingleHue: ["Blues", "Greens", "Greys", "Oranges", "Purples", "Reds"],
    SequentialMultiHue: ["BuGn","BuPu","GnBu","OrRd","PuBu","PuBuGn","PuRd","RdPu","YlGn","YlGnBu","YlOrBr","YlOrRd","Viridis"],
    SequentialColorBlindSafe: ["OrRd","PuBu","BuPu","Oranges","BuGn","YlOrBr","YlGn","Reds","RdPu","Greens","YlGnBu","Purples","GnBu","Greys","YlOrRd","PuRd","Blues","PuBuGn","Viridis"],
    Diverging: ["BrBG","PiYG","PRGn","PuOr","RdBu","RdGy","RdYlBu","RdYlGn","Spectral"],
    DivergingColorBlindSafe: ["BrBG","PiYG","PRGn","PuOr","RdBu","RdYlBu"],
    Qualitative: ["Accent","Dark2","Paired","Pastel1","Pastel2","Set1","Set2","Set3"],
    QualitativeColorBlindSafe: ["Dark2","Paired","Set2"],
} as const;

export type ColorBrewer = keyof typeof ColorNames;

// prettier-ignore
/**
 * ColorBrewer color schemes by color name.
 */
export const ColorBrewerColors = {
    //
    // Sequential
    //
    OrRd: ["#FFF7EC", "#FEE8C8", "#FDD49E", "#FDBB84", "#FC8D59", "#EF6548", "#D7301F", "#B30000", "#7F0000"],
    PuBu: ["#FFF7FB", "#ECE7F2", "#D0D1E6", "#A6BDDB", "#74A9CF", "#3690C0", "#0570B0", "#045A8D", "#023858"],
    BuPu: ["#F7FCFD", "#E0ECF4", "#BFD3E6", "#9EBCDA", "#8C96C6", "#8C6BB1", "#88419D", "#810F7C", "#4D004B"],
    Oranges: ["#FFF5EB", "#FEE6CE", "#FDD0A2", "#FDAE6B", "#FD8D3C", "#F16913", "#D94801", "#A63603", "#7F2704"],
    BuGn: ["#F7FCFD", "#E5F5F9", "#CCECE6", "#99D8C9", "#66C2A4", "#41AE76", "#238B45", "#006D2C", "#00441B"],
    YlOrBr: ["#FFFFE5", "#FFF7BC", "#FEE391", "#FEC44F", "#FE9929", "#EC7014", "#CC4C02", "#993404", "#662506"],
    YlGn: ["#FFFFE5", "#F7FCB9", "#D9F0A3", "#ADDD8E", "#78C679", "#41AB5D", "#238443", "#006837", "#004529"],
    Reds: ["#FFF5F0", "#FEE0D2", "#FCBBA1", "#FC9272", "#FB6A4A", "#EF3B2C", "#CB181D", "#A50F15", "#67000D"],
    RdPu: ["#FFF7F3", "#FDE0DD", "#FCC5C0", "#FA9FB5", "#F768A1", "#DD3497", "#AE017E", "#7A0177", "#49006A"],
    Greens: ["#F7FCF5", "#E5F5E0", "#C7E9C0", "#A1D99B", "#74C476", "#41AB5D", "#238B45", "#006D2C", "#00441B"],
    YlGnBu: ["#FFFFD9", "#EDF8B1", "#C7E9B4", "#7FCDBB", "#41B6C4", "#1D91C0", "#225EA8", "#253494", "#081D58"],
    Purples: ["#FCFBFD", "#EFEDF5", "#DADAEB", "#BCBDDC", "#9E9AC8", "#807DBA", "#6A51A3", "#54278F", "#3F007D"],
    GnBu: ["#F7FCF0", "#E0F3DB", "#CCEBC5", "#A8DDB5", "#7BCCC4", "#4EB3D3", "#2B8CBE", "#0868AC", "#084081"],
    Greys: ["#FFFFFF", "#F0F0F0", "#D9D9D9", "#BDBDBD", "#969696", "#737373", "#525252", "#252525", "#000000"],
    YlOrRd: ["#FFFFCC", "#FFEDA0", "#FED976", "#FEB24C", "#FD8D3C", "#FC4E2A", "#E31A1C", "#BD0026", "#800026"],
    PuRd: ["#F7F4F9", "#E7E1EF", "#D4B9DA", "#C994C7", "#DF65B0", "#E7298A", "#CE1256", "#980043", "#67001F"],
    Blues: ["#F7FBFF", "#DEEBF7", "#C6DBEF", "#9ECAE1", "#6BAED6", "#4292C6", "#2171B5", "#08519C", "#08306B"],
    PuBuGn: ["#FFF7FB", "#ECE2F0", "#D0D1E6", "#A6BDDB", "#67A9CF", "#3690C0", "#02818A", "#016C59", "#014636"],
    Viridis: ["#440154", "#482777", "#3F4A8A", "#31678E", "#26838F", "#1F9D8A", "#6CCE5A", "#B6DE2B", "#FEE825"],
    //
    // Diverging
    //
    BrBG: ['#543005', '#8C510A', '#BF812D', '#DFC27D', '#F6E8C3', '#F5F5F5', '#C7EAE5', '#80CDC1', '#35978F', '#01665E', '#003C30'],
    PiYG: ['#8E0152', '#C51B7D', '#DE77AE', '#F1B6DA', '#FDE0EF', '#F7F7F7', '#E6F5D0', '#B8E186', '#7FBC41', '#4D9221', '#276419'],
    PRGn: ['#40004B', '#762A83', '#9970AB', '#C2A5CF', '#E7D4E8', '#F7F7F7', '#D9F0D3', '#A6DBA0', '#5AAE61', '#1B7837', '#00441B'],
    PuOr: ['#7F3B08', '#B35806', '#E08214', '#FDB863', '#FEE0B6', '#F7F7F7', '#D8DAEB', '#B2ABD2', '#8073AC', '#542788', '#2D004B'],
    RdBu: ['#67001F', '#B2182B', '#D6604D', '#F4A582', '#FDDBC7', '#F7F7F7', '#D1E5F0', '#92C5DE', '#4393C3', '#2166AC', '#053061'],
    RdGy: ['#67001F', '#B2182B', '#D6604D', '#F4A582', '#FDDBC7', '#FFFFFF', '#E0E0E0', '#BABABA', '#878787', '#4D4D4D', '#1A1A1A'],
    RdYlBu: ['#A50026', '#D73027', '#F46D43', '#FDAE61', '#FEE08B', '#FFFFBF', '#D9EF8B', '#A6D96A', '#66BD63', '#1A9850', '#006837'],
    RdYlGn: ['#A50026', '#D73027', '#F46D43', '#FDAE61', '#FEE08B', '#FFFFBF', '#D9EF8B', '#A6D96A', '#66BD63', '#1A9850', '#006837'],
    Spectral: ['#9E0142', '#D53E4F', '#F46D43', '#FDAE61', '#FEE08B', '#FFFFBF', '#E6F598', '#ABDDA4', '#66C2A5', '#3288BD', '#5E4FA2'],
    //
    // Qualitative
    //
    Accent: ['#7FC97F', '#BEAED4', '#FDC086', '#FFFF99', '#386CB0', '#F0027F', '#BF5B17', '#666666'],
    Dark2: ['#1B9E77', '#D95F02', '#7570B3', '#E7298A', '#66A61E', '#E6AB02', '#A6761D', '#666666'],
    Paired: ['#A6CEE3', '#1F78B4', '#B2DF8A', '#33A02C', '#FB9A99', '#E31A1C', '#FDBF6F', '#FF7F00', '#CAB2D6', '#6A3D9A', '#FFFF99', '#B15928'],
    Pastel1: ['#FBB4AE', '#B3CDE3', '#CCEBC5', '#DECBE4', '#FED9A6', '#FFFFCC', '#E5D8BD', '#FDDAEC', '#F2F2F2'],
    Pastel2: ['#B3E2CD', '#FDCDAC', '#CBD5E8', '#F4CAE4', '#E6F5C9', '#FFF2AE', '#F1E2CC', '#CCCCCC'],
    Set1: ['#E41A1C', '#377EB8', '#4DAF4A', '#984EA3', '#FF7F00', '#FFFF33', '#A65628', '#F781BF', '#999999'],
    Set2: ['#66C2A5', '#FC8D62', '#8DA0CB', '#E78AC3', '#A6D854', '#FFD92F', '#E5C494', '#B3B3B3'],
    Set3: ['#8DD3C7', '#FFFFB3', '#BEBADA', '#FB8072', '#80B1D3', '#FDB462', '#B3DE69', '#FCCDE5', '#D9D9D9'],
} as const;

export const COLOR_BREWER_COLORS: Readonly<string[]> =
  Object.keys(ColorBrewerColors);
