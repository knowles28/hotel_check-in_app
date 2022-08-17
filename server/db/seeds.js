use guests_hub;
db.dropDatabase();

db.guests.insertMany([
  {
    name: "James Bond",
    email: "jamesb@spy.com",
    checkedin: false,
  },
  {
    name: "Keith Douglas",
    email: "keith@spy.com",
    checkedin: false,
  },
  {
    name: "Nicola Sturgeon",
    email: "sturgey@gmail.com",
    checkedin: false,
  },
  
]);
