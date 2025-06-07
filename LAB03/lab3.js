const connect = require('connect');
const url = require('url');
const connect = require('connect');
const url = require('url');

const app = connect();

function calculate(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;

    if (parsedUrl.pathname === '/lab2') {
        const method = query.method;
        const x = parseFloat(query.x);
        const y = parseFloat(query.y);
        let result;
        let symbol;

        if (isNaN(x) || isNaN(y)) {
            res.end('Invalid number input.');
            return;
        }

        switch (method) {
            case 'add':
                result = x + y;
                symbol = '+';
                break;
            case 'subtract':
                result = x - y;
                symbol = '-';
                break;
            case 'multiply':
                result = x * y;
                symbol = '*';
                break;
            case 'divide':
                if (y === 0) {
                    res.end('Cannot divide by zero.');
                    return;
                }
                result = x / y;
                symbol = '/';
                break;
            default:
                res.end('Invalid method. Use add, subtract, multiply, or divide.');
                return;
        }

        res.end(`${x} ${symbol} ${y} = ${result}`);
    } else {
        res.end('Invalid route. Use /lab2.');
    }
}

app.use(calculate);

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');

});
