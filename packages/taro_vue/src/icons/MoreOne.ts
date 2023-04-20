import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconMoreOne: IconComponent = createIcon("MoreOne", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<circle cx="24" cy="12" r="3" fill="' + props.colors[0] + '"/>' + '<circle cx="24" cy="24" r="3" fill="' + props.colors[0] + '"/>' + '<circle cx="24" cy="35" r="3" fill="' + props.colors[0] + '"/>' + '</svg>';

});

export default IconMoreOne;
