// Grabbing the form and output elements
document
  .getElementById("resume-form")
  ?.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const profilePictureInput = document.getElementById(
      "profilePicture"
    ) as HTMLInputElement;
    // Getting the values of each field
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLTextAreaElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLTextAreaElement;
    const skillsElement = document.getElementById(
      "skills"
    ) as HTMLTextAreaElement;

    const usernameElement = document.getElementById(
      "username"
    ) as HTMLInputElement;

    // Simple validation check
    if (
      profilePictureInput &&
      nameElement &&
      emailElement &&
      phoneElement &&
      educationElement &&
      experienceElement &&
      skillsElement &&
      usernameElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experience = educationElement.value;
      const skills = skillsElement.value;
const username=usernameElement.value;
const uniquePath=`resumes/${username.replace(/\s+/g,'_')}_cv.html`


      const profilePictureFile = profilePictureInput.files?.[0];
      if(profilePictureFile){
        const reader= new FileReader()
        reader.onloadend=function(){
          const profilePictureURL=reader.result as string
        
      
      // const profilePictureURL = profilePictureFile
      //   ? URL.createObjectURL(profilePictureFile)
      //   : "";

      // Creating the resume content dynamically
      const resumeOutput = `
  <h2>Resume</h2>
  ${
    profilePictureURL
      ? `<img src="${profilePictureURL}" alt="profile Picture" class="profilePicture">`
      : ""
  }
    <p><strong>Name:</strong>  ${name} </p>
    <p><strong>Email:</strong>  ${email} </p>
    <p><strong>Phone:</strong>  ${phone} </p>
   
    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p> ${experience}</p>

    <h3>Skills</h3>
    <p> ${skills}</p>
  `;

  const downloadLink = document.createElement("a")
  downloadLink.href ='data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
downloadLink.download=uniquePath;
downloadLink.textContent="Download Your 2024 Resume";

      // Setting the generated content into the resume output div
      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        // resumeOutputElement.innerHTML= resumeHTML
        resumeOutputElement.classList.remove("hidden")
      
     
//         // create container for button
// const buttonsContainer =document.createElement("div");
// buttonsContainer.id = "buttonContainer";
// resumeOutputElement.appendChild(buttonsContainer)


// // Add DOwnload PDF button
//         const downloadButton =document.createElement("button")
//         downloadButton.textContent ="Download as PDF";
//         downloadButton.addEventListener("click",()=>{
//           window.print();
//         })
//       buttonsContainer.appendChild(downloadButton)
   
//       // Add sherable link button
//       const shareLinkButton = document.createElement("button");
//       shareLinkButton.textContent ="Copy shareable link";
// shareLinkButton.addEventListener("click",async()=>{
//   try{
//     // create a unique shareable link
//     const shareablelink =`https://yourdomain.com/resumes/${name.replace(
// /\s+/g,"_"  )}_cv.html`;
  

// // Use CLIPboard API to copy the shereable link
// await navigator.clipboard.writeText(shareablelink)
// alert("Shareable link copid to clipboard");
//     }catch(err){
//       console.error("failed to copy link: ",err);
//       alert("failed to copy link to clipboard. please try again.")
//     }
//   });
  
  
      resumeOutputElement.appendChild(downloadLink)
      }
    } 
    reader.readAsDataURL(profilePictureFile)
  }
}
    else {
      console.error("one or more output elements are missing");
    }
  });


