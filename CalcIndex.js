
	function CalculIndice()
	{
		var g,ind,i,r;
		if(!parseInt(form1.Weight.value))
			alert("Weight must be a number");
	else
		{
			g=eval(form1.Weight.value);
			i=eval(form1.Height.value);
			ind=g/(i*i);
			form1.indice.value=ind;
			if(ind<=18.5)
			{
				r="Underweight";
			 td1.style.visibility="hidden";
			 td2.style.visibility="visible";
			 td3.style.visibility="visible";
			 td4.style.visibility="visible";
			}
			else
				if ((ind>18.5)&&(ind<=24.99))
				{r="Normal weight";
				 td1.style.visibility="visible";
				 td2.style.visibility="hidden";
				 td3.style.visibility="visible";
				 td4.style.visibility="visible";
				}
			else 
				if((ind>=25) &&(ind<=29.99))
				{r="Overweight ";
				 td1.style.visibility="visible";
				 td2.style.visibility="visible";
				 td3.style.visibility="hidden";
				 td4.style.visibility="visible";
				}
			else 
				if(ind>=30)
				{r="Obesity ";
				 td1.style.visibility="visible";
				 td2.style.visibility="visible";
				 td3.style.visibility="visible";
				 td4.style.visibility="hidden";
				}
			form1.rezultat.value=r;
		}
	}
	
