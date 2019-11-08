
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'get tub ready', notes: 'watch out for the shakes!', completed: false, project_id: 1},
        {description: 'scrub-a-dub', notes: '--', completed: false, project_id: 1},
        {description: 'prep food', notes: 'make sure to have all ingredients', completed: false, project_id: 2},
        {description: 'cook!', notes: '--', completed: false, project_id: 2},
        {description: 'get all notes', notes: 'make sure to know the content that will be included in hw', completed: false, project_id: 3},
        {description: 'get going!', notes: '--', completed: false, project_id: 3}
      ]);
    });
};
