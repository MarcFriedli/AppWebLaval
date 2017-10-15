<template>
  <div id="component-task">
    <div class="task-error" v-if="errorMessage.length">
      <span>{{errorMessage}}</span>
    </div>

    New task : <input v-model="newTask"/>
    <button v-on:click="addTask()">Add a task</button>
    <h2>TODO</h2>
    <ul>
      <li v-for="task in tasks">
        <input v-model="task.name"/>
        <button v-on:click="edit(task)">Edit</button>
        <button v-on:click="deleteTask(task)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';

  Array.prototype.removeIf = function (callback) {
    for (let i = 0; i < this.length; ++i) {
      if (callback(this[i])) {
        this.splice(i, 1);
        --i;
      }
    }
  };

  function onError(cause) {
    this.errorMessage = "Can't reply your request cause of " + cause;
  }

  function reset(a) {
    this.errorMessage = "";
    return a;
  }

  export default {
    name: 'Task',
    data() {
      return {
        tasks: [],
        newTask: "",
        errorMessage: ""
      }
    },
    methods: {
      edit: function (task) {
        axios.put(`https://glo3102lab4.herokuapp.com/92b15b6b-6295-4552-9db7-4c261976171a/tasks/${task.id}`, {name: task.name})
          .then(reset.bind(this))
          .catch(onError.bind(this));
      },
      deleteTask: function (task) {
        axios.delete(`https://glo3102lab4.herokuapp.com/92b15b6b-6295-4552-9db7-4c261976171a/tasks/${task.id}`)
          .then(reset.bind(this))
          .then(() => {
            console.log(this.tasks);
            this.tasks.removeIf((item) => {
              return item.id === task.id;
            });
          })
          .catch(onError.bind(this));
      },
      addTask: function () {
        if (!this.newTask) {
          onError.bind(this)("your task is empty !");
          return;
        }
        axios.post(`https://glo3102lab4.herokuapp.com/92b15b6b-6295-4552-9db7-4c261976171a/tasks/`, {name: this.newTask})
          .then(reset.bind(this))
          .then(task => {
            this.tasks.push(task.data);
            console.log(this.tasks);
          })
          .catch(onError.bind(this));
      }
    },
    created() {
      axios.get('https://glo3102lab4.herokuapp.com/92b15b6b-6295-4552-9db7-4c261976171a/tasks')
        .then(reset.bind(this))
        .then((response) => {
        this.tasks = response.data.tasks
      }).catch(onError.bind(this))

    }
  }

</script>

<style>
  ul {
    list-style: none;
  }

  li > * {
    display: inline-block;
  }
</style>
