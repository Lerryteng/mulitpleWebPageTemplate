/**
 * Created by tengteng on 18/3/18.
 */

/* name module */

;(function ($, w, d) {

  'use strict';

  /* do something */
  $(function () {

    // 试验示范点击交互
    $('.special .item').click(function () {
      var that = $(this);
      $('.special .item').removeClass('active');
      that.addClass('active');
    });

    // 视频区滚动
    $(".scroll-horizontal").cxScroll();

  });
}(jQuery, window, document));
