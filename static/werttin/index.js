/* @license magnet:?xt=urn:btih:8e4f440f4c65981c5bf93c76d35135ba5064d8b7&dn=apache-2.0.txt Apache 2.0 */
timeSince = function(date) {
    var interval, seconds;
    seconds = Math.floor((new Date().getTime() - date) / 1000);
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
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " mins ago";
    }
    return Math.floor(seconds) + " seconds ago";
};

var dateItem = document.getElementsByClassName("from");
for (var i in dateItem) {
    if (dateItem[i].innerHTML != "") {
        dateItem[i].innerHTML = timeSince(new Date(dateItem[i].innerHTML).getTime());
    }
}

hljs.initHighlightingOnLoad();
/* @license-end */
