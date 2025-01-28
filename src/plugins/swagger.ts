import { Server } from '@hapi/hapi';
import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import HapiSwagger from 'hapi-swagger';

export const swaggerPlugin = {
    name: 'swagger',
    version: '1.0.0',
    register: async function (server: Server) {
        await server.register([
            Inert,
            Vision,
            {
                plugin: HapiSwagger,
                options: {
                    info: {
                        title: 'Attendance API',
                        version: '1.0.0',
                    },
                },
            },
        ]);
    },
};