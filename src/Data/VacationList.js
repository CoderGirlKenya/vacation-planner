export const INITIAL_VACATIONS = [
    {
      id: Math.random().toString(),
      destination: "Las Vegas",
      activityType: {
        outdoors: [
          "Marvel Avengers S.T.A.T.I.O.N at Treasure Island Hotel and Casino",
          "Madam Toussauds with Gondola Boat Ride",
          "Shark Reef at Mandalay Bay Hotel and Casino",
        ],
        tours: [
          "ATV Tour",
          "Grand Canyon West Rim Bus Tour",
          "Las Vegas Strip Highlights Helicopter Tour",
          "Big Bus Las Vegas Hop-on Hop-off Open Top Tour",
        ],
        food: ["Downtown Vegas Sightseeing and Foodie Tour"],
      },
    },
    {
      id: Math.random().toString(),
      destination: "New York",
      activityType: {
        outdoors: ["Bronx Zoo"],
        tours: [
          "7 Hours Boroughs Tour",
          "Circle Line Complete Manhattan Island Cruise",
          "Big Bus Hop on and off Tour",
        ],
        food: [
          "Taste of NYC Tour",
          "New York Premier Dinner Cruise",
          "Chinatown and Little Italy Food Fest",
        ],
      },
    },
    {
      id: Math.random().toString(),
      destination: "Denver",
      activityType: {
        outdoors: [
          "Beyond Light Show and Meditation",
          "Rocky Mountain Ziplining",
        ],
        tours: [
          "Whiskey, History and Outlaws Tour",
          "Small Group Tour of Pike Peak and the Garden of the Gods",
        ],
        food: ["The Dinner Detective Murder Mystery Dinner Show"],
      },
    },
  ];
  
