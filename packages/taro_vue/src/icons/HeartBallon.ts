import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconHeartBallon: IconComponent = createIcon("HeartBallon", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M17.3333 4C13.3333 4 12 7.15642 12 11.05C12 18.1 19.8 24.5091 24 26C28.2 24.5091 36 18.1 36 11.05C36 7.15642 34.3117 4 30.6667 4C28.4345 4 25.1944 7.0771 24 8.88889C22.8056 7.0771 19.5655 4 17.3333 4Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M24 26C22 27.0909 19 29.5 19 33C19 36.5 29 35.5 29 39C29 42.5 18 44 18 44" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconHeartBallon;
