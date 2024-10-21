import localFont from 'next/font/local';

const Avenir = localFont({
  src: [
    {
      path: '../app/fonts/Avenir-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../app/fonts/Avenir-Roman.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../app/fonts/Avenir-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../app/fonts/Avenir-Black.woff',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../app/fonts/Avenir-Heavy.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-avenir',
});

export { Avenir };
