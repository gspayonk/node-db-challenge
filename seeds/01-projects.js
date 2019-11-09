exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'bathe dog', project_description: 'get doggo clean', project_completed:false},
        {project_name: 'cook dinner', project_description: 'make delicioso food', project_completed:false},
        {project_name: 'finish homework', project_description: 'get it done!', project_completed:false}
      ]);
    });
};