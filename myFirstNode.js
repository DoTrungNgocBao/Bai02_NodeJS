
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
        <!DOCTYPE html>
        <html lang="vi">
        <head>
            <meta charset="UTF-8">
            <title>Bai 2 - Node.js</title>
        </head>
        <body>
            <h1>Hello Node.js!</h1>
            <h2>Thong tin sinh vien</h2>
            <p>Ho ten: Do Trung Ngoc Bao</p>
            <p>Lop: CD-CNTT18A</p>
            <p>Bai 2: HTTP Server bang Node.js</p>
        </body>
        </html>
    `);
}).listen(3000, () => {
    console.log('Server dang chay tai http://localhost:3000');
});
