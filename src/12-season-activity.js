/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  // Your code here
  if(month <= 0 || month > 12){
    return null;
  }else{
    if(month ===1 || month === 12 || month === 2){
      let activityType = '' ;
      const seasonType = 'Winter';
      if(temperature<0){
        activityType = 'skiing';
      }else{
        activityType = 'ice skating';
      }
      return {season: seasonType, activity:activityType};
    }
    else if(month ===3 || month === 4 || month === 5){
      let activityType = '' ;
      const seasonType = 'Spring';
      if(temperature <= 20){
        activityType = 'museum visit';
      }else{
        activityType = 'hiking';
      }
      return {season: seasonType, activity:activityType};
    }
    else if(month ===6 || month === 7 || month === 8){
      let activityType = '' ;
      const seasonType = 'Summer';
      if(temperature <= 35){
        activityType = 'cycling';
      }else{
        activityType = 'swimming';
      }
      return {season: seasonType, activity:activityType};
    }
    else if(month ===9 || month === 10 || month === 11){
      let activityType = '' ;
      const seasonType = 'Autumn';
      if(temperature <= 15){
        activityType = 'reading at a cafe';
      }else{
        activityType = 'nature walk';
      }
      return {season: seasonType, activity:activityType};
    }
  }
}
