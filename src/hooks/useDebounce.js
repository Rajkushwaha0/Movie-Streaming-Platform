const useDebounce = (callback, delay = 1000) => {
  let timeID;
  return () => {
    clearTimeout(timeID); //if there is any already timeout going on clear it
    timeID = setTimeout(() => {
      callback();
    }, delay);
  };
};

export default useDebounce;
