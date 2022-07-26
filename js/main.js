// ========Active navbar
let nav = document.querySelector('.navigation-wrap');
window.onscroll = function () {
    if (document.documentElement.scrollTop > 200 ) {
        nav.classList.add('scroll-on');
    } else {
        nav.classList.remove('scroll-on');
    }
}



// =======Hide nav without clicking toggler
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
    a.addEventListener('click', function () {
        navCollapse.classList.remove('show');
    })
})


// =============== Counter design
let counter = document.addEventListener('DOMContentLoaded', () => {
    function counter (id, start, end, duration) {
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end) {
                clearInterval(timer);
            }
        }, step);
    }
    counter('count1', 343, 1234, 7000);
    counter('count2', 2234, 4234, 4000);
    counter('count3', 456, 3234, 4700);
    counter('count4', 2312, 6234, 6000);

})