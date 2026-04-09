# Machine Learning and 3D

**Instructor:** Aidan Nelson  
**Email:** anelson@nyu.edu   
**Office “Drop-In” Hours (370 Jay St, Floor 4 OR Video Chat):** [Book Here](https://calendar.app.google/ZKoRiRZbGuACFcGn9)  
**Class Time:** Wednesday, 12:20 - 2:50pm  
**Class Dates:** 7 weeks - 2nd Half of Spring 2026

## Class Description

We are living during a Cambrian explosion of new tools and techniques for capturing, creating, and experiencing 3D media, driven by recent research in machine learning and generative artificial intelligence. This class will give students an introduction to some of these very recently available tools and techniques in the world of 3D, and a set of practical exercises to explore incorporating them into their own creative processes.

The class will explore 3D reconstruction from 2D photos and videos (e.g. Gaussian Splatting, Neural Radiance Fields), 3D content generation (e.g. texture generation, image-to-mesh and text-to-mesh models) and alternative workflows (e.g. 'agentic' workflows with 3D software using the model-context-protocol, interactive world models, 3D-grounded video generation).  Exact course materials will be updated to reflect newly available research.

This course will be collaborative and hands-on with in-class activities and weekly exercises.  No prior experience with 3D software is necessary, and students will work across several tools (some web based, some command line, some desktop software) throughout the 7-weeks.

### **LEARNING OBJECTIVES**

* Develop familiarity with current research and techniques for capturing, creating and experiencing 3D media and possibilities for creative use
* Develop your personal aesthetic sensibilities through a series of guided exercises

## Overview

| Week | Topic |
|------|-------|
| 01 | [Introduction: The 3D + ML Landscape](#week-01---introduction-the-3d--ml-landscape) |
| 02 | [Capture: 3D Reconstruction: Gaussian Splatting](#week-02---capture-3d-reconstruction-gaussian-splatting) |
| 03 | [Capture: Editing and Presenting Gaussian Splats](#week-03---capture-editing-and-presenting-gaussian-splats) |
| 04 | Generation: Text and Image to 3D |
| 05 | Generation: Texture, Materials, and Hybrid Workflows |
| 06 | Alternative Workflows |
| 07 | Alternative Workflows & Wrap-Up |


## Week-by-Week Schedule

### Week 01 - Introduction: The 3D + ML Landscape

#### In Class
- An (Extremely Brief) History of 3D Graphics 
- Where we are today
- Class Activity

#### Resources
- [Slide Deck for Week 01](https://docs.google.com/presentation/d/1u2eTk1v62IwqrK7BlLz0K3Ga0kTwNvq5wgwchlWKEHQ/edit?usp=sharing)
- [Example Gaussian Splat Models](https://drive.google.com/drive/folders/187qkHz2Mh_fuGGGcfrei-J4aBUBeSYkg?usp=sharing)

#### Assignment
- **Journaling in Space** - In groups (see email for group assignment), capture and collage together a series of 3D captures that reflect some aspect of your day-to-day experience of living in New York City. Imagine you are making this for yourself 10 years from now.  Focus on details. What you would like to remember that you might otherwise forget?  See below for guidance:
  1. Following [this guide](https://rd.nytimes.com/projects/gaussian-splatting-guide/), use Scaniverse ([iOS](https://apps.apple.com/us/app/scaniverse-3d-scanner/id1541433223) / [Android](https://play.google.com/store/apps/details?id=com.nianticlabs.scaniverse)) or another app to capture at least one interior space, one exterior space and one object per person in your group.
  2. Export them from the app as .ply files.
  3. Import these .ply files into the [SuperSplat Editor](https://superspl.at/editor), create a meaningful composition of at least 3 or 4 of these scanned objects and spaces.
  4. Export your composition in one of two ways:
    - Video - as a video (using screen capture OR SuperSplat’s built-in Timeline Camera Editor)
    - Interactive HTML Scene - as an interactive HTML scene (File \> Export \>  Viewer App…).  Upload your composition to Google Drive and link to the class Miro Board under Week 02\.

- **Group Research Sharing** - Group one prepares presentation for week 02 following [this guide](#group-research-sharing-assignment-weeks-2-6).


### Week 02 - Capture: 3D Reconstruction: Gaussian Splatting

#### In Class
- Student Research Sharing Presentation - Group 1 
- Assignment Sharing
- Alternative Techniques for training Gaussian Splat models

#### Resources
- [Slide Deck for Week 02](https://docs.google.com/presentation/d/1HCPYF60fj3jYxA-y3D6QqirnYO-uzq4vcBl4AXr5R4E/edit?usp=sharing)

#### Assignment
- **Journaling in Space - Part Two** - Continuing in your same groups from last week (or feel free to work solo if you prefer), expand on your project by capturing additional Gaussian Splat models using one of the two techniques we review in class this week (Jawset Postshot or Nerfstudio).  Try to vary your subjects and capture techniques.  If you focused on small objects last week, capture spaces.  If your subjects were largely permanent or solid, focus on the ephemeral.  

- **Group Research Sharing** - Group two prepares presentation for week 03 following [this guide](#group-research-sharing-assignment-weeks-2-6).


### Week 03 - Capture: Editing and Presenting Gaussian Splats

#### In Class
- Student Research Sharing Presentation - Group 2 
- Assignment Sharing
- Alternative Techniques for training Gaussian Splat models: Nerfstudio
- Presenting Gaussian Splats on the web using three.js and sparkjs.dev

#### Resources


#### Assignment
- **Journaling in Space - Part Three** (In groups of your choosing or on your own) 
  
  So far, your work has focused on capture.  This week, please switch your attention to using your captures as part of a narrative experience. Develop a short (1-2 minute) experience which uses your existing captures (or new ones) to tell a story, contextualize an idea or concept or space, or support an interactive audio-visual work.  Consider your audience: who is this for and how would you like them to engage?

  The form of this piece can be a video, an interactive or something else. In either case, you should be able to justify why 3D is necessary for this piece and what next steps you would like to take to publish this piece. 
  
  Some presentation options:
  - Render a video from your captures using SuperSplat or Postshot.  Use video editing software to supplement this video with voiceover, music or text.
  - Use the supersplat editor to publish an interactive scene with supplemental text that supports the experience.  Consider the navigation options, the opening video (e.g. created with the timeline) and other
  - Use three.js and sparkjs.dev to display splats within an interactive web experience.

- **Group Research Sharing** - Group three prepares presentation for week 04 following [this guide](#group-research-sharing-assignment-weeks-2-6).

### Week 04 - Generation: Text and Image to 3D

#### In Class
- Student Research Sharing Presentation - Group 3 
- Assignment Sharing - Round Robin & Adddress Remaining Questions
- Guest Speaker!


#### Assignment
- **3D Generation - Asset Pack** (In groups of your choosing or on your own) 
  
  3D creators like David O'Reilly (https://davidoreilly.itch.io/everything-library-animals) and Kenney.nl (https://kenney.nl/assets) release asset packs for use by independent game developers.  [3D sharing websites](https://itch.io/game-assets/free/tag-3d) are full of 3D content packs related to common and uncommon game scenarios and styles.  Given a week and the tools available to you for 3D mesh generation, create a set of 5-10 3D assets which you might imagine releasing as a set for someone else to reuse.  

  Consider what is specific to your life and surroundings that you feel belongs together in a set of 3d models?  Be specific in your choice of items.  There may be hundreds of asset packs for vehicles, but none focused on yellow bicycles in Brooklyn.  How can you achieve a stylistic continuity between these models? 

  Please try one or more of the following 3D generation workflows:
    - [3D Generation Spaces on HuggingFace](https://huggingface.co/spaces?category=3d-modeling&sort=likes)
    - Cloud services (e.g. Meshy.ai, Tripo, etc.)
    - ITP GPU Machine (see links on email)

- **Watch** [*Getting Over It* Commentary](https://www.youtube.com/watch?v=IO6ouSMm7Uc)
  

- **Group Research Sharing** - Group four prepares presentation for week 05 following [this guide](#group-research-sharing-assignment-weeks-2-6).


## Group Research Sharing Assignment (Weeks 2-6)

Each week, one group will read and prepare a short ~5-8 minute group presentation on a piece of emerging research. Each group selects an article(s), paper, or project from the reading list below (or feel free to use alternative sources as long as you cite them properly). The presentation should cover:
- What the project or paper does (explain it so your classmates can follow along)
- What you found exciting or novel about the approach
- 1-2 discussion questions for the class

**Notes:**
- Create 1-3 slides with visuals from the project.  Show the project page, demo videos, or figures from the paper — something visual which captures the ideas behind this research.
- Please do not go into every technical detail; focus on the core idea and its *implications for creative use*
- Connect it to the class: how does this relate to what you're learning or making?

### Reading List:
* [NYU Library](https://library.nyu.edu/) (Use the "Chat with us" feature to ask questions)
* [ArXiv.org](https://arxiv.org/) (e.g. use the search functionality to find articles that interest you)
* [Disney Research](https://www.disneyresearch.com/)
* [Nvidia Labs](https://research.nvidia.com/labs/sil/)
* [ACM Digital Library](https://dl.acm.org/action/doSearch?AllField=machine+learning+3d+) or the ACM [SIGGRAPH (Computer Graphics Conference) Blog](https://blog.siggraph.org/)


---

### **CODE OF CONDUCT**

- [ITP/IMA Code of Conduct](https://itpnyu.github.io/ITP-IMA-Code-of-Conduct/)

### **EQUIPMENT**

- Laptop running Windows or macOS  
  - Ideally no more than 5 years old  
  - Laptops fitting this criteria are available to be checked out through ITP’s Equipment Room for on-campus use.	  
  - There are also Workstation PCs in the Hyperlab  
- Headphones  
- External Hard Drive (nice to have!)  
- 2nd Monitor / External Monitor (available on the floor)  

### **BOOKABLE OFFICE HOURS**

You all enter this classroom with different sets of skills. In virtue of this fact, I open my office to you as an extension of the classroom. I am available for you during that time and if you can’t make it to the scheduled times, please let me know and together we will find a time which works.   

There’s no incorrect way to approach office hours, and they can be as formal or informal as you would like. In this class, we will not shy away from difficult conversations and work closely together to cultivate a space of openness and mutual support. I welcome you to contact me outside of class and office hours through email. 

### **ALTERNATIVE SOFTWARE POLICY**

There is a variety of media software other than the ones shown in class through which you could fulfill each assignment. If you are choosing one of these alternatives for an assignment, please let me know in advance. If you are working in a group project, please decide as a group on the software tools which best support your project goals.

### **EVALUATION**

Grades for the course will follow a pass/fail grading system and will be determined by the following breakdown:

* 50% Participation  
* 50% Assignments

### **ASSIGNMENTS** 

There will be regular assignments that are relevant to the class material. These assignments must be documented (written description, photos, screenshots, screen recording, code, and video all qualify based on the assignment) on your class blog (website, docs, etc.) and a link must be shared on the homework spreadsheet (linked at the top of this page). Each assignment is due by class time one week after they are assigned unless stated otherwise. 

It is expected that you will spend 6 to 8 hours a week on the class outside of class itself.  This will include reviewing material, reading, watching video, completing assignments and so on. Please budget your time accordingly.

Each assignment will be marked as complete (full credit), partially complete (half credit), or incomplete (no credit). To be complete, an assignment should meet the criteria specified in the syllabus including documentation.  If significant portions are simply not attempted it may be marked partially complete.  If an attempt isn’t made to meet the criteria specified it will be marked incomplete.

Responses to reading and other written assignments are also due in class one week after they are assigned and must also be submitted via the class website.  Written assignments are expected to be 200 to 500 words in length unless otherwise specified. Grading will follow the same guidelines as above; on time and meeting the criteria specified will be marked as complete.  Partially completed work will be given half credit.  Work that is not turned in, or fails to meet the criteria specified will be given no credit.

### **COMMUNICATION**

You must check your email and this syllabus document for important updates about class.

### **PARTICIPATION**

ITP/IMA is committed to facilitating the fullest possible participation of all students. There are many forms of participation. Please communicate what kinds of engagement are best for you so it can be taken into account.

Examples of modes of participation can look like: asking questions, going to office hours, sending and reading emails, class group discussion, arriving on time, going to class, taking notes, listening to peers, submitting responses to a form (anonymous or not), following instructions, active listening, etc.

### **EXTENSIONS** 

An assignment extension may be granted upon request. If you request an extension before the due date, your grade will not be affected. However, if you do not request an extension, the grading rules above apply. Please clarify with your instructor and set a deadline together. The recommended timeline is 1 to 5 days.

Note: There may be instances where having an extension may result in not being able to participate fully in activities such as feedback sessions or workshopping ideas/projects, which likely cannot be made up if it could disrupt the overall course schedule. Extensions are distributed at the discretion of the instructor.

### **MAKEUP WORK POLICY**

This is an option for those who have attended more than 50% of the class (if you have missed more than 50% of class sessions, it will result in an automatic F for the course). While there is no distinction in this course between excused and unexcused absences, you may inquire about makeup work. Makeup work could be content you can consume, a conversation with someone in class, additional office hours, writing a paper or an additional project. Not all course content can be made up. Please clarify with your instructor and set a deadline together. The recommended timeline is 1 to 5 days. 

### **INCOMPLETE GRADES**

Incomplete grades may only be given to students who have completed more than half of the class assignments. Incomplete grades are given at the discretion of the professor since managing incomplete grades is often additional uncompensated labor for the instructor.

### **AI STATEMENT**

You should treat AI tools just as you would any other source: cite the source and note how it was used (Harvard has a useful guide to citation of AIs). You should be prepared to explain how your use of it is the appropriate tool to fit your goal or concept and does not detract from your experience meeting the learning objectives of the assignment or course. There are some cases where the use of AI may fall under a form of plagiarism. Differentiate your work from your source’s work in a way that's clear to the reader or viewer. Additionally, you should be prepared to discuss the ethical concerns around the widespread use of emerging AI tools.

### **ATTENDANCE POLICY**

After the add/drop period, students are permitted 1 absence.

There are no excused absences and unexcused absences. There are only absences. Any more than 1 absence will affect your grade. Two late arrivals (more than 10 minutes after start time) will count as 1 absence. 

### **STATEMENT OF ACADEMIC INTEGRITY**

Plagiarism is presenting someone else’s work as though it were your own. More specifically, plagiarism is to present as your own: A sequence of words quoted without quotation marks from another writer or a paraphrased passage from another writer’s work or facts, ideas or images composed by someone else. 

Collaboration is highly valued and often necessary to produce great work. Students build their own work on that of other people and giving credit to the creator of the work you are incorporating into your own work is an act of integrity. Plagiarism, on the other hand, is a form of fraud. Proper acknowledgment and correct citation constitute the difference. 

### **STATEMENT ON ACCESSIBILITY**

It’s crucial for our community to create and uphold learning environments that empower students of all abilities. We are committed to create an environment that enables open dialogue about the various temporary and long term needs of students and participants for their academic success. We encourage all students and participants to discuss with faculty and staff possible accommodations that would best support their learning.  Students may also contact the Moses Center for Student Accessibility (212-998-4980) for resources and support. Link to the Moses Center for Student Accessibility 

### **STATEMENT ON COUNSELING AND WELLNESS**

Your health and safety are a priority at NYU. Emphasizing the importance of the wellness of each individual within our community, students are encouraged to utilize the resources and support services available to them 24 hours a day, 7 days a week via the NYU Wellness Exchange Hotline at 212-443-9999. Additional support is available over email at wellness.exchange@nyu.edu and within the NYU Wellness Exchange app. Link to the NYU Counseling and Wellness Center

### **STATEMENT ON USE OF ELECTRONIC DEVICES**

Laptops and other electronic devices are essential tools for learning and interaction in classrooms. However, they can create distractions that hinder students' ability to actively participate and engage. Please be mindful of the ways in which these devices can affect the learning environment, please refrain from doing non-class oriented activities during class.

### **STATEMENT ON TITLE IX**

Tisch School of the Arts is dedicated to providing its students with a learning environment that is rigorous, respectful, supportive and nurturing so that they can engage in the free exchange of ideas and commit themselves fully to the study of their discipline. To that end, Tisch is committed to enforcing University policies prohibiting all forms of sexual misconduct as well as discrimination on the basis of sex and gender. Detailed information regarding these policies and the resources that are available to students through the Title IX office can be found by using the following link: Link to the NYU Title IX Office 

### **STATEMENT OF PRINCIPLE**

Teachers and students work together to create a supportive learning environment. The educational experience in the classroom is one that is enhanced by integrating varying perspectives and learning modes brought by students. 

