AFRAME .registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{default:"",type:"string"}
    },
    init:function(){
      this.handleMouseEnterEvent() 
      this.handleMouseLeaveEvent() 
    },

    handleClickEvent:function(){
        this.el.addEventListener("click",evt=>{
        const placeContainer=document.querySelector("#places-container")
        const {state}=placeContainer.getAttribute("book")
        if(state==="places-list"){
          const id=this.el.getAttribute("id")
          const placesid=["ironman","spiderman","superman","wanda"]
          if(placesId.includes(id)){
            placeContainer.setAttribute("book",{
              state:"view",
              selectedCard:id,
            })
          }
        }
        })
      },

    handlePlacesState:function(){
        const id=this.el.getAttribute("id")
        const placesid=["ironman","spiderman","superman","wanda"]
        if(placesid.includes(id)){
            const placesContainer=document.querySelector("#places-container")
            placesContainer.setAttribute("cursor-listener",{
                selectedItemId:id
            })
            this.el.setAttribute("material",{
                color:"red",opacity:1
            })
        }
    },

    handleMouseEnterEvent:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlacesState()
        })
    },
    handleMouseLeaveEvent:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectedItemId}=this.data
            if(selectedItemId){
                const el=document.querySelector(`#${selectedItemId}`)
                const id=el.getAttribute("id")
                if(id==selectedItemId){
                    el.setAttribute("material",{color:"white",opacity:0})
                }
            }
        })
    }
})