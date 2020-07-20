include(fb.ComponentPath + 'docs\\Flags.js');
include(fb.ComponentPath + 'docs\\Helpers.js');

// a function to get the track info from playing track (if playing) or selected track (otherwise)
function gettrackinfo(txtfmt) {
	if (fb.IsPlaying == true) {
		return txtfmt.Eval()
	} else {
		try {
			return txtfmt.EvalWithMetadb(fb.GetFocusItem())
		} catch(e) {
			return ''
		}
	}		
};


// fmt in color1
var fmt1 = fb.TitleFormat('%artist%');
// fmt in color2
var fmt2 = fb.TitleFormat(' - %title%');
// fmt used to measure the full width of the string
var fmt_static = fb.TitleFormat("%artist% - %title%")
// fmt for second line
var fmt3 = fb.TitleFormat("%album%   '['%date%']'");

// indicator if timer is running
var timer_running = false
// initialize text-position variable for moving text
var timer_i = 0;




function on_paint(gr) {
    gr.FillSolidRect(0, 0, window.Width, window.Height, RGB(37, 37, 37));	

	// font-site used for main text
	var fs = 18;
	var font = gdi.Font("Segoe UI", fs, 0);
	var font2 = gdi.Font("Segoe UI", fs - 3, 0);

	txt = gettrackinfo(fmt_static);
	txt1 = gettrackinfo(fmt1);
	txt2 = gettrackinfo(fmt2);
	txt_secondline = gettrackinfo(fmt3);
	
	// get the dimensions of the strings
	var temp = gr.MeasureString(txt, font, 0, 0, 10000, 10000);
	var temp_secondline = gr.MeasureString(txt, font2, 0, 0, 10000, 10000);

	// in case the window HEIGHT is too small, OR the second line does not fit to the width, decrease fontsize till a minimum is reached
	while (fs > 6 && (window.Height * .99 < temp.Height + temp_secondline.Height || window.Width < temp_secondline.Width)) {
		fs--
		font = gdi.Font("Segoe UI", fs, 0);
		font2 = gdi.Font("Segoe UI", fs - 3, 0);
		temp = gr.MeasureString(txt, font, 0, 0, 10000, 1000);
		temp_secondline = gr.MeasureString(txt_secondline, font2, 0, 0, 10000, 10000);
	}
	
	temp = gr.MeasureString(txt, font, 0, 0, 10000, 1000);
	var temp1 = gr.MeasureString(txt1, font, 0, 0, 10000, 10000);
	var temp2 = gr.MeasureString(txt2, font, 0, 0, 10000, 10000);

	if (temp.Width > window.Width) {
		gr.GdiDrawText(txt1, font, RGB(155,155,155), 30 - timer_i,                   			   (window.Height - temp.Height - temp_secondline.Height)/2, temp.Width + 10, window.Height, DT_LEFT);
		gr.GdiDrawText(txt1, font, RGB(155,155,155), 30 - timer_i + temp.Width + 60,			   (window.Height - temp.Height - temp_secondline.Height)/2, temp.Width + 10, window.Height, DT_LEFT);
		gr.GdiDrawText(txt2, font, RGB(255,255,255), 33 - timer_i + temp1.Width,    			   (window.Height - temp.Height - temp_secondline.Height)/2, temp.Width + 10, window.Height, DT_LEFT);
		gr.GdiDrawText(txt2, font, RGB(255,255,255), 33 - timer_i + temp1.Width + temp.Width + 60, (window.Height - temp.Height - temp_secondline.Height)/2, temp.Width + 10, window.Height, DT_LEFT);
		
		gr.GdiDrawText(txt_secondline, font2, RGB(255,255,255), 0, (window.Height + temp.Height - temp_secondline.Height)/2, window.Width, window.Height, DT_CENTER);
		
		if (timer_running == false) {
			function drawit(){
				timer_i = timer_i%(temp.Width + 60)
				timer_i += 1; 
				window.Repaint()
				}
				
			interval1 = setInterval(() => {drawit()}, 15);
			timer_running = true
		}
		
	} else {
		gr.GdiDrawText(txt1, font, RGB(155,155,155),            - temp2.Width / 2 , (window.Height - temp.Height - temp_secondline.Height)/2, window.Width, window.Height, DT_CENTER);
		gr.GdiDrawText(txt2, font, RGB(255,255,255),            temp1.Width / 2,    (window.Height - temp.Height - temp_secondline.Height)/2, window.Width, window.Height, DT_CENTER);
		gr.GdiDrawText(txt_secondline, font2, RGB(255,255,255), 0,                  (window.Height + temp.Height - temp_secondline.Height)/2, window.Width, window.Height, DT_CENTER);

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


function on_size() {
	// reset moving text Interval on track-change
	if (timer_running == true){
		clearInterval(interval1)
		timer_i = 0
		timer_running = false
	}
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
