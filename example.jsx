// In this example both VIDEO and AUDIO clip will be moved UP by 1 track.

var sequenceIndex = 0; // Index of your active sequence. The first sequence in your project will have an index of 0.
var trackIndex = 0; // Index of your track. The first track of a sequence will have an index of 0.
var itemIndex = 0; // Index of your item. The first item on a track will have an index of 0.
var X = 1; // The number of tracks we will move our VIDEO CLIP by.
var Y = 1; // The number of tracks we will move our AUDIO CLIP by.

qe.project.getActiveSequence(sequenceIndex).getVideoTrackAt(trackIndex).getItemAt(itemIndex).moveToTrack(X, 0, "0");
qe.project.getActiveSequence(sequenceIndex).getAudioTrackAt(trackIndex).getItemAt(itemIndex).moveToTrack(0, Y, "0");