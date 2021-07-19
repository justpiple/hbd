	var name;
	var load = `Please wait`
	var humanName;
	var data = {}
	var loadingText = setInterval(() =>{load+='.'; document.getElementById('loading').innerText = load}, 1000)
	setTimeout(async () =>{
		clearInterval(loadingText)
		document.body.innerHTML = ''
		await new Promise(resolve => setTimeout(resolve, 1000));
		quest()
	}, 5000)
	function quest(){
		alert('minta waktumu bentar okey?')
		data.name = prompt('haiii kamu!\nAku kamu kenalan sama kamu dong\n\nMasukin panggilanmu:')
		if (!data.name) data.name = prompt(`pelit bgt si\n\nMasukin atau ga dikasi permen:`)
		if (!data.name){
			alert('Okelah gpp, aku panggil "kamu" ya')
			data.name = 'Kamu'
		} 
		data.quest1 = confirm(`${data.name} tau ga hari ini hari apa`)
		if (!data.quest1) data.quest1 = confirm('Masa gatau si')
		if (!data.quest1) alert(`okelah, aku kasi ${data.name} clue\nhari ini adalah hari dimana kamu lahir`)
		data.tebakan = prompt('hari apakah ituu?')
		if (!data.tebakan) data.tebakan = prompt(`ih ${data.name} cuek kali\n\ntebak dong`)
		if (!data.tebakan){
			alert("dih yaudah, aku cuma mau bilang")
			return ucapan()
		} 
		if (!(data.tebakan.includes('birth') || data.tebakan.includes('ulang') || data.tebakan.includes('tahun') || data.tebakan.includes('birth') || data.tebakan.includes('lahir') || data.tebakan.includes('ultah'))){
			data.tebakan = prompt(`coba katakan dengan lebih jelas`)
		if (!(data.tebakan.includes('birth') || data.tebakan.includes('ulang') || data.tebakan.includes('tahun') || data.tebakan.includes('birth') || data.tebakan.includes('lahir') || data.tebakan.includes('ultah'))) {
			alert(`yaudahlah dari pada kelamaan, aku mau ucapin selamat ulang tahun ke ${data.name} :D`)
			return ucapan()
			}
		}
		alert(`yeyy bener, ${data.name} pinter banget si\n\nselamat ulang tahun yaa ${data.name}`)
		return ucapan()
	}
  function ucapan(){
    window.location = `/special.html?name=${data.name}`
  }