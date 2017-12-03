<template>
  <div id="client">
    ChatLog :
    <div id="chat-log">
      <p v-for="msg in chatLog">
          {{msg}}
      </p>
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
        if (this.chatMsg === '') {
          return;
        }
        this.$socket.emit('message', this.chatMsg);
        this.chatMsg = '';
      }
    },
    socket: {
      events: {
        message(msg) {
          this.chatLog.push(msg);
        },
        disconnection(msg) {
          this.chatLog.push(msg);
        },
        toto(msg) {
          this.chatLog.push(msg);
        }
      }
    }
  }
</script>

<style src="../../css/client.css">
</style>
