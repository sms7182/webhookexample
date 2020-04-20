const express = require( 'express' );
const app = express();

const notifier=require('node-notifier')

app.use( express.json() );

app.post( '/', ( req, res ) => {
    console.log( 'received webhook', req.body );
    res.sendStatus( 200 );
} );

app.post('/github/push',function(req,res){
    var githubEvent=req.body;
  
   
   if(githubEvent.pusher&&githubEvent.repository){
       var pushername=githubEvent.pusher.name;
       var  pusheremail=githubEvent.pusher.email;
        var rep=githubEvent.repository;
       notifier.notify("Repository "+rep.name+" comitted with "+pushername+" that pusher email is "+pusheremail);
       
   }
   
   res.send('ok')
})

app.listen( 9000, () => console.log( 'Node.js server started on port 9000.' ) );