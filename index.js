$(function($) {
  var openWiki, openWikiPageHash, search, url;
  openWikiPageHash = function() {
    var wikiPage;
    wikiPage = new RegExp("/wiki/([^&]*)", "i").exec(location.hash);
    if (wikiPage != null) {
      $("#s").val(wikiPage[1].replace(new RegExp("_", "g"), " "));
      return openWiki(wikiPage[1], true);
    }
  };
  search = function(query, process) {
    return $.getJSON(url + "w/api.php?callback=?", {
      format: "json",
      action: "opensearch",
      search: query,
      suggest: true,
      limit: 100
    }, function(response) {
      return process(response[1]);
    });
  };
  openWiki = function(page, history) {
    $("base").attr("href", url + "wiki/" + page);
    $("#content").hide().empty();
    $("#loading").show();
    if (!history) {
      location.hash = "/wiki/" + page;
    }
    return $.getJSON(url + "w/api.php?callback=?", {
      action: "mobileview",
      format: "json",
      page: page,
      sections: "all"
    }, function(response) {
      var content, title;
      if (response.mobileview.normalizedtitle != null) {
        title = response.mobileview.normalizedtitle;
      } else {
        title = page;
      }
      content = "";
      content += "<h1 class=\"page-header\">" + title + "</h1>\n";
      response = response.mobileview.sections;
      $.each(response, function(key, value) {
        key *= 1;
        if (value.toclevel === 1) {
          if (key !== 1) {
            content += "</details>";
          }
          return content += "<details id=\"" + value.line + "\" class=\"panel panel-default\">\n<summary class=\"panel-heading\"><span class=\"panel-title\">" + value.line + "</span></summary>\n<div class=\"panel-body>\"" + value.text.replace("class=\"", "class=\"hide ") + "</div>\n";
        } else {
          return content += value.text + "\n";
        }
      });
      content += "</details>";
      $("#content").html(content);
      $("#content, #loading").toggle();
      if (!$.fn.details.support) {
        return $("details").details();
      }
    });
  };
  if (localStorage["wikiURL"] == null) {
    localStorage["wikiURL"] = "http://en.wikipedia.org/";
  }
  url = localStorage["wikiURL"];
  openWikiPageHash();
  $("#back").click(function() {
    history.back();
    openWikiPageHash();
    return false;
  });
  $("#forward").click(function() {
    history.forward();
    openWikiPageHash();
    return false;
  });
  $("#newTab").click(function(event) {
    window.open(url + "wiki/" + $("#s").val(), "_newtab");
    return event.preventDefault();
  });
  $("#s").keypress(function() {
    return $("#s").typeahead({
      source: search,
      items: 10
    });
  });
  $("#content").on("click", "a[href^='/wiki/'], a[href^='" + url + "wiki/'], a[href^='" + url.replace("https:", "http:") + "wiki/']", function(event) {
    var href, page;
    href = this.href.split("/");
    page = decodeURIComponent(href[href.length - 1]);
    if (page === "") {
      page = decodeURIComponent(href[href.length - 2]);
    }
    $("#s").val(page.replace(new RegExp("_", "g"), " "));
    openWiki(page);
    return event.preventDefault();
  });
  $("#content").on("click", "a:not(a[href^='/wiki/'], a[href^='" + url + "wiki/'], a[href^='" + url.replace("https:", "http:") + "wiki/'], a[href='options.html'])", function(event) {
    window.open(this.href, "_newtab");
    return event.preventDefault();
  });
  $("a[href='options.html']").click(function() {
    return $("base").attr("href", "");
  });
  return $("#search").submit(function(event) {
    openWiki($("#s").val());
    return event.preventDefault();
  });
});
