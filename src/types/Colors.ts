import type { Todo } from "./Todo";

export const colorPallete = {
  bitterSweet: "#FF715B",
  sunglow: "#f9cb40",
  bitterLime: "#BCED09",
  blueRyb: "#2f52e0",
  deeepChampagne: "#f2d0a4",
  orangeSoda: "#f55d3e",
  maximumBlue: "#40bcd8",
  darkPastelGreen: "#20bf55",
}; 

const statusColor : Record<Todo['status'], string> = {
  not_started: "#EB5353",
  doing: "#BF9742",
  completed: "#36AE7C"
}
const darkColorArr = ["#002b36", "#073642", "#586e75", "#cb4b16", "#268bd2"];
const availableColors = Object.values(colorPallete);
const darkerColors = availableColors.filter((item) => !wc_hex_is_light(item));
//very simple hash
function hashStr(str: string) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    hash += charCode;
  }
  return hash;
}
function wc_hex_is_light(color: string) {
  const hex = color.replace("#", "");
  const c_r = parseInt(hex.substring(0, 2), 16);
  const c_g = parseInt(hex.substring(2, 2), 16);
  const c_b = parseInt(hex.substring(4, 2), 16);
  const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
  return brightness > 155;
}

const getColorFromArray = (content: string, colorsArray: string[]) => {
  const hashNum = hashStr(content);
  const colorIndex = hashNum % colorsArray.length;
  return colorsArray[colorIndex];
};

export const getColorsFromPalete = (content: string) => {
  return getColorFromArray(content, availableColors);
};
export const getDarkColors = (content: string) => {
  return getColorFromArray(content, darkColorArr);
};

export const getColorFromTodoStatus = (status: Todo['status']) => statusColor[status]; 