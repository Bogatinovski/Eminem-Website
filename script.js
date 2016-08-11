$(document).ready(function(){
	
	$(".additionalAlbumInfo").hide();

	$("#albums li").click(function(){
		$("#albums li").removeClass("selected");
		$(this).addClass("selected");
		$(".additionalAlbumInfo").hide();

		var a = parseInt($(this).index())+1;
		$("article").each(function(index){
			if(index!=a && index!=0)
				$(this).hide(600);
			else $(this).show(600);
			});
		});
		
		$("tr").click(function(){
			$("tr").removeClass("selected");
			$(this).addClass("selected");

				$(".audio").remove();
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var td2 = document.createElement("td");
				var source = $(this).attr("data-source");
				console.log(source);
				var audio = new Audio(source);
				audio.controls=true;
				tr.className="audio";
				tr.appendChild(td1);
				tr.appendChild(td2);
				td2.appendChild(audio);
				$(this).after(tr);			
		});

		$(".aboutAlbum").click(function(){
			$(this).next().show(600);
		});

/// Hover Album Cover begin
		$(".albumCover").hover(function(){
			$(this).animate({ borderWidth:"4px"}, 200);
		}, function(){
			$(this).animate({ borderWidth:"2px"}, 200);
		});
		
		$(".albumCover .thumbnail, .albumPhoto img").hover(function(){
			$(this).animate({opacity:0.5}, 200);
		}, function(){
				$(this).animate({opacity:1}, 10);
		});

/// Hover Album Cover end
});
