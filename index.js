//
function saturdayFun(activity) {
    const DEFAULT_ACTIVITY = 'roller-skate';
    activity = activity || DEFAULT_ACTIVITY;
    return `This Saturday, I want to ${activity}!`;
  }
  //
  function mondayWork(activity) {
        const DEFAULT_ACTIVITY = 'go to the office';
        activity = activity || DEFAULT_ACTIVITY;
        return `This Monday, I will ${activity}.`;
  }
   //wrapper
  

  function wrapAdjective(highlight) {
    return function(adj) {
      return `You are ${highlight}${adj}${highlight}!`;
    }
}
  
  const makeAdjectiveBold = wrapAdjective('*');
  const makeAdjectiveOrange = wrapAdjective('||');
  
  const adjective = 'a hard worker';
  
  const boldAdjective = makeAdjectiveBold(adjective);
  const orangeAdjective = makeAdjectiveOrange(adjective);
  
  console.log(boldAdjective); 
  console.log(orangeAdjective); 

