describe('App', () => {
  const numberResult = 30;
  it(`should be ${numberResult}`, () => {
    //Arrange
    const number1 = 10;
    const number2 = 20;

    //Act
    const sum = number1 + number2;

    //Assert
    expect(sum).toBe(numberResult);
  });
});
