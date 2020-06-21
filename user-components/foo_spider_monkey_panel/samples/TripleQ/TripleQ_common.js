// get the path to the profile-folder
var ProfilePath = fb.ProfilePath;
// define the theme_name (used as sub-folder name)
var theme_name = 'TripleQ'
var SettingsPath = ProfilePath+theme_name+"-settings\\";
var settings_file_not_found = false;


// a nice helpful function from eole-theme
oFileSystObject = function () {
    this.fileObject = new ActiveXObject("Scripting.FileSystemObject");
    this.CreateTextFile = function (path) {
		try {
           return this.fileObject.CreateTextFile(path);
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"CreateTextFile call, "+path, "Error");
            console.log(e)
        }
    };
    this.FileExists = function (path) {
		try {
           return utils.FileTest(path, "e")
			//return this.fileObject.FileExists(path);
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"FileExists call, "+path, "Error");
			console.log(e);
		}
    };
    this.MoveFile = function (target,dest) {
		try {
           return this.fileObject.MoveFile(target,dest);
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"MoveFile call, from "+target+" to "+dest, "Error");
			console.log(e);
		}
    };
    this.DeleteFile = function (path) {
        return this.fileObject.DeleteFile(path);
    };
    this.FolderExists = function (path) {
        try {
           return this.fileObject.FolderExists(path);
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"FolderExists call, "+path, "Error");
			console.log(e);
		}
    };
    this.CreateFolder = function (path) {
        try {
           return this.fileObject.CreateFolder(path);
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"CreateFolder call, "+path, "Error");
			console.log(e);
		}
    };
    this.DeleteFolder = function (path,force) {
        try {
           return this.fileObject.DeleteFolder(path,force);
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"DeleteFolder call, "+path+" force:"+force, "Error");
			console.log(e);
		}
    };
    this.GetFolder = function (path) {
        try {
           return this.fileObject.GetFolder(path);
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"GetFolder call, "+path, "Error");
			console.log(e);
		}
    };
    this.GetExtensionName = function (path) {
        try {
            return this.fileObject.GetExtensionName(path);
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"GetExtensionName call, "+path, "Error");
			console.log(e);
		}
    };
    this.OpenTextFile = function (path, openMode) {
        try {
           return this.fileObject.OpenTextFile(path, openMode);
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"OpenTextFile call, "+path, "Error");
			console.log(e);
		}
    };
}

	
oPanelSetting = function (name, file_prefix, default_value, min_value, max_value, int_value, update_settings_file_not_found) {
	this.name = name;	
	this.file_prefix = file_prefix;
	this.default_value = default_value;
	this.max_value = max_value;
	this.min_value = min_value;	
	this.int_value = typeof int_value !== 'undefined' ? int_value : true;	
	this.update_settings_file_not_found = typeof update_settings_file_not_found !== 'undefined' ? update_settings_file_not_found : true;	
	this.getFileValue = function () {		
		setting_file = utils.Glob(SettingsPath+""+this.file_prefix+"*");
		if(setting_file.length>=1){
			last_underscore = setting_file[0].lastIndexOf('_');
			this.value = setting_file[0].substring(last_underscore + 1);
			if(this.int_value) this.value = parseInt(this.value);
			if(setting_file.length>1){
				for(i=1;i<setting_file.length;i++) {
					g_files.DeleteFile(setting_file[i]);
				}
			}
		} else {
			this.value = this.default_value;
			g_files.CreateTextFile(SettingsPath+this.file_prefix+this.value, true).Close();
			if(this.update_settings_file_not_found) {
				settings_file_not_found = true;	
			}
		}
		return this.value;
    };
	this.getValue = function () {		
		return this.value;
	}	
	this.getNumberOfState = function () {
		return (this.max_value-this.min_value);
	}	
	this.setValue = function (new_value, refresh_panel) {	
		refresh_panel = typeof refresh_panel !== 'undefined' ? refresh_panel : true;	
		if(new_value==this.value) return;
		if(new_value>this.max_value) new_value = this.max_value;
		else if(new_value<this.min_value) new_value = this.min_value;		
		if(g_files.FileExists(SettingsPath+this.file_prefix+new_value)) g_files.DeleteFile(SettingsPath+this.file_prefix+new_value);
		if(!g_files.FileExists(SettingsPath+this.file_prefix+this.value)) g_files.CreateTextFile(SettingsPath+this.file_prefix+this.value, true).Close();	
		g_files.MoveFile(SettingsPath + this.file_prefix + this.value,SettingsPath + this.file_prefix + new_value);
		g_avoid_on_metadb_changed = true;
		this.value = new_value;
		window.NotifyOthers("g_avoid_on_metadb_changed",true);			
		window.NotifyOthers(this.name,this.value);	
		if(refresh_panel!==false) RefreshPSS();
	}
	this.setDefault = function () {
		this.setValue(this.default_value);
	}	
	this.toggleValue = function (refresh_panel) {
		if(this.value==0) this.setValue(1, refresh_panel);
		else this.setValue(0, refresh_panel);
	}
	this.isEqual = function (test_value) {
		return (this.value==test_value);
	}		
	this.isActive = function () {
		return (this.value>0);
	}	
	this.isMaximumValue = function () {
		return (this.value==this.max_value);
	}
	this.isMinimumValue = function () {
		return (this.value==this.min_value);
	}	
	this.decrement = function (decrement_value) {
		this.setValue(parseInt(this.value)-decrement_value);		
	}	
	this.increment = function (increment_value) {
		this.setValue(parseInt(this.value)+increment_value);		
	}	
	this.userInputValue = function (msg,title) {
		try {
			new_value = utils.InputBox(window.ID, msg, title, this.value, true);
			if (!(new_value == "" || typeof new_value == 'undefined')) {
				this.setValue(new_value);
			}			   
		} catch(e) {
		}				
	}		
	this.getFileValue();
}



