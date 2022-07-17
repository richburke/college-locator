export const debounce = (fnc: (value: string) => void, period: number) => {
  let timer: NodeJS.Timeout | null;
  return (value: string) => {
    timer = setTimeout(() => {
      if (timer) clearTimeout(timer);
      fnc(value);
    }, period);
  };
};
