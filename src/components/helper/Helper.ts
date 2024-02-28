const formatCount = (numbers: string | undefined) => {
  if (numbers !== undefined) {
    const number = Number(numbers);

    if (number >= 1000000) {
      return `${Math.round(number / 1000000)}M`;
    } else if (number >= 1000) {
      return `${Math.round(number / 1000)}K`;
    } else {
      return numbers;
    }
  }
};

export default formatCount;
