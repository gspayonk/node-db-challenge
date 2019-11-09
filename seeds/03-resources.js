exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'shampoo, tub, dog', resource_description: 'cleaning supplies'},
        {resource_name: 'kitchen, ingredients, instructions', resource_description: 'cooking supplies'},
        {resource_name: 'book, lecture material, homework instructions', resource_description: 'homework related materials'}
      ]);
    });
};