import { SubscribeMessage, WebSocketGateway, MessageBody ,WebSocketServer, OnGatewayConnection, OnGatewayDisconnect} from "@nestjs/websockets";

import { Socket, Server } from 'socket.io';

@WebSocketGateway(4002, {cors: {origin: '*'}})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;
    handleConnection(client: Socket) {
        console.log('new user connected..', client.id)

        this.server.emit('user-joined', {
            message: `New User Joined the chat: ${client.id}`,
        });
    }
    handleDisconnect(client: any) {
        console.log('user disconnected..', client.id)

        this.server.emit('user-left', {
            message: `New User Left the chat: ${client.id}`,
        });
    }

    @SubscribeMessage('newMessage')
    handleNewMessage(client: Socket, message:any) {
        console.log(message);

        client.emit("reply", 'reply')
        this.server.emit("reply", 'broadcasting...')
    }
}
