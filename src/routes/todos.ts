import axios from 'axios'

const requestHandler = (req , res) => {
    const url = req.url;
    const method = req.method;
    const api = 'https://jsonplaceholder.typicode.com/todos';
    
    if(url === '/todos' && method == 'GET'){
            axios.get(api)
            .then(resp => {
                let data = resp.data;
                const jsonContent = JSON.stringify(data);
                res.end(jsonContent);
            }
        )
    }

    if(url === '/'){
        res.write('<html>')
        res.write('<body>hello world</body>')
        res.write('</html>')
        return res.end();
    }
    console.log(req);
}

export default requestHandler;
// module.exports = requestHandler;
