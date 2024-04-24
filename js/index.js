jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
        $('#text_head').text('Загаловок ' + $(this).val())
    });

    $('.select').on('click', '.select__item2', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
        alert($(this).text())
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });

    var data = [
        { id: 1, name: "Параметр 1", flag: 'assets/images/twemoji_flag-russia.svg' },
        { id: 2, name: "Параметр 2", flag: 'assets/images/twemoji_flag-brazil.svg'  },
        { id: 3, name: "Параметр 3", flag: 'assets/images/twemoji_flag-china.svg'  },
        { id: 4, name: "Параметр 4", flag: 'assets/images/twemoji_flag-argentina.svg'  },
        { id: 5, name: "Параметр 5", flag: 'assets/images/twemoji_flag-belarus.svg'  },
    ];
    
    $(document).ready(function(){
        var myList = $("#myList");
        $.each(data, function(index, item) {
            var li = $("<li>").text(item.name).val(item.id);
            var img = $("<img>");
            img.attr("src", item.flag).addClass('select__item_flag');
            li.attr("id", "item-" + item.id).addClass('select__item').prepend(img);;
            myList.append(li);
        });
    });

    $(document).ready(function(){
        var myList = $("#myList2");
        $.each(data, function(index, item) {
            var li = $("<li>").text(item.name).val(item.id);
            var img = $("<img>");
            img.attr("src", item.flag).addClass('select__item_flag');
            li.attr("id", "item-" + item.id).addClass('select__item2').prepend(img);;
            myList.append(li);
        });
    });
});