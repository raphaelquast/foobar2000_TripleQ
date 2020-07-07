include(fb.ComponentPath + 'docs\\Helpers.js');
window.Repaint()

function on_size(width, height) { window.Repaint() }

function on_paint(gr) {
	gr.FillSolidRect(0, 0, window.Width, window.Height, RGB(37, 37, 37));
}
