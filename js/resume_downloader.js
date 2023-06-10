let resume_all = document.querySelectorAll(".resume");
resume_all.forEach(resume=>{
resume.addEventListener('click', (e) => {
    window.open('./assets/docs/mayank_resume .pdf', '_blank');
})
})