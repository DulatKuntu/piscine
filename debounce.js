const debounce = (func, wait) => {
    let timeout;
  
    return function () {
      var args = arguments;
      const later = () => {
        timeout = null;
        func(...args);
      };
  
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  
  function opDebounce(func, delay, leading) {
    let timeout;
    return function () {
      var args = arguments;
      var later = function () {
        timeout = null;
        if (!leading) {
          func(...args);
        }
      };
      if (leading && !timeout) {
          func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, delay)
    };
  }
