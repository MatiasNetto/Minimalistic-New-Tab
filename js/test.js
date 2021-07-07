const test1 = () => {
  return true;
};

const test2 = () => {
  if (test1()) {
    console.log('Condicion verdadera');
  } else {
    console.log('condicion falsa');
  }
};

setTimeout(() => {
  test2();
}, 5000);
