/** Declaration file generated by dts-gen */
declare module 'mini-dynamic-antd-theme' {
  import { ColorInputWithoutInstance } from 'tinycolor2';

  type IColorObj = {
    primaryColor: string;
    hoverColor: string;
    activeColor: string;
    shadowColor: string;
  };
  
  export function changeAntdTheme(colorObj: IColorObj): void;
  
  export function generateThemeColor(color: ColorInputWithoutInstance): IColorObj;

}

