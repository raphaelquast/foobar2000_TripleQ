//include('samples/Library Tree/Library Tree 2.1.3.js');

include('TripleQ_common.js');
include('TripleQ_statevars.js');

window.DefinePanel('Testasdf', {author:'asdf'});
include(fb.ComponentPath + 'docs\\Helpers.js');
include(fb.ComponentPath + 'samples\\complete\\js\\lodash.min.js');
include(fb.ComponentPath + 'samples\\complete\\js\\helpers.js');
include(fb.ComponentPath + 'samples\\complete\\js\\volume.js');
include(fb.ComponentPath + 'samples\\complete\\js\\panel.js');


var panel = new _panel(true);
var left_buttons = new _buttons();
var right_buttons = new _buttons();


var img_folder = fb.ComponentPath + 'samples\\TripleQ\\Images\\'
var img_queuebutton = 'queuebutton.png'
var img_queuebutton_sel = 'queuebutton_sel.png'

// size of the small buttons
var button_small = 25
// size of the buttons enlarged
var button_big = 35
var button_big_surround = 50

var button_space = 450

var usewidth = window.Width - button_big



// button to set the playback-order
let playbackorder_x = button_space + 350
let playbackorder_y = 20
let playbackorder_size = 20
let playbackorder_string = {0:'Default',
							1:'Repeat (Playlist)',
							2:'Repeat (Track)',
							3:'Random',
							4:'Shuffle (tracks)',
							5:'Shuffle (albums)',
							6:'Shuffle (folders)'};


let playback_buttons = new _buttons();
let menubuttons = new _buttons();

// initialize playback-order as linear
plman.PlaybackOrder == 0



// a function to set the playback state
function set_playback_state() {
	delete playback_buttons.buttons.leftb5
	if (plman.PlaybackOrder == 0) {
		plman.PlaybackOrder = 1
	} else if (plman.PlaybackOrder == 1) {
		plman.PlaybackOrder = 2
	} else if (plman.PlaybackOrder == 2) {
		plman.PlaybackOrder = 3
	} else if (plman.PlaybackOrder == 3) {
		plman.PlaybackOrder = 4
	} else if (plman.PlaybackOrder == 4) {
		plman.PlaybackOrder = 5
	} else if (plman.PlaybackOrder == 5) {
		plman.PlaybackOrder = 6
	} else if (plman.PlaybackOrder == 6) {
		plman.PlaybackOrder = 0
	}
}

// a function to update the playback-state buttons
function update_playback_button() {
	delete playback_buttons.buttons.leftb5
	if (plman.PlaybackOrder == 1) {
		playback_buttons.buttons.leftb5 = new _button(usewidth, playbackorder_y, playbackorder_size, playbackorder_size, {normal : img_folder + 'playback_repeat_playlist.png'}, (x, y, mask) => {set_playback_state();}, playbackorder_string[plman.PlaybackOrder]);
	} else if (plman.PlaybackOrder == 2) {
		playback_buttons.buttons.leftb5 = new _button(usewidth, playbackorder_y, playbackorder_size, playbackorder_size, {normal : img_folder + 'playback_repeat_track.png'}, (x, y, mask) => {set_playback_state();}, playbackorder_string[plman.PlaybackOrder]);
	} else if (plman.PlaybackOrder == 3) {
		playback_buttons.buttons.leftb5 = new _button(usewidth, playbackorder_y, playbackorder_size, playbackorder_size, {normal : img_folder + 'playback_random.png'}, (x, y, mask) => {set_playback_state();}, playbackorder_string[plman.PlaybackOrder]);
	} else if (plman.PlaybackOrder == 4) {
		playback_buttons.buttons.leftb5 = new _button(usewidth, playbackorder_y, playbackorder_size, playbackorder_size, {normal : img_folder + 'playback_shuffle_tracks.png'}, (x, y, mask) => {set_playback_state();}, playbackorder_string[plman.PlaybackOrder]);
	} else if (plman.PlaybackOrder == 5) {
		playback_buttons.buttons.leftb5 = new _button(usewidth, playbackorder_y, playbackorder_size, playbackorder_size, {normal : img_folder + 'playback_shuffle_albums.png'}, (x, y, mask) => {set_playback_state();}, playbackorder_string[plman.PlaybackOrder]);
	} else if (plman.PlaybackOrder == 6) {
		playback_buttons.buttons.leftb5 = new _button(usewidth, playbackorder_y, playbackorder_size, playbackorder_size, {normal : img_folder + 'playback_shuffle_folders.png'}, (x, y, mask) => {set_playback_state();}, playbackorder_string[plman.PlaybackOrder]);
	} else if (plman.PlaybackOrder == 0) {
		playback_buttons.buttons.leftb5 = new _button(usewidth, playbackorder_y, playbackorder_size, playbackorder_size, {normal : img_folder + 'playback_linear.png'}, (x, y, mask) => {set_playback_state();}, playbackorder_string[plman.PlaybackOrder]);
	}

}


