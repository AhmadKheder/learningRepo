# HTML5
HTML5 is a **semantic** languag that introduces a new set of elements that allow you to divide up the
parts of a page.The names of these elements indicate the kind of content
you will find in them



__This is the main structure of HTML5__
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
<header>
        <nav>
            <ul>
               <li><a href=""></a></li>
               <li><a href=""></a></li>
               <li><a href=""></a></li>
            </ul>
        </nav>
        
    </header>
    <main>
        

        <article>
            <section>
                <img src="" alt="">
            </section>
             <section>
                <p>
            
               </p>
            </section>
          
    
        </article>
    </main>


    <footer>
        <p>copyright 2020</p>
    </footer>

</body>
</html>
```
# Headers & Footers

The main header or footer that appears at the top or bottom of every page on the site

A header or footer for an individual <article> or <section> within the page
  
# Navigation `<nav>`

The <nav> element is used to
contain the major navigational
blocks on the site such as the
primary site navigation

# Articles 
The <article> element acts as
a container for any section of a
page that could stand alone and
potentially be syndicated.

# Asides
The <aside> element has two
purposes, depending on whether
it is inside an <article>
element or not.

```HTML
<aside>
<section class="popular-recipes">
 <h2>Popular Recipes</h2>
 <a href="">Yakitori (grilled chicken)</a>
 <a href="">Tsukune (minced chicken patties)</a>
 <a href="">Okonomiyaki (savory pancakes)</a>
 <a href="">Mizutaki (chicken stew)</a>
</section>
<section class="contact-details">
 <h2>Contact</h2>
 <p>Yoko's Kitchen<br />
 27 Redchurch Street<br />
 Shoreditch<br />
 London E2 7DP</p>
</section>
</aside>
```


When the <aside> element
is used inside an <article>
element, it should contain
information that is related to the
article but not essential to its
overall meaning. For example, a
pullquote or glossary might be
considered as an aside to the
article it relates to.


When the <aside> element is
used outside of an <article>
element, it acts as a container
for content that is related to
the entire page. For example,
it might contain links to other
sections of the site, a list of
recent posts, a search box, or
recent tweets by the author.


# Sections

The <section> element groups
related content together, and
typically each section would
have its own heading.

The <section> element should
not be used as a wrapper for
the entire page (unless the
page only contains one distinct
piece of content). If you want a
containing element for the entire
page, that job is still best left to
the <div> element.

# Heading Groups

The purpose of the <hgroup>
element is to group together a
set of one or more <h1> through
<h6> elements so that they are
treated as one single heading. 

For example, the <hgroup>
element could be used to contain
both a title inside an <h2>
element and a subtitle within an
<h3> element.

```HTML
<hgroup>
<h2>Japanese Vegetarian</h2>
<h3>Five week course in London</h3>
</hgroup>
```

# Figures
It is important to note that the
article should still make sense
if the content of the <figure>
element were moved (to another
part of the page, or even to a
different page altogether)

```HTML
<figure>
<img src="images/bok-choi.jpg" alt="Bok Choi" />
<figcaption>Bok Choi</figcaption>
</figure>
```
Examples of usage include:

+ Images
+ Videos
+ Graphs
+ Diagrams
+ Code samples
+ Text that supports the main
body of an article

The <figure> element should
also contain a <figcaption>
element which provides a text
decription for the content of
the <figure> element. In
this example, you can see a
<figure> has been added inside
the <article> element.


# Summary

+ The new HTML5 elements indicate the purpose of
different parts of a web page and help to describe
its structure.
+ The new elements provide clearer code (compared
with using multiple <div> elements).
+ Older browsers that do not understand HTML5
elements need to be told which elements are
block-level elements.
+ To make HTML5 elements work in Internet Explorer 8
(and older versions of IE), extra JavaScript is needed,
which is available free from Google.




