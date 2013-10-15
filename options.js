// Generated by CoffeeScript 1.6.3
$(function($) {
  $("#content").submit(function(event) {
    var wikiURL;
    wikiURL = $("#wikiURL").val().replace("https:", "http:");
    if (wikiURL[wikiURL.length - 1] !== "/") {
      wikiURL += "/";
    }
    localStorage["wikiURL"] = wikiURL;
    localStorage["wikiTheme"] = $("#wikiTheme").val();
    location.replace("index.html");
    return event.preventDefault();
  });
  $("#wikiTheme").change(function() {
    return $("link").attr("href", $("#wikiTheme").val());
  });
  $("#wikiURL").val(localStorage["wikiURL"]);
  return $("#wikiTheme").val(localStorage["wikiTheme"]);
});