function update_queue_button() {
	
	// check if the playback-queue changed, and if yes, re-draw the Queuebutton
	let handles = plman.GetPlaybackQueueHandles();
	let queue_cnt_string = handles.Count.toString()

	if (handles.Count >= 7) {
		img_queuebutton = 'queuebutton_full.png'
	    img_queuebutton_sel = 'queuebutton_full_sel.png'
	} else if (handles.Count == 0) {
		img_queuebutton = 'queuebutton.png'
	    img_queuebutton_sel = 'queuebutton_sel.png'

	} else {
		img_queuebutton = 'queuebutton_' + queue_cnt_string + '.png'
		img_queuebutton_sel = 'queuebutton_' + queue_cnt_string + '_sel.png'
	}
	
	if (handles.Count == 1) {
	queue_cnt_string = queue_cnt_string + ' song queued'
	} else {
	queue_cnt_string = queue_cnt_string + ' songs queued'
	}
	
	delete right_buttons.buttons.rightb5
	if (showpanel_left_state.getValue() == 1) {
		right_buttons.buttons.rightb5 = new _button(usewidth - 5 * button_big_surround, 0, button_small, button_small, {normal : img_folder + img_queuebutton, hover : img_folder + img_queuebutton_sel}, (x, y, mask) => {togglepanel(showpanel_left_state, 1, 'leftb', left_buttons);}, queue_cnt_string);
	} else {
		right_buttons.buttons.rightb5 = new _button(usewidth - 5 * button_big_surround, 0, button_small, button_small, {normal : img_folder + img_queuebutton, hover : img_folder + img_queuebutton_sel}, (x, y, mask) => {togglepanel(showpanel_left_state, 1, 'leftb', left_buttons);}, queue_cnt_string);
	}
}




function togglepanel(showpanel, n, prefix, buttons) {
	if (showpanel.getValue() == n) {
		showpanel.setValue(0, true);
	} else {
		showpanel.setValue(n, true);
	}

	var btn;
	for (btn in buttons.buttons) {
		if (btn == prefix + showpanel.getValue().toString()){
			buttons.buttons[btn].w = button_big
			buttons.buttons[btn].h = button_big	

		} else {
			buttons.buttons[btn].w = button_small
			buttons.buttons[btn].h = button_small
		}
	}
	window.Repaint()
}



function on_playback_order_changed(new_order_index) {
	update_playback_button()
	window.Repaint()
}


function on_playback_queue_changed(origin) {
	update_queue_button()
	window.Repaint()
}

function on_colours_changed() {
	panel.colours_changed();
	window.Repaint();
}

function on_mouse_lbtn_up(x, y, mask) {
	left_buttons.lbtn_up(x, y, mask);
	right_buttons.lbtn_up(x, y, mask);
	playback_buttons.lbtn_up(x, y, mask);
	menubuttons.lbtn_up(x, y, mask);
	
	if (showpanel_right_state.getValue() == 0) {
	set_mainpanel_width(700)
	} else {
	set_mainpanel_width(1400)
	}
	
	window.Repaint()
}

function on_mouse_leave() {
	left_buttons.leave();
	right_buttons.leave();
	playback_buttons.leave();
	menubuttons.leave();
}

function on_mouse_move(x, y) {
	left_buttons.move(x, y);
	right_buttons.move(x, y);
	playback_buttons.move(x, y);
	menubuttons.move(x, y);
}

function on_mouse_rbtn_up(x, y) {
	if (menubuttons.buttons.menu.trace(x, y)) {
		_help(menubuttons.buttons.menu.x, menubuttons.buttons.menu.h);
		return true;
	} else {
		return panel.rbtn_up(x, y);
	}
}

function on_paint(gr) {
	panel.paint(gr);
    gr.FillSolidRect(0, 0, window.Width, window.Height, RGB(37, 37, 37));

	left_buttons.paint(gr);	
	right_buttons.paint(gr);	
	playback_buttons.paint(gr);
	menubuttons.paint(gr);
		
	var font = gdi.Font("Segoe UI", 12, 0);
	//gr.GdiDrawText(window.Width, font, RGB(255,255,255), 5, 1, 226, 1000);

	}


function on_focus(is_focused) {
	if (is_focused) {
		plman.SetActivePlaylistContext();
	}
}




