import { addDays, subDays } from "date-fns";
export const CalendarDate = ({ date }: { date: Date }) => {
  const offset = 1000 * 60 * 60 * 9; //한국 시간으로 바꾸기 위해
  const INITDAY = 5; // 초기화 할 날짜
  const currentDay = date.getDate();
  let currentMonth = 0;
  if (currentDay < INITDAY) {
    // 초기화  된 날짜보다 작으면 저번달과 합쳐짐
    currentMonth = date.getMonth();
  } else {
    currentMonth = date.getMonth() + 1;
  }
  const currentYear = date.getFullYear();
  let startOfMonth = new Date(
    new Date(currentYear, currentMonth - 1, INITDAY).getTime() + offset
  ); //초기화 된 월 시작 날
  const lastDayOfMonth = new Date(
    new Date(currentYear, currentMonth, 0).getTime() + offset
  ).getDate(); //다음달의 0번이 이번달의 마지막날
  const startDayOfTheWeek = startOfMonth.getDay();
  const datesOfMonth = [];

  //시작일 전 날짜들
  // console.log(currentMonth, "월 10일은 무슨요일?", startDayOfTheWeek);
  // console.log(date);
  for (let i = 0; i < startDayOfTheWeek; i++) {
    datesOfMonth.push({
      date: subDays(startOfMonth, startDayOfTheWeek - i),
      isShow: false,
    });
  }
  //  console.log(currentMonth, "월은 며칠까지?", lastDayOfMonth);
  for (let i = 0; i < lastDayOfMonth; i++) {
    datesOfMonth.push({ date: addDays(startOfMonth, i), isShow: true });
  }
  const lastDayOfWeek = addDays(startOfMonth, lastDayOfMonth).getDay();
  // console.log("월의", lastDayOfWeek);
  for (let i = 0; i <= 6 - lastDayOfWeek; i++) {
    datesOfMonth.push({
      date: addDays(startOfMonth, lastDayOfMonth + i),
      isShow: false,
    });
  }

  return {
    INITDAY,
    startOfMonth,
    lastDayOfMonth,
    startDayOfTheWeek,
    currentYear,
    currentMonth,
    currentDay,
    datesOfMonth,
  };
};
