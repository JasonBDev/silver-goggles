const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccordionSchema = new Schema({
    tabs: [{
        title: String,
        sections: [
            [
                
            ]
        ],
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
}, { _id: true });



module.exports = mongoose.model('Accordion', AccordionSchema);