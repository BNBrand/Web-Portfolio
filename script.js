function myfunction() {
    var x = document.getElementById('topnav');
    if(x.className === 'text'){
      x.className+='res';      
    }
    else {
        x.className='text';
    }
    
}