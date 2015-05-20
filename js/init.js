/* global Zepto:true */
+function ($) {
  "use strict";

  //初始化页面中的JS组件
  $.initPage = function(page) {
    var $page = $(page);
    if(!$page[0]) $page = $(document.body);
    var $content = $page.find(".content");
    $content.scroller();  //注意滚动条一定要最先初始化
    $.initSwiper($content);
    $.initPullToRefresh($content);
    $.initInfiniteScroll($content);
  };

  //全局配置

  var defaults = $.extend({
    autoInit: true,
    showPageLoadingIndicator: true
  }, $.config);

  if(defaults.autoInit) {
    $(window).on("push", function() {
      $.initPage();
    });
    $(function() {
      $.initPage();
    });
  }

  if(defaults.showPageLoadingIndicator) {
    $(window).on("pushStart", function() {
      $.showIndicator();
    });
    $(window).on("pushAnimationStart", function() {
      $.hideIndicator();
    });
  }



}(Zepto);
