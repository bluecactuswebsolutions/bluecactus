module.exports = function() {
  const $ = window.jQuery = require('jquery');

  let page = {
    buildHeader: function() {
      $('#logo').css('width', '80%');
      $('#title2').css('margin', '0').css('font-size', '1.6rem').css('position', 'relative');
      $('.header').css('height', 'auto');
      $('.bar').css('transition-duration', '.2s').css('display', 'block').css('margin-left', '0');
      setTimeout(function() {
        $('.bar').css('transition-duration', '0');
      },3000);
    },
    events: function() {

      let goTop = function() {
        $('.header').css('transition-duration', '.5s').css('margin-top', '-20vh');
        $('.bar').css('transition-duration', '.5s').css('top', '0');
      };

      $(window).on('scroll',function() {
        let y = $(window).scrollTop();
        if (y >= 90) {
          goTop();
        } else {
          $('.header').css('margin-top', '0');
          $('.bar').css('transition-duration', '.5s').css('top', '17%');
        }
        // $('footer').css('bottom', '0');
      });

      $('.navBtn').on('click', function(e) {
        // goTop();
      });

    },
    setUp: function() {
      $('.bar').css('margin-left', '-100%').css('display', 'hidden');
    },
    buildSite: function() {
      this.buildHeader();
      this.events();
    }
  };

  $(window).ready(function() {
    page.setUp();
    setTimeout(function() {
      page.buildSite();
    },100);
  });

};
