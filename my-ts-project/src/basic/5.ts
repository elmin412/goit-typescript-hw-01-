enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}


const isWeekend = (day: string): boolean =>  {
  if (day === "Saturday" || day === "Sunday") {
    return false
  } 
  return true;
}

