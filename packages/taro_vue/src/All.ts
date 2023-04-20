import {
  createVNode,
  PropType,
  defineComponent,
  DefineComponent,
  watchEffect,
  ref,
} from "vue";

import * as AllIcons from "./map";
import type { AllIcon, Icon } from "./runtime";

import { toPascalCase } from "./IconTools";

interface IconsMap {
  [key: string]: any;
}

const ICONS_MAP: IconsMap = Object.assign(AllIcons);

const IconPark: DefineComponent<AllIcon> = defineComponent({
  name: "IconPark",
  props: {
    type: {
      type: String as PropType<AllIcon["type"]>,
      required: true,
    },
    size: {
      type: [String, Number] as PropType<AllIcon["size"]>,
    },
    strokeWidth: {
      type: [Number] as PropType<AllIcon["strokeWidth"]>,
    },
    strokeLinecap: {
      type: String as PropType<AllIcon["strokeLinecap"]>,
    },
    strokeLinejoin: {
      type: String as PropType<AllIcon["strokeLinejoin"]>,
    },
    theme: {
      type: String as PropType<AllIcon["theme"]>,
    },
    fill: {
      type: [String, Object] as PropType<AllIcon["fill"]>,
    },
  },
  setup(props: AllIcon) {
    // 图标名称
    const iconName = ref<string>(toPascalCase(props.type));

    // 图标props
    const iconProps = ref<Icon>({
      size: props.size,
      strokeWidth: props.strokeWidth,
      strokeLinecap: props.strokeLinecap,
      strokeLinejoin: props.strokeLinejoin,
      theme: props.theme,
      fill: props.fill,
    });

    // 监听props变化
    watchEffect(() => {
      // 重新设置图标名称
      iconName.value = toPascalCase(props.type);

      // 重新设置图标属性
      iconProps.value = props;
    });

    return {
      iconName,
      iconProps,
    };
  },
  render() {
    let iconComponent = ICONS_MAP[this.iconName];

    // 返回创建VNode
    return createVNode(iconComponent, this.iconProps);
  },
});

// 导出组件
export { IconPark };
