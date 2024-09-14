var _a;
// Grabbing the form and output elements
(_a = document
    .getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById("profilePicture");
    // Getting the values of each field
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    var usernameElement = document.getElementById("username");
    // Simple validation check
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillsElement &&
        usernameElement) {
        var name_1 = nameElement.value;
        var email_1 = emailElement.value;
        var phone_1 = phoneElement.value;
        var education_1 = educationElement.value;
        var experience_1 = educationElement.value;
        var skills_1 = skillsElement.value;
        var username = usernameElement.value;
        var uniquePath_1 = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        if (profilePictureFile) {
            var reader_1 = new FileReader();
            reader_1.onloadend = function () {
                var profilePictureURL = reader_1.result;
                // const profilePictureURL = profilePictureFile
                //   ? URL.createObjectURL(profilePictureFile)
                //   : "";
                // Creating the resume content dynamically
                var resumeOutput = "\n  <h2>Resume</h2>\n  ".concat(profilePictureURL
                    ? "<img src=\"".concat(profilePictureURL, "\" alt=\"profile Picture\" class=\"profilePicture\">")
                    : "", "\n    <p><strong>Name:</strong>  ").concat(name_1, " </p>\n    <p><strong>Email:</strong>  ").concat(email_1, " </p>\n    <p><strong>Phone:</strong>  ").concat(phone_1, " </p>\n   \n    <h3>Education</h3>\n    <p>").concat(education_1, "</p>\n\n    <h3>Experience</h3>\n    <p> ").concat(experience_1, "</p>\n\n    <h3>Skills</h3>\n    <p> ").concat(skills_1, "</p>\n  ");
                var downloadLink = document.createElement("a");
                downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
                downloadLink.download = uniquePath_1;
                downloadLink.textContent = "Download Your 2024 Resume";
                // Setting the generated content into the resume output div
                var resumeOutputElement = document.getElementById("resumeOutput");
                if (resumeOutputElement) {
                    resumeOutputElement.innerHTML = resumeOutput;
                    // resumeOutputElement.innerHTML= resumeHTML
                    resumeOutputElement.classList.remove("hidden");
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
                    resumeOutputElement.appendChild(downloadLink);
                }
            };
            reader_1.readAsDataURL(profilePictureFile);
        }
    }
    else {
        console.error("one or more output elements are missing");
    }
});
