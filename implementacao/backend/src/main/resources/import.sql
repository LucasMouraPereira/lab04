-- Import students
INSERT INTO user (email, password, type) VALUES ('aluno1@test.com', 'aluno1', 'student');
INSERT INTO coin_balance (last_update, balance_value, user_id) VALUES ('2021-05-10 10:10:10', 0, 1);

INSERT INTO user (email, password, type) VALUES ('aluno2@test.com', 'aluno2', 'student');
INSERT INTO coin_balance (last_update, balance_value, user_id) VALUES ('2021-05-10 10:10:10', 0, 2);

-- Import Professors
INSERT INTO user (email, password, type) VALUES ('professor1@test.com', 'professor1', 'professor');
INSERT INTO coin_balance (last_update, balance_value, user_id) VALUES ('2021-05-10 10:10:10', 1000, 3);

INSERT INTO user (email, password, type) VALUES ('professor2@test.com', 'professor2', 'professor');
INSERT INTO coin_balance (last_update, balance_value, user_id) VALUES ('2021-05-10 10:10:10', 1000, 4);

-- Import Companies
INSERT INTO user (email, password, type) VALUES ('company1@test.com', 'company1', 'company');
INSERT INTO user (email, password, type) VALUES ('company2@test.com', 'company2', 'company');
