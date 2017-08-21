	//该功能实现添加导航栏上的小三角

 $(document).ready(function(){
	      
		 initMenu();
		 
		 function initMenu(){
			 assembleMenu($("#nav"));
		 }
		 function assembleMenu(parentNode){
			 var theul=parentNode.children("ul"); 
		     var theli=theul.children("li");
		
		     for(var i=0;i<theli.length;i++){
			     var linode=theli.eq(i);
			     var liul=linode.children("ul");	  
		        if(liul.length>0){	
			        
					 setMouseAction(linode);
				  //  parentNode.get(0).tagName=="DIV"?linode.attr("class","downMenu"):linode.attr("class","rightMenu");
					assembleMenu(linode);

					 
				}
			 }
		 }
		function setMouseAction(node){
			node.mouseenter(function(){
				node.children("ul").css("display","block");
				//node.children("*").first().css("background","#000");
				
			});
			node.mouseleave(function(){
			node.children("ul").css("display","none");
			//node.children("*").first().css("background","none");
			
			});
		}
		
		  
	 });
	

 /*window.onload = initMenu;

    function initMenu() {
        assembleMenu(document.getElementById("navigation"));
    }

    function assembleMenu(uLParentNode) {
        var theUL = uLParentNode.getElementsByTagName("ul")[0];
         var theULChilds = theUL.childNodes;

        for (var i=0; i<theULChilds.length; i++) {
            if (theULChilds[i].tagName == "LI") {
                var theLINode = theULChilds[i];
               if (hasNextLevelMenu(theLINode)) {
                   
                   theLINode.firstChild.className = uLParentNode.tagName == "DIV" ? "downMenu" : "rightMenu";
				    setMouseActions(theLINode);
                 assembleMenu(theLINode);
                }
             }
         }
	}

        function hasNextLevelMenu(node) {
            return node.getElementsByTagName("ul").length > 0;
       }

 function setMouseActions(node) {
        node.onmouseover = function() {
            this.getElementsByTagName("ul")[0].style.display = "block";
            this.firstChild.style.backgroundColor= "#FFF";
        };

        node.onmouseout = function() {
            this.getElementsByTagName("ul")[0].style.display = "none";
            this.firstChild.style.backgroundColor= "#EEE";
        };
    }
*/


	 