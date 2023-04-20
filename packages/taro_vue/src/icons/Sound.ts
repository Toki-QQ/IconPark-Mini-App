import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconSound: IconComponent = createIcon("Sound", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<rect x="8" y="4" width="32" height="40" rx="2" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<circle cx="24" cy="15" r="5" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<circle cx="14" cy="10" r="2" fill="' + props.colors[0] + '"/>' + '<circle cx="14" cy="38" r="2" fill="' + props.colors[0] + '"/>' + '<circle cx="34" cy="10" r="2" fill="' + props.colors[0] + '"/>' + '<circle cx="34" cy="38" r="2" fill="' + props.colors[0] + '"/>' + '<circle cx="24" cy="32" r="6" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '</svg>';

});

export default IconSound;
