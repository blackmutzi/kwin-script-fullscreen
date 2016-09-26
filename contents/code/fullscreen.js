var x = 0;
var y = 0;


workspace.clientActivated.connect(function(client) {
  
  if (client === null) {
    return;
  } 
  
  x = eval( client.geometry.x );
  y = eval( client.geometry.y );
  
  
});
var FullScreenEvent = function (client, fullscreen, user) {
	
	var geometry    = client.geometry;
	var clientPos   = client.clientPos;
    var full        = client.fullScreen;
    var screen      = client.screen;
	
    if (client.fullScreen) 
    {
		geometry.width  = 1920;
	    geometry.height = 1080;
				
		if( x < 1920 )
		{
			geometry.x    = 0;
		    geometry.y    = 0;
		    
		}else{
		
		    geometry.x   = 1920;
		    geometry.y   = 0;	
				
		}
		
    }	
	   client.geometry  = geometry;  
};
workspace.clientFullScreenSet.connect(FullScreenEvent);
