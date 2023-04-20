// IconPark配置项，源代码：@icon-park/svg/es/runtime
declare type StrokeLinejoin = "miter" | "round" | "bevel";
declare type StrokeLinecap = "butt" | "round" | "square";
declare type Theme = "outline" | "filled" | "two-tone" | "multi-color";

interface ISvgIconProps {
  id: string;
  size: number | string;
  strokeWidth: number;
  strokeLinecap: StrokeLinecap;
  strokeLinejoin: StrokeLinejoin;
  colors: string[];
}

interface IIconConfig {
  size: number | string;
  strokeWidth: number;
  strokeLinecap: StrokeLinecap;
  strokeLinejoin: StrokeLinejoin;
  prefix: string;
  theme: Theme;
  colors: {
    outline: {
      fill: string;
      background: string;
    };
    filled: {
      fill: string;
      background: string;
    };
    twoTone: {
      fill: string;
      twoTone: string;
    };
    multiColor: {
      outStrokeColor: string;
      outFillColor: string;
      innerStrokeColor: string;
      innerFillColor: string;
    };
  };
}

interface IIconProps {
  size?: number | string;
  strokeWidth?: number;
  strokeLinecap?: StrokeLinecap;
  strokeLinejoin?: StrokeLinejoin;
  theme?: Theme;
  fill?: string | string[];
}

// Vue
import { DefineComponent } from "vue";

// 导入图标
import * as AllIconsMap from "../map";
import { SVG64 } from "./vendor";

// 定义单个图标组件类型
export interface Icon extends IIconProps {}

// 定义图标Svg设置项
export interface IconSvgConfig extends ISvgIconProps {}

// 定义图标设置项
export interface IconConfig extends IIconConfig {}

// 定义图标提供器组件类型
export interface AllIcon extends IIconProps {
  type: keyof typeof AllIconsMap | string;
}

// 图标组件样式
export interface IconStyle {
  width: string;
  height: string;
}

// 图标默认值
export const DEFAULT_ICON_CONFIGS: IconConfig = {
  size: "1em",
  strokeWidth: 4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  theme: "outline",
  colors: {
    outline: {
      fill: "#333",
      background: "transparent",
    },
    filled: {
      fill: "#333",
      background: "#FFF",
    },
    twoTone: {
      fill: "#333",
      twoTone: "#2F88FF",
    },
    multiColor: {
      outStrokeColor: "#333",
      outFillColor: "#2F88FF",
      innerStrokeColor: "#FFF",
      innerFillColor: "#43CCF8",
    },
  },
  prefix: "i",
};

// Vue组件
export interface IconComponent extends DefineComponent<Icon> {}

export const svg64: (input: string | SVGElement) => string = SVG64;
