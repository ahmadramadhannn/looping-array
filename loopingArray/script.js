/* for biasa */
const pegawai = ['Dede', 'Rizky', 'Rifqi'];
for (let i = 0; i < pegawai.length; i++) {
	console.log(pegawai[i]);
}

/* for each */
const hrd = ['Risko', 'Rispo', 'Rigen'];
hrd.forEach(function(e) {
	// body...
	console.log(e);
});

/* for each + arrow function */
const direktur = ['Ahmad', 'Ahmad', 'Ahmad'];
direktur.forEach(e => console.log(e));

/* for of */
const bos = ['Ahmad Ramadhan', 'Ahmad Ramadhan', 'Ahmad Ramadhan'];
for( const m of bos) {
	console.log(m);
}
