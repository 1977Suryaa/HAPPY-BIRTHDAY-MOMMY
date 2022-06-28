var canvas = new fabric.Canvas('hai');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(img){
        block_image_object=img
        block_image_object.scaleToWidth(1000)
        block_image_object.scaleToHeight(500)
        block_image_object.set({
            top:0,
            left:0
        })
        canvas.add(block_image_object)
    })
	
}
new_image()

function playSound(){
	x.play();
}
