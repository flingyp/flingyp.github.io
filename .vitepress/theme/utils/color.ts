import { useRandomInteger } from '@flypeng/tool/browser';
import tinycolor from 'tinycolor2';

export const changeCssVariable = (colorValues: string[], time: number, isImmediateExecute: boolean) => {
  const fn = () => {
    const randomIndex = useRandomInteger(0, colorValues.length - 1);
    const primaryColor = colorValues[randomIndex];
    document.documentElement.style.setProperty('--vp-c-indigo-1', primaryColor);
    document.documentElement.style.setProperty('--vp-c-indigo-2', tinycolor(primaryColor).brighten(10).toString());
    document.documentElement.style.setProperty('--vp-c-indigo-3', tinycolor(primaryColor).darken(10).toString());
  };
  if (isImmediateExecute) fn();
  setInterval(fn, time);
};
