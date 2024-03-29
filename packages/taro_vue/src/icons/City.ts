import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconCity: IconComponent = createIcon("City", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M4 42H44" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<rect x="8" y="26" width="8" height="16" rx="2" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M12 34H13" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<rect x="16" y="4" width="24" height="38" rx="2" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<rect x="22" y="10" width="4" height="4" fill="' + props.colors[2] + '"/>' + '<rect x="30" y="10" width="4" height="4" fill="' + props.colors[2] + '"/>' + '<rect x="22" y="17" width="4" height="4" fill="' + props.colors[2] + '"/>' + '<rect x="30" y="17" width="4" height="4" fill="' + props.colors[2] + '"/>' + '<rect x="30" y="24" width="4" height="4" fill="' + props.colors[2] + '"/>' + '<rect x="30" y="31" width="4" height="4" fill="' + props.colors[2] + '"/>' + '</svg>';

});

export default IconCity;
