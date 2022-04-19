class MyMath {
  static sum = (...numbers) =>
    numbers.reduce((total, number) => total + number);
  static subtract = (...numbers) =>
    numbers.reduce((total, number) => total - number);
}

exports.MyMath = MyMath;
