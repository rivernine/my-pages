import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    // heading: 'Open Sans',
    heading: 'Inter, -apple-system, BlinkMacSystemFont, "segoe ui", Roboto, Helvetica, Arial, sans-serif',
    body: 'Inter, -apple-system, BlinkMacSystemFont, "segoe ui", Roboto, Helvetica, Arial, sans-serif',
    // heading: `'Open Sans', sans-serif`,
    // body: `'Open Sans', sans-serif`,
  },
})

export default theme