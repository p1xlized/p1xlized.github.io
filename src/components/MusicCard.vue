<template>
  <v-col cols="12">
    <v-card :color="color" theme="dark" variant="text">
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="text-h5">{{ title }}</v-card-title>

          <v-card-subtitle>{{ subtitle }}</v-card-subtitle>

          <v-card-actions>
            <v-btn
              class="ms-2"
              icon="mdi-play"
              variant="text"
              @click="toggleAudio"
            ></v-btn>
          </v-card-actions>
        </div>

        <v-avatar class="ma-3" size="125" rounded="0">
          <v-img :src="image"></v-img>
        </v-avatar>
      </div>
    </v-card>

    <div>
      <audio ref="audio" style="display: none" @timeupdate="updateProgress">
        <source :src="link" />
      </audio>

      <v-progress-linear
        v-show="showProgressBar"
        :value="audioProgress"
        height="10"
        color="Green"
      ></v-progress-linear>
    </div>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      audioProgress: 0,
      showProgressBar: false,
    };
  },
  props: {
    title: String,
    subtitle: String,
    link: String,
    color: String,
    image: String,
  },
  methods: {
    toggleAudio() {
      const audio = this.$refs.audio;
      if (audio.paused) {
        audio.play();
        this.showProgressBar = true;
      } else {
        audio.pause();
        this.showProgressBar = false;
      }
    },
    updateProgress() {
      const audio = this.$refs.audio;
      this.audioProgress = (audio.currentTime / audio.duration) * 100;
    },
  },
};
</script>
