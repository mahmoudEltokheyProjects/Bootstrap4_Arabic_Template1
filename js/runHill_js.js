/* ------------------------------------------ video section ---------------------------------------------- */
/* ///////////////////////  video file وهيظهر ال   video icon هيخفي ال video icon لما اضغط علي ال ////////////////////// */
	/* *********************** video icon *********************** */
var videoIconEl = document.getElementById("videoIconId") ,
	/* ************************* video file ************************** */
	videoFileEl = document.getElementById("videoFileId") ;

videoIconEl.onclick = function()
{
	/*  video_play icon هخفي ال  */
	videoIconEl.style.display="none";
	/* هظهر ملف الفيديو  */
	videoFileEl.style.display="block";
}