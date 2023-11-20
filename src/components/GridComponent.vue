<template>
  <v-card
    class="mx-auto"
    width="1500"
    height="750"
    color="#181825"
    variant="text"
  >
    <v-container fluid>
      <v-row>
        <v-col
          class="pa-6"
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-hover v-slot="{ isHovering, props }">
            <a :href="card.link" target="_blank" rel="noopener noreferrer">
              <v-card variant="flat" style="text-decoration: none">
                <v-img
                  :src="card.src"
                  :elevation="isHovering ? 100 : 6"
                  class="align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="300px"
                  cover
                >
                  <v-card-title
                    class="text-white is-center"
                    text-decoration="none"
                    v-text="card.title"
                  />
                  <v-card-subtitle
                    class="text-white"
                    text-decoration="none"
                    v-text="card.subtitle"
                  />
                  <br />
                </v-img>
              </v-card>
            </a>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    cards: [
      {
        id: 1,
        title: "IoT Piano",
        subtitle: "Arduino - Python - RasberryPi",
        src: "https://tinyurl.com/IoTPiano",
        flex: 6,
        link: "https://gitlab.com/AndyyTo/piano-iot",
      },
      {
        id: 2,
        title: "ChatME",
        src: "https://tinyurl.com/ChatMEzxc",
        subtitle: "Firebase - VueJS - BulmaCSS",
        flex: 3,
        link: "https://github.com/p1xlized/chat-me",
      },
      {
        id: 3,
        title: "MeatME",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        subtitle: "Kotlin - NodeJS - Android Native",
        flex: 3,
      },
      {
        id: 5,
        title: "Task Manager",

        src: "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg",
        subtitle: "VueJS - Vuetify - Firebase",
        flex: 6,
      },
      {
        id: 6,
        title: "Java Project",
        src: "https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_960_720.jpg",
        subtitle: "Java - Maven - Firebase",
        flex: 6,
      },
    ],
  }),
};
</script>

<style scoped></style>
