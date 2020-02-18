window.onload=function CalculeTTC() {

            var HTE = document.getElementsByClassName('HT');
			var TXE = document.getElementsByClassName('Taxe');
			var TTCE=document.getElementsByClassName('TTC');
            var tx;
			var ht;
			var ttc;
			var TTCV;
			var i;
			for(i=0; i<HTE.length; i++){
		    
			 tx= parseInt(TXE[i].innerHTML);
			 ht= parseInt(HTE[i].innerHTML);
			 ttc= ht+ht*(tx/100);
			 TTCV=document.createTextNode(""+ttc);
			 TTCE[i].appendChild(TTCV);
			}
			
}		

