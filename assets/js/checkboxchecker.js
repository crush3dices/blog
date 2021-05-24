$(document).ready(function(){
  url = decodeURI(window.location.href);
  content = url.split('?');
  content = content[1];
  params = content.split("&");
  for(tag of params){
    $('.tag_cb[name="'+tag+'"]').prop('checked', true);
  }

  update_posts()
});