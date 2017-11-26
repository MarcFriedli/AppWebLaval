<template>
  <div id="client">
    Name : <input type="text" v-model="username">
    <div id="chat-log">
      <ul>
        <li v-for="msg in chatLog">
          {{msg}}
        </li>
      </ul>
    </div>
    <input type="text" v-model="chatMsg">
    <input type="submit" value="submit" v-on:click="add">
  </div>
</template>

<script>
  export default {
    name: 'Client',
    data: () =>({
      username: '',
      chatLog: [],
      chatMsg: 'Message here'
    }),
    methods : {
      add() {
        // Emit the server side
        this.$socket.emit("message", this.chatMsg);
        console.log('send : ' + this.chatMsg);
      }
    },
    socket: {
      events: {
        message(msg) {
          this.chatLog.push(msg);
        }
      }
    }
  }
</script>
