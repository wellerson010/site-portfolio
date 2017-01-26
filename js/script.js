var app = {

    backToHome: function () {
        $('#content-site').empty();
        $('#element-clone').css('z-index', '9999').removeClass('highlight').on('transitioend webkitTransitionEnd', function (evt) {
            if (evt.originalEvent.propertyName == 'width') {
                $(this).remove();
            }
        });
        $('#btn-back').removeClass('active');
    },
    clickItemNavigation: function () {
        var $this = $(this),
            value = $this.attr('data-value'),
            elementClone = $this.clone();

        $.ajax({
            url: '/html/' + value + '.html',
            success: function (data) {
                $('#content-site').html(data);
            }
        });

        elementClone.css({
            width: $this.outerWidth(),
            backgroundImage: $this.css('background-image'),
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: $this.offset().left
        });

        elementClone.attr('id', 'element-clone');

        $('body').append(elementClone);

        $('#btn-back').addClass('active');
        elementClone.addClass('transition-highlight');
        requestAnimationFrame(function () {
            elementClone.addClass('highlight');
        });
    },
    init: function () {
        $('.start').addClass('start-animation');
        this.initEvent();
    },
    initEvent: function () {
        $('.navigation-item').click(app.clickItemNavigation);

        $('#btn-back').click(app.backToHome);
    }
};

app.init();