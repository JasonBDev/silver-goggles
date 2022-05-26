const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccordionSchema = new Schema({
    tabs: [{

    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
});

// title: String,
//     sections: [
//         [
//             {
//                 type: String,
//                 text: String,
//                 filename: String,
//                 source: String,
//                 url: String,
//             },
//         ]
//     ], 

module.exports = mongoose.model('Accordion', AccordionSchema);