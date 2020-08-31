//const mongoose = require('mongoose');


/* const WritingSchema = mongoose.Schema({
    title: {
        type: String
    },
    text: {
        type: String
    },
    date: {
        type: String
    },
    note: {
        type: String
    },
    location: {
        type: String
    },
    choosen: {
        type: Boolean
    }
});

const Writing = module.exports = mongoose.model('Writing', WritingSchema);
module.exports.Writing */

export class Writing {
        public _id?:number = Math.floor(Math.random()*100);
        public title:string = "";
        public text:string = "";
        public date:string = "";
        public note:string = "";
        public location:string = "";
        public choosen:boolean = false

    /* constructor(
        public _id:number = Math.floor(Math.random()*100),
        public title:string = "",
        public text:string = "",
        public date:string = "",
        public note:string = "",
        public location:string = "",
        public choosen:boolean = false
    ){ 

    } */
}
