const express = require('express');
const server = express();
const parser = require('body-parser');
const cors = require('cors');
const setContentHeader = require('./services/utils').setContentHeader;
const productRoutes = require('./routes/productRoutes').productRoutes;
const cartRoutes = require('./routes/cartroutes').cartRoutes;
server.use(parser.json());
// apply cors
server.use(cors());

server.get('/status',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        message: "Server is RUNNING"
    }));
});
server.use('/products',productRoutes);
server.listen(1269,()=>{
    console.log('Server started at 1269');

});