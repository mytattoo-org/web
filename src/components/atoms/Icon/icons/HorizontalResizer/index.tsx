import Icon from '../..'
import type { IIconProps } from '../../types'

import composeClassName from 'utils/composeClassName'

const HorizontalResizer = ({ className, ...props }: IIconProps) => (
  <Icon
    viewBox='0 0 81 77'
    className={composeClassName('HorizontalResizer', className)}
    {...props}
  >
    <path d='M66.375 0C70.2538 0 73.9737 1.46475 76.7164 4.07203C79.4592 6.67931 81 10.2155 81 13.9028V63.0972C81 66.7845 79.4592 70.3207 76.7164 72.928C73.9737 75.5352 70.2538 77 66.375 77H65.25V48.5656L70.011 43.4751C71.2933 42.1045 72.0016 40.3342 72.0016 38.5C72.0016 36.6658 71.2933 34.8955 70.011 33.5249L65.25 28.4344V0H66.375ZM49.8915 53.7203C48.772 52.7739 47.9597 51.5434 47.55 50.1735C47.1403 48.8035 47.1502 47.3509 47.5785 45.9861H33.4215C33.8574 47.373 33.861 48.8503 33.4318 50.2391C33.0027 51.6279 32.1592 52.8686 31.0035 53.8111C29.8478 54.7535 28.4295 55.3573 26.9203 55.5492C25.411 55.7411 23.8756 55.513 22.5 54.8924V77H58.5V54.8924C57.1026 55.5222 55.541 55.7469 54.0101 55.5384C52.4792 55.33 51.0468 54.6977 49.8915 53.7203V53.7203ZM49.8915 23.2797C51.0468 22.3023 52.4792 21.67 54.0101 21.4616C55.541 21.2531 57.1026 21.4778 58.5 22.1076V0H22.5V22.1076C23.8758 21.4858 25.4118 21.2566 26.9218 21.448C28.4319 21.6393 29.8511 22.2429 31.0075 23.1856C32.164 24.1282 33.008 25.3695 33.4372 26.759C33.8665 28.1485 33.8626 29.6265 33.426 31.0139H47.574C47.1462 29.6487 47.137 28.1958 47.5475 26.8258C47.958 25.4559 48.7712 24.2257 49.8915 23.2797V23.2797ZM15.75 28.4344V0H14.625C10.7462 0 7.02628 1.46475 4.28356 4.07203C1.54084 6.67931 0 10.2155 0 13.9028V63.0972C0 66.7845 1.54084 70.3207 4.28356 72.928C7.02628 75.5352 10.7462 77 14.625 77H15.75V48.5656L10.989 43.4751C9.70674 42.1045 8.99839 40.3342 8.99839 38.5C8.99839 36.6658 9.70674 34.8955 10.989 33.5249L15.75 28.4344ZM56.61 35.2917H24.39L28.395 31.0053C28.9479 30.3646 29.2185 29.5453 29.1501 28.7191C29.0817 27.8929 28.6797 27.1239 28.0283 26.5732C27.3768 26.0225 26.5265 25.7328 25.6553 25.7647C24.7842 25.7967 23.9599 26.1479 23.355 26.7447L14.355 36.3697C13.8065 36.9568 13.5036 37.7148 13.5036 38.5C13.5036 39.2852 13.8065 40.0432 14.355 40.6303L23.355 50.2553C23.6433 50.5894 23.9996 50.8647 24.4025 51.0647C24.8054 51.2647 25.2467 51.3853 25.6999 51.4191C26.153 51.453 26.6087 51.3995 27.0396 51.2619C27.4704 51.1243 27.8676 50.9053 28.2073 50.6181C28.547 50.331 28.8221 49.9816 29.0162 49.5909C29.2104 49.2002 29.3195 48.7762 29.337 48.3444C29.3545 47.9126 29.2801 47.4819 29.1183 47.0782C28.9564 46.6744 28.7104 46.3058 28.395 45.9947L24.39 41.7083H56.61L52.605 45.9947C52.2896 46.3058 52.0436 46.6744 51.8817 47.0782C51.7199 47.4819 51.6455 47.9126 51.663 48.3444C51.6805 48.7762 51.7896 49.2002 51.9838 49.5909C52.1779 49.9816 52.453 50.331 52.7927 50.6181C53.1324 50.9053 53.5296 51.1243 53.9604 51.2619C54.3913 51.3995 54.847 51.453 55.3001 51.4191C55.7533 51.3853 56.1946 51.2647 56.5975 51.0647C57.0004 50.8647 57.3567 50.5894 57.645 50.2553L66.645 40.6303L66.6945 40.579C67.2266 39.9889 67.5141 39.2346 67.5034 38.4574C67.4926 37.6802 67.1842 36.9335 66.636 36.3568L57.6495 26.7447C57.0485 26.1325 56.2196 25.7679 55.3398 25.7288C54.4599 25.6896 53.5988 25.979 52.9403 26.5352C52.2819 27.0913 51.8782 27.8702 51.8156 28.7054C51.7529 29.5406 52.0362 30.366 52.605 31.0053L56.61 35.2917Z' />
  </Icon>
)

export default HorizontalResizer