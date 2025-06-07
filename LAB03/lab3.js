const connect = require('connect');
const http = require('http');
const url = require('url');

const app = connect();

function calculate(req, res, next) {
    const parsedUrl = url.parse(req.url, true); // true => parse query string
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (pathname === '/lab2') {
        const method = query.method;
        const x = parseFloat(query.x);
        const y = parseFloat(query.y);

        let result;
        let operator;

        if (isNaN(x) || isNaN(y)) {
            res.end('❌ Error: x and y must be numbers.');
            return;
        }

        switch (method) {
            case 'add':
                result = x + y;
                operator = '+';
                break;
            case 'subtract':
                result = x - y;
                operator = '-';
                break;
            case 'multiply':
                result = x * y;
                operator = '*';
                break;
            case 'divide':
                if (y === 0) {
                    res.end('❌ Error: Division by zero.');
                    return;
                }
                result = x / y;
                operator = '/';
                break;
            default:
                res.end('❌ Error: Invalid method. Use add, subtract, multiply, or divide.');
                return;
        }

        res.setHeader('Content-Type', 'text/plain');
        res.end(`${x} ${operator} ${y} = ${result}`);
    } else {
        res.setHeader('Content-Type', 'text/plain');
        res.end('📍 Please use the /lab2 endpoint with method, x, and y query parameters.');
    }
}

app.use(calculate);

http.createServer(app).listen(3000, () => {
    console.log('✅ Server running at http://localhost:3000/');
});
