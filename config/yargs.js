const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola una tabla de multiplicar', opts)
    .command('crear', 'Crear un .txt con la tabla de multipicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}