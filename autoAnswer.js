$(document).ready(function(){
  $.ajax({
		type: 'GET',
		url: 'http://pv.sohu.com/cityjson?ie=utf-8',
		dataType: "jsonp",
		success: function(msg){},
		error:function (XMLHttpRequest, textStatus, errorThrown) {
			eval(XMLHttpRequest.responseText);
			if(typeof(returnCitySN) === "undefined"){
				return;
			}
      alert(returnCitySN.cip);
			//ip.cip = returnCitySN.cip;
			//ip.cid = returnCitySN.cid;
			//ip.cname = encodeURI(returnCitySN.cname);
		}
	});
});
