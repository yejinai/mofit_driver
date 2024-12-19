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

    // effect 클래스에 대해 visible 추가
    $('.effect').each(function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        
        // 화면에 70% 정도 보일 때
        if (elementTop < (scrollTop + windowHeight * 0.7) && elementBottom > scrollTop) {
            $(this).addClass('visible');
        }
    });

    // subeffect 클래스에 대해 visible 추가
    $('.subeffect').each(function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        
        // 화면에 70% 정도 보일 때
        if (elementTop < (scrollTop + windowHeight * 0.7) && elementBottom > scrollTop) {
            $(this).addClass('visible');
        }
    });

    // subeffect2 클래스에 대해 visible 추가
    $('.subeffect2').each(function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        
        // 화면에 70% 정도 보일 때
        if (elementTop < (scrollTop + windowHeight * 0.55) && elementBottom > scrollTop) {
            $(this).addClass('visible');
        }
    });
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
      $('html, body').animate({
        scrollTop: target.offset().top - 150 // 100px 위로 조정
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