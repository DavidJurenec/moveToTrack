# moveToTrack() - QE Scripting

**Adobe Premiere Pro with ExtendScript and QE Scripting.**

## Function

```c++
moveToTrack(int X, int Y, string avClipsOffset);
```

* 1. parameter - Move the video clip by X tracks.
* 2. parameter - Move the audio clip by Y tracks.
* 3. parameter - Amount of frames the video and audio clips become offset by after the move. In most use cases should remain 0.

### IMPORTANT NOTES

To move a video or audio clip **up,** the entered amount has to be a **positive integer**.

To move a video or audio clip **down,** the entered amount has to be a **negative integer**

**Moving the video and audio clip has to be done sepretly!**

<br/>

## INCORRECT USE

This **will not move both the video and audio** clip up by one track, but it will **only move the video clip up by one track.**

This is because we use ```getVideoTrackAt(trackIndex).ItemAt(itemIndex)``` to get to the ```moveToTrack()``` method and ```getVideoTrackAt()``` will only get us the video tracks.

```JavaScript
qe.project.getActiveSequence(0).getVideoTrackAt(0).getItemAt(0).moveToTrack(1, 1, "0");
```

<br/>

## CORRECT USE

```JavaScript
// Move the video clip up by 1 track
qe.project.getActiveSequence(0).getVideoTrackAt(0).getItemAt(0).moveToTrack(1, 0, "0");

// Move the audio clip up by 1 track
qe.project.getActiveSequence(0).getAudioTrackAt(0).getItemAt(0).moveToTrack(0, 1, "0")
```

<br/>

## EXAMPLE

### Move both VIDEO and AUDIO clip at the same time
In this example **both VIDEO and AUDIO clip** will be moved **up** by one track.
```JavaScript
var sequenceIndex = 0; // Index of your active sequence. The first sequence in your project will have an index of 0.
var trackIndex = 0; // Index of your track. The first track of a sequence will have an index of 0.
var itemIndex = 0; // Index of your item. The first item on a track will have an index of 0.
var X = 1; // The number of tracks we will move our VIDEO CLIP by.
var Y = 1; // The number of tracks we will move our AUDIO CLIP by.

qe.project.getActiveSequence(sequenceIndex).getVideoTrackAt(trackIndex).getItemAt(itemIndex).moveToTrack(X, 0, "0");
qe.project.getActiveSequence(sequenceIndex).getAudioTrackAt(trackIndex).getItemAt(itemIndex).moveToTrack(0, Y, "0");
```
To **move both of them down** by one track the **X** and **Y** variables have to be **set to -1**

```JavaScript
var X = -1; 
var Y = -1;
```
