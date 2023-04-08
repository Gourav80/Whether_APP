// ******* Variables *******
// Getting the classes.
let classForAll = document.getElementById('humedityBtn').getAttribute('class');


// *******Common Functions*******
// Function for Setting the classes to elements
let setAttributesMethod = (btnClick) =>{
    
    // Setting the attributes to the elements
    btnClick.target.setAttribute('aria-current','true');
    btnClick.target.setAttribute('class',`${classForAll} active`)
    // For debugging purpose. (printing)
    console.log(btnClick.target.attributes);    
}


// ******* Button Click Events*******
// After clicking on the buttons of tempreture,humedity and wind speed.
document.getElementById('tempBtn').addEventListener('click',(btnClick)=>{

     // Setting other class to disable 
     document.getElementById('humedityBtn').setAttribute('class',classForAll);
     document.getElementById('windBtn').setAttribute('class',classForAll);

    //  Calling to setting attribute function
    setAttributesMethod(btnClick);
});

document.getElementById('humedityBtn').addEventListener('click',(btnClick)=>{

    // Setting other class to dissable
    document.getElementById('tempBtn').setAttribute('class',classForAll);
    document.getElementById('windBtn').setAttribute('class',classForAll);

    //  Calling to setting attribute function
    setAttributesMethod(btnClick);
});

document.getElementById('windBtn').addEventListener('click',(btnClick)=>{

    // Setting other class to dissable
    document.getElementById('tempBtn').setAttribute('class',classForAll);
    document.getElementById('humedityBtn').setAttribute('class',classForAll);

    //  Calling to setting attribute function
    setAttributesMethod(btnClick);
});


