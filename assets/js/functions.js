/*
 * @Author: Muhammed mahdy
 * @Date:   2018-08-15
 * @Last Modified by:  Muhammed Mahdy
 * @Description:
 */

window.onload = function () {
    $("a").css('z-index', 100000);
    $('body').on('click', 'p,span,b,li,a,button,:selected,:checked,textarea,h1,h2,h3,h4,h5,h6,input', iShouldSee);
    $('body').on('click', 'select', iShouldSee);
    $('body').on('mousedown', 'td', iShouldSee);
    $('body').on('mouseover', 'a,button', iShouldSee);
    $('body').on('mousemove', '.disabled', iShouldSee);
}

function iShouldSee(e) {
    var $this = $(this);
    var $target = $(e.target);
    var selector = '';
    var steps = '';

    if (this.id) {
        selector = "#"+$this.attr('id');
    } else {
        selector = fullPath(this);
    }

    if ($target.is('a') || $target.is('button')) {
        if (e.type == "click") {
            steps = 'Then I should see "' + $this.text().trim() + '" in the "' + selector + '" element \n';
            steps += 'Then I click on "' + selector + '" \n';
            steps += 'Then the url should match "' + $target.attr("href") + '" \n';
        } else {
            steps = 'Then I should see "' + $this.text().trim() + '" in the "' + selector + '" element';
        }
    }else if ($target.is('input')){
        steps = 'Then the "'+selector+'" field should contain "' + $this.val().trim() + '"';
    } else {
        steps = 'Then I should see "' + $this.text().trim() + '" in the "' + selector + '" element';
    }
    console.log(steps);
    copyStep(steps);
}

function fullPath(el) {
    var names = [];
    while (el.parentNode) {
        if (el.id) {
            names.unshift('#' + el.id);
            break;
        } else {
            if (el == el.ownerDocument.documentElement) names.unshift(el.tagName);
            else {
                for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++) ;
                names.unshift(el.tagName + ":nth-child(" + c + ")");
            }
            el = el.parentNode;
        }
    }
    return names.join(" > ");
}

function copyStep(steps) {
    document.addEventListener('copy', function (e) {
        e.preventDefault();
        if (e.clipboardData) {
            e.clipboardData.setData('text/plain', steps);
        } else if (window.clipboardData) {
            window.clipboardData.setData('Text', steps);
        }
    });
    document.execCommand('copy');
}