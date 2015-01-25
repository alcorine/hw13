/**
 * Created by Жека on 18.01.2015.
 */
var aImages = new Array();
var aURL = new Array();
var aArtists = new Array();
var iPrev = -1;
var iRnd = -1;

aImages[0] = "img/welcome-bg.jpg";
aImages[1] = "img/welcome-bg2.jpg";
aImages[2] = "img/welcome-bg3.jpg";





$(document).ready(function() {


    $("img#bg").load(function()
        {

            $("img#bg").fadeTo(2000,1);



            setTimeout(function()
                {
                    $("#image_description").animate({right: '-=150'}, 1000);
                    $("img#bg").fadeOut(2000);


                    setTimeout(LoadImages,2500);
                }
                ,30000);
        }
    )


    setTimeout(LoadImages,1000);

});

function LoadImage(iNr)
{

    $("img#bg").attr("src", aImages[iNr]);


}

function LoadImages()
{

    /* Select a random image number and make sure this is not equal to the previous image */
    while(iPrev == iRnd)
    {
        iRnd = Math.floor(Math.random()*aImages.length);
    }

    /* Show the selected image */
    LoadImage(iRnd);

    iPrev = iRnd;

}