


function show(evt) {
    allElement = document.querySelectorAll('.shows div');
    allImages = document.querySelectorAll('.shows img');
    console.log(allElement)
    for (var i = 0; i < allElement.length; i++) {
        // allElement[i].classList.add('active');
        if (i == evt) {
            if(allElement[i].classList.contains('active')) {

            }else {
                allElement[i].classList.add('active');
                allImages[i].classList.add('active-img');
            }
            
        } else {
            allElement[i].classList.remove('active');
            allImages[i].classList.remove('active-img');
        }
      }
}