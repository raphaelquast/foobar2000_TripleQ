'use strict';
include('helpers_xxx.js');
include('helpers_xxx_properties.js');
include('helpers_xxx_UI.js');

var panel_properties = {
	fontSize : ['Font size', _scale(10)],
	coloursMode : ['Background olour mode', 0],
	customBackground : ['Custom background colour', RGB(0, 0, 0)],
	bCustomText : ['Text custom colour mode', false],
	customText : ['Custom text colour', RGB(0, 0, 0)],
};

setProperties(panel_properties, 'panel_');

function _panel(custom_background = false) {
	
	this.colours_changed = () => {
		if (window.InstanceType) {
			this.colours.background = window.GetColourDUI(1);
			this.colours.text = this.colours.bCustomText ? this.colours.customText : window.GetColourDUI(0);
			this.colours.highlight = window.GetColourDUI(2);
		} else {
			this.colours.background = window.GetColourCUI(3);
			this.colours.text = this.colours.bCustomText ? this.colours.customText : window.GetColourCUI(0);
			this.colours.highlight = blendColours(this.colours.text, this.colours.background, 0.4);
		}
		if (this.custom_text) {this.colours.text = this.colours.custom_text;}
		this.colours.header = this.colours.highlight & 0x45FFFFFF;
	}
	
	this.font_changed = () => {
		let name;
		let font = window.InstanceType ? window.GetFontDUI(0) : window.GetFontCUI(0);
		if (font) {
			name = font.Name;
		} else {
			name = 'Segoe UI';
			console.log(N, 'Unable to use default font. Using', name, 'instead.');
		}
		this.fonts.title = _gdiFont(name, (this.fonts.size + 2 <= 16) ? this.fonts.size + 2 : this.fonts.size, 1);
		this.fonts.normal = _gdiFont(name, this.fonts.size);
		this.fonts.small = _gdiFont(name, this.fonts.size - 4);
		this.fonts.fixed = _gdiFont('Lucida Console', this.fonts.size);
		this.row_height = this.fonts.normal.Height *1.3;
		this.list_objects.forEach((item) => {item.size();});
		this.list_objects.forEach((item) => {item.update();});
		this.text_objects.forEach((item) => {item.size();});
	}
	
	this.size = () => {
		this.w = window.Width;
		this.h = window.Height;
	}
	
	this.paint = (gr) => {
		let col;
		switch (true) {
		case window.IsTransparent:
			return;
		case !this.custom_background:
		case this.colours.mode === 0:
			col = this.colours.background;
			break;
		case this.colours.mode === 1:
			// col = utils.GetSysColour(15);
			col = window.GetColourCUI(3, '{DA66E8F3-D210-4AD2-89D4-9B2CC58D0235}');
			break;
		case this.colours.mode === 2:
			col = this.colours.custom_background;
			break;
		}

		gr.FillSolidRect(0, 0, this.w, this.h, col);
	}
	
	window.DlgCode = DLGC_WANTALLKEYS;
	this.properties = getPropertiesPairs(panel_properties, 'panel_'); // Load once! [0] = descriptions, [1] = values set by user (not defaults!)
	this.fonts = {};
	this.colours = {};
	this.w = 0;
	this.h = 0;
	this.fonts.sizes = [_scale(8), _scale(9), _scale(10), _scale(11), _scale(12), _scale(14)];
	this.fonts.size = this.properties['fontSize'][1];
	if (custom_background) {
		this.custom_background = true;
		this.colours.mode = this.properties['coloursMode'][1];
		this.colours.custom_background = this.properties['customBackground'][1];
	} else {
		this.custom_background = false;
	}
	this.colours.bCustomText = this.properties.bCustomText[1];
	this.colours.customText = this.properties.customText[1];
	this.list_objects = [];
	this.text_objects = [];
	this.font_changed();
	this.colours_changed();
}
