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
        _cats.push(req.body)
        res.sendStatus(200);
    });

    app.put('/cats',  function(req, res){
        let index = _.findIndex( _cats, {'id': parseInt(req.body.id) });
        _.merge( _cats[index], req.body);
        res.send(_cats[index]);
    });


    app.delete('/cats/:id',  function(req, res){
       _.remove( _cats, {'id': parseInt(req.params.id) });
       res.send(_cats);
    });


}