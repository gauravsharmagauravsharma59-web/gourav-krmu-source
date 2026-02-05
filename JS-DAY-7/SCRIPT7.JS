// Create element
const para = document.createElement("p");
para.textContent="This is a dynamically added paragraph";
console.log(para);

//append element
document.getElementById("content").appendChild(para)

// remove element
document.querySelector("#content p").remove()
 

const image=document.createElement("img");
image.setAttribute("src","https://media.istockphoto.com/id/2130934199/photo/amazing-scenery-at-a-mountain-lake-in-the-bavarian-alps.jpg?s=612x612&w=0&k=20&c=_veXqFDnbN_A2aUQ5s5tCvOJRsYer3LDmwHyUPKLwZM=")

const gallery = document.getElementById("gallery");
gallery.appendChild(image);