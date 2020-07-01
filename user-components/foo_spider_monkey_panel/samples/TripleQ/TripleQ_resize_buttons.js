include('TripleQ_common.js');
include('TripleQ_statevars.js');

window.DefinePanel('Testasdf', {author:'asdf'});
include(fb.ComponentPath + 'docs\\Helpers.js');
include(fb.ComponentPath + 'samples\\complete\\js\\lodash.min.js');
include(fb.ComponentPath + 'samples\\complete\\js\\helpers.js');


var button_size = 20
var button_size_surround = 23


var midi_height = 20
var mini_height = 20
var mini_width = 100

var resize_buttons = new _buttons();

resize_buttons.buttons.b0001 = new _button(window.Width - button_size_surround * 2, button_size_surround - button_size, button_size, button_size, {normal : img_folder + 'librarybutton.png', hover : img_folder + 'librarybutton_sel.png'}, (x, y, mask) => {resizeit(1);}, 'Midi');
resize_buttons.buttons.b0002 = new _button(window.Width - button_size_surround,     button_size_surround - button_size, button_size, button_size, {normal : img_folder + 'treeview.png',      hover : img_folder + 'treeview_sel.png'},      (x, y, mask) => {resizeit(2);}, 'Mini');


function resizeit(n) {
	if (view_state.getValue() == 0) {
		windowwidth_state.setValue(padToFour(window.Width), true)
		windowheight_state.setValue(padToFour(window.Height), true)
		
		resize_buttons.buttons.b0001.tiptext = 'MIDI'
		resize_buttons.buttons.b0002.tiptext = 'MINI'
	}
	
	if (view_state.getValue() == n) {
		view_state.setValue(0, true)
		set_mainpanel_width(windowwidth_state.getValue())
		set_mainpanel_height(windowheight_state.getValue())
		
		resize_buttons.buttons.b0001.tiptext = 'MIDI'
		resize_buttons.buttons.b0002.tiptext = 'MINI'

	} else if (n == 1) {
		view_state.setValue(n, true)
		set_mainpanel_height(midi_height)
		set_mainpanel_width(windowwidth_state.getValue())

		resize_buttons.buttons.b0001.tiptext = 'MAXI'
		resize_buttons.buttons.b0002.tiptext = 'MINI'


	} else if (n == 2) {
		view_state.setValue(n, true)
		set_mainpanel_height(mini_height)
		set_mainpanel_width(mini_width)
	
		resize_buttons.buttons.b0001.tiptext = 'MIDI'
		resize_buttons.buttons.b0002.tiptext = 'MAXI'

	}

	window.Repaint()	
}


function on_paint(gr) {
	resize_buttons.paint(gr);
}


function on_size(width, height) {
	if (view_state.getValue() !== 2) {
		resize_buttons.buttons.b0001.x = window.Width - button_size_surround * 2
		resize_buttons.buttons.b0001.y = button_size_surround - button_size
		resize_buttons.buttons.b0001.w = button_size
		resize_buttons.buttons.b0001.h = button_size

		resize_buttons.buttons.b0002.x = window.Width - button_size_surround
		resize_buttons.buttons.b0002.y = button_size_surround - button_size
		resize_buttons.buttons.b0002.w = button_size
		resize_buttons.buttons.b0002.h = button_size
	} else {
		resize_buttons.buttons.b0001.x = window.Width - window.Height / 2
		resize_buttons.buttons.b0001.y = 0
		resize_buttons.buttons.b0001.w = window.Height / 2
		resize_buttons.buttons.b0001.h = window.Height / 2

		resize_buttons.buttons.b0002.x = window.Width - window.Height / 2
		resize_buttons.buttons.b0002.y = window.Height / 2
		resize_buttons.buttons.b0002.w = window.Height / 2
		resize_buttons.buttons.b0002.h = window.Height / 2	
	}
}


function on_mouse_lbtn_up(x, y, mask) {
	resize_buttons.lbtn_up(x, y, mask);
}

function on_mouse_leave() {
	resize_buttons.leave();
}

function on_mouse_move(x, y) {
	resize_buttons.move(x, y);
}