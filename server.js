const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.get('/display', (req, res) => res.sendFile(__dirname + '/display.html'));

io.on('connection', (socket) => {
    socket.on('spam_emote', (emoji) => {
        io.emit('render_emote', emoji); // Kirim emote ke layar besar
    });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => console.log('Server running on port ' + PORT));