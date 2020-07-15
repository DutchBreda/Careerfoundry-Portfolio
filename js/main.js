// Smooth Scrolling
$('#navbar a, .btn').on('click'), function(event) {
    if(this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body'.animate(
        }
            scrolltop: $(hash).offset().top - 80
        },
        1000
        );
    }
});
