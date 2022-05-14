$(document).ready(function () {

    var isEvents = false;
    var siteLocation = window.location;
    if (siteLocation.pathname.endsWith("events/")) {
        var file = "../lang.json"
        var isEvents = true;
    }
    else {
        var file = "lang.json"
    }

    //Get Language JSON file...
    $.getJSON(file, function (data) {

        //checking the preset language
        //if there is not a preset language
        //set preset language γκρικ...
        var displayLang = localStorage.getItem('eleas-thea-displayLang');
        if (!(displayLang == 'en' || displayLang == 'el' || displayLang == 'fr' || displayLang == 'it')) {
            localStorage.setItem('eleas-thea-displayLang', 'el');
            displayLang = 'el';
        }

        //printing preset language into DOM...
        //nav

        $("#lang_nav_menu").html(data.lang_nav_menu[displayLang]);
        $("#lang_nav_gallery").html(data.lang_nav_gallery[displayLang]);
        $("#lang_nav_events").html(data.lang_nav_events[displayLang]);
        $("#lang_nav_lessons").html(data.lang_nav_lessons[displayLang]);
        $("#lang_nav_eshop").html(data.lang_nav_eshop[displayLang]);
        $("#lang_nav_contact").html(data.lang_nav_contact[displayLang]);
        $("#lang_nav_reservation").html(data.lang_nav_reservation[displayLang]);

        $("#lang_nav_menu2").html(data.lang_nav_menu[displayLang]);
        $("#lang_nav_gallery2").html(data.lang_nav_gallery[displayLang]);
        $("#lang_nav_events2").html(data.lang_nav_events[displayLang]);
        $("#lang_nav_lessons2").html(data.lang_nav_lessons[displayLang]);
        $("#lang_nav_contact2").html(data.lang_nav_contact[displayLang]);
        $("#lang_nav_eshop2").html(data.lang_nav_eshop[displayLang]);
        $("#lang_nav_reservation2").html(data.lang_nav_reservation[displayLang]);

        $("#lang_home_view").html(data.lang_home_view[displayLang]);
        $("#lang_owlDetails_1").html(data.lang_owlDetails_1[displayLang]);
        $("#lang_owlDetails_2").html(data.lang_owlDetails_2[displayLang]);
        $("#lang_owlDetails_3").html(data.lang_owlDetails_3[displayLang]);
        $("#lang_spcialities_title").html(data.lang_spcialities_title[displayLang]);
        $("#lang_spcialities_details2").html(data.lang_spcialities_details2[displayLang]);
        $("#lang_spcialities_details").html(data.lang_spcialities_details[displayLang]);
        $("#lang_spcialities_explainer").html(data.lang_spcialities_explainer[displayLang]);
        $("#lang_nav_spcialities").html(data.lang_nav_spcialities[displayLang]);
        $("#lang_nav_appetizer").html(data.lang_nav_appetizer[displayLang]);
        $(".lang_appetizer_menu").html(data.lang_appetizer_menu[displayLang]);
        $(".lang_main_menu").html(data.lang_main_menu[displayLang]);
        $(".lang_dessert_menu").html(data.lang_dessert_menu[displayLang]);
        $("#lang_nav_main").html(data.lang_nav_main[displayLang]);
        $("#lang_nav_dessert").html(data.lang_nav_dessert[displayLang]);

        $("#wedding_lang_title").html(data.wedding_lang_title[displayLang]);
        $("#wedding_lang_text").html(data.wedding_lang_text[displayLang]);
        $("#wedding_lang_learnMore").html(data.cookingClass_lang_learnMore[displayLang]);

        $("#lang_eshop_title").html(data.lang_eshop_title[displayLang]);
        $("#lang_eshop_explainer").html(data.lang_eshop_explainer[displayLang]);

        $("#lang_reservation_title").html(data.lang_reservation_title[displayLang]);
        $("#lang_reservation_text").html(data.lang_reservation_text[displayLang]);
        $("#lang_reservation_fullname").html(data.lang_reservation_fullname[displayLang]);
        $("#lang_reservation_email").html(data.lang_reservation_email[displayLang]);
        $("#lang_reservation_phone").html(data.lang_reservation_phone[displayLang]);
        $("#lang_reservation_date").html(data.lang_reservation_date[displayLang]);

        $("#lang_reservation_option_persons").attr("placeholder", data.lang_reservation_option_persons[displayLang]);

        $("#lang_reservation_btn").html(data.lang_reservation_btn[displayLang]);
        $("#lang_reservation_hint").html(data.lang_reservation_hint[displayLang]);
        $("#lang_quality_text").html(data.lang_quality_text[displayLang]);

        $("#cookingClass_lang_title").html(data.cookingClass_lang_title[displayLang]);
        $("#cookingClass_lang_text").html(data.cookingClass_lang_text[displayLang]);
        $("#cookingClass_lang_learnMore").html(data.cookingClass_lang_learnMore[displayLang]);

        $("#lang_messaage_name").html(data.lang_messaage_name[displayLang]);
        $("#lang_messaage_email").html(data.lang_messaage_email[displayLang]);
        $("#lang_messaage_phone").html(data.lang_messaage_phone[displayLang]);
        $("#lang_messaage_urmessage").html(data.lang_messaage_urmessage[displayLang]);
        $("#lang_messaage_description").attr("placeholder", data.lang_messaage_description[displayLang]);
        $("#lang_messaage_btn").html(data.lang_messaage_btn[displayLang]);

        $("#lang_ajax_wait").html(data.lang_ajax_wait[displayLang]);
        $("#lang_ajax_success").html(data.lang_ajax_success[displayLang]);
        $("#lang_ajax_error").html(data.lang_ajax_error[displayLang]);
        $("#lang_ajax_ok").html(data.lang_ajax_ok[displayLang]);

        $("#lang_contact_location").html(data.lang_contact_location[displayLang]);
        $("#lang_contact_schedule_summer").html(data.lang_contact_schedule_summer[displayLang]);

        //Events
        if (isEvents) {
            $("#lang_eventsBanner_title").html(data.lang_eventsBanner_title[displayLang]);
            $("#lang_eventsBanner_subTitle").html(data.lang_eventsBanner_subTitle[displayLang]);

            $("#lang_eventsBannerSecondTitle").html(data.lang_eventsBannerSecondTitle[displayLang]);
            $("#lang_eventsBannerSecondSubTitle").html(data.lang_eventsBannerSecondSubTitle[displayLang]);

            $("#lang_eventsBannerThirdTitle").html(data.lang_eventsBannerThirdTitle[displayLang]);
            $("#lang_eventsBannerThirdSubTitle").html(data.lang_eventsBannerThirdSubTitle[displayLang]);

            $("#lang_eventsBannerFourthTitle").html(data.lang_eventsBannerFourthTitle[displayLang]);
            $("#lang_eventsBannerFourthSubTitle").html(data.lang_eventsBannerFourthSubTitle[displayLang]);

            $("#lang_eventsBannerFivethTitle").html(data.lang_eventsBannerFivethTitle[displayLang]);
            $("#lang_eventsBannerFivethSubTitle").html(data.lang_eventsBannerFivethSubTitle[displayLang]);

            $("#lang_eventsBannerSixthTitle").html(data.lang_eventsBannerSixthTitle[displayLang]);
            $("#lang_eventsBannerSixthSubTitle").html(data.lang_eventsBannerSixthSubTitle[displayLang]);
        }
    });

    //listen to change language events...
    $("#langSelector-en").on("click", function () {
        localStorage.setItem('eleas-thea-displayLang', 'en');
        location.reload();
    });

    $("#langSelector-el").on("click", function () {
        localStorage.setItem('eleas-thea-displayLang', 'el');
        location.reload();
    })
    $("#langSelector-fr").on("click", function () {
        localStorage.setItem('eleas-thea-displayLang', 'fr');
        location.reload();
    })
    $("#langSelector-it").on("click", function () {
        localStorage.setItem('eleas-thea-displayLang', 'it');
        location.reload();
    })
})