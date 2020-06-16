# foobar2000 TripleQ v0.1

A versatile foobar2000 skin with 3 (switchable) view-modes!

 It includes several nice gadgets like:

- **playlist-view** and **playlist-manager**

- **library- and coverflow views** that provide a nice view of your well sorted collection
  
  (and a **Tree view** that show everything including the stuff in messy unsorted folders)

- **queue content editor** to keep track of what's going to play next

... and some equally nice buttons that help with recurring tasks like

- maintain a sorted collection (moving files and folders to fit a pre-defined structure)
- apply ratings ...also in midi-mode :-) (so you don't need to have a big player window open)
- apply replay-gain
- ...

### Mini-mode

![minimode](_images/minimode.png?raw=true "Minimode")

### Midi-mode

![midimode](_images/midimode.jpg?raw=true "Midimode")

### Maxi-mode

![midimode](_images/maximode.jpg?raw=true "Maximode")

# Installation (quick and easy)

## Portable:

1) Install [Foobar2000](https://www.foobar2000.org/) (portable) [tested with v1.5.2]  (don't start it yet!)
2) Copy all files into the installation folder (replace existing files)
3) Start foobar2000, open preferences (`crtl + p`) and set your music-directory in the *"Media Library"* tab
4) Enjoy

## Standalone:

1) Install [Foobar2000](https://www.foobar2000.org/) (standard) [tested with v1.5.2]  (don't start it yet!)
2) Copy all files into your foobar2000 `configuration`-folder (replace existing files)
   - it is located at `"%appdata%\foobar2000"` 
     (if it does not yet exist, start *foobar2000* and close it again)
3) Start foobar2000, open preferences (`crtl + p`) and set your music-directory in the *"Media Library"* tab
4) Enjoy

# General Infos

## Hotkeys

##### (Left) Playlist

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
└─── __Musik_Downloads (note the DOUBLE underline!)
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

The paths to the music-folder are hardcoded... so you need to change them manually!

- To make the "Utilities" buttons `move to sorted music` and `move to unsorted music` work you must
  adjust the paths in the file `FileOps-Presets.txt`

- To make the sorting-schemes in the folder-list tab (on the right side) work you must do the following:
  
  1. go to preferences (crtl + p)
  
  2. navigate to `Media Library > Album List Panel`
  
  3. double-click on each of the 'views' and change the paths in the following 2 lines: 
     (you MUST include the backslashes and don't use unnecessary spaces  
     (if your path contains spaces, you must encapsulate it in quotes)!)
     
     - the base-path of your music directory:
       
       ```
       $puts(base_path,E:\Musik\)
       ```

## Thanks to

The configuration is based on the following components:

- [Columns UI](https://github.com/reupen/columns_ui)
- [Panel Stack Splitter](http://foo2k.chottu.net/)
- [Album List Panel](https://yuo.be/album-list-panel)
- [Waveform Minibar (Mod)](http://www.foobar2000.org/components/view/foo_wave_minibar_mod)
- [EsPlaylist](http://foo2k.chottu.net/)
- [Playlist Organizer](https://www.foobar2000.org/components/view/foo_plorg)
- [Queue Contents Editor](https://www.foobar2000.org/components/view/foo_queuecontents)
- [UI Hacks](http://foobar2000.ru/forum/viewtopic.php?t=1911)
- [Quick Search Toolbar](https://www.foobar2000.org/components/view/foo_quicksearch)
- [Playback Statistics](https://www.foobar2000.org/components/view/foo_playcount)
- [Tag Sanitizer](https://www.foobar2000.org/components/view/foo_sanitizer)
- [TagBox](https://www.foobar2000.org/components/view/foo_tagbox)
- [Coverflow]([GitHub - Chronial/foo_chronflow: A coverflow plugin for foobar](https://github.com/Chronial/foo_chronflow))
- [Spider Monkey Panel](https://theqwertiest.github.io/foo_spider_monkey_panel/)
