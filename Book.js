AFRAME .registerComponent("book",{
  schema:{
    state:{type:"string",default:"places-list"},
    selectedCards:{type:"string",default:"#card1"}
  },
    init:function(){
      this.placesContainer=this.el
      this.createCards()
    },

    tick:function(){
      const {state}=this.el.getAttribute("book")
      if(state==="view"){
        this.hideEl([this.placesContainer])
      }
    },

    hideEl:function(elList){
      elList.map(el=>{
        el.setAttribute("visible",false)
      })
    },

    showView:function(){
      const {selectedCard}=this.data
      const skyEl=document.querySelector("#main-container")
      skyEl.setAttribute("material",{src:`./cosmic book/${selectedCard}/hero-0.jpg`,color:"white"})
    },

    createCards:function(){
      const thumbnailsRef=[
        {
          id:"ironman",
          title:"Ironman",
          url:"./cosmic book/ironman.jpeg"
        },
        {
          id:"spiderman",
          title:"Spiderman",
          url:"./cosmic book/spiderman.jpeg"
        },
        {
          id:"superman",
          title:"Superman",
          url:"./cosmic book/superman.jpeg"
        },
        {
          id:"wanda",
          title:"WandaVison",
          url:"./cosmic book/wanda.jpeg"
        },
      ]
      let previousXPosition=-60
      for(var item of thumbnailsRef){
        const posX=previousXPosition+25
        const posY=10
        const posZ=-40
        const position={x:posX,y:posY,z:posZ}
        previousXPosition=posX
        const borderEl=this.createBorder(position,item.id)
        const thumbnails=this.createThumbnail(item)
        borderEl.appendChild(thumbnails)
        const titleEl=this.createTitleEl(position,item)
        borderEl.appendChild(titleEl)
        this.placesContainer.appendChild(borderEl)
      }
    },
    createBorder:function(position,id){
      const entityEl=document.createElement("a-entity")
      entityEl.setAttribute("id",id)
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("position",position)
      entityEl.setAttribute("geometry",{primitive:"plane",width:20,height:28})
      entityEl.setAttribute("material",{color:"white",opacity:0.1})
      entityEl.setAttribute("cursor-listener",{})
      return entityEl
    },
    createThumbnail:function(item){
      const entityEl=document.createElement("a-entity")
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{primitive:"plane",width:20,height:28})
      entityEl.setAttribute("material",{src:item.url})
      return entityEl
    },
    createTitleEl:function(position,item){
      const entityEl=document.createElement("a-entity")
      entityEl.setAttribute("text",{font:"exo2bold",align:"center",width:100,color:"black",value:item.title})
      const elPosition=position
      elPosition.y=-30
      entityEl.setAttribute("position",elPosition)
      entityEl.setAttribute("visible",true)
      return entityEl
    },
  })