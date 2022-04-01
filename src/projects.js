import project1 from "./img/portfolio.webp"
import project2 from "./img/one-page-responsive.webp"
import project3 from "./img/global-web.webp"

export const skills = ['html', 'css', 'javascript', 'github', 'firebase', 'netlify', 'react', 'vscode']

export const projects = [
    {
      id: 1,
      title: 'Portfolio Site',
      summary: [
        'This project was one of my favorites so far and has helped me break out of tutorial hell.  I also wanted this project to serve as a display of my JavasScript and React skills to potential employers or collaborators.  While I am still learning both technologies, I have learned so much with this project already, and I am sure that I will learn even more as I continue to make improvements to it as my skills grow.',
        
      ],
      lessons: [
        'At the start, this project seemed straightforward, but became a bit complex by the time I was ready to publish the project.  This was my first real dive into React, aside from smaller projects I have tackled in the past with basics and styled components.  I was also learning Netlify and some CSS flexbox with this project as well, both of which are great tools.  I have become skilled with debugging over time, which I did a lot with this project as well.',
        'As for design, while I am fairly creative, it can take me quite a bit of time to decide which colors to use, mostly through trial and error.  I will need to spend some time studying MaterialUI and color theory in order to become better with design.',
        'One of my next tasks with React will be to implement the MVC pattern and to make use of hooks, useState, and useEffect more.  I will also make more API calls and become more familiar with consuming API’s.',
        'This project definitely has room for improvement, but I had to make the decision to stop working on it for the time being and continue work on another project.  There is always something else to learn and I love growing into new skillsets.',
      ],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      thumbnail: project1,
      alt: 'Thumbnail image of portfolio site.',
      technologies: ['html', 'css', 'javascript', 'github', 'netlify'],
      video: 'https://youtu.be/LXduw5kM0GY',
      link: 'top',
      github: 'https://github.com/MFlanagan7/portfolio-site',
    },
    {
      id: 2,
      title: 'One Page Responsive',
      summary: [
        'The task: Recreate a landing page created using Bootstrap',
        'The catch: Use only pure CSS and HTML',
        'This was a project I did as a stepping stone to improve my CSS skills.  I was already familiar with Bootstrap and how easy it is to create a good looking interface with it.  I wanted to see what it took to duplicate the look and feel of a Bootstrap landing page using only HTML and CSS.',
      ],
      lessons: [
        'I grew more confident with using CSS and laying out a landing page with this project.  I saw just how much it took to recreate a page from a mockup, or in this case, a preexisting page.',
        'I used lots of CSS classes and the ‘float: left’ property for responsive card styles.  I also made good use of wrapper and container like classes to encapsulate one element inside another to take advantage of parent-children relationships for styling.',
      ],
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      thumbnail: project2,
      alt: 'Thumbnail image of a one page responsive landing page.',
      technologies: ['html', 'css', 'github'],
      video: 'https://youtu.be/nsu8AYQqz3s',
      link: 'https://mflanagan7.github.io/one-page-responsive/',
      github: 'https://github.com/MFlanagan7/one-page-responsive',
    },
    {
      id: 3,
      title: 'Globl Web',
      summary: [
        'This was one of my first projects with HTML and CSS where I learned a lot of basics.  The Coronavirus and other global concerns were the inspiration, and the site is geared toward travel safety precautions. A static HTML website with several pages along with CSS as the only technologies used allowed me to focus on learning only the basics without having to worry about learning too much at once.',
      ],
      lessons: [
        'I learned how to keep an organized CSS document, how classes are applied, CSS selector specificity, as well as some basic layout ideas and aesthetics.  I learned about media queries, even for printing a web page, and making web pages responsive.',
        'I also learned how to space out the work on a project so that it did not get too overwhelming.  Even though this is only CSS and HTML, when you look at all of the work there is to do all at once, it can be easy to become overloaded.  Breaking down big tasks, and working on each section, one at a time is a great lesson to learn for any craft.',
      ],
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      thumbnail: project3,
      alt: 'Thumbnail image of fron page of a static web page.',
      technologies: ['html', 'css', 'github'],
      video: 'https://youtu.be/N2Oft9FaTxo',
      link: 'https://mflanagan7.github.io/GlobalWeb/',
      github: 'https://github.com/MFlanagan7/GlobalWeb',
    },
  ]