window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
$(document).ready(function() {
    var target_z = document.getElementsByClassName('item_dinh_bottom')[0].getBoundingClientRect();
    var target_y = document.getElementsByClassName('what_make_us_df_main')[0].getBoundingClientRect();
    $('.icon_dinh_move').find('img').css('transition','none');
    $(window).scroll(function(event) {
        var scrolly = $(window).scrollTop();
        var px_start = target_y.top + 83;
        var px_stop = target_z.top;
        var icon_round = document.getElementsByClassName('icon_round')[0].getBoundingClientRect();
        if (scrolly >= px_start) {
            $('#sticker').hide();
            $('.icon_dinh_move').find('img').show();
            $('.icon_dinh_move').find('img').css('margin-left', icon_round.left - (16 + 16 / 2) + 17);
        }

        if (scrolly < px_start) {
            $('#sticker').show();
            $('.icon_dinh_move').find('img').hide();
        }

        if (scrolly >= px_stop) {
            $('.icon_dinh_move').find('img').hide();
            $('.icon_dinh_bottom').show();
        }

        if (scrolly < px_stop) {
            $('.icon_dinh_bottom').hide();
        }

    });

    $(window).resize(function(){
        var icon_round = document.getElementsByClassName('icon_round')[0].getBoundingClientRect();
        $('.icon_dinh_move').find('img').css('margin-left', icon_round.left - (16 + 16 / 2) + 17);
    });



    // var target_x=target_z.top - target_y.top - 70;
    // console.log(target_x);

    $('.flag_language').bind('click', function() {
        var lang = $(this).attr('data-lang');
        $.ajax({
            type: "POST",
            url: "/home-home-changeLang.html",
            data: {
                lang: lang,
            },
            success: function(data) {
                console.log(data);
                location.reload();
            }
        });
    });

    $('.btn_send_contact').click(function(e) {
        e.preventDefault();
        var inputName = $('#inputName');
        var inputPhone = $('#inputPhone');
        var inputEmail = $('#inputEmail');
        var phone_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        var mail_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (inputName.val().replace(/\s/g, '') == '') {
            alert(inputName.attr('msg-required'));
            return false;
        }
        if (inputPhone.val() == '') {
            alert(inputPhone.attr('msg-required'));
            return false;
        }
        if (phone_regex.test(inputPhone.val()) == false) {
            alert(inputPhone.attr('msg-error'));
            return false;
        }
        if (inputEmail.val() != '' && mail_regex.test(inputEmail.val()) == false) {
            alert(inputEmail.attr('msg-error'));
            return false;
        }
        $('#contact-form').submit();
    });

    $("#contact-form").on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: '/contact-contact-addContact.html',
            data: new FormData(this),
            dataType: 'json',
            contentType: false,
            cache: false,
            processData: false,
            beforeSend: function() {
                $('.btn_send_contact').attr("disabled", "disabled");
            },
            success: function(response) {
                $(".btn_send_contact").removeAttr("disabled");
                if (response.status) {
                    $('#inputName').val('');
                    $('#inputPhone').val('');
                    $('#inputEmail').val('');
                    alert($('#notify_success').val());
                }
            }
        });
    });
});