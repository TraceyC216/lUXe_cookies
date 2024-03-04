import React from "react";

function About(props) {
    return (
        <div>
    <h1>About lUXe cookies</h1> 
        <h3>We make UX our number one ingredient</h3>
        <div className="about_page">
        <p>The user experience (UX) of an app or website is an itegral
         piece in the development process. At l-UX-e cookies (get it?) my goal is to
         create a site that provides the user with an experience that has drawn them in to 
         want to learn about and shop from us. So, if you're here to learn more about this site, we've done our job. Please continue reading to learn more about
         the application of good user experience.</p>
        </div>
     
        <div className="about_page">
         <p>Were you ever unclear about what we are or how to find what you were looking for?
            Clear labeling made that possible. You always know where you are without being overwhelmed by
         a cluttered navigation bar. Thank you dropdown menu! To add to the ease of navigation, a consistency must be present
         between the individual pages to not distrupt the flow.</p>
         <p>There are guidelines that deliver smooth navigation. A dropdown menu should not go more than "three deep." Take our example 
            of three cookie categories. Good navigation does walk a fine line. While the menu should not go too deep, the number of tabs on the 
             navigation bar should not be overwhelming.
         </p>
         </div>
     
         <div className="about_page">
            <p>Engineering a site begins with planning. Before the coding even begins, a sitemap is created so 
                all content is included and assigned to its apppropriate page. This structural tool shows where the
                information will be, creates a visual for the relationships between the pages, and may offer an idea
                of how long the build might take.</p>
         
        <img className="img-fluid" src="https://i.imgur.com/j0O6fPQ.png" alt="sitemap"/>
        </div>
        <br />
        
        <div className="about_page">
            <p>Next, I created a wireframe to mock up what the pages will look like. This tool serves as a blue print of the upcoming site,
                while still allowing for alterations. To simulate the movement between the pages, I built a wireflow to mimic the user's experience. You may access the wireflow by
                by clicking within the title bar below and running the prototype (by clicking the play icon) once you've reached the prototype page. 
            </p>
        
        <iframe className="img-fluid"
        style={{border: "1px solid rgba(0, 0, 0, 0.1)"}}
        width="800" 
        height="450" 
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FGN1oUbO3F7KmCgsFQYOzEu%2FUntitled%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DlpNVzM4a2Ow62Rza-1" 
        allowfullscreen>
        </iframe>
        </div>
        </div>
    );
}

export default About;