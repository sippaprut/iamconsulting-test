/**
 * [4.Givenanintegern,Findthesumof11 +22 +33 +.....+nn]
 */
const getTotalnumberPow = (num) => {
  let summary = 0;
  for (let i = 1; i <= num; i++) {
    summary += Math.pow(i, i);
  }
  return summary;
}

console.log(getTotalnumberPow(3));