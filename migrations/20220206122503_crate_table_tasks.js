exports.up = function(knex) {
    return knex.schema.createTable('tasks', table =>{
		table.increments('id').primary()
		table.string('desc').notNull()
		table.string('estimateAt')
		table.string('doneAt')
		table.integer('userId')
	})
};

exports.down = function(knex) {
    return knex.schema.dropTable('tasks')
};
