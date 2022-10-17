// buatlah function yang me-return hasil dari perkalian 2 parameter/argument yang dimasukkan ke function tersebut

function perkalian(a,b){
    return a*b;
}
let a=2;
let b=3;

console.log(perkalian(a,b));

//buatlah satu variable dengan tipedata object
const anObject={
    //properti dengan tipe data string
    aString:'satu',
    //properti dengan tipe data number
    aNumber:1,
    //properti yang berisi object (nested object)
    aNestedObject: {
        aString2:"string lagi"
    },
    //properti yang berisi function baru
    aFunction: function(){
        return "dalam object ini ada "+this.aString+", "+this.aNumber+", "+this.aNestedObject.aString2+" dan "+this.kali;
    },
    //properti yang menggunakan function perkalian yang pertama kalian buat
    kali: perkalian(2,5)
}
// console.log(anObject.aFunction())
// console.log(anObject.aNestedObject.aString2)
// console.log(anObject.aNumber)

//tampilkan ke console properti variable yang berisi hasil perkalian di atas
console.log(anObject.kali);