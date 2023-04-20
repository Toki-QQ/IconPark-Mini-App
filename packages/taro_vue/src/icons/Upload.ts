import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconUpload: IconComponent = createIcon("Upload", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<mask id="' + props.id + '7f10b972' + '" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48" style="mask-type: alpha">' + '<path d="M48 0H0V48H48V0Z" fill="' + props.colors[2] + '"/>' + '</mask>' + '<g mask="' + 'url(#' + props.id + '7f10b972' + ')' + '">' + '<path d="M6 24.0083V42H42V24" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M33 15L24 6L15 15" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M23.9917 32V6" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</g>' + '</svg>';

});

export default IconUpload;
