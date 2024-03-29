import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconLinkFour: IconComponent = createIcon("LinkFour", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M18 24H31" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M4 17C4 15.8954 4.89543 15 6 15H42C43.1046 15 44 15.8954 44 17V31C44 32.1046 43.1046 33 42 33H6C4.89543 33 4 32.1046 4 31V17Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '</svg>';

});

export default IconLinkFour;
