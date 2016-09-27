var x = 0;
var y = 0;
var screen_resolution_width  = 1920;
var screen_resolution_height = 1080;

workspace.clientActivated.connect(function(client) {
  
  if (client === null) 
  {
      return;      
  }
	
  if( client.caption != "plugin-container" )
  {
	  
      x = eval( client.geometry.x );
      y = eval( client.geometry.y );
  
     
  }else
  {
	 /* print("is a plugin-container");*/
	  
	 FullScreenEvent( client , true , false );
  }
  
});

var FullScreenEvent = function (client, fullscreen, user) {
	
	/* print("fullscreen Event started"); */
 	
	var geometry    = client.geometry;
	var clientPos   = client.clientPos;
    var full        = client.fullScreen;
    var screen      = client.screen;
	
    if (client.fullScreen) 
    {
		geometry.width  = screen_resolution_width;
	    geometry.height = screen_resolution_height;
				
		if( x < screen_resolution_width )     /* Monitor 1 */
		{
			geometry.x    = 0;
		    geometry.y    = 0;
		    
		}else if( x > screen_resolution_width && x < screen_resolution_width * 2 )  /* Monitor 2 */
		{
		
		    geometry.x   = screen_resolution_width ;
		    geometry.y   = 0;	
				
		}else{								  /* Monitor 3 */
			
			geometry.x  = screen_resolution_width * 2;
			geometry.y  = 0;
		}
    }	
	
	/* update geometry */   
    client.geometry  = geometry;  
};
workspace.clientFullScreenSet.connect(FullScreenEvent);
