import { connect } from 'mongoose';

export async function startConnection(){
    await connect('mongodb://localhost/photo-gallery', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    });
    console.log('Data base is connected');
}
