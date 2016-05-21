(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();a = s.createElement(o),
  m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-6523016-1', 'auto');
ga('send', 'pageview');

var tol = function(evt) {
  evt.preventDefault();
  var url = evt.currentTarget.href;
  if (!url) return;
  ga('send', 'event', 'outbound', 'click', url, {
    'hitCallback': function() {
      document.location.assign(url);
    }
  });
}

var links = document.querySelectorAll('.js-outbound');
for (var i = 0, len = links.length; i < len; i++) {
  links[i].onclick = tol;
}
