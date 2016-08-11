$(document).ready(function(){
	$(".albumCover").each(function(index){
		var path = $(this).attr("data-path");
		var count = parseInt($(this).attr("data-count"));
		var albumPhoto = $("<div> </div>");
		albumPhoto.addClass("albumPhoto");

		$("#albumsPhotos").append(albumPhoto);
		for(var i=0; i<count; i++)
		{
			var img = $("<img> </img>");
			img.attr("src", path+(i+1)+".jpg");
			albumPhoto.append(img);
		}
	});


	var ob;
	$(".albumPhoto img").click(function(){
			ob=$(this);
			changeCurrentImage(ob);
	});

	$("#right").click(function(){
		if(ob.index()==ob.parent().children().length-1)
			ob = ob.parent().children(":first");
		else
			ob = ob.next();

		changeCurrentImage(ob);
	});
	$("#left").click(function(){
		if(ob.index()!=0)
			ob = ob.prev();
		else
			ob=ob.parent().children().last();
			changeCurrentImage(ob);
	});

	$(".albumCover").click(function(){
			$("#showAllPictures").show(200);
			$("#mainFrameContainer").show(50);
			$(".albumCover").css({opacity:1});
			$(this).css({opacity:0.4});	
			var a = parseInt($(this).index())-1;
			$(".albumPhoto").each(function(index){
			if(index!=a)
				$(this).hide(600);
			else
			{
				//$(this).show(600);
				ob = $(this).children(":first");
				changeCurrentImage(ob);
			} 
			});
		});

	function changeCurrentImage(ob)
	{
		$("#mainFrame").fadeTo(250, 0, function(){
				var img = new Image();
				img.onload = function(){
				var imgWidth =  img.width;
				var imgHeight = img.height;
				var marginLeft = parseInt($("#mainFrameContainer").css("width"))/2-imgWidth/2;
				$("#mainFrame").css({width:imgWidth+"px", height:imgHeight+"px",
				 marginLeft:marginLeft+"px"});
			}
			img.src = ob.attr("src");
				$("#mainFrame").attr("src", ob.attr("src")).fadeTo(500, 1);
			});
			
			$("#counter").text(ob.index()+1+"/"+ob.parent().children().length);
			$(".albumPhoto img").css({borderColor:"RGB(150,150,150)"});
			ob.css({borderColor: "green"});
	}

	$(".albumPhoto img").hover(function(){
			$(this).animate({opacity:0.5}, 200);
		}, function(){
				$(this).animate({opacity:1}, 10);
		});

	$("#showAllPictures").click(function(){
		ob.parent().toggle(400);
	});
});