<template>
  <div id="component-task">
    <div class="task-error" v-if="errorFound">
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

  export default {
    name: 'Task',
    data() {
      return {
        tasks: [],
        newTask: "",
        errorFound: false,
        errorMessage: ""
      }
    },
    methods: {
      edit: function (task) {
        console.log("This is a test");
        axios.put(`https://glo3102lab4.herokuapp.com/92b15b6b-6295-4552-9db7-4c261976171a/tasks/${task.id}`, {name: task.name})
          .catch(e => {
            this.errorMessage = "Can't reply your request cause of " + e;
          });
      },
      deleteTask: function (task) {
        axios.delete(`https://glo3102lab4.herokuapp.com/92b15b6b-6295-4552-9db7-4c261976171a/tasks/${task.id}`)
          .then(() => {
            console.log(this.tasks);
            this.tasks.removeIf((item) => {
              return item.id === task.id;
            });
          })
          .catch(e => {
            this.errorMessage = "Can't reply your request cause of " + e;
          });
      },
      addTask: function () {
        if (!this.newTask) {
          this.errorFound = true;
          this.errorMessage = "Your task is empty !";
          console.log('task errorFound : ' + this.errorFound);
          return;
        }
        this.errorFound = false;
        axios.post(`https://glo3102lab4.herokuapp.com/92b15b6b-6295-4552-9db7-4c261976171a/tasks/`, {name: this.newTask})
          .then(task => {
            this.tasks.push(task.data);
            console.log(this.tasks);
          })
          .catch(e => {

          });
      }
    },
    created() {
      axios.get('https://glo3102lab4.herokuapp.com/92b15b6b-6295-4552-9db7-4c261976171a/tasks').then((response) => {
        this.tasks = response.data.tasks
      }).catch(e => {
        this.errorMessage = "Can't reply your request cause of " + e;
      })

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
