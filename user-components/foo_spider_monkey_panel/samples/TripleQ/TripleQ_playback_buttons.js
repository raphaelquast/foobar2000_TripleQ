window.DefinePanel('Playback Buttons', {author:'RQ'});

include(fb.ComponentPath + 'docs\\Helpers.js');
include(fb.ComponentPath + 'samples\\complete\\js\\lodash.min.js');
include(fb.ComponentPath + 'samples\\complete\\js\\helpers.js');


var playback_buttons = new _buttons();
var img_folder = fb.ComponentPath + 'samples\\TripleQ\\Images\\playback\\';
var painted = false

var buttonsize = 40	
var usewidth = 120

space = (usewidth - buttonsize * 4)/4
buttonsize_space = buttonsize + space;


function on_paint(gr) {
    gr.FillSolidRect(0, 0, window.Width, window.Height, RGB(37, 37, 37));		

	if (fb.IsPaused) {
		playback_buttons.buttons.playpause = new _button(space + 1 * buttonsize_space, 0, buttonsize, buttonsize, {normal : img_folder + 'pause.png', hover : img_folder + 'play.png'}, (x, y, mask) => {fb.PlayOrPause()}, '');
	} else {
		playback_buttons.buttons.playpause = new _button(space + 1 * buttonsize_space, 0, buttonsize, buttonsize, {normal : img_folder + 'play.png', hover : img_folder + 'pause.png'}, (x, y, mask) => {fb.PlayOrPause()}, '');
	}


	playback_buttons.paint(gr);
}


function on_mouse_lbtn_up(x, y, mask) {
	playback_buttons.lbtn_up(x, y, mask);
}

function on_mouse_leave() {
	playback_buttons.leave();
}

function on_mouse_move(x, y) {
	playback_buttons.move(x, y);
}

function on_size(width, height) { 

	if (window.Width > 120) {
		usewidth = 120
	} else {
		usewidth = window.Width
	}

	while (buttonsize*4.4 < usewidth || buttonsize < window.Height) {
		buttonsize = buttonsize + .1
	}
	while (buttonsize*4.4 > usewidth || buttonsize > window.Height) {
		buttonsize = buttonsize - .1
	}

	space = (usewidth - buttonsize * 4)/4
	buttonsize_space = buttonsize + space;


	playback_buttons.buttons.previous 	   = new _button(space, 0, buttonsize, buttonsize, {normal : img_folder + 'previous.png'}, (x, y, mask) => {fb.Prev()}, '');
	playback_buttons.buttons.playpause 	   = new _button(space + 1 * buttonsize_space, 0, buttonsize, buttonsize, {normal : img_folder + 'pause.png', hover : img_folder + 'play.png'}, (x, y, mask) => {fb.PlayOrPause()}, '');
	playback_buttons.buttons.stop 	 	   = new _button(space + 2 * buttonsize_space, 0, buttonsize, buttonsize, {normal : img_folder + 'stop.png'}, (x, y, mask) => {fb.Stop()}, '');
	playback_buttons.buttons.next 	 	   = new _button(space + 3 * buttonsize_space, 0, buttonsize, buttonsize, {normal : img_folder + 'next.png'}, (x, y, mask) => {fb.Next()}, '');



	window.Repaint()
}


function on_focus(is_focused) {
	window.Repaint()
}
