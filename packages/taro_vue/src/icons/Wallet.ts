import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconWallet: IconComponent = createIcon("Wallet", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" clip-rule="evenodd" d="M17.982 11.9689L31.7846 4L36.397 11.9889L17.982 11.9689Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M4 14C4 12.8954 4.89543 12 6 12H42C43.1046 12 44 12.8954 44 14V42C44 43.1046 43.1046 44 42 44H6C4.89543 44 4 43.1046 4 42V14Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M35.25 33H44V23H35.25C32.3505 23 30 25.2386 30 28C30 30.7614 32.3505 33 35.25 33Z" fill="' + props.colors[3] + '" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M44 16.5V40.5" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '</svg>';

});

export default IconWallet;