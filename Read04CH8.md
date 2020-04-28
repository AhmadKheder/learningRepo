# Extra Markup


What is <!DOCTYPE html> ?

All HTML documents must start with a <!DOCTYPE> declaration.

The declaration is not an HTML tag. It is an "information" to the browser about what document type to expect.

In HTML 5, the declaration is simple:

'''HTML

<!DOCTYPE html>

'''

**It differe In Older HTML Documents**Like  HTML 4, Transitional XHTML 1.0 , Strict XHTML 1.0, XML Declaration


## Comments in HTML

'''HTML
<!-- beggin tag

your comments

End tag -->
 '''

## ID Attribute


'''HTML
<p id="unique-id">The id attribute specifies a unique id for an HTML element (the value must be unique within the HTML document).
</p>
<p>The id attribute specifies a unique id for an HTML element (the value must be unique within the HTML document)..</p>
 '''

# Class Attribute
## class
- The class is an attribute which specifies one or more class names for an HTML element.
- The class attribute can be used on any HTML element.
- The class name can be used by CSS and JavaScript to perform certain tasks for elements with the specified class name.

## class attribute
The class attribute specifies one or more classnames for an element.



'''HTML
<html>
<head>
<style>
h1.intro {
    color: blue;
}

p.important {
    color: green;
}
</style>
</head>
<body>

<h1 class="intro">Header 1</h1>
<p>A paragraph.</p>
<p class="important">Note that this is an important paragraph. :)</p>

</body>
</html>
 '''
*The class attribute on any element can share the same value. So, in this example, the value of important could be used on headings and links*

## Block Elements
Block elements appear on the screen as if they have a line break before and after them. For example, the <p>, <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, <ul>, <ol>, <dl>, <pre>, <hr />, <blockquote>, and <address> elements are all block level elements. They all start on their own new line, and anything that follows them appears on its own new line.

## Inline Elements
Inline elements, on the other hand, can appear within sentences and do not have to appear on a new line of their own. The <b>, <i>, <u>, <em>, <strong>, <sup>, <sub>, <big>, <small>, <li>, <ins>, <del>, <code>, <cite>, <dfn>, <kbd>, and <var> elements are all inline elements.

## Grouping Text & Elements In a Block
   + The <div> tag :
            This is the very important block level tag which plays a big role in grouping various other HTML tags and applying CSS on group of elements. Even now <div> tag can be used to create webpage layout where we define different parts (Left, Right, Top etc.) of the page using <div> tag. This tag does not provide any visual change on the block but this has more meaning when it is used with CSS.

                '''HTML
    <div id="header">
    <img src="images/logo.gif" alt="Anish Kapoor" />
    <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="biography.html">Biography</a></li>
    <li><a href="works.html">Works</a></li>
    <li><a href="contact.html">Contact</a></li>
    </ul>
    </div><!-- end of header -->
            '''
    + The <span> tag:
    The HTML <span> is an inline element and it can be used to group inline-elements in an HTML document. This tag also does not provide any visual change on the block but has more meaning when it is used with CSS.

    The difference between the <span> tag and the <div> tag is that the <span> tag is used with inline elements whereas the <div> tag is used with block-level elements.

        ''' HTML
        <p>Anish Kapoor won the Turner Prize in 1991 and
 exhibited at the <span class="gallery">Tate
 Modern</span> gallery in London in 2003.</p>
        '''

 # IFrames
One common use of iframes
(that you may have seen on
various websites) is to embed
a Google Map into a page. The
content of the iframe can be any
html page (either located on the
same server or anywhere else on
the web).


'''HTML
<iframe
width="450"
height="350"
src="http://maps.google.co.uk/maps?q=moma+new+york
&amp;output=embed">
</iframe>
'''

 
 ### src
The src attribute specifies the
URL of the page to show in the
frame.
### height
The height attribute specifies
the height of the iframe in pixels.
### width
The width attribute specifies
the width of the iframe in pixels.


# Information About Your Pages <meta>

Metadata is data (information) about data.
<meta> tags always go inside the <head> element, and they provide metadata about the HTML document.


<meta> tags are typically used to specify character set, page description, keywords, author of the document, and viewport settings.

Metadata will not be displayed on the page, but is machine parsable.


Metadata is used by browsers (how to display content or reload page), search engines (keywords), and other web services.

| Attribute                 | Description                                |
| -------------             |        -----:                              |
| description               |  This contains a description of the page.  |
| keywords                  | This contains a list of commaseparated words that a user
                                 might search on to find the page.       |           
| robots                    | This indicates whether search engines should add this page
                                    to their search results or not.      |   
| author                    | This defines the author of the
                                                            web page.    |
| pragma                    |This prevents the browser from    
                                                      caching the page.  |
| expires                   | Because browsers often cache
    the content of a page, the
expires option can be used
to indicate when the page
should expire (and no longer be
                                                                cached) .|


# Summary

+ DOCTYPES tell browsers which version of HTML you
are using.
+  You can add comments to your code between the
<!-- and --> markers.

+ The id and class attributes allow you to identify
particular elements.

+ The <div> and <span> elements allow you to group
block-level and inline elements together

+ <iframes> cut windows into your web pages through
which other pages can be displayed.

+ The <meta> tag allows you to supply all kinds of
information about your web page

+ Escape characters are used to include special
characters in your pages such as <, >, and ©.