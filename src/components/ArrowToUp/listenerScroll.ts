// eslint-disable-next-line @typescript-eslint/no-explicit-any
const listenerScroll = (value: any) => {
    let isInViewPort = false;
    window.pageYOffset < value && (isInViewPort = false);
    window.pageYOffset > value && (isInViewPort = true);
    return isInViewPort;
  };
  
  export default listenerScroll;
  