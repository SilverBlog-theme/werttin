/* @license magnet:?xt=urn:btih:8e4f440f4c65981c5bf93c76d35135ba5064d8b7&dn=apache-2.0.txt Apache 2.0 */
(function() {
  var timeSince;

  timeSince = function(date) {
    var interval, seconds;
    seconds = Math.floor((new Date() - date) / 1000);
    interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }
    return "Today";
  };

  $(function() {
    $('.date').each(function(idx, item) {
      console.log(String(idx) + ', ' + String(item));
      var $date, date, timeStr, unixTime;
      $date = $(item);
      timeStr = $date.data('time');
      if (timeStr) {
        date = new Date(timeStr);
        return $date.prop('title', date).find('.from').text(timeSince(date));
      }
    });
    $('pre code').each(function(i, block) {
      return hljs.highlightBlock(block);
    });
  });
}).call(this);
/* @license-end */
