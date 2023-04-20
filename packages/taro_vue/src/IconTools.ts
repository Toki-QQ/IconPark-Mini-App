import {
  defineComponent,
  createVNode,
  PropType,
  DefineComponent,
  watchEffect,
  ref,
} from "vue";

import { Icon, IconSvgConfig, DEFAULT_ICON_CONFIGS, svg64 } from "./runtime";

const iconDefault = DEFAULT_ICON_CONFIGS;

// 创建图标组件
function createIcon(
  name: string,
  svgRender: (svgConfig: Icon) => string
): DefineComponent<Icon> {
  return defineComponent({
    name: `Icon${name}`,
    props: {
      size: {
        type: [String, Number] as PropType<Icon["size"]>,
      },
      strokeWidth: {
        type: [Number] as PropType<Icon["strokeWidth"]>,
      },
      strokeLinecap: {
        type: String as PropType<Icon["strokeLinecap"]>,
      },
      strokeLinejoin: {
        type: String as PropType<Icon["strokeLinejoin"]>,
      },
      theme: {
        type: String as PropType<Icon["theme"]>,
      },
      fill: {
        type: [String, Object] as PropType<Icon["fill"]>,
      },
    },
    setup(props: Icon) {
      // 图标大小响应式数据
      const iconSize = ref<number | string | undefined>(props.size);

      // image的src属性响应式数据
      const imageUrl = ref<string>(getIconBase64(svgRender(props)));

      // 监听props变化
      watchEffect(() => {
        iconSize.value = props.size;
        imageUrl.value = getIconBase64(svgRender(props));
      });

      return {
        iconSize,
        imageUrl,
      };
    },
    render() {
      // 返回创建VNode
      return createVNode("image", {
        src: this.imageUrl,
        style: {
          background: `transparent`,
          width: `${this.iconSize == undefined ? 24 : this.iconSize}px`,
          height: `${this.iconSize == undefined ? 24 : this.iconSize}px`,
        },
      });
    },
  });
}

// Icon转换为IconSvgConfig方法，并设置默认值，参照IconPark的IconConverter方法编写
function getSvgConfig(props: Icon): IconSvgConfig {
  let currentIconConfig = Object.assign(iconDefault);

  // 获取传进来的元素
  let iconFill =
    typeof props.fill === "string" ? [props.fill] : props.fill || [];

  let iconColors = ["none", "none", "none", "none"];

  let iconTheme = props.theme || currentIconConfig.theme;

  // 根据theme去设置colors数组
  switch (iconTheme) {
    case "outline":
      iconColors = [
        typeof iconFill[0] === "string" ? iconFill[0] : "currentColor",
        "none",
        typeof iconFill[0] === "string" ? iconFill[0] : "currentColor",
        "none",
      ];
      break;

    case "filled":
      iconColors = [
        typeof iconFill[0] === "string" ? iconFill[0] : "currentColor",
        typeof iconFill[0] === "string" ? iconFill[0] : "currentColor",
        "#FFFFFF",
        "#FFFFFF",
      ];
      break;

    case "two-tone":
      iconColors = [
        typeof iconFill[0] === "string" ? iconFill[0] : "currentColor",
        typeof iconFill[1] === "string"
          ? iconFill[1]
          : currentIconConfig.colors.twoTone.twoTone,
        typeof iconFill[0] === "string" ? iconFill[0] : "currentColor",
        typeof iconFill[1] === "string"
          ? iconFill[1]
          : currentIconConfig.colors.twoTone.twoTone,
      ];
      break;

    case "multi-color":
      iconColors = [
        typeof iconFill[0] === "string" ? iconFill[0] : "currentColor",
        typeof iconFill[1] === "string"
          ? iconFill[1]
          : currentIconConfig.colors.multiColor.outFillColor,
        typeof iconFill[2] === "string"
          ? iconFill[2]
          : currentIconConfig.colors.multiColor.innerStrokeColor,
        typeof iconFill[3] === "string"
          ? iconFill[3]
          : currentIconConfig.colors.multiColor.innerFillColor,
      ];
      break;
  }

  return {
    size: props.size || currentIconConfig.size,
    strokeWidth: props.strokeWidth || currentIconConfig.strokeWidth,
    strokeLinecap: props.strokeLinecap || currentIconConfig.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin || currentIconConfig.strokeLinejoin,
    colors: iconColors,
    id: getIconUid(),
  };
}

// 参考IconPark的guid()方法
function getIconUid() {
  return (
    "icon-" +
    (((1 + Math.random()) * 0x100000000) | 0).toString(16).substring(1)
  );
}

// 获取Svg的Base64格式
function getIconBase64(svg: string | SVGElement): string {
  const base64 = svg64(svg);

  return base64;
}
// 图标命名风格转换
function toPascalCase(value: string): string {
  return value.replace(/(^\w|-\w)/g, function (current: string): string {
    return current.slice(-1).toUpperCase();
  });
}

export {
  DEFAULT_ICON_CONFIGS,
  createIcon,
  getSvgConfig,
  getIconBase64,
  toPascalCase,
};
