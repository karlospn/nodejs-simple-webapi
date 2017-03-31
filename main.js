

module.exports = function(app){

    app.get('/', function(req, res){
        res.send('Main GET endpoint not implemented');
    });

    app.post('/', function(req, res){
        res.send('Main POST endpoint not implemented');
    });

    app.put('/', function(req, res){
        res.send('Main PUT endpoint not implemented');
    });

   app.delete('/', function(req, res){
        res.send('Main DELETE endpoint not implemented');
    });
}