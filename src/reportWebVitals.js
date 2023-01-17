const reportWebVitals = async (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    await import('web-vitals').then(
      ({ getCLS, getFID, getFCP, getLCP, getTTF }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTF(onPerfEntry);
      },
    );
  }
};

export default reportWebVitals;
