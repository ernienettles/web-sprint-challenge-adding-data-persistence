
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task_description: 'Choose framework', notes: '', completed: false, project_id: 2},
        {id: 2, task_description: 'Code the program', notes: '', completed: false, project_id: 2},
        {id: 3, task_description: 'Destroy the old building', notes: '', completed: false, project_id: 1},
        {id: 4, task_description: 'Build the skyscraper', notes: '', completed: false, project_id: 1},
        {id: 5, task_description: 'Crank lawn mower to cut grass', notes: '', completed: false, project_id: 3},
        {id: 6, task_description: 'Crank weedeater to cut grass', notes: '', completed: false, project_id: 3},
      ]);
    });
};
