
# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

behat generator chrome extension.

### How do I get set up? ###

to install the extension on your chrome browser please follow this steps:

1- click menu

2- tools->extensions

3- check the Developer Mode checkbox at the top

4- press load unpacked button

5- select the extension folder to import

### Who do I talk to? ###

* Chrome users


# Documentation: #

 - This extension help developers to write behat steps by just one click.
 - the extension take the generated steps and save it to your pc clipboard.
 - then you can past it easily in to your .feature file

# Events #

- `onclick` on any element of this list: `p,span,b,li,a,button,:selected,:checked,textarea,h1,h2,h3,h4,h5,h6,input`
 to generate steps `Then I should see `text` in the `css selector`` ( e.g `Then I should see "What is this repository for?" in the "#css or dom selector" element` )

- `onclick` on `a,button` the extension generate this steps ( so I prefer to `keydown` on `ctrl` while try to click this step ) 
   - `Then I should see "Add New anchor or button" in the "#elementID" element` 
   - `Then I click on "#elementID"` 
   - `Then the url should match "/xxxx"` 

- `onmousedown` on any `td` to generate `Then I should see `text` in the `css selector`` ( e.g `Then I should see "What is this repository for?" in the "#tableEx > tr-child(2) > td:nth-child(3)" element` )  

- `onmouseover` on `a,button` to generate for example : 
   
   - Then I should see "Login" in the "#submit" element
   - with `onmouseover` event you have to open your browser console to copy the behat steps from the log messages.
   
- `onmousemove` on any `.disabled` button the extension save to your pc clipboard this step  for example `Then I should see "Button Text" in the "#buttonID" element`
   
# Technologies Used #

- javascript 

- jquery 

