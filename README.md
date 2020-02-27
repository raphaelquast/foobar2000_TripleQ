# foobar2000 skin
A versatile foobar2000 skin that supports 3 display-modes:

Mini-mode
![minimode](minimode.png?raw=true "Minimode")
Midi-mode
![midimode](midimode.png?raw=true "Midimode")
Maxi-mode
![midimode](maximode_01.jpg?raw=true "Midimode")


## Installation (Quick and easy)

1) Install Foobar2000 (standard or portable)
2) Copy the `configuration`-folder to your Foobar2000 `configuration`-folder and replace duplicated files. 
	- for portable installation it is located in the installation directory
	- for standard installation it is located at `"%appdata%\foobar2000"` 
3) Copy the `user-components` folder to the same location
4) Copy `FileOps-Presets.txt`, `LargeFieldsConfig.txt` and the `Button_images`-folder to the **installation-directory**
	- for portable installation this is the same location as before
	- for standard installation it's the location you've selected (e.g. something like `C:\Program Files (x86)\foobar2000`) 
5) Start foobar2000, open preferences (Strg + p) and set your music-directory under the "Media Library" tab
6) Enjoy


## General Infos

In order for the folder-structure presets to work, your music should be structured in the following form:


- Music
	- Artist_1
		- Albumtitle [Date]
			- 01 - Title01.mp3
			- 02 - Title02.mp3 
			- cover.jpg (naming format specified in Preferences/Display/Album art)
		- Albumtitle [Date]
			- 01 - Title01.mp3
			- 02 - Title02.mp3 
			- cover.jpeg
	- Artist_2
	- ...

	- _Compilations
		- Compilation Title [Date]
			- 01 - Artist01 - Title01.mp3
			- 02 - Artist02 - Title02.mp3
			- ...


## Thanks to
The configuration is based on the following components:

- [Columns UI](https://github.com/reupen/columns_ui)
- [Album List Panel](https://yuo.be/album-list-panel)
- [Panel Stack Splitter](http://foo2k.chottu.net/)
- [Waveform Minibar (Mod)](http://www.foobar2000.org/components/view/foo_wave_minibar_mod)
- [EsPlaylist](http://foo2k.chottu.net/)
- [Playlist Organizer](https://www.foobar2000.org/components/view/foo_plorg)
- [Playlist Attributes](https://www.foobar2000.org/components/view/foo_playlist_attributes)
- [Queue Contents Editor](https://www.foobar2000.org/components/view/foo_queuecontents)
- [UI Hacks](http://foobar2000.ru/forum/viewtopic.php?t=1911)
- [Quick Search Toolbar](https://www.foobar2000.org/components/view/foo_quicksearch)
