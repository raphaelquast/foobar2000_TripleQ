include(fb.ComponentPath + 'docs\\Flags.js');
include(fb.ComponentPath + 'docs\\Helpers.js');

const LEFT = DT_VCENTER | DT_END_ELLIPSIS | DT_CALCRECT | DT_NOPREFIX;
const RIGHT = DT_VCENTER | DT_RIGHT | DT_END_ELLIPSIS | DT_CALCRECT | DT_NOPREFIX;
const CENTRE = DT_VCENTER | DT_CENTER | DT_END_ELLIPSIS | DT_CALCRECT | DT_NOPREFIX;

// fmt in color1
let fmt1 = fb.TitleFormat('%artist% ');
// fmt in color2
let fmt2 = fb.TitleFormat(' - %title%');
// fmt used to measure the full width of the string
let fmt_static = fb.TitleFormat("%artist% - %title%")


let fmt3 = fb.TitleFormat("%album% '['%date%']'          ['('%genre%')']");

// a function to get the track info from playing track or selected trakc
function painttext(txtfmt) {
	if (fb.IsPlaying == true) {
		return txtfmt.Eval()
	} else {
		return txtfmt.EvalWithMetadb(fb.GetFocusItem())
	}		
};

var timer_running = false
var timer_i = 0;

let sf = StringFormat(StringAlignment.Near, StringAlignment.Near);

function on_paint(gr) {
    gr.FillSolidRect(0, 0, window.Width, window.Height, RGB(37, 37, 37));	

	txt = painttext(fmt_static);
	txt1 = painttext(fmt1);
	txt2 = painttext(fmt2);
	
	var fs = 17;
	var font = gdi.Font("Segoe UI", fs, 0);
	var temp = gr.MeasureString(txt, font, 0, 0, 10000, 1000);


	//while (fs > 13 && window.Width * .8 < temp.Width) {
	//	fs--
	//	font = gdi.Font("Segoe UI", fs, 0);
	//	temp = gr.MeasureString(txt, font, 0, 0, 10000, 1000);
	//}

	var font2 = gdi.Font("Segoe UI", fs -3, 0);

	temp = gr.MeasureString(txt, font, 0, 0, 10000, 10000, sf);
	temp1 = gr.MeasureString(txt1, font, 0, 0, 10000, 10000, sf);
	temp2 = gr.MeasureString(txt2, font, 0, 0, 10000, 10000, sf);


	if (temp.Width > window.Width) {

		gr.GdiDrawText(txt1, font, RGB(155,155,155), 30 - timer_i, 0, temp.Width + 10, window.Height, DT_LEFT);
		gr.GdiDrawText(txt1, font, RGB(155,155,155), 30 - timer_i + temp.Width + 60, 0, temp.Width + 10, window.Height, DT_LEFT);
		gr.GdiDrawText(txt2, font, RGB(255,255,255), 33 - timer_i + temp1.Width, 0, temp.Width + 10, window.Height, DT_LEFT);
		gr.GdiDrawText(txt2, font, RGB(255,255,255), 33 - timer_i + temp1.Width + temp.Width + 60, 0, temp.Width + 10, window.Height, DT_LEFT);

		gr.GdiDrawText(painttext(fmt3), font2, RGB(255,255,255), 0, temp.Height, window.Width, window.Height, DT_CENTER);
		
		if (timer_running == false) {
			function drawit(){
				timer_i = timer_i%(temp.Width + 50)
				timer_i += 1; 
				window.Repaint()
				}
				
			interval1 = setInterval(() => {drawit()}, 15);
			timer_running = true
		}
		
	} else {
		gr.GdiDrawText(txt1, font, RGB(155,155,155), - temp2.Width / 2 , 0, window.Width, window.Height, DT_CENTER);
		gr.GdiDrawText(txt2, font, RGB(255,255,255), temp1.Width / 2, 0, window.Width, window.Height, DT_CENTER);
		gr.GdiDrawText(painttext(fmt3), font2, RGB(255,255,255), 0, temp.Height, window.Width, window.Height, DT_CENTER);

	}
	

};


function on_playback_new_track() {
	// reset moving text Interval on track-change
	if (timer_running == true){
		clearInterval(interval1)
		timer_i = 0
		timer_running = false
	}
	window.Repaint();
};

function on_selection_changed() {
	if (fb.IsPlaying == false && fb.IsPaused == false) {
		// reset moving text Interval on track-change
		if (timer_running == true){
			clearInterval(interval1)
			timer_i = 0
			timer_running = false
		}
		window.Repaint()
	}
};
