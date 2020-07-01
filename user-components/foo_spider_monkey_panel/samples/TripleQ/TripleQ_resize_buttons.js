include('TripleQ_common.js');
include('TripleQ_statevars.js');

window.DefinePanel('TripleQ_resize_buttons', {author:'asdf'});
include(fb.ComponentPath + 'docs\\Helpers.js');
include(fb.ComponentPath + 'samples\\complete\\js\\lodash.min.js');
include(fb.ComponentPath + 'samples\\complete\\js\\helpers.js');


var resize_button_size = 15
var resize_button_size_surround = 20


var midi_height = 20
var mini_height = 20
var mini_width = 100

var resize_buttons = new _buttons();

resize_buttons.buttons.b0001 = new _button(window.Width - resize_button_size_surround , resize_button_size_surround - resize_button_size, resize_button_size, resize_button_size, {normal : img_folder + 'inkscape_images\\Resizebutton.png', hover : img_folder + 'inkscape_images\\Midimode.png'}, (x, y, mask) => {resizeit(1);}, '');
resize_buttons.buttons.b0002 = new _button(window.Width - resize_button_size_surround * 2,     resize_button_size_surround - resize_button_size, resize_button_size, resize_button_size, {normal : img_folder + 'inkscape_images\\Resizebutton.png', hover : img_folder + 'inkscape_images\\Minimode.png'},      (x, y, mask) => {resizeit(2);}, '');


function resizeit(n) {
	if (view_state.getValue() == 0) {
		windowwidth_state.setValue(padToFour(window.Width), true)
		windowheight_state.setValue(padToFour(window.Height), true)
		
	}
	
	if (view_state.getValue() == n) {
		view_state.setValue(0, true)
		set_mainpanel_width(windowwidth_state.getValue())
		set_mainpanel_height(windowheight_state.getValue())
	} else if (n == 1) {
		view_state.setValue(n, true)
		set_mainpanel_height(midi_height)
		set_mainpanel_width(windowwidth_state.getValue())

	} else if (n == 2) {
		view_state.setValue(n, true)
		set_mainpanel_height(mini_height)
		set_mainpanel_width(mini_width)
	}

	window.Repaint()	
}


function on_paint(gr) {
	gr.FillSolidRect(0, 0, window.Width, window.Height, RGB(37, 37, 37));
	resize_buttons.paint(gr);
}


function on_size(width, height) {
	g_uihacks.setMaxWidth(window.Width)
	g_uihacks.setMinWidth(window.Width)
	g_uihacks.setMaxHeight(window.Height)
	g_uihacks.setMinHeight(window.Height)

	if (view_state.getValue() == 0) {
		// MAXI
		resize_buttons.buttons.b0001.x = window.Width - resize_button_size_surround
		resize_buttons.buttons.b0001.y = resize_button_size_surround - resize_button_size
		resize_buttons.buttons.b0001.w = resize_button_size
		resize_buttons.buttons.b0001.h = resize_button_size
		resize_buttons.buttons.b0001.img_normal = _img(img_folder + 'inkscape_images\\Resizebutton.png')
		resize_buttons.buttons.b0001.img_hover = _img(img_folder + 'inkscape_images\\Midimode_sel.png')
		//resize_buttons.buttons.b0001.tiptext = 'MIDI'

		resize_buttons.buttons.b0002.x = window.Width - resize_button_size_surround * 2
		resize_buttons.buttons.b0002.y = resize_button_size_surround - resize_button_size
		resize_buttons.buttons.b0002.w = resize_button_size
		resize_buttons.buttons.b0002.h = resize_button_size
		resize_buttons.buttons.b0002.img_hover = _img(img_folder + 'inkscape_images\\Minimode_sel.png')
		//resize_buttons.buttons.b0002.tiptext = 'MINI'

		
		g_uihacks.EnableSizing(true)
		g_uihacks.SetPseudoCaption(window.Width * 0.2, 0, window.Width * 0.8 - resize_button_size_surround * 2, window.Height * 0.08)		
		
	} else if (view_state.getValue() == 1) {
		// MIDI
		resize_buttons.buttons.b0001.x = window.Width - resize_button_size_surround
		resize_buttons.buttons.b0001.y = window.Height/2 - resize_button_size_surround / 2
		resize_buttons.buttons.b0001.w = resize_button_size
		resize_buttons.buttons.b0001.h = resize_button_size
		resize_buttons.buttons.b0001.img_hover = _img(img_folder + 'inkscape_images\\Maximode_sel.png')
		//resize_buttons.buttons.b0001.tiptext = 'MAXI'

		resize_buttons.buttons.b0002.x = window.Width - resize_button_size_surround * 2
		resize_buttons.buttons.b0002.y = window.Height/2 - resize_button_size_surround / 2
		resize_buttons.buttons.b0002.w = resize_button_size
		resize_buttons.buttons.b0002.h = resize_button_size
		resize_buttons.buttons.b0002.img_hover = _img(img_folder + 'inkscape_images\\Minimode_sel.png')
		//resize_buttons.buttons.b0002.tiptext = 'MINI'


		g_uihacks.DisableSizing(true)
		g_uihacks.SetPseudoCaption(0, 0, window.Width - resize_button_size_surround * 2, window.Height)
		
	} else if (view_state.getValue() == 2) {
		// MINI
		resize_buttons.buttons.b0001.x = window.Width - window.Height / 2
		resize_buttons.buttons.b0001.y = 0
		resize_buttons.buttons.b0001.w = (window.Height / 2) * .9
		resize_buttons.buttons.b0001.h = (window.Height / 2) * .9
		resize_buttons.buttons.b0001.img_hover = _img(img_folder + 'inkscape_images\\Midimode_sel.png')
		//resize_buttons.buttons.b0001.tiptext = 'MIDI'

		resize_buttons.buttons.b0002.x = window.Width - window.Height / 2
		resize_buttons.buttons.b0002.y = window.Height / 2
		resize_buttons.buttons.b0002.w = (window.Height / 2) * .9
		resize_buttons.buttons.b0002.h = (window.Height / 2) * .9	
		resize_buttons.buttons.b0002.img_hover = _img(img_folder + 'inkscape_images\\Maximode_sel.png')
		//resize_buttons.buttons.b0002.tiptext = 'MAXI'

		g_uihacks.DisableSizing(true)
		g_uihacks.SetPseudoCaption(0, 0, window.Width - window.Height / 2, window.Height)
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