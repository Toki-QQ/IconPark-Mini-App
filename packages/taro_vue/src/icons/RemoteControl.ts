import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconRemoteControl: IconComponent = createIcon("RemoteControl", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<rect x="11" y="4" width="26" height="40" rx="2" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<circle cx="24" cy="34" r="4" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<rect x="18" y="10" width="12" height="8" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M23 24H25" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconRemoteControl;
