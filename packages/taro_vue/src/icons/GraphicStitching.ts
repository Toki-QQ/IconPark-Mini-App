import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconGraphicStitching: IconComponent = createIcon("GraphicStitching", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" clip-rule="evenodd" d="M24 24L34 14C34 8.47715 29.5228 4 24 4C18.4772 4 14 8.47715 14 14L24 24Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path fill-rule="evenodd" clip-rule="evenodd" d="M14 34L24 24L14 14C8.47715 14 4 18.4772 4 24C4 29.5228 8.47715 34 14 34Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path fill-rule="evenodd" clip-rule="evenodd" d="M34 34C39.5228 34 44 29.5228 44 24C44 18.4772 39.5228 14 34 14L24 24L34 34Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path fill-rule="evenodd" clip-rule="evenodd" d="M24 44C29.5228 44 34 39.5228 34 34L24 24L14 34C14 39.5228 18.4772 44 24 44Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconGraphicStitching;
