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


// fmt for time-display

function on_paint(gr) {
	var fs = 25;
	var font = gdi.Font("Segoe UI", fs, 0);
	var fmt_time = fb.TitleFormat("%playback_time_remaining% '('%length%')'")
	var time_str = gettrackinfo(fmt_time)
	var temp = gr.MeasureString(time_str, font, 0,0,10000,10000);
	// font for rating-points
	var font2 = gdi.Font("Segoe UI", fs/1.75, 0);
	var temp2 = gr.MeasureString(String.fromCharCode(9679), font2, 0,0,10000,10000);

    gr.FillSolidRect(0, 0, window.Width, window.Height, RGB(37, 37, 37));	
	
	// in case the window is too small, decrease fontsize till a minimum is reached
	while (fs > 20 && (window.Height * 0.9 < temp.Height + temp2.Height || window.Width * 0.9 < temp.Width)) {
		//if () {break;}
		//if (window.Height * 0.9 < temp.Height) {break;}

		fs--
		font = gdi.Font("Segoe UI", fs, 0);
		font2 = gdi.Font("Segoe UI", fs/1.75, 0);
		temp = gr.MeasureString(time_str, font, 0, 0, 10000, 1000);	
		temp2 = gr.MeasureString(String.fromCharCode(9679), font2, 0,0,10000,10000);
	}
	// if the width is still too small, change the display (don't show total time)
	if (window.Width < temp.Width) {
		fmt_time = fb.TitleFormat("%playback_time_remaining%")
		time_str = gettrackinfo(fmt_time)
		fs = 25
		font = gdi.Font("Segoe UI", fs, 0);
		font2 = gdi.Font("Segoe UI", fs/1.75, 0);
		temp = gr.MeasureString(time_str, font, 0, 0, 10000, 1000);	
		temp2 = gr.MeasureString(String.fromCharCode(9679), font2, 0,0,10000,10000);

	}
	// further decrease fontsize if necessary
	temp = gr.MeasureString(time_str, font, 0,0,10000,10000);
	while (fs > 8 && (window.Height * 0.9 < temp.Height + temp2.Height || window.Width * 0.9 < temp.Width)) {
		fs--
		font = gdi.Font("Segoe UI", fs, 0);
		font2 = gdi.Font("Segoe UI", fs/1.75, 0);
		temp = gr.MeasureString(time_str, font, 0, 0, 10000, 1000);
		temp2 = gr.MeasureString(String.fromCharCode(9679), font2, 0,0,10000,10000);
	}




	gr.GdiDrawText(gettrackinfo(fmt_time), font, RGB(255,255,255), 0, window.Height/2 - temp.Height/2*1.3, window.Width, window.Height, DT_CENTER);
	gr.GdiDrawText(String.fromCharCode(9679).repeat(gettrackinfo(fb.TitleFormat('%rating%'))), font2, RGB(255,255,255), 0, window.Height/2 + temp.Height/2*1.1 - temp2.Height/2, window.Width, window.Height, DT_CENTER);
};

function on_playback_dynamic_info_track() {
	window.Repaint()
}

function on_playback_time(time) {
	window.Repaint()
}


function on_playback_new_track() {
	window.Repaint();
};

function on_selection_changed() {
	if (fb.IsPlaying == false && fb.IsPaused == false) {
		window.Repaint()
		}
};
