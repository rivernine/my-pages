import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* Wemade */
      @font-face {
        font-family: 'InfinitySans-RegularA1';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }
      /* G Market */
      @font-face {
        font-family: 'GmarketSansMedium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: 'Inter, -apple-system, BlinkMacSystemFont, "segoe ui", Roboto, Helvetica, Arial, sans-serif';
      }
      `}
  />
)

export default Fonts