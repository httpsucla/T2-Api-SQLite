import db from "./db";

export default class Weather {

    static createTable() {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS tb_weather (' +
                'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                'nome TEXT,' +
                'princ TEXT,' +
                'descr TEXT,' +
                'temp REAL,' +
                'sens REAL,' +
                'min REAL,' +
                'max REAL,' +
                'visib INTEGER,' +
                'hum INTEGER,' +
                'vento REAL,' +
                'data INTEGER);',
                [],
                () => console.log('Tabela Weather criada com sucesso'),
                (_, error) => console.log('Erro ao criar tabela Weather:', error)
            );
        });
    }

    static addWeather(weather, callback) {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO tb_weather (nome, princ, descr, temp, sens, min, max, visib, hum, vento, data) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [weather.nome, weather.princ, weather.descr, weather.temp, weather.sens, weather.min, weather.max, weather.visib, weather.hum, weather.vento, weather.data],
                (_, { insertId, rows }) => callback({ id: insertId, ...rows._array[0] }),
                (_, error) => console.log('Erro ao executar a query:', error)
            );
        });
    }

    static updateWeather(weather, callback) {
        db.transaction(tx => {
            tx.executeSql(
                'UPDATE tb_weather SET nome = ?, princ = ?, descr = ?, temp = ?, sens = ?, min = ?, max = ?, visib = ?, hum = ?, vento = ?, data = ? WHERE id = ?',
                [weather.nome, weather.princ, weather.descr, weather.temp, weather.sens, weather.min, weather.max, weather.visib, weather.hum, weather.vento, weather.data, weather.id],
                () => callback()
            );
        });
    }

    static deleteWeather(id) {
        db.transaction((tx) => {
            tx.executeSql(
                `DELETE FROM tb_weather WHERE id = ?`,
                [id],
                (_, result) => {
                    console.log('Item excluído com sucesso!');
                },
                (_, error) => {
                    console.log('Erro ao excluir o item:', error);
                },
            );
        });
    };

    static getWeather(callback) {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM tb_weather',
                [],
                (_, { rows }) => callback(rows._array)
            );
        });
    }

    static deletarWeather() {
        db.transaction(tx => {
            tx.executeSql(
                'DROP TABLE IF EXISTS tb_weather;',
                [],
                (_, result) => {
                    console.log('Tabela tb_weather dropada com sucesso!');
                },
                (_, error) => {
                    console.log('Erro ao dropar a tabela tb_weather', error);
                }
            );
        });
    }
}