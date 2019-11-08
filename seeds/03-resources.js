
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'shampoo, tub, dog', description: 'cleaning supplies'},
        {resource_name: 'kitchen, ingredients, instructions', description: 'cooking supplies'},
        {resource_name: 'book, lecture material, homework instructions', description: 'homework related materials'}
      ]);
    });
};
