# Git Tutorial: A Comprehensive Guide

To start programminng using __Git__ we need to have a solid understanding of the [Command Line ](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)__cmd__ .

Then, 
Let's explore some of these abbreviation :
+ VCS
+ LVCS
+ CVCS
+ DVCS


### Local Version Control (LVCS):
Where programmers can work on the project that entails one DB on **the hard disk of their PCs** so,they can make changes on it.

Notis: * collaboration is hard enough*

### Centralized Version Control (CVCS):

This system entails a **single server** storing all changes and file versions, which **can be accessed by various clients**.
which eliminates the need to involve all ~~local databases~~ and allowe programmers to have more knowledge of team members’ activitie


Notis: *the server as a single point *


### Distributed Version Control (DVCS):
A Distributed Version Control systems (DVCS) addresses the major vulnerability of the CVCS failure:

DVCS allows clients to create mirrored repositories. These data backups can be easily be placed on the server to replace any lost information.

## What is Git?

[![Git-image](https://cdn-media-1.freecodecamp.org/images/VQhi-KgyeBh6jegrDc2zaLOGxsBWq0Bw5dNq)](https://git-scm.com/about)


Git is a combilation of files ( __Snapshots__) that programmers save ( __Commit__) to be stored as new version with its time and programmer's info. 
If the file has not changed, Git only stores a reference to the already-stored identical version of it.


## Three States of Git's File
+ Committed
    -  Data is securely stored in a local database
+ Modefied
    - File has been changed but not committed to the database
+ staged
    - Flagged a file’s changed version to be committed in the next snapshot

## Setting up a Git Repository
 After  you create a Repo on your GitHub follow the commands with ubuntu
 
``` Git
$ git clone https://github.com/YOUR REPO

```

### Check File Status
To determine the state of files, utilize the git status command:
``` Git
$ git status

```

### Tracking and Staging a New File
To Add a  *Single File*
``` Git
git add filename

```

To Add *All Files*
``` Git
$ git add *

```


#### *After using these commands, files are tracked and staged for committing.



### Committing a File
After staging one or multiple files, you should commit the changes and record what you did within the commit message:
``` Git
$ git commit -m “made change x,y,z”

```

### Committing All Changes
``` Git
$ git commit -a

```
### Pushing Changes

``` Git
$ git push origin master

```




