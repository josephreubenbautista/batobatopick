// 0=papel
// 1=gunting
// 2=bato

$('#okay').hide();

let y=0;
let z=0;

let person = prompt("Sino ka ba?", "");

if(person==null){
	$('#name').html("You: ");
}else{
	$('#name').html(person + ": ");
}


const papel = $('#leftpapel').click(() =>{
	let x = Math.floor(Math.random()*3);
	$('#youstat').show();
	$('#mestat').show();
	$('#leftgunting').hide();
	$('#leftbato').hide();
	$('#okay').show();
	
	if(x==0){
		$('#youstat').html("Draw ");
		$('#mestat').html("Draw");
		$('#rightgunting').hide();
		$('#rightbato').hide();
	}else if(x==1){
		$('#youstat').html("Loser ");
		$('#mestat').html("Winner");
		$('#rightpapel').hide();
		$('#rightbato').hide();
		z+=1;
		$('#mescore').html(z);
	}else{
		$('#youstat').html("Winner ");
		$('#mestat').html("Loser");
		$('#rightpapel').hide();
		$('#rightgunting').hide();
		y+=1;
		$('#youscore').html(y);
	}
	
});

const gunting = $('#leftgunting').click(() =>{
	let x = Math.floor(Math.random()*3);
	$('#youstat').show();
	$('#mestat').show();
	$('#leftpapel').hide();
	$('#leftbato').hide();
	$('#okay').show();
	
	if(x==1){
		$('#youstat').html("Draw ");
		$('#mestat').html("Draw");
		$('#rightpapel').hide();
		$('#rightbato').hide();
	}else if(x==2){
		$('#youstat').html("Loser ");
		$('#mestat').html("Winner");
		$('#rightpapel').hide();
		$('#rightgunting').hide();
		z+=1;
		$('#mescore').html(z);
	}else{
		$('#youstat').html("Winner ");
		$('#mestat').html("Loser");
		$('#rightgunting').hide();
		$('#rightbato').hide();
		y+=1;
		$('#youscore').html(y);
	}
	
});


const bato = $('#leftbato').click(() =>{
	let x = Math.floor(Math.random()*3);
	$('#youstat').show();
	$('#mestat').show();
	$('#leftpapel').hide();
	$('#leftgunting').hide();
	$('#okay').show();
	
	if(x==2){
		$('#youstat').html("Draw ");
		$('#mestat').html("Draw");
		$('#rightgunting').hide();
		$('#rightpapel').hide();
	}else if(x==0){
		$('#youstat').html("Loser ");
		$('#mestat').html("Winner");
		$('#rightgunting').hide();
		$('#rightbato').hide();
		z+=1;
		$('#mescore').html(z);
	}else{
		$('#youstat').html("Winner ");
		$('#mestat').html("Loser");
		$('#rightpapel').hide();
		$('#rightbato').hide();
		y+=1;
		$('#youscore').html(y);
	}
	
});


const okay = $('#okay').click(()=>{
	$('#leftpapel').show();
	$('#leftgunting').show();
	$('#leftbato').show();
	$('#rightpapel').show();
	$('#rightgunting').show();
	$('#rightbato').show();
	$('#okay').hide();
	$('#youstat').hide();
	$('#mestat').hide();


	if(z==5){
		if(confirm("Praktis ka pa " + person+ "! Black Mamba to. Ano isa pa?")){
			location.reload();
		}else{
			window.location.assign("https://josephreubenbautista.github.io/josephbautista/index.html")
		}
	}

	if(y==5){
		if(confirm("Lakas mo Chumamba "+person+ "! Banse Tayo! Duwag ka pag di ka lumaban ulit!" )){
			location.reload();
		}else{
			window.location.assign("https://josephreubenbautista.github.io/josephbautista/index.html")
		}
	


	}




});