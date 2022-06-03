import Icon from '../..'
import type { IIconProps } from '../../types'

import composeClassName from 'utils/composeClassName'

const DefaultAvatar = ({ className, ...props }: IIconProps) => (
  <Icon
    viewBox='0 0 39 39'
    className={composeClassName('DefaultAvatar', className)}
    {...props}
  >
    <path d='M34.4965 31.938C36.4982 29.5315 37.8904 26.6787 38.5554 23.621C39.2203 20.5632 39.1384 17.3904 38.3166 14.3709C37.4947 11.3515 35.9572 8.57419 33.8339 6.27406C31.7106 3.97393 29.0642 2.2186 26.1184 1.15656C23.1726 0.094525 20.0141 -0.242977 16.9102 0.172607C13.8062 0.588191 10.8481 1.74464 8.28606 3.54411C5.72402 5.34359 3.63342 7.73316 2.19113 10.5107C0.74883 13.2882 -0.00273557 16.3719 7.48171e-06 19.5011C0.00106008 24.0499 1.60537 28.4531 4.53142 31.938L4.50355 31.9616C4.60112 32.0786 4.71262 32.1789 4.81298 32.2945C4.93843 32.4379 5.07363 32.573 5.20326 32.7123C5.59354 33.1357 5.99497 33.5424 6.41591 33.924C6.54415 34.041 6.67656 34.1496 6.80619 34.261C7.25222 34.6454 7.7108 35.0103 8.1861 35.3501C8.24743 35.3919 8.30319 35.4462 8.36452 35.4894V35.4727C11.6291 37.7681 15.5235 39 19.5153 39C23.5072 39 27.4016 37.7681 30.6662 35.4727V35.4894C30.7275 35.4462 30.7819 35.3919 30.8446 35.3501C31.3185 35.0089 31.7785 34.6454 32.2245 34.261C32.3541 34.1496 32.4865 34.0396 32.6148 33.924C33.0357 33.541 33.4371 33.1357 33.8274 32.7123C33.957 32.573 34.0909 32.4379 34.2177 32.2945C34.3167 32.1789 34.4296 32.0786 34.5271 31.9602L34.4965 31.938ZM19.5139 8.3594C20.7545 8.3594 21.9672 8.72696 22.9987 9.41561C24.0302 10.1043 24.8341 11.0831 25.3088 12.2282C25.7836 13.3734 25.9078 14.6335 25.6658 15.8493C25.4237 17.065 24.8264 18.1817 23.9492 19.0582C23.072 19.9346 21.9543 20.5315 20.7376 20.7734C19.5209 21.0152 18.2597 20.8911 17.1136 20.4167C15.9675 19.9424 14.9879 19.1391 14.2987 18.1085C13.6095 17.0778 13.2416 15.8661 13.2416 14.6266C13.2416 12.9644 13.9024 11.3703 15.0787 10.195C16.255 9.01969 17.8504 8.3594 19.5139 8.3594V8.3594ZM8.37288 31.938C8.39706 30.1093 9.14082 28.3637 10.4433 27.0787C11.7457 25.7938 13.5021 25.0728 15.3324 25.0719H23.6955C25.5258 25.0728 27.2822 25.7938 28.5846 27.0787C29.8871 28.3637 30.6308 30.1093 30.655 31.938C27.5981 34.6904 23.629 36.2137 19.5139 36.2137C15.3989 36.2137 11.4298 34.6904 8.37288 31.938V31.938Z' />
  </Icon>
)

export default DefaultAvatar
