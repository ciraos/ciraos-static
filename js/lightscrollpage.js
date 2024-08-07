class ScrollPage{constructor(element){this.element=(typeof element==="string")?document.querySelector(element):element
this.content=this.element.querySelectorAll('.page')
this.events=[]
this.init()}
_event(){this.element.clientRect=this.element.getBoundingClientRect()
let event=undefined;if(this.element.clientRect.top<0&&this.element.clientRect.bottom>window.innerHeight){this.setAllElements(this.content,(i)=>{i.style.position="fixed";i.style.top="50%";i.style.left="50%";i.style.transform="translate(-50%, -50%)";if(i.style.display!="none"){i.tmp.display=i.style.display;}
i.style.display="none";})
let pageNum=(-this.element.clientRect.top-((-this.element.clientRect.top)%(this.element.clientRect.height/this.content.length)))/(this.element.clientRect.height/this.content.length);this.content[pageNum].style.display=this.content[pageNum].tmp.display;event={pageNum:pageNum,pageHeight:this.element.clientRect.height/this.content.length,pageToTop:pageNum*this.element.clientRect.height/this.content.length,scrollPage:-this.element.clientRect.top%(this.element.clientRect.height/this.content.length)/(this.element.clientRect.height/this.content.length),element:this.element,page:this.content[pageNum],}}else{this.setAllElements(this.content,(i)=>{if(i.style.display!="none"){i.tmp.display=i.style.display;}
this.setStyle(i,"position:absolute;dispaly:none;transform:none")})
if(this.element.clientRect.top>0){this.content[0].style.display=this.content[0].tmp.display;this.setStyle(this.content[0],"top:unset;left:0;bottom:unset")}else{this.setStyle(this.content[this.content.length-1],"top:unset;left:0;bottom:0")
this.content[this.content.length-1].style.display=this.content[this.content.length-1].tmp.display;}}
for(let eventFunc of this.events){try{eventFunc(event||{without:(this.element.clientRect.top>0)?"up":"down"})}catch(e){console.log(e)}}}
setStyle(element,style){style=style.split(";");for(let i of style){if(i.trim()!=""){let tmp=i.trim().split(":");element.style[tmp[0].trim()]=tmp.slice(1).join(":").trim();}}}
setAllElements(elements,func){for(let i of elements){func(i)}}
init(){this.element.style.position="relative";this.element.style.width="100%";this.setAllElements(this.content,(i)=>{i.tmp={};i.tmp.display=i.style.display;this.setStyle(i,"display:none;position:absolute;top:0;left:0;bottom:unset;transform:none;width:100%;height:100vh")})
this.content[0].style.display=this.content[0].tmp.display;window.addEventListener("scroll",this._event.bind(this))
window.addEventListener("resize",this._event.bind(this))
window.addEventListener("orientationchange",this._event.bind(this))}
addEventListener(func){this.events.push(func);}}
document.addEventListener("DOMContentLoaded",()=>{for(let i of document.querySelectorAll(".scroll-page")){i.sp = new ScrollPage(i)}})