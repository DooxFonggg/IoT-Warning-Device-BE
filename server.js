const app = require("./src/app");

const PORT = 3055;

const server = app.listen(PORT, () => {
    console.log(`WSV project start with port start with ${PORT}`);
});

//khai báo procress
process.on('SIGINT', () => {
    console.log('Received SIGINT. Closing server...');
    server.close(() => console.log(`Exit server express`));
});