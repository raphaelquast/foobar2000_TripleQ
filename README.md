# foobar2000 TripleQ v0.1

A versatile foobar2000 skin with 3 (switchable) view-modes!

It includes several nice gadgets like:

- **playlist-view** and **playlist-manager**

- **library- and coverflow views** that provide a nice view of your well sorted collection
  
  (and a **Tree view** that show everything including the stuff in messy unsorted folders)

- **queue content editor** to keep track of what's going to play next

... and some equally nice buttons that help with recurring tasks like

- maintain a sorted collection (moving files and folders to fit a pre-defined structure)
- apply replay-gain
- change the output-device
- ...

### Mini-mode

![minimode](_images/minimode.gif?raw=true "Minimode")

### Midi-mode

![midimode](_images/midimode.gif?raw=true "Midimode")

### Maxi-mode

![midimode](_images/animation_small.gif?raw=true "Maximode")

# Installation (quick and easy)

## Portable:

1) Install [Foobar2000](https://www.foobar2000.org/) (portable) [tested with v1.5.2]  (don't start it yet!)
2) Copy all files into the installation folder (replace existing files)
3) Start foobar2000, open preferences (`crtl + p`) and set your music-directory in the *"Media Library"* tab
4) Enjoy!

## Standalone:

1) Install [Foobar2000](https://www.foobar2000.org/) (standard) [tested with v1.5.2]  (don't start it yet!)
2) Copy all files into your foobar2000 `configuration`-folder (replace existing files)
   - it is located at `"%appdata%\foobar2000"` 
     (if it does not yet exist, start *foobar2000* and close it again)
3) Start foobar2000, open preferences (`crtl + p`) and set your music-directory in the *"Media Library"* tab
4) Enjoy!


# Installation (updateable)

1) Install [Foobar2000](https://www.foobar2000.org/) (standard or portable) [tested with v1.5.2]  (don't start it yet!)
2) Install [git](https://git-scm.com/)
3) Copy the file 'Update_TripleQ.bat' to the configuration-folder
	- for portable installation this is the same as the installation-folder
	- for standard installation it is located at `"%appdata%\foobar2000"` 
4) double-click 'Update_TripleQ.bat' and let git do it's magic
5) Enjoy!

5.1) in case an update is released, simply run 'Update_TripleQ.bat' and you get updated to the latest version of TripleQ!

alternatively (if you know your way around git) you can also do the following in the configuration-folder of a FRESH foobar2000:
 ```
 git init
 git remote add origin https://github.com/raphaelquast/foobar2000_TripleQ.git
 git fetch
 git reset --hard origin/master
 git branch --set-upstream-to=origin/master master
 ```
to update, simply run
```
git fetch
git checkout configuration\
git pull
```


# General Infos

## Hotkeys

##### While the playlist is in focus

- `tab`: show / hide playlist manager
- `crtl + t`: show / hide title bar
- `crtl + i`: show / hide playlist header
- `crtl + q`: add to playback queue
- `crtl + w`: remove from playback queue

##### GLOBAL

The theme incorporates the following **global hotkeys** (e.g. also working if the player is not in focus):  
(they might interfere with other apps using similar assignments... however I've never had problems so far)

- `crtl + shift + enter`: play / pause
- `crtl + shift + up   `: previous track
- `crtl + shift + down `: next track
- `crtl + shift + left `: move 5 seconds ahead in the current track 
- `crtl + shift + right`: move 5 seconds back in the current track
- `crtl + shift + space`: activate/deactivate the player window

## Folder structure

The theme is intended to be used with a well sorted collection...  
(it comes along with file-sorting-presets that can be used to quickly adapt a nice file-structure)

In order for the theme to work properly, your music should be structured in the following form:  
(this is of course adjustable... but you would need to customize some settings)

```
- Musik
└─── __unsorted_folder (note the DOUBLE underline!)
│   └─── ... (all the unsorted stuff)
│
│   Artist_1
│   └─── Albumtitle1 [Date]
│   │    │   01 - Title01.mp3
│   │    │   02 - Title02.mp3 
│   │   │   ...
│   │    │   Cover.jpg (possible names and formats specified in "Preferences/Display/Album art")
│   └─── Albumtitle2 [Date]
│   Artist_2
│   └─── ...
│    ...
│
│   _Compilations (note the underline in the beginning)
│   └─── Compilation Title [Date]
│   │    │   01 - Artist01 - Title01.mp3
│   │    │   02 - Artist02 - Title02.mp3
│   │    │   ...
│   │    │   Cover.jpg 
```

## Notice

- To make the buttons `Move to sorted music` and `Move to unsorted music` 
  work you must adjust the "targetDirectory" in the file `FileOps-Presets.txt`.


## Thanks to

The configuration is based on the following components:

- [Columns UI](https://github.com/reupen/columns_ui)
- [Panel Stack Splitter](http://foo2k.chottu.net/)
- [Waveform Minibar (Mod)](http://www.foobar2000.org/components/view/foo_wave_minibar_mod)
- [EsPlaylist](http://foo2k.chottu.net/)
- [Queue Contents Editor](https://www.foobar2000.org/components/view/foo_queuecontents)
- [UI Hacks](http://foobar2000.ru/forum/viewtopic.php?t=1911)
- [Playback Statistics](https://www.foobar2000.org/components/view/foo_playcount)
- [TagBox](https://www.foobar2000.org/components/view/foo_tagbox)
- [Coverflow](https://github.com/Chronial/foo_chronflow)
- [Spider Monkey Panel](https://theqwertiest.github.io/foo_spider_monkey_panel/)
