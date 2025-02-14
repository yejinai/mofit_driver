$(function(){
  $('.gradient.introtxt').each(function () {
    const text = $(this).text(); // 부모의 텍스트 가져오기
    $(this).css({
      '--before-content': `"${text}"`, // CSS 변수 설정
      '--after-content': `"${text}"`,
    });
  });

  // CSS 스타일 동적으로 추가
  $('<style>').prop('type', 'text/css').html(`
    .gradient.introtxt::before {
      content: var(--before-content); /* before에 텍스트 삽입 */
    }
    .gradient.introtxt::after {
      content: var(--after-content); /* after에 텍스트 삽입 */
    }
  `).appendTo('head');

  // 화면에 보이는 섹션을 체크
  function checkVisibility() {
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();

    // 적용할 클래스 배열
    var classes = ['.effect', '.subeffect', '.subeffect2'];
    var visibilityThresholds = [0.7, 0.7, 0.5];

    // 각 클래스에 대해 처리
    classes.forEach(function(selector, index) {
        var threshold = visibilityThresholds[index];

        $(selector).each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();

            if (elementTop < (scrollTop + windowHeight * threshold) && elementBottom > scrollTop) {
                $(this).addClass('visible');
            } else {
                $(this).removeClass('visible');
            }
        });
    });

    var showmenu1 = false;
    var showmenu2 = false;
    var showmenu3 = false;
    var showmenu4 = false;

    $('#MotifDrive').each(function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        if (elementTop < (scrollTop + windowHeight * 0.5) && elementBottom > scrollTop) {
          showmenu1 = true; // test가 보이면 활성화 플래그 설정
        }
    });
    $('#Products').each(function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        if (elementTop < (scrollTop + windowHeight * 0.5) && elementBottom > scrollTop) {
          showmenu2 = true; // test가 보이면 활성화 플래그 설정
        }
    });
    $('#team').each(function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        if (elementTop < (scrollTop + windowHeight * 0.5) && elementBottom > scrollTop) {
          showmenu3 = true; // test가 보이면 활성화 플래그 설정
        }
    });
    $('#contact').each(function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        if (elementTop < (scrollTop + windowHeight * 0.5) && elementBottom > scrollTop) {
          showmenu4 = true; // test가 보이면 활성화 플래그 설정
        }
    });

    if (showmenu1) {
        $('.s1').addClass('visible');
        $('.s2').removeClass('visible');
        $('.s3').removeClass('visible');
        $('.s4').removeClass('visible');
    } else {
        $('.s1').removeClass('visible');
    }
    if (showmenu2) {
        $('.s2').addClass('visible');
        $('.s1').removeClass('visible');
        $('.s3').removeClass('visible');
        $('.s4').removeClass('visible');
    } else {
        $('.s2').removeClass('visible');
    }
    if (showmenu3) {
        $('.s3').addClass('visible');
        $('.s1').removeClass('visible');
        $('.s2').removeClass('visible');
        $('.s4').removeClass('visible');
    } else {
        $('.s3').removeClass('visible');
    }
    if (showmenu4) {
        $('.s4').addClass('visible');
        $('.s1').removeClass('visible');
        $('.s2').removeClass('visible');
        $('.s3').removeClass('visible');
    } else {
        $('.s4').removeClass('visible');
    }
  }

  // 페이지가 로드되면 바로 실행
  checkVisibility();

  // 스크롤 이벤트
  $(window).on('scroll', function() {
    checkVisibility();

    // 현재 스크롤 위치
    var scrollTop = $(window).scrollTop();

    if (scrollTop > 0) {
        // 페이지가 최상단이 아닌 경우
        $('#menu').css('background', 'rgba(0, 0, 0, 0.85)');
        $('#mMenu').css('background', 'rgba(0, 0, 0, 0.85)');
    } else {
        // 페이지가 최상단인 경우
        $('#menu').css('background', 'rgba(0, 0, 0, 0)');
        $('#mMenu').css('background', 'rgba(0, 0, 0, 0)');
    }
  });

  $('a[href^="#"]').on('click', function(event) {
    var target = $($(this).attr('href')); // 이동할 대상
    if (target.length) { // 같은 페이지 내의 요소인지 확인
      event.preventDefault(); // 기본 동작 방지
  
      // transform 영향을 제거한 위치 계산
      var targetOffset = target.offset().top;
      var translateY = parseFloat(target.css('transform').split(',')[5]) || 0; // transform의 translateY 값 가져오기
  
      // 정확한 위치로 스크롤
      $('html, body').animate({
        scrollTop: targetOffset - translateY - 150 // 원래 위치 - translateY - 150px
      }, 500); // 0.5초 동안 스크롤
    }
  });

  let mobilemenu = false;

$('.mobilemenu').on('click', function() {
  mobilemenu = !mobilemenu;
  if (mobilemenu) {
    $(this).find("i").removeClass("fa-bars").addClass("fa-xmark");
    mobilemenu = true;
    $('#mMenu').addClass('on');
  }
  else{
    $(this).find("i").removeClass("fa-xmark").addClass("fa-bars");
    $('#mMenu').removeClass('on');
  }
});
})


document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('intro-video');

    // 비디오 에러 발생 시에만 error 클래스 추가
    video.addEventListener('error', function() {
        video.classList.add('error');
    });
});