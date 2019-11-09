exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_description: 'get tub ready', task_notes: 'watch out for the shakes!', task_completed: false, project_id: 1},
        {task_description: 'scrub-a-dub', task_notes: '--', task_completed: false, project_id: 1},
        {task_description: 'prep food', task_notes: 'make sure to have all ingredients', task_completed: false, project_id: 2},
        {task_description: 'cook!', task_notes: '--', task_completed: false, project_id: 2},
        {task_description: 'get all notes', task_notes: 'make sure to know the content that will be included in hw', task_completed: false, project_id: 3},
        {task_description: 'get going!', task_notes: '--', task_completed: false, project_id: 3}
      ]);
    });
};