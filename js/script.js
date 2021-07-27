const inputs=document.querySelectorAll(".input");

function addcl(){
 let parent=this.parentNode.parentNode;
 parent.classList.add("focus");
 
}

function remc1(){
    let parent=this.parentNode.parentNode;
    if(this.value == ""){
		parent.classList.remove("focus");
	}
    
   }

inputs.forEach(inputs=> {
    inputs.addEventListener("focus", addcl);
    inputs.addEventListener("blur",remc1 );
    
});


