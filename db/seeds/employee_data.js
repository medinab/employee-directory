
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        {first_name: 'Rick', last_name: 'Sanchez', department: 'Innovation', title: 'Scientist', email: 'rick.sanchez@me.com', phone_number: '555-555-123', location: {street: '77 Mass. Ave', city: 'Cambridge', state: 'MA', postcode: '02139'}},
        {first_name: 'Morty', last_name: 'Smith', department: 'People Ops', title: 'Recruiter', email: 'morty.smith@me.com', phone_number: '555-5555-456', location: {street: '4 Yawkey Way', city: 'Boston', state: 'MA', postcode: '02215'}},
        {first_name: 'Mr', last_name: 'Meeseeks', department: 'Innovation', title: 'Consultant', email: 'mr.meeseeks@me.com', phone_number: '555-5555-789', location: {street: '1 E 161 St', city: 'The Bronx', state: 'NY', postcode: '10451'}}
      ]);
    });
};
