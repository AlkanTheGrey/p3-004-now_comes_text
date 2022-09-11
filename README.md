# p3-004-now_comes_text
Working with text in phaser 3

> __Disclaimer__: This is not an in-depth guide but serves to give a general pass-through of settings
 and code that can be used to achieve the following. The phaser 3 is a lot deeper than the
 examples given and going through the docs can possibly reveal new and interesting features you
 might find useful

Phaser employs a custom game object to handle text, this text gameobject comes with its own
methods and properties that allow it to be manipulated as per the desire of the programmer.

## Adding Text

From within a scene text can be added using the following code.
> this.add.text( x, y, text, style )
- x: *x position of the text.*
- y: *y position of the text.*
- text: *the text to be set to the text game object.*
- style: *A configuration object that allows customization of the text*
  - fontFamily: e.g *"Courrier"*
  - fontSize: e.g *"32px"*
  - fontStyle: e.g *"strong"*
  - color: e.g *"Eff6400", "rgb(100, 100, 100)"*
  - align : e.g *"left", "right", "center", "justify"*

## Altering Text

To change the content of text, its *setText()* method is called. This method passes in a string
with the new content of the text game object.
> text_object.setText( value )

## Bonus: ( Key Event )
The last code block handles the use of the *on()* method of a Phaser.Input.Keyboard.Key Object.
Using the event *'down'* we can be notified every time the key is pressed ( does not count 
holding down the key ). Once notified we can call the event handler function. The last parameter
is what context we want to give the event handler. The default context is that of the input key
However in this example I pass the scene itself as the context
> keyboard_key.on( *event, fn, context* );