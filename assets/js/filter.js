var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function update_posts(){

	$('.tag_cb').each(function(){
		set_visibility($(this).attr('name'), $(this).is(':checked'))
	});
}

function set_visibility(name, visible){
	$("section[id="+name+"]").each(function(){
		if (visible){
			$(this).show(300)
		}
		else
		{
			$(this).hide(300)
		}
	})
}

function check_all(){
	$(".tag_cb").each(function(){
		$(this).prop('checked', true);
	});
	update_posts();
}

function uncheck_all(){
	$(".tag_cb").each(function(){
		$(this).prop('checked', false);
	});
	update_posts();
}

$(document).ready(function(){
  url = decodeURI(window.location.href);
  content = url.split('?');
  content = content[1];
  params = content.split("&");
  for(tag of params){
    $('.tag_cb[name="'+tag+'"]').prop('checked', true);
  }
  update_posts();
});