function on_size(width, height) {
	if (showpanel_right_state.getValue() == 0) {
		usewidth = window.Width - button_big
	} else {
		usewidth = window.Width / 2 - 7  - button_big
	}

	
	// buttons on the left side panels
//	left_buttons.buttons.leftb1 = new _button(0, 0, button_small, button_small, {normal : img_folder + img_queuebutton, hover : img_folder + img_queuebutton_sel}, (x, y, mask) => {togglepanel(showpanel_left_state, 1, 'leftb', left_buttons);}, 'Queue');
//	left_buttons.buttons.leftb2 = new _button(button_big_surround, 0, button_small, button_small, {normal : img_folder + 'treeview.png', hover : img_folder + 'treeview_sel.png'}, (x, y, mask) => {togglepanel(showpanel_left_state, 2, 'leftb', left_buttons);}, 'Tree View');
//	left_buttons.buttons.leftb3 = new _button(2 * button_big_surround, 0, button_small, button_small, {normal : img_folder + 'detailsbutton.png', hover : img_folder + 'detailsbutton_sel.png'}, (x, y, mask) => {togglepanel(showpanel_left_state, 3, 'leftb', left_buttons);}, 'Details');
//	left_buttons.buttons.leftb4 = new _button(3 * button_big_surround, 0, button_small, button_small, {normal : img_folder + 'utilitiesbutton.png', hover : img_folder + 'utilitiesbutton_sel.png'}, (x, y, mask) => {togglepanel(showpanel_left_state, 4, 'leftb', left_buttons);}, 'Utilities');

	if (window.Width > button_big_surround * (4 + 5)){
		left_buttons.buttons.leftb1 = new _button(0, 0, button_small, button_small, {normal : img_folder + 'queuebutton.png', hover : img_folder + 'queuebutton_sel.png'}, (x, y, mask) => {fb.RunContextCommandWithMetadb('File Operations/Move to/move_to_sorted_music', fb.GetSelections(1));}, 'Move to sorted music');
		left_buttons.buttons.leftb2 = new _button(button_big_surround, 0, button_small, button_small, {normal : img_folder + 'treeview.png', hover : img_folder + 'treeview_sel.png'}, (x, y, mask) => {fb.RunContextCommandWithMetadb('File Operations/Move to/move_to_unsorted_music', fb.GetSelections(1) );}, 'Move to unsorted music');
		left_buttons.buttons.leftb3 = new _button(2 * button_big_surround, 0, button_small, button_small, {normal : img_folder + 'detailsbutton.png', hover : img_folder + 'detailsbutton_sel.png'}, (x, y, mask) => {fb.RunContextCommandWithMetadb('ReplayGain/Scan as albums (by tags)', fb.GetSelections(1) );}, 'ReplayGain/Scan as albums (by tags)');
		left_buttons.buttons.leftb4 = new _button(3 * button_big_surround, 0, button_small, button_small, {normal : img_folder + 'utilitiesbutton.png', hover : img_folder + 'utilitiesbutton_sel.png'}, (x, y, mask) => {fb.RunContextCommandWithMetadb('Open containing folder', fb.GetSelections(1) );}, 'Open containing folder');
	} else {
		delete left_buttons.buttons.leftb1
		delete left_buttons.buttons.leftb2
		delete left_buttons.buttons.leftb3
		delete left_buttons.buttons.leftb4
	}

	// buttons for right side panels
	right_buttons.buttons.rightb5 = new _button(usewidth - 5 * button_big_surround, 0, button_small, button_small, {normal : img_folder + img_queuebutton, hover : img_folder + img_queuebutton_sel}, (x, y, mask) => {togglepanel(showpanel_left_state, 1, 'leftb', left_buttons);}, 'Queue');
	right_buttons.buttons.rightb1 = new _button(usewidth - 4 * button_big_surround, 0, button_small, button_small, {normal : img_folder + 'librarybutton.png', hover : img_folder + 'librarybutton_sel.png'}, (x, y, mask) => {togglepanel(showpanel_right_state, 1, 'rightb', right_buttons);}, 'Library');
	right_buttons.buttons.rightb2 = new _button(usewidth - 3 * button_big_surround, 0, button_small, button_small, {normal : img_folder + 'treeview.png', hover : img_folder + 'treeview_sel.png'}, (x, y, mask) => {togglepanel(showpanel_right_state, 2, 'rightb', right_buttons);}, 'Tree View');
	right_buttons.buttons.rightb3 = new _button(usewidth - 2 * button_big_surround, 0, button_small, button_small, {normal : img_folder + 'coverflow.png', hover : img_folder + 'coverflow_sel.png'}, (x, y, mask) => {togglepanel(showpanel_right_state, 3, 'rightb', right_buttons);}, 'Coverflow');
	right_buttons.buttons.rightb4 = new _button(usewidth - button_big_surround, 0, button_small, button_small, {normal : img_folder + 'detailsbutton.png', hover : img_folder + 'detailsbutton_sel.png'}, (x, y, mask) => {togglepanel(showpanel_right_state, 4, 'rightb', right_buttons);}, 'Playlists');

	playback_buttons.buttons.leftb5 = new _button(usewidth, playbackorder_y, playbackorder_size, playbackorder_size, {normal : img_folder + 'playback_linear.png'}, (x, y, mask) => {set_playback_state();}, playbackorder_string[plman.PlaybackOrder]);
	menubuttons.buttons.menu = new _button(usewidth, 0, 20, 20, {normal : img_folder + 'menu.png'}, (x, y, mask) => { _menu(650, 20); }, 'Menu');


	window.Repaint()
}









