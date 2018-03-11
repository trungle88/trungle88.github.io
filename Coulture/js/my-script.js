jQuery(window).load(function(){
    // jQuery('div[data-type="background"]').each(function(){
    //     var $bgobj = $(this); // assigning the object
    
    //     jQuery(window).scroll(function() {
    //         var yPos = -($(window).scrollTop() / $bgobj.data('speed')); 
            
    //         // Put together our final background position
    //         var coords = '100% '+ yPos + 'px';

    //         // Move the background
    //         $bgobj.css({ backgroundPosition: coords });
    //     }); 
    // });


    $( function() {
      // init Isotope
      var $container = $('.isotope').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        getSortData: {
          name: '.name',
          symbol: '.symbol',
          number: '.number parseInt',
          category: '[data-category]',
          weight: function( itemElem ) {
            var weight = $( itemElem ).find('.weight').text();
            return parseFloat( weight.replace( /[\(\)]/g, '') );
          }
        }
      });

      // filter functions
      var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
          var number = $(this).find('.number').text();
          return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function() {
          var name = $(this).find('.name').text();
          return name.match( /ium$/ );
        }
      };

      // bind filter button click
      $('#filters').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $container.isotope({ filter: filterValue });
      });

      // bind sort button click
      $('#sorts').on( 'click', 'button', function() {
        var sortByValue = $(this).attr('data-sort-by');
        $container.isotope({ sortBy: sortByValue });
      });
      
      // change is-checked class on buttons
      $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $( this ).addClass('is-checked');
        });
      });
      
    }); 

    $('.scroll').click(function(){
      var body = $("html, body");
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });  




    /**
     * Check a href for an anchor. If exists, and in document, scroll to it.
     * If href argument ommited, assumes context (this) is HTML Element,
     * which will be the case when invoked by jQuery after an event
     */
    function scroll_if_anchor(href) {
        href = typeof(href) == "string" ? href : $(this).attr("href");
        
        // You could easily calculate this dynamically if you prefer
        var fromTop = 20;
        
        // If our Href points to a valid, non-empty anchor, and is on the same page (e.g. #foo)
        // Legacy jQuery and IE7 may have issues: http://stackoverflow.com/q/1593174
        if(href.indexOf("#") == 0) {
            var $target = $(href);
            
            // Older browser without pushState might flicker here, as they momentarily
            // jump to the wrong position (IE < 10)
            if($target.length) {
                $('html, body').animate({ scrollTop: $target.offset().top - fromTop });
                if(history && "pushState" in history) {
                    history.pushState({}, document.title, window.location.pathname + href);
                    return false;
                }
            }
        }
    }    

    // When our page loads, check to see if it contains and anchor
    scroll_if_anchor(window.location.hash);

    // Intercept all anchor clicks
    $("body").on("click", ".container-main-menu a", scroll_if_anchor); 


    var stickyOffset = $('.navigation-sticky').offset().top;

    $(window).scroll(function(){
      var sticky = $('.navigation-sticky'),
          scroll = $(window).scrollTop();

      if (scroll >= stickyOffset) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });

    $('.container-main-menu > ul > li').click(function(){
      $('.container-main-menu > ul > li').removeClass('active');
      $( this ).addClass('active');
    });

    $('.mobile-nav-button').click(function(){
      $('.header-right').toggle('slow');
    });
});
