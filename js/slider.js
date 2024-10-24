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
                bgImg: "https://res.cloudinary.com/dmaqtexrq/image/upload/c_scale,w_auto/f_auto/q_auto/hackx_vpuzcj.jpg",
                buttontext: "HackX 2018"
            },
            {
                headlineFirstLine: "Hackoverflow Hackathon 2023",
                headlineSecondLine: "Organized by BEST Erlangen",
                sublineFirstLine: "Shanaka ",
                sublineSecondLine: "Anuradha",
                bgImg: "https://res.cloudinary.com/dmaqtexrq/image/upload/c_scale,w_auto/f_auto/q_auto/portfolio/hackoverflow_1_j6wq5l.jpg",
                buttontext: "Hackoverflow 2023"
            },
            {
                headlineFirstLine: "RealHack 2018 inter University Hackathon",
                headlineSecondLine: "Organized by University of Kelaniya",
                sublineFirstLine: "Shanaka ",
                sublineSecondLine: "Anuradha",
                bgImg: "https://res.cloudinary.com/dmaqtexrq/image/upload/c_scale,w_auto/f_auto/q_auto/realhack_ewiku4.jpg",
                buttontext: "RealHack 2018"
            },
            {
                headlineFirstLine: "Infotel 2018 Innovation Pavilion",
                headlineSecondLine: "eyeResscue Project",
                sublineFirstLine: "Shanaka ",
                sublineSecondLine: "Anuradha",
                bgImg: "https://res.cloudinary.com/dmaqtexrq/image/upload/c_scale,w_auto/f_auto/q_auto/infotel_datwyx.jpg",
                buttontext: "Infotel 2018"
            },
            {
                headlineFirstLine: "Disrupt Asia 2019",
                headlineSecondLine: "Volunteering",
                sublineFirstLine: "Shanaka ",
                sublineSecondLine: "Anuradha",
                bgImg: "https://res.cloudinary.com/dmaqtexrq/image/upload/c_scale,w_auto/f_auto/q_auto/disruptasia_kzl18s.jpg",
                buttontext: "Disrupt Asia 2019"
            },
            {
                headlineFirstLine: "Nb IoT 2017 Hackathon",
                headlineSecondLine: "Organized by Mobitel",
                sublineFirstLine: "Shanaka ",
                sublineSecondLine: "Anuradha",
                bgImg: "https://res.cloudinary.com/dmaqtexrq/image/upload/c_scale,w_auto/f_auto/q_auto/my4_oovcg5.jpg",
                buttontext: "Nb IoT 2017"
            },
            {
                headlineFirstLine: "IESL Techno 2017 inter University Hackathon",
                headlineSecondLine: "Organized by IESL",
                sublineFirstLine: "Shanaka ",
                sublineSecondLine: "Anuradha",
                bgImg: "https://res.cloudinary.com/dmaqtexrq/image/upload/c_scale,w_auto/f_auto/q_auto/techno_n1oun1.jpg",
                buttontext: "Techno 2017"
            },
            {
                headlineFirstLine: "iHack 2017 inter University Hackathon",
                headlineSecondLine: "Organized by UCSC",
                sublineFirstLine: "Shanaka ",
                sublineSecondLine: "Anuradha",
                bgImg: "https://res.cloudinary.com/dmaqtexrq/image/upload/c_scale,w_auto/f_auto/q_auto/ihack_oenmyk.jpg",
                buttontext: "iHack 2017"
            },
            {
                headlineFirstLine: "Cloud Hack 2017 inter University Hackathon",
                headlineSecondLine: "Organized by UCSC",
                sublineFirstLine: "Shanaka ",
                sublineSecondLine: "Anuradha",
                bgImg: "https://res.cloudinary.com/dmaqtexrq/image/upload/c_scale,w_auto/f_auto/q_auto/cloudhack_c6dsi8.jpg",
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
