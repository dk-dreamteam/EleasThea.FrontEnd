$(document).ready(function () {
    var siteLocation = window.location;
    if (siteLocation.pathname.endsWith("events/")) {
        var folder = "../images/gallery_images/";
    } else {
        var folder = "images/gallery_images/";
    }

    //$.ajax({
    //    url: folder,
    //    success: function (data) {
    //        $(data).find("a").attr("href", function (i, val) {
    //            if (val.match(/\.(jpe?g|png|gif)$/)) {
    //                $('#appendDiv').append('<div><img class="imgFromGal" lazy-src="' + folder + val + '" /></div>');
    //            }
    //        });
    //    },
    //    async: false
    //});

/*1os tropos*/

    for (var i = 1; i <= 45; i++) {
        if (i != 7) {
            $('#appendDiv').append('<div><img class="imgFromGal" lazy-src="'+ folder + i + '.jpg" /></div>');
        }
    }


/*2os tropos doesnt work*/

    /*var folder = "images/gallery_images/";
    var $opts = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }

   *//* $('.gallerySlide').unslick();*//*



    $.ajax({
        url: folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    $("#appendDiv").append("<div><img class='imgFromGal' lazy-src='" + folder + val + "'></div>");
                }
            });
        
            *//*$('.gallerySlide').slick($opts);*//*
        }
    });*/


/*3os tropos doesnt work*/

    /*var xhr = new XMLHttpRequest();
    xhr.open("GET", "images/gallery_images/", true);
    xhr.responseType = 'document';
    xhr.onload = () => {
        if (xhr.status === 200) {
            var elements = xhr.response.getElementsByTagName("a");
            for (x of elements) {
                if (x.href.match(/\.(jpe?g|png|gif)$/)) {

                    $("#appendDiv").append("<div><img class='imgFromGal' lazy-src='" + x.href + "'></div>");
                }
            };
        }
        else {
            alert('Request failed. Returned status of ' + xhr.status);
        }
    }
    xhr.send()*/

/*4os tropos*/

    /*$('.slider').slick('slickRemove');

    var folder = "images/gallery_images/";

    var x = "<div class='gallerySlide d-flex flex-column justify-content-center' data-role='page' id='gallery'><i class='fas fa-times closeCookingClassesSlide-btn closeGalleryBtn'></i><div id='appendDiv' class='imageGallery psGallery'></div></div>";
    $("#append2").append(x);

    $.ajax({
        url: folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    $("#appendDiv").append("<div><img class='imgFromGal' lazy-src='" + folder + val + "'></div>");
                }
            });
            $('.slider').slick('slickAdd', $html);
        }
    });*/
});