function RefreshPSS_OLD() {
	if (fb.IsPlaying || fb.IsPaused) {
		try{
			let handle = fb.GetNowPlaying();
			handle.RefreshStats();
		} catch(e){
			fb.Play();fb.Stop();
		}
	}	
	else {
		fb.Play();fb.Stop();
	}	
}	

function RefreshPSS() {
	if (fb.IsPaused) {
		fb.Play();
		fb.Pause();
	}
	else if (fb.IsPlaying) {
		fb.Pause();
		fb.Play();
	}	
	else {
		fb.Play();fb.Stop();
	}
}
function on_focus(is_focused) {
	plman.SetActivePlaylistContext(); // When the panel gets focus but not on every click
}



//UI hacks ----------------------------------------------------------------
oUIHacks = function () {
    this.activeXObject = new ActiveXObject("UIHacks");
    this.EnableSizing = function (m) {
        try {
            if (this.activeXObject.FrameStyle === 3 && this.activeXObject.DisableSizing) {
                this.activeXObject.DisableSizing = false;
            }
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"UIHacks EnableSizing", "Error");
			console.log(e);
		}
    };
    this.DisableSizing = function (m) {
        try {
            if (m && this.activeXObject.FrameStyle === 3 && !this.activeXObject.DisableSizing) {
                this.activeXObject.DisableSizing = true;
            }
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"UIHacks DisableSizing", "Error");
			console.log(e);
		}
    };
	this.SetPseudoCaption = function (x, y, w, h) {
        try {
           return this.activeXObject.SetPseudoCaption(x, y, w, h);
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"UIHacks SetPseudoCaption x:"+x+" y:"+y+" w:"+w+" h:"+h, "Error");
			console.log(e);
		}
	}
	this.getFullscreenState = function () {
        try {
           return this.activeXObject.FullScreen;
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"UIHacks getFullscreenState", "Error");
			console.log(e);
		}
	}
	this.setFullscreenState = function (new_state) {
        try {
           this.activeXObject.FullScreen = new_state;
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"UIHacks setFullscreenState "+new_state, "Error");
			console.log(e);
		}
	}
	this.toggleFullscreen = function () {
        try {
           this.activeXObject.FullScreen = !this.getFullscreenState();
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"UIHacks toggleFullscreen ", "Error");
			console.log(e);
		}
	}
	this.getMainWindowState = function () {
        try {
           return this.activeXObject.MainWindowState;
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"UIHacks getMainWindowState", "Error");
			console.log(e);
		}
	}
	this.setMainWindowState = function (new_state) {
        try {
           this.activeXObject.MainWindowState = new_state;
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"UIHacks setMainWindowState "+new_state, "Error");
			console.log(e);
		}
	}
	this.enableMinSize = function () {
        try {
           this.activeXObject.MinSize.Enabled = true;
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"UIHacks enableMinSize", "Error");
			console.log(e);
		}
	}
	this.disableMinSize = function () {
        try {
           this.activeXObject.MinSize.Enabled = false;
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"UIHacks disableMinSize", "Error");
			console.log(e);
		}
	}
	this.setMinWidth = function (width) {
        try {
           this.activeXObject.MinSize.Width = width;
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"UIHacks setMinWidth "+width, "Error");
			console.log(e);
		}
	}
	this.setMinHeight = function (height) {
        try {
           this.activeXObject.MinSize.Height = height;
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"UIHacks setMinHeight "+height, "Error");
			console.log(e);
		}
	}
	this.enableMaxSize = function () {
        try {
           this.activeXObject.MaxSize.Enabled = true;
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"UIHacks enableMaxSize", "Error");
			console.log(e);
		}
	}
	this.disableMaxSize = function () {
        try {
           this.activeXObject.MaxSize.Enabled = false;
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"UIHacks disableMaxSize", "Error");
			console.log(e);
		}
	}
	this.setMaxWidth = function (width) {
        try {
           this.activeXObject.MaxSize.Width = width;
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"UIHacks setMaxWidth "+width, "Error");
			console.log(e);
		}
	}
	this.setMaxHeight = function (height) {
        try {
           this.activeXObject.MaxSize.Height = height;
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"UIHacks setMaxHeight "+height, "Error");
			console.log(e);
		}
	}
	this.setAero = function (top,right,bottom,left) {
        try {
			this.activeXObject.Aero.Left = left;
			this.activeXObject.Aero.Top = top;
			this.activeXObject.Aero.Right = right;
			this.activeXObject.Aero.Bottom = bottom;
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"UIHacks setAero left:"+left+" top:"+top+" right:"+right+" bottom:"+bottom, "Error");
			console.log(e);
		}
	}
	this.setAeroEffect = function (effect) {
        try {
           this.activeXObject.Aero.Effect = effect;
        } catch (e) {
			console.log(e);
		}
	}
	this.setFrameStyle = function (style) {
        try {
           this.activeXObject.FrameStyle = style;
        } catch (e) {
			fb.ShowPopupMessage('Oupppppsssss, it look like an error\n\n'+"UIHacks setFrameStyle "+style, "Error");
			console.log(e);
		}
	}
}







// initialize a file-system object
g_files = new oFileSystObject();

// create a settings-folder if it does not yet exist
if (!g_files.FolderExists(SettingsPath))
g_files.CreateFolder(SettingsPath);

// create a UIHacks object
var g_uihacks = new oUIHacks();

