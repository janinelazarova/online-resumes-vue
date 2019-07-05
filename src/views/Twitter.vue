<template>

<div class="resumes-twiter">
    <div id="container"></div>
</div>

</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
        user: {twitter_handle: 'Oprah'},
        timeline: []
    };
  },
  created: function() {
      axios.get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=oprah&count=2").then(response => {
      this.timeline = response.data;
      });
  },
  methods: {
  }
};
</script>