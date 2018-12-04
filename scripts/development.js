process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

var nodemon = require('nodemon');
// 뜻알아보기
nodemon('--exec babel-node ./app.js --watch');

nodemon.on('start', function() {
    console.log('[nodemon] App has started');
}).on('quit', function() {
    console.log('[nodemon] App has quit');
}).on('restart', function(files) {
    console.log('[nodemon] App restarted due to:', files);
});
