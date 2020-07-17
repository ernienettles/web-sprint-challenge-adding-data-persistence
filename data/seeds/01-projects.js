
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Build a Skyscraper', project_description: 'Build a skyscraper with workers and equipment', completed: 'false' },
        {id: 2, project_name: 'Code an application', project_description: 'Build an application using JS frameworks of your choice', completed: 'false'},
        {id: 3, project_name: 'Mow the grass', project_description: 'Mow your grass using a lawn mower', completed: 'false'}
      ]);
    });
};
