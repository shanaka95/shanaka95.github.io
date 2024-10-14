var app = new Vue({
    el: '#app',
    data: {
        currentSlide: 0,
        isPreviousSlide: false,
        isFirstLoad: true,
        slides: [
            {
                headlineFirstLine: "HackX 2018 inter University Hackathon",
                headlineSecondLine: "Organized by University of Kelaniya",
                sublineFirstLine: "Shanaka ",
                sublineSecondLine: "Anuradha",
                bgImg: "img/hackx.jpg",
                buttontext: "HackX 2018"
            },
            {
                headlineFirstLine: "Hackoverflow Hackathon 2023",
                headlineSecondLine: "Organized by BEST Erlangen",
                sublineFirstLine: "Shanaka ",
                sublineSecondLine: "Anuradha",
                bgImg: "img/hackoverflow.jpg",
                buttontext: "Hackoverflow 2023"
            },
            {
                headlineFirstLine: "RealHack 2018 inter University Hackathon",
                headlineSecondLine: "Organized by University of Kelaniya",
                sublineFirstLine: "Shanaka ",
                sublineSecondLine: "Anuradha",
                bgImg: "img/realhack.jpg",
                buttontext: "RealHack 2018"
            },
            {
                headlineFirstLine: "Infotel 2018 Innovation Pavilion",
                headlineSecondLine: "eyeResscue Project",
                sublineFirstLine: "Shanaka ",
                sublineSecondLine: "Anuradha",
                bgImg: "img/infotel.jpg",
                buttontext: "Infotel 2018"
            },
            {
                headlineFirstLine: "Disrupt Asia 2019",
                headlineSecondLine: "Volunteering",
                sublineFirstLine: "Shanaka ",
                sublineSecondLine: "Anuradha",
                bgImg: "img/disruptasia.jpg",
                buttontext: "Disrupt Asia 2019"
            },
            {
                headlineFirstLine: "Nb IoT 2017 Hackathon",
                headlineSecondLine: "Organized by Mobitel",
                sublineFirstLine: "Shanaka ",
                sublineSecondLine: "Anuradha",
                bgImg: "img/my4.jpg",
                buttontext: "Nb IoT 2017"
            },
            {
                headlineFirstLine: "IESL Techno 2017 inter University Hackathon",
                headlineSecondLine: "Organized by IESL",
                sublineFirstLine: "Shanaka ",
                sublineSecondLine: "Anuradha",
                bgImg: "img/techno.jpg",
                buttontext: "Techno 2017"
            },
            {
                headlineFirstLine: "iHack 2017 inter University Hackathon",
                headlineSecondLine: "Organized by UCSC",
                sublineFirstLine: "Shanaka ",
                sublineSecondLine: "Anuradha",
                bgImg: "img/ihack.jpg",
                buttontext: "iHack 2017"
            },
            {
                headlineFirstLine: "Cloud Hack 2017 inter University Hackathon",
                headlineSecondLine: "Organized by UCSC",
                sublineFirstLine: "Shanaka ",
                sublineSecondLine: "Anuradha",
                bgImg: "img/cloudhack.jpg",
                buttontext: "CloudHack 2017"
            }

        
    
        ]
    },
  mounted: function () {
    var productRotatorSlide = document.getElementById("app");
        var startX = 0;
        var endX = 0;

        productRotatorSlide.addEventListener("touchstart", (event) => startX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchmove", (event) => endX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchend", function(event) {
            var threshold = startX - endX;

            if (threshold < 150 && 0 < this.currentSlide) {
                this.currentSlide--;
            }
            if (threshold > -150 && this.currentSlide < this.slides.length - 1) {
                this.currentSlide++;
            }
        }.bind(this));
  },
    methods: {
        updateSlide(index) {
            index < this.currentSlide ? this.isPreviousSlide = true : this.isPreviousSlide = false;
            this.currentSlide = index;
            this.isFirstLoad = false;
        }
    }
})
var s=0;
var l=7;
//     setTimeout(function(){
        
// }, 2000);
setInterval(function(){ 
    if (app.currentSlide<l){
        app.currentSlide+=1; 
    }
    else{
        app.currentSlide=0;
    }

}, 5000);
