import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Averta Std';
        src: local('Averta Std ExtraBold'), local('AvertaStd-ExtraBold'),
            url('/fonts/AvertaStd-ExtraBold.woff2') format('woff2'),
            url('/fonts/AvertaStd-ExtraBold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
          font-family: 'Averta Std';
          src: local('Averta Std Bold'), local('AvertaStd-Bold'),
              url('/fonts/AvertaStd-Bold.woff2') format('woff2'),
              url('/fonts/AvertaStd-Bold.woff') format('woff');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'Averta Std';
          src: local('Averta Std Semibold'), local('AvertaStd-Semibold'),
              url('/fonts/AvertaStd-Semibold.woff2') format('woff2'),
              url('/fonts/AvertaStd-Semibold.woff') format('woff');
          font-weight: 600;
          font-style: normal;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'Averta Std';
          src: local('Averta Std Light'), local('AvertaStd-Light'),
              url('/fonts/AvertaStd-Light.woff2') format('woff2'),
              url('/fonts/AvertaStd-Light.woff') format('woff');
          font-weight: 300;
          font-style: normal;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'Averta Std';
          src: local('Averta Std Regular'), local('AvertaStd-Regular'),
              url('/fonts/AvertaStd-Regular.woff2') format('woff2'),
              url('/fonts/AvertaStd-Regular.woff') format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'Averta Std';
          src: local('Averta Std Black'), local('AvertaStd-Black'),
              url('/fonts/AvertaStd-Black.woff2') format('woff2'),
              url('/fonts/AvertaStd-Black.woff') format('woff');
          font-weight: 900;
          font-style: normal;
          font-display: swap;
      }
      `}
  />
)

export default Fonts