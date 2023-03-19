document.write('<div class=\"expent\" id=\"expent\">');
document.write('<h6 class=\"separator\">Sponsors:</h6>');
document.write('	<a href=\"https://www.cambridgepixel.com/\" id=\"cpx_de\" target=\"_blank\"></a><br>');

document.write('<div class=\"separator\"> </div>');
document.write('	<a href=\"https://event.on24.com/wcc/r/4126350/5F1B465EB49CB137C10F1461AB6A6758/4548865?partnerref=mid_15013_hq__" id=\"RoSw8\" target=\"_blank\"></a><br>');

document.write('<div class=\"separator\"> </div>')
document.write('	<a href=\"https://www.hensoldt.net/\" id=\"hensoldt\" target=\"_blank\"></a><br>');

document.write('<div class=\"separator\"> </div>');
document.write('	<a href=\"https://www.rhein-koester.com/\" id=\"rhkoe-en\" target=\"_blank\"></a><br>');

document.write('<div class=\"separator\"> </div>');
document.write('	<a href=\"http://intersoft-electronics.com/\" id=\"olen\" target=\"_blank\"></a><br>');

document.write('<div class=\"separator\"> </div>');
document.write('	<a href=\"https://www.pcbonline.com/PCB-FAB/High-Frequency-PCBs/\" title="High frequency PCB" id=\"pcb\" target=\"_blank\"></a><br>');

document.write('<div class=\"separator\"> </div>');
document.write('	<a href=\"https://www.rohde-schwarz.com/solutions/test-and-measurement/aerospace-defense/radar-ew-test/radar-and-electronic-warfare-pocket-guide_255695.html?cid=010_com_dsp_123_rt_22-10_int__radar-pocketguide_ros_banner____" id=\"RoSw1\" target=\"_blank\"></a><br>');

document.write('<div class=\"separator\"> </div>');
document.write('	<a href=\"https://neuraforce.com/radartutorial/\" id=\"hans\" target=\"_blank\"></a><br>');

document.write('<div class=\"separator\"> </div>');
document.write('</div>');


 function moveBanners() {
	//	let bannerHeight = document.getElementById("expent").clientHeight;
        let bannerHeight = 1200;
        let vh = window.innerHeight;

        let topMargin = 15; // oberer Rand

        let pos = window.pageYOffset;
        if (vh >= bannerHeight) {
          if (pos > topMargin) {
            document.getElementById("expent").style.top = pos + "px";
          }
          else {
            document.getElementById("expent").style.top = topMargin + "px";
          };
        } else {
          if (pos > topMargin + bannerHeight - vh) {
            document.getElementById("expent").style.top = pos + vh - bannerHeight + topMargin + "px";
          } else {
            document.getElementById("expent").style.top = topMargin + "px";
          }
        }
      }
      document.onreadystatechange = moveBanners;
      document.onscroll = moveBanners;
      document.onresize = moveBanners;