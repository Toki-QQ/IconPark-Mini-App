import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconZip: IconComponent = createIcon("Zip", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.62861 12.7486L24 5L43.3714 12.7486C43.751 12.9004 44 13.2681 44 13.677V42C44 42.5523 43.5523 43 43 43H5C4.44772 43 4 42.5523 4 42V13.677C4 13.2681 4.24895 12.9004 4.62861 12.7486Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M24 22V32" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '<path fill-rule="evenodd" clip-rule="evenodd" d="M33 27C34.6569 27 36 25.8807 36 24.5C36 23.1193 34.6569 22 33 22C32.1 22 31.2 22 30.3 22C30.1343 22 30 22.1343 30 22.3C30 23.0333 30 23.7667 30 24.5C30 25.8807 31.3431 27 33 27Z" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '"/>' + '<path d="M30 22V32" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '<path d="M12 22H18.0046L12 31.9993H18.0046" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconZip;