var homeworkCount = "";
if(location.pathname.substring(1) == "Info.aspx"){
	homeworkCount = document.getElementById("newAssignments").innerHTML;
//Get latest FRS
var frslist = "";
for (i = 0; i < document.getElementsByClassName("list-group-item").length; i++) { 
    frslist = frslist + document.getElementsByClassName("list-group-item")[i].innerHTML + "<br>";
}
	document.open();
	var insertHTML = `
	<div id="masterbody">
		<div id="topmenu" class="row fullwidth">
		<div class="buttoncontainer">
	<button onclick="showContent('Snapshot','Snapshot');" class="btn topmenubtn" type="button" style="display:inline !important;"><span class="snapbuttontext">Snapshot</span></button>
	<button onclick="showContent('Timetable','Timetable');" class="btn topmenubtn" type="button" style="display:inline !important;"><span class="snapbuttontext">Timetable</span></button>
	<button class="btn topmenubtn" type="button" style="display:inline !important;"><span class="snapbuttontext">Details</span></button>
	<button class="btn topmenubtn" type="button" style="display:inline !important;"><span class="snapbuttontext">Behaviour</span></button>
	<button class="btn topmenubtn" type="button" style="display:inline !important;"><span class="snapbuttontext">Homework</span></button>
</div>
		</div>
		<div id="aftermenu">
			<div id="latestFRS">
				` + frslist + `
			</div>
		</div>
	</div>

	`;
	document.write(insertHTML);
	document.title = "Forest School - INSIGHT";
	document.close();
}