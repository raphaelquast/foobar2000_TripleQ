// (name, file_prefix, default_value, min_value, max_value, int_value, update_settings_file_not_found)

var showpanel_left_state = new oPanelSetting("showpanel_left_state", "showpanel_left_", 0, 0, 9999, 0);

// 1 - Library, 2 - Tree view, 3 - Coverflow, 4 - Playlists
var showpanel_right_state = new oPanelSetting("showpanel_left_state", "showpanel_right_", 0, 0, 9999, 0);

var right_side_state = new oPanelSetting("right_side_state", "right_side_", 0, 0, 1, 0);

var windowwidth_state = new oPanelSetting("windowwidth_state", "windowwidth_state_", 700, 300, 1600, 0);
var windowheight_state = new oPanelSetting("windowheight_state", "windowheight_state_", 800, 300, 1600, 0);

var view_state = new oPanelSetting("view_state", "view_state_", 0, 0, 3, 0);
// 0 -> normal
// 1 -> midi
// 2 -> mini


var img_folder = fb.ComponentPath + 'samples\\TripleQ\\Images\\'
