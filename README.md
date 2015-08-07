# etch-a-sketch
Creating an etch-a-sketch clone, as per the Odin Project.


Attributes:
Etch-a-sketch photo was borrowed from:  https://www.flickr.com/photos/fimoculous/3210330182/in/photostream/


Issues:
Shake function doesn't work too well once you start to resolutions higher than around 24x24.

The margins get a little bit messed up at higher resolutions (i.e. the etch a sketch grid is not well centered over the picture).  I think it's because when I implemented the picture, I messed with the grid settings - and certain resolutions would draw poorly, so I fiddled with the width margin by taking an extra pixel off.  So for higher resolutions we lose #resolution*1px from the right hand side.  Still, I'm pretty happy to have tried to implement the picture in the background, it really brings back memories when I click shake!

