const debounce = (func, wait) => {
  let timeout = null;
  return () => {
    let context = this;
    let args = arguments;
    const functionToCall = () => {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(functionToCall, wait);
  };
};
