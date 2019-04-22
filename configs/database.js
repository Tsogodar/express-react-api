const options = {
    host: 'localhost',
    port: 27017,
    database: 'tsogodar-react-api',
    auth: {
        username: 'admin',
        password: 'admin'
    }
};
const url = `mongodb://${options.auth.username}:${
    options.auth.password
}@${options.host}:${options.port}/${options.database}?authSource=admin`;

const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect(url, { useNewUrlParser: true }).then(
    () => {
        console.log(`Connected with MongoDB <${options.host}>`);
    },
    error => {
        console.log(`Connection error: ${error}`);
    }
);