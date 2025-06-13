const connect = require('connect');
const url = require('url');

function calculate(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;

    const method = query.method;
    const x = parseFloat(query.x);
    const y = parseFloat(query.y);

    if (isNaN(x) || isNaN(y)) {
        res.end("Error: 'x' and 'y' must be valid numbers.");
        return;
    }

    let result;
    let symbol;

    switch (method) {
        case "add":
            result = x + y;
            symbol = "+";
            break;
        case "subtract":
            result = x - y;
            symbol = "-";
            break;
        case "multiply":
            result = x * y;
            symbol = "*";
            break;
        case "divide":
            if (y === 0) {
                res.end("Error: Cannot divide by zero.");
                return;
            }
            result = x / y;
            symbol = "/";
            break;
        default:
            res.end("Error: Invalid method. Use 'add', 'subtract', 'multiply', or 'divide'.");
            return;
    }

    res.end(`${x} ${symbol} ${y} = ${result}`);

}

const app = connect();
app.use('/lab2', calculate);

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000/lab2");
});