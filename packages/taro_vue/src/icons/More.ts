import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconMore: IconComponent = createIcon("More", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<circle cx="12" cy="24" r="3" fill="' + props.colors[0] + '"/>' + '<circle cx="24" cy="24" r="3" fill="' + props.colors[0] + '"/>' + '<circle cx="36" cy="24" r="3" fill="' + props.colors[0] + '"/>' + '</svg>';

});

export default IconMore;
