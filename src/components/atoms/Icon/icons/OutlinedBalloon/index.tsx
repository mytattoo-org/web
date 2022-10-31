import Icon from '../../'
import type { IIconProps } from '../../types'

import composeClassName from 'utils/composeClassName'

const OutlinedBalloon = ({ className, ...props }: IIconProps) => (
  <Icon
    fill='white'
    viewBox='0 0 20 20'
    className={composeClassName('OutlinedBalloon', className)}
    {...props}
  >
    <path d='M6.25 10C6.25 10.3315 6.1183 10.6495 5.88388 10.8839C5.64946 11.1183 5.33152 11.25 5 11.25C4.66848 11.25 4.35054 11.1183 4.11612 10.8839C3.8817 10.6495 3.75 10.3315 3.75 10C3.75 9.66848 3.8817 9.35054 4.11612 9.11612C4.35054 8.8817 4.66848 8.75 5 8.75C5.33152 8.75 5.64946 8.8817 5.88388 9.11612C6.1183 9.35054 6.25 9.66848 6.25 10ZM11.25 10C11.25 10.3315 11.1183 10.6495 10.8839 10.8839C10.6495 11.1183 10.3315 11.25 10 11.25C9.66848 11.25 9.35054 11.1183 9.11612 10.8839C8.8817 10.6495 8.75 10.3315 8.75 10C8.75 9.66848 8.8817 9.35054 9.11612 9.11612C9.35054 8.8817 9.66848 8.75 10 8.75C10.3315 8.75 10.6495 8.8817 10.8839 9.11612C11.1183 9.35054 11.25 9.66848 11.25 10ZM15 11.25C15.3315 11.25 15.6495 11.1183 15.8839 10.8839C16.1183 10.6495 16.25 10.3315 16.25 10C16.25 9.66848 16.1183 9.35054 15.8839 9.11612C15.6495 8.8817 15.3315 8.75 15 8.75C14.6685 8.75 14.3505 8.8817 14.1161 9.11612C13.8817 9.35054 13.75 9.66848 13.75 10C13.75 10.3315 13.8817 10.6495 14.1161 10.8839C14.3505 11.1183 14.6685 11.25 15 11.25Z' />

    <path d='M2.70625 19.7537L2.73125 19.7487C5.01875 19.295 6.41625 18.6962 7.06625 18.3675C8.02323 18.6227 9.00956 18.7513 10 18.75C15.5225 18.75 20 14.8325 20 10C20 5.1675 15.5225 1.25 10 1.25C4.4775 1.25 0 5.1675 0 10C0 12.2 0.92875 14.2125 2.4625 15.75C2.3552 16.7376 2.13544 17.7098 1.8075 18.6475L1.80375 18.6612C1.71055 18.9298 1.60884 19.1954 1.49875 19.4575C1.4 19.69 1.59125 19.95 1.84 19.91C2.12958 19.8626 2.41837 19.8105 2.70625 19.7537ZM3.70625 15.8687C3.72376 15.6857 3.70069 15.5011 3.63868 15.3281C3.57667 15.155 3.47725 14.9977 3.3475 14.8675C2.0225 13.5375 1.25 11.835 1.25 10C1.25 6.01 5.005 2.5 10 2.5C14.995 2.5 18.75 6.01 18.75 10C18.75 13.9912 14.995 17.5 10 17.5C9.11888 17.5013 8.24139 17.387 7.39 17.16C7.09247 17.0803 6.77598 17.1132 6.50125 17.2525C6.0175 17.4975 4.95125 17.965 3.20875 18.3687C3.45185 17.5527 3.6184 16.7157 3.70625 15.8687Z' />
  </Icon>
)

export default OutlinedBalloon
