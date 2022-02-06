# Instalar o Knex global
sudo npm i knex -g

# Iniciar o Knex no projeto
knex init

# Criar migrations
knex migrate:make crate_table_users
knex migrate:make crate_table_tasks

# Rodar as migrations
knex migrate:latest