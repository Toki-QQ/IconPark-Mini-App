import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconViciaFaba: IconComponent = createIcon("ViciaFaba", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<g clip-path="' + 'url(#' + props.id + '49ae3244' + ')' + '">' + '<path d="M3.99989 31.0001C4.00014 24.5001 8.0004 22.0374 11.0001 21.0187C13.9997 20.0001 16.0003 20.0001 18.9999 17.0001C21.9995 14.0001 22.0004 8.00008 28 6.00008C33.9995 4.00007 41.091 7.00011 42.9997 14.0001C44.9084 21.0001 39.5006 30.0001 37.0006 33.0001C34.5006 36.0001 29.4987 41.0001 20.9996 42.0001C12.5006 43.0001 3.99963 37.5001 3.99989 31.0001Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M12 21.0435C19 30 29 21.0435 22 12" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M11.0005 21.0187C14.0002 20.0001 16.0008 20.0001 19.0004 17.0001C22 14.0001 22.0009 8.00007 28.0004 6.00007" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</g>' + '<defs>' + '<clipPath id="' + props.id + '49ae3244' + '">' + '<rect width="48" height="48" fill="' + props.colors[2] + '"/>' + '</clipPath>' + '</defs>' + '</svg>';

});

export default IconViciaFaba;