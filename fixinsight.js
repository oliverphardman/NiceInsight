var failurereason = document.getElementById("FailureText").innerHTML + ".";
var errordisp = "ebackground";
if(failurereason != ""){
errordisp = "errorbackground";
}
document.open();
var insertHTML = `
<div class="row align-middle">
    <div class="small-2 large-4 columns"></div>
  <div class="small-8 large-4 columns" id="loginpanel"><br>
  <img id="insightLogo" src="` + chrome.extension.getURL("img/insight.png") + `"><br>
  <div id="` + errordisp + `"><p id="errorText"></p></div><br>
  <form method="POST" action="secure.aspx" id="insightlogin" onsubmit="ShowSpinner();">
  	<input type="text" name="UserName" placeholder="Username">
  	<input type="password" name="Password" placeholder="Password">
  	<input type="hidden" name="__EVENTARGUMENT" value="">
  	<input type="hidden" name="__EVENTTARGET" value="PerformLogin">
  	<input type="hidden" name="__VIEWSTATE" value="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">
  	<input type="hidden" name="__VIEWSTATEENCRYPTED" value="">
  	<input type="hidden" name="hidLogoutReason" value="">
  	<input type="hidden" name="logindelegate" value="">
  	<input type="hidden" name="prUserName" value="">
<div class="spinner" id="spinner">
 <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1" width="64px" height="64px" viewBox="0 0 28 28">
  <!-- 28= RADIUS*2 + STROKEWIDTH -->

  <!-- 3= STROKEWIDTH -->
  <!-- 14= RADIUS + STROKEWIDTH/2 -->
  <!-- 12.5= RADIUS -->
  <!-- 1.5=  STROKEWIDTH/2 -->
  <!-- ARCSIZE would affect the 1.5,14 part of this... 1.5,14 is specific to 270 degress -->
  <g class="qp-circular-loader">
   <path class="qp-circular-loader-path" fill="none" d="M 14,1.5 A 12.5,12.5 0 1 1 1.5,14" stroke-linecap="round"></path>
  </g>
 </svg>
</div>
  </form>
  <button onclick="ShowSpinner();" class="btn forestblue" id="loginButton" type="submit" form="insightlogin"><span>Login</span></button>
  </div>
    <div class="small-2 large-4 columns"></div>
</div>
<script>
function ShowSpinner(){
	document.getElementById("spinner").style.display = "inline-block";
	document.getElementById("loginButton").style.display = "none";
}
function UpdateError(){
	document.getElementById("errorText").innerHTML = "` + failurereason + `";
}
function OnloadManager(){
	UpdateError();
}
window.onload = OnloadManager;
</script>
`;
document.write(insertHTML);
document.title = "Forest School - INSIGHT";
document.close();