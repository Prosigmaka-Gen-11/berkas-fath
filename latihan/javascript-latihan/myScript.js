// let hasil = 1+1
// document.querySelector("#target").innerHTML = hasil
// document.write(hasil)
// window.alert(hasil)
// alert(hasil)
// console.log(hasil) //keluar hasilnya di console (inspect->console)
const hasil = 1+1
// const hasil = 2+2 //akan error 

// deklarasi
let a
//assign
a = 1+1

//deklarasi+assign

let x=1
let y = 3
let res = x+y
console.log(a)
console.log(res)

//deklarasi fungsi
function greeting(nama,marga){
    console.log("hai " +nama+ " "+marga)
}

greeting('james','uchiha')

function greeting2(nama,marga){
    return "hai " +nama+ " "+marga
}

const string = greeting('fath','kalamal')

console.log(string)

let mystring = 'Hai Fath'

console.log(mystring.length)
console.log(mystring.substring(0,3))

const orang = {
    nama: "Fath",
    umur: 17,
    gender: "perempuan",
    pendidikan: {
        sd: "kb 7",
        smp: "smp 2"
    },
    sebutNamaSaya: function(){
        console.log("saya fath")
    }
}
orang.sebutNamaSaya
console.log(orang.pendidikan.sd)
console.log(orang)

orang.umur = 18

console.log(orang)

document.querySelector('h1').innerHTML = "Ini Heading"

//array ============================
const arr1 = [
    'fath','kalamal','haq'
]

console.log(arr1[1])
arr1[1] = 'arini'
console.log(arr1[1])

//iterable pake for

for(let i=0;i<10;i++){
    console.log(i)
}

for(let ygdiulang of arr1){
    console.log(ygdiulang)
}

//looping indexnya
for(let ygdiulang in arr1){
    console.log(ygdiulang)
}

for(let index in arr1){
    console.log(arr1[index])
}

arr1.forEach(function(hasil, index){
    console.log(hasil, index)
})

if ('bambang'){
    console.log("iya sama")
} else if(null) {
    console.log("ga sama")
} else {
    console.log("else")
}