document.addEventListener("DOMContentLoaded",()=>{
  const menu=document.querySelector(".menu-btn");
  const nav=document.querySelector(".nav nav");
  menu?.addEventListener("click",()=>{nav.classList.toggle("open")});
  document.querySelectorAll(".nav nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
  document.getElementById("year").textContent=new Date().getFullYear();
  document.getElementById("enquiryForm")?.addEventListener("submit",e=>{
    e.preventDefault();
    const note=document.getElementById("formNote");
    note.textContent="Thank you! Your enquiry has been recorded. Connect this form to your backend/WhatsApp API to receive submissions.";
    e.target.reset();
  });
});
