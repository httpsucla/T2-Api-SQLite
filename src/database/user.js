import db from "./db";

export default class User {
  static createTable() {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS tb_users (' +
        'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
        'nome TEXT,' +
        'login TEXT,' +
        'senha TEXT,' +
        'tipo TEXT)',
        [],
        () => {
          console.log('Tabela de usuários criada com sucesso!');
          // Verifica se existem registros na tabela
          tx.executeSql('SELECT COUNT(*) as count FROM tb_users', [], (tx, result) => {
            const count = result.rows.item(0).count;
            if (count === 0) {
              // Caso nao exista, adiciona o Admin
              tx.executeSql(
                'INSERT INTO tb_users (nome, login, senha, tipo) VALUES (?, ?, ?, ?)',
                ['Admin', 'admin@email.com', '1234', 'ADMIN'],
                (_, result) => {
                  console.log('Admin adicionado com sucesso!');
                },
                (_, error) => {
                  console.log('Erro ao adicionar admin:', error);
                }
              );
            }
          });
        },
        (_, error) => {
          console.log('Erro ao criar tabela de usuários:', error);
        }
      );
    });
  }

  static addUser(user, callback) {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO tb_users (nome, login, senha, tipo) VALUES (?, ?, ?, ?)',
        [user.nome, user.login, user.senha, user.tipo],
        (_, result) => {
          console.log('Usuário adicionado com sucesso!');
        },
        (_, error) => {
          console.log('Erro ao adicionar usuário:', error);
        }
      );
    });
  }

  static updateUser(user, callback) {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE tb_users SET nome = ?, login = ?, senha = ?, tipo = ? WHERE id = ?',
        [user.nome, user.login, user.senha, user.tipo, user.id],
        () => callback()
      );
    });
  }

  static deleteUser(id) {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM tb_users WHERE id = ?`,
        [id],
        (_, result) => {
          console.log('Usuário excluído com sucesso!');
        },
        (_, error) => {
          console.log('Erro ao excluir o usuário:', error);
        },
      );
    });
  };

  static getUsers(callback) {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM tb_users',
        [],
        (_, { rows }) => callback(rows._array)
      );
    });
  }

  static getUserLogin(login, senha, callback) {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM tb_users WHERE login = ? AND senha = ?',
        [login, senha],
        (_, result) => {
          if (result.rows.length > 0) {
            console.log('Login realizado com sucesso');
            const user = result.rows.item(0);
            callback(user);
          } else {
            console.log('Credenciais inválidas. Tente novamente.');
            callback(0);
          }
        },
        (_, error) => {
          console.log('Erro ao executar a consulta:', error);
        }
      );
    });
  }
}