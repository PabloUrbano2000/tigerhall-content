import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'

// Foundational style overrides
import colors from './foundations/colors'
import fonts from './foundations/fonts'

const overrides = {
  colors,
  fonts,
  styles,
}

export default extendTheme(overrides)