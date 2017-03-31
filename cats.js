var _ = require('lodash');

module.exports = function(app){
    
    var _cats = [
        { 'id': 1, 'name' : 'john', 'color' : 'black'},
        { 'id': 2, 'name' : 'jack', 'color' : 'white'},
    ];

    app.get('/cats', function(req, res){
        res.send(_cats);
    });

    app.get('/cats/:id', function(req, res){ 
        let cat = _.find( _cats, {'id': parseInt(req.params.id) });
        res.send(cat);
    });

    app.post('/cats', function(req, res){ 
        console.log(req.body);
        //_cats.push()
       // res.send(cat);
    });
}