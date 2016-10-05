var homeworkCount = "";
if (location.pathname.substring(1) == "Info.aspx") {
    homeworkCount = document.getElementById("newAssignments").innerHTML;
    //Get latest FRS
    var frslist = "";
    var studentImage = document.getElementById("imgSelected").src;
    var studentName = document.getElementById("imgSelected").title;
    //for (i = 0; i < document.getElementsByClassName("list-group-item").length; i++) { 
    //    frslist = frslist + document.getElementsByClassName("list-group-item")[i].innerHTML + "<br>";
    //}
    frslist = document.getElementById("behaviourlistticker").innerHTML;
    frslist = frslist.replace(/Commendation/g, "");
    //for (i = 0; i < 10; i++) { 
    //   frslist = frslist.replace("Commendation", "<b>Commendation</b>");
    //}
    var commendationsToday = document.getElementById(
        "WidgetContainer658_alertGood").innerHTML;
    document.open();
    var insertHTML =
        `
	<script>
function LogoutWarning(){
	if(document.getElementById("logoutwarning").style.display == "block"){
		document.getElementById("logoutwarning").style.display = "none";
		document.getElementById("logoutwarning").style.visibility = "hidden";		
	}else{
		document.getElementById("logoutwarning").style.display = "block";
		document.getElementById("logoutwarning").style.visibility = "visible";
}
}

function ActuallyLogout(){
	var cookies = document.cookie.split(";");
	document.cookie = ".DBAUTH" + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	document.cookie = "ASP.NET_SessionId" + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	__doPostBack('Logout', 0);
	//window.location.replace("https://insight.forest.wokingham.sch.uk");
}

function ToggleMenu(){	
	if(document.getElementById("buttoncontainer").style.display == "none"){
		document.getElementById("buttoncontainer").style.display = "inline-block";
		document.getElementById("menuToggle").innerHTML = "Close";
	}else{
		document.getElementById("buttoncontainer").style.display = "none";
		document.getElementById("menuToggle").innerHTML = "Menu";	
	}
}

	</script>
	<div id="masterbody">
		<div id="topmenu" class="row fullwidth">
		<div class="buttoncontainer">
	<button onclick="showContent('Snapshot','Snapshot');" class="btn topmenubtn" type="button" style="display:inline !important;"><span class="snapbuttontext">Snapshot</span></button>
	<button onclick="showContent('Timetable','Timetable');" class="btn topmenubtn menuodd" type="button" style="display:inline !important;"><span class="snapbuttontext">Timetable</span></button>
	<button onclick="showContent('Details','Personal');" class="btn topmenubtn" type="button" style="display:inline !important;"><span class="snapbuttontext">Details</span></button>
	<button onclick="showContent('Commendations','Achievements');" class="btn topmenubtn menuodd" type="button" style="display:inline !important;"><span class="snapbuttontext">Commendations</span></button>
	<button onclick="showContent('Discredits','Behaviour');" class="btn topmenubtn" type="button" style="display:inline !important;"><span class="snapbuttontext">Discredits</span></button>
	<button onclick="showContent('Homework','Assignments');" class="btn topmenubtn menuodd" type="button" style="display:inline !important;"><span class="snapbuttontext">Homework</span></button>
	<button onclick="showContent('Attendance','AttendanceSummary');" class="btn topmenubtn" type="button" style="display:inline !important;"><span class="snapbuttontext">Attendance</span></button>
	<button onclick="LogoutWarning();" class="btn topmenubtn" type="button" style="display:inline !important;"><span class="snapbuttontext">` +
        studentName +
        `</span></button>



	<!--<button onclick="ShowLogoutWarning();" class="btn topmenubtn" type="button" style="display:inline !important;"><span class="snapbuttontext"><img src=` +
        studentImage +
        `" height="1" style="display:inline !important;" id="profileimage" id="profileimage">` +
        studentName +
        `</span></button> -->

</div>
<div id="logoutwarning" class="row fullwidth submenu">
	<button onclick="ActuallyLogout();" class="btn" type="button" style="display:inline !important;"><span class="snapbuttontext">Logout</span></button>
</div>
		</div>


		
		<div id="aftermenu">
		<div class="row">
			<div id="latestfrs" class="small-12 large-4 columns">
			<h3 class="panelhead">Latest FRS Activity</h3>
				` +
        frslist + `
			</div>
		</div>
		</div>
	</div>

	`;
    document.write(insertHTML);
    document.title = "Forest School - INSIGHT";
    document.close();
}