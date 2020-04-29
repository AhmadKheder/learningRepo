# Introducing CSS

* **What is CSS ?**
   - Cascading Style Sheets
   - CSS describes how HTML elements are to be displayed on screen, paper, or in other media
   - CSS saves a lot of work. It can control the layout of multiple web pages all at once
 
 * **How CSS works ?**
 
   CSS describes how HTML elements are to be displayed on screen, paper, or in other media.
   
   It can control the layout of multiple web pages all at once.
   
   
  # CSS Associates Style rules with HTML elements

CSS works by associating rules with HTML elements. These rules govern
how the content of specified elements should be displayed. A CSS rule
contains two parts: a *selector* and a *declaration*


![css strctur!](https://djnmarti.com/foothill/coin65/week_02/images/anatomy_css_rule.gif)

# CSS Properties Affect How Elements Are Displayed

CSS declarations sit inside curly brackets and each is made up of two
parts: a property and a value, separated by a colon. You can specify
several properties in one declaration, each separated by a semi-colon.

# External CSS

With an external style sheet, you can change the look of an entire web site, by changing one file!






# Color **CH11**

## Foreground Color

The color property allows you
to specify the color of text inside
an element. You can specify any
color in CSS in one of three ways:

   1. [RGB values](https://www.w3schools.com/colors/colors_rgb.asp)
   2. [HEX CODES](https://www.rapidtables.com/web/color/html-color-codes.html)
   3. [COLOR Names](http://www.colors.commutercreative.com/grid/)
   
### There is also a good color picking tool at:[ colorschemedesigner.com](colorschemedesigner.com)

## HUE
Hue is near to the colloquial idea
of color. Technically speaking
however, a color can also have
saturation and brightness as
well as hue.


## Saturation

Saturation refers to the amount
of gray in a color. At maximum
saturation, there would be no
gray in the color. At minimum
saturation, the color would be
mostly gray.


## Brightness

Brightness (or "value") refers
to how much black is in a color.
At maximum brightness, there
would be no black in the color.
At minimum brightness, the
color would be very dark.

![Saturation!](https://purple11.com/static/fed42130c194b0c240a4ec10408adf97/8282f/hsl-cover-2.png)

## Contrast
+ Text is harder to read when
there is low contrast between
background and foreground
colors.
+ Text is easier to read when
there is higher contrast between
background and foreground
colors.
+ For long spans of text, reducing
the contrast a little bit improves
readability

[![contrast!](https://accessibility.colostate.edu/media/sites/128/2017/09/text-on-page-diff-contrasts-01.png)](https://snook.ca/technical/colour_contrast/colour.html#fg=33FF33,bg=333333)


# CSS3: Opacity
 ### opacity 

CSS3 introduces the opacity
property which allows you to
specify the opacity of an element
and any of its child elements.
The value is a number between
0.0 and 1.0 (so a value of 0.5
is 50% opacity and 0.15 is 15%
opacity).

### rgba

The CSS3 rgba property allows
you to specify a color, just like
you would with an RGB value,
but adds a fourth value to
indicate opacity. This value is
known as an __alpha__ value and is
a number between 0.0 and 1.0
(so a value of 0.5 is 50% opacity
and 0.15 is 15% opacity). The
rgba value will only affect the
element on which it is applied
(not child elements).

### hsl
The hsl color property has
been introduced in CSS3 as an
alternative way to specify colors.
The value of the property starts
with the letters hsl, followed
by individual values inside
parentheses for: *hue, saturation, lightness*

### hsla

The hsla color property allows
you to specify color properties
using hue, saturation, and
lightness as above, and adds a
fourth value which represents
transparency (just like the rgba
property). The a stands for: __Alpha__
