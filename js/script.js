var app = {

    init: function(){
        $('.start').addClass('start-animation');
        this.initEvent();
    },
    initEvent: function(){
        $('.navigation-item').click(function(){
            var $this = $(this),
                value = $this.attr('data-value'),
                elementClone = $this.clone();

            $.ajax({
                url: '/html/' + value + '.html',
                success: function(data){
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
            
            $('body').append(elementClone);

            elementClone.addClass('transition-highlight');
            requestAnimationFrame(function(){
                elementClone.addClass('highlight');
            });
        });
    }
};

$(document).ready(function(){
    app.init();
});