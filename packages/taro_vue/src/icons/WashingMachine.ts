import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconWashingMachine: IconComponent = createIcon("WashingMachine", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<rect x="8.77783" y="4" width="32" height="40" rx="2" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<path d="M8.77783 15.5H40.7778" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<circle cx="28.7778" cy="10" r="2" fill="' + props.colors[0] + '"/>' + '<circle cx="34.7778" cy="10" r="2" fill="' + props.colors[0] + '"/>' + '<circle cx="24.7778" cy="30" r="7" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '</svg>';

});

export default IconWashingMachine;
