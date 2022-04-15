//Given the following Array with player objects

const playerList = [

    {
  
        name: "Aroldis Chapman",
  
        speeds: []
  
    },
  
    {
  
        name: "Chris Sale",
  
        speeds: []
  
    },
  
    {
  
        name: "Clayton Kershaw",
  
        speeds: []
  
    },
  
    {
  
        name: "Gerrit Cole",
  
        speeds: []
  
    },
  
    {
  
        name: "Max Scherzer",
  
        speeds: []
  
    },
  
    {
  
        name: "Stephen Strasburg",
  
        speeds: []
  
    },
  
    {
  
        name: "Trevor Bauer",
  
        speeds: []
  
    },
  
    {
  
        name: "Zack Greinke",
  
        speeds: []
  
    }
  
  ];
  
   
  
  //PART I - Populate Array
  
  //Write code to populate the player's speed.
  
  //Requirements:
  
  //  Players must throw at least 5 pitches
  
  //  Players may throw 15 pitches
  
  //  
  
  //Task
  
  //For each employee, generate a random number between 5 and 15 (number of pitches thrown)
  
  //  For each pitch, assign a random speed between 90 and 100
  
  //
  
  //Example:
  
  //  Assume Clayton Kershaw threw 5 pitches.  The result for Clayton Kershaw may look as follows:
  
  //   {
  
  //     name: "Clayton Kershaw",
  
  //     scores: [95, 98, 92, 93,97]
  
  //   },
  
   
  
  // Hint:
  
  //  Loop through the playerList Array
  
  //    For each player object, generate a random number between 5 to 15 (number of tests)
  
  //    Iterate through the number of pitches, adding a value to the scores array between 90 and 100.
  
   
playerList.forEach(player => {
    const numPitch = Math.trunc(Math.random() * 11) + 5;
    for (let i = 0; i < numPitch; i++){
        const tstPitch = Math.trunc(Math.random() * 11) + 90;
        player.speeds.push(tstPitch)
    }
})
  
   
  
  //You could use the following to test the updated player list:
  
  console.log(playerList);
  
   
  
//   //----------------------------------------------------------------//
  
//   //PART II - Summary Data
  
//   //Create an array of objects, each object containing the following:
  
//   // name
  
//   // speeds
  
//   // numberOf pitches
  
//   // avgSpeed
  
//   // maxSpeed
  
   
  
//   //Requirements
  
//   //  You must use Array Operations (map, reduce, filter) / Functional Programming Techniques
  
//   //  DO NOT write a traditional loop
  
   
  
//   //Sample object for "Chris Sale"

//   //  As above, Assume Chris Sale threw 5 pitches
  
//   //   {
  
//   //     name:'Chris Sale',
  
//   //     speeds:(5) [91, 96, 93, 95, 92],
  
//   //     numberOfpitches:5,
  
//   //     avgSpeed:93.4,
  
//   //     maxSpeed:96
  
//   //   },
  
   
  
//   // Hint:  Create a new array with the summary data
  
   
  
//   // << YOUR CODE HERE >>
  const summaryArray = playerList.map(player => {
      return {
          name: player.name,
          speeds: player.speeds,
          numberOfpitches: player.speeds.length,
          avgSpeed: player.speeds.reduce((sum,speeds ) => sum + speeds, 0)/ player.speeds.length,
          maxSpeed: player.speeds.reduce((max,speeds) => max > speeds ? max : speeds)
      }
  });
  
  console.log(summaryArray);
  
   
  
//   //----------------------------------------------------------------//
  
//   //PART III - Output the results
  
//   // Output the summarized data to the console.  You must use the following format:
  
//   //Name: Gerrit Cole
  
//   //Speeds: 100,91,100,94,95,98,100,93
  
//   //Number of Pitches: 8
  
//   //Average Speed: 96.375
  
//   //Maximum Speed: 100

   
  
//   // Hint: Loop through the array created in Part II
  
//   //       This is NOT a single console.log(yourArrayName): note the format.
  
   
  
//   // << YOUR CODE HERE >>

  summaryArray.forEach(player =>{
      console.log(`Name: ${player.name}`);
      console.log(`Speeds: ${player.speeds}`);
      console.log(`Number of Pitches: ${player.speeds.length}`);
      console.log(`Average Speed: ${player.speeds.reduce((sum,speeds ) => sum + speeds, 0)/ player.speeds.length}`);
      console.log(`Maximum Speed: ${player.speeds.reduce((max,speeds) => max > speeds ? max : speeds)}`);
      console.log("=======================")
  })

  //   //----------------------------------------------------------------//