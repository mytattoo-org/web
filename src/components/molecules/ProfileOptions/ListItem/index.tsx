import { useListItem } from './logic'
import { ListItemStyle } from './styles'
import { IListItemProps } from './types'

import { labelAnimationProps } from './animations'

import Presence from 'components/atoms/Presence'

import composeClassName from 'utils/composeClassName'

import { motion } from 'framer-motion'

const ListItem = ({
  index,
  options,
  className,
  condition,
  onSidebar = false,
  ...props
}: IListItemProps) => {
  const {
    label,
    icon: Icon,
    animations,
    onButtonClick
  } = useListItem({ options, index, onSidebar })

  return (
    <Presence condition={condition}>
      <ListItemStyle
        className={composeClassName('ListItem', className)}
        {...animations}
        {...props}
      >
        <button type='button' onClick={onButtonClick}>
          {Icon}

          {onSidebar && (
            <motion.div
              className='Label'
              {...labelAnimationProps(options, index)}
            >
              {label}
            </motion.div>
          )}
        </button>

        {onSidebar && <hr />}
      </ListItemStyle>
    </Presence>
  )
}

export default ListItem
