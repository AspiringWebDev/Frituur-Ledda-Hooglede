var show = document.getElementById("nav-links");
    function showMenu(){
        show.style.right = "0";       
    }

    var hide = document.getElementById("nav-links");
    function hideMenu(){
        show.style.right = "-200px";       
    }

    

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: [
          "<i class='fa fa-caret-left'></i>",
          "<i class='fa fa-caret-right'></i>"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 4
          }
        }
      })


    