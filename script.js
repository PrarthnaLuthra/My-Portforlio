var navanchor = document.querySelectorAll('.nav-menu a');


for (var i = 0; i < navanchor.length; i++) {
    navanchor[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID)

        var scrollInterval = setInterval(function () {
            var targetCoordinates = targetSection.getBoundingClientRect();
            if (targetCoordinates.top <= 0) {
                clearInterval(scrollInterval);
                return;
            }
            window.scrollBy(0, 50);

        }, 15);
    }
    );
}

// Handling scroll event on window


var progressBars = document.querySelectorAll('.skill-progress >div');
var skillContainer = document.getElementById('skills-container');

window.addEventListener('scroll', checkScroll);
// this is in order to avoid shooting the animations on repeat
var animationDone =false;

function initialiseBars(){
    for (let bar of progressBars ){
        bar.style.width = 0 + '%';
    }
}
initialiseBars();

function fillBars(){
    
    for (let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth =0;
        let increasingWidth = setInterval(function(){
            if(currentWidth>targetWidth){
                clearInterval(increasingWidth)
            }else{
                currentWidth++;
                bar.style.width= currentWidth + '%';
            }
        }, 5);
       
    }
}

function checkScroll() {
    // check if the skill container is visible
    var coordinates = skillContainer.getBoundingClientRect()

    // when scroll bar is visible
    if (!animationDone && coordinates.top <= window.innerHeight) {
        animationDone=true;
        fillBars();

    }else if(coordinates.top> window.innerHeight){
        animationDone=false;
        initialiseBars();
    }

}