function customRender(reactElement, mainContainer){
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  

}

const reactElement = {
  type : "a",
  props : { 
    href : "https://wwww.goggle.com",
    targer : "_blank"
  },
  children : 'click me to visit google'
}


const mainContainer = document.querySelector('#root')


customrender(reactElement, mainContainer)


