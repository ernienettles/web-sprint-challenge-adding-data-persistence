
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'mouse', resource_description: 'Moves the cursor on a computer screen'},
        {id: 2, resource_name: 'computer', resource_description: 'A machine that performs tasks in the form of code'},
        {id: 3, resource_name: 'keyboard', resource_description: 'Used to input words when using a computer'},
        {id: 4, resource_name: 'bulldozer', resource_description: 'Used in construction for digging and hauling materials'},
        {id: 5, resource_name: 'crane', resource_description: 'Used to move things to higher or lower places, can also be used to destroy buildings'},
        {id: 6, resource_name: 'labor', resource_description: 'Workers doing basic labor'},
        {id: 7, resource_name: 'lawnmower', resource_description: 'Cuts grass'},
        {id: 8, resource_name: 'weedeater', resource_description: 'Cuts grass that is hard to get to with a lawnmower'}
      ]);
    });
};
