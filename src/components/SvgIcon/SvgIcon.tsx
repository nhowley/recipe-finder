import React from 'react'
import { SvgIconProps } from './SvgIcon.model'
import { iconComponentNames } from './IconNames';


export const SvgIcon: React.FC<SvgIconProps> = ({
  iconName,
  iconSize,
  fill
}) => {
    const IconComponentTag = iconComponentNames[iconName]
    return (
        <IconComponentTag width={iconSize} height={iconSize} fill={fill} />
)
}
