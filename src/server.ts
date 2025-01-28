import Hapi from '@hapi/hapi';
import mongoose from 'mongoose';
// import { routes } from './routes';

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    // Koneksi MongoDB
    await mongoose.connect(process.env.MONGODB_URI!)

    // Registrasi routes
    // server.route(routes);

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
}