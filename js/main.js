const milestoneData = JSON.parse(data).data;

// load course data
function loadMilestones(){
    const milestones = document.querySelector('.milestones');
    milestones.innerHTML = `${milestoneData.map((milestone)=>{
        return `<div class="milestone border-b" id = "${milestone._id}">
        <div class="flex">
          <div class="checkbox"><input type="checkbox" onclick = "markMilestone(this,${milestone._id})"/></div>
          <div onclick = "openMilestone(this,${milestone._id})">
            <p>
              ${milestone.name}
              <span><i class="fas fa-chevron-down"></i></span>
            </p>
          </div>
        </div>
        <div class="hidden_panel">
         ${milestone.modules.map((module)=>{
             return `<div class="module border-b">
             <p>${module.name}</p>
           </div>`; 
         }).join("")};
        </div>
      </div>`;
    }).join("")}`;
}


function openMilestone(milestoneElement, id){
    const currentPannel = milestoneElement.parentNode.nextElementSibling;
    const shown_Pannel = document.querySelector(".show");
    const active = document.querySelector(".active");

    if(!milestoneElement.classList.contains("active") && active){
        active.classList.remove("active");
    }
    milestoneElement.classList.toggle("active");

    if( !currentPannel.classList.contains("show") && shown_Pannel){
        shown_Pannel.classList.remove("show");
    }
    
    currentPannel.classList.toggle("show");
    showMilestone(id);
}


function showMilestone(id){
    const milestoneImage = document.querySelector(".milestoneImage");
    const title = document.querySelector(".title");
    const details = document.querySelector(".details");
    milestoneImage.style.opacity = "0";
    milestoneImage.src = milestoneData[id].image;
    title.innerText = milestoneData[id].name;
    details.innerText = milestoneData[id].description;
}
const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.onload = function(){
    this.style.opacity ="1";
}
function markMilestone(checkbox ,id){
    const doneList = document.querySelector(".doneList");
    const milestoneList =document.querySelector(".milestones");
    const item = document.getElementById(id);
    if(checkbox.checked){
        milestoneList.removeChild(item);
        doneList.appendChild(item);
    }
    else{
        milestoneList.appendChild(item);
        doneList.removeChild(item);
    }

}
loadMilestones();