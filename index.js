#!/usr/bin/env node
//-----------------------------------------------------------------------------
// index.js
//-----------------------------------------------------------------------------
export const solution = (meals, k) => {
  let totalEnjoyment   = 0;
  let prevRestaurant   = null;
  
  for(let day = 0; day < meals.length; day++) {
    let maxEnjoyment           = 0;
    let maxEnjoymentRestaurant = null;
    
    for(let restaurant = 0; restaurant < meals[day].length; restaurant++) {
      if(meals[day][restaurant] > maxEnjoyment && restaurant !== prevRestaurant) {
        maxEnjoyment 		       = meals[day][restaurant];
        maxEnjoymentRestaurant = restaurant;
      }
    }
    prevRestaurant   = maxEnjoymentRestaurant;
    totalEnjoyment  += maxEnjoyment;
  }
  return totalEnjoyment;
};

export default solution;

