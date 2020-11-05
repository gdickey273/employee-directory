//dummy data to replicate fetch call
export const getBandMembers = new Promise(function (resolve) {
  setTimeout(() => {
    resolve([
      {
        firstName: "David",
        lastName: "Wimbish",
        jobTitle: "Lead Vocals",
        department: "Vocals",
        email: "david@gmail.com"
      },
      {
        firstName: "Hayden",
        lastName: "Cooke",
        jobTitle: "Bass Player",
        department: "String Section",
        email: "hayden@gmail.com"
      },
      {
        firstName: "Graham",
        lastName: "Dickey",
        jobTitle: "Horn Player",
        department: "Wind Section",
        email: "gdickey273@gmail.com"
      },
      {
        firstName: "Darren",
        lastName: "Miles",
        jobTitle: "Acoustic Guitar Player",
        department: "String Section",
        email: "darren@gmail.com"
      },
      {
        firstName: "Sarah",
        lastName: "McCoy",
        jobTitle: "Keyboard Player",
        department: "Percussion Section",
        email: "sarah@gmail.com"
      },
      {
        firstName: "Joshua",
        lastName: "Ling",
        jobTitle: "Electric Guitar Player",
        department: "String Section",
        email: "ling@gmail.com"
      },
      {
        firstName: "Joshua",
        lastName: "Linhart",
        jobTitle: "Drummer",
        department: "Percussion Section",
        email: "linhart@gmail.com"
      }
    ]);
  }, 1000);
});