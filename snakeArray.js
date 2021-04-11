const SIZE = 5;

const turnRight = (currentMove) => {
  switch (currentMove) {
    case "Right":
      return "Down";
      break;
    case "Down":
      return "Left";
      break;
    case "Left":
      return "Up";
      break;
    case "Up":
      return "Right";
      break;
    default:
      return "Right";
  }
};

const getNextPosition = (currentDirection, hIndex, vIndex) => {
  switch (currentDirection) {
    case "Right":
      return { hIndex: ++hIndex, vIndex };
    case "Down":
      return { hIndex, vIndex: ++vIndex };
      break;
    case "Left":
      return { hIndex: --hIndex, vIndex };
    case "Up":
      return { hIndex, vIndex: --vIndex };
    default:
      return { hIndex: 0, vIndex: 0 };
  }
};

const getArray = (size) => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push([]);
  }
  return arr;
};

const snakeArray = (startIndex) => {
  const MAX_INDEX_ELEMENT = Math.pow(SIZE, 2) - 1 + startIndex;

  let currentIndex = startIndex;
  let currentDirection = "Right";
  let horizontalIndex = 0;
  let verticalIndex = 0;

  const lastElementInArray = SIZE - 1;
  const snake = getArray(SIZE);

  const shouldChangeDirection = () => {
    const { hIndex, vIndex } = getNextPosition(
      currentDirection,
      horizontalIndex,
      verticalIndex
    );
    return (
      (snake[vIndex] && snake[vIndex][hIndex]) ||
      vIndex > lastElementInArray ||
      hIndex > lastElementInArray ||
      (horizontalIndex === 0 && verticalIndex === lastElementInArray)
    );
  };

  const makeStep = (currentDirection) => {
    switch (currentDirection) {
      case "Right":
        horizontalIndex++;
        break;
      case "Down":
        verticalIndex++;
        break;
      case "Left":
        horizontalIndex--;
        break;
      case "Up":
        verticalIndex--;
        break;
      default:
        horizontalIndex++;
        break;
    }
  };

  while (currentIndex <= MAX_INDEX_ELEMENT) {
    snake[verticalIndex][horizontalIndex] = currentIndex;
    currentIndex++;

    if (shouldChangeDirection()) {
      currentDirection = turnRight(currentDirection);
    }
    makeStep(currentDirection);
  }

  return snake;
};

const snake = snakeArray(1);

for (let i = 0; i < SIZE; i++) {
  console.log(snake[i]);
}
