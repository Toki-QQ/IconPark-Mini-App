import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconBatteryTips: IconComponent = createIcon("BatteryTips", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<rect x="14" y="44" width="36" height="20" rx="2" transform="rotate(-90 14 44)" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M20 6L20 4C20 2.89543 20.8954 2 22 2L26 2C27.1046 2 28 2.89543 28 4L28 6L20 6Z" fill="' + props.colors[0] + '"/>' + '<path d="M24 28L24 18" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 24 34)" fill="' + props.colors[2] + '"/>' + '</svg>';

});

export default IconBatteryTips;