
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'bathe dog', description: 'get doggo clean', completed:false},
        {name: 'cook dinner', description: 'make delicioso food', completed:false},
        {name: 'finish homework', description: 'get it done!', completed:false}
      ]);
    });
};
