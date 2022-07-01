import { motion } from 'framer-motion'
import styled from 'styled-components'

const Background = styled(motion.div)`
  position: relative;

  display: flex;
  justify-content: flex-start;

  width: 40px;
  height: 20px;
  padding: 1px;
  cursor: pointer;
  border-radius: 10px;
  box-sizing: content-box;

  background-color: ${({ theme }) => theme.colors.secondary};
`

const Circle = styled(motion.div)`
  position: relative;
  z-index: 2;

  width: 20px;
  height: 20px;
  border-radius: 20px;

  background-color: ${({ theme }) => theme.colors.background};
`

const SwitchStyle = styled(motion.div)`
  display: flex;
  align-items: center;

  input {
    display: none;
  }

  label {
    margin-left: 8px;
  }
`

export { SwitchStyle, Background, Circle }
