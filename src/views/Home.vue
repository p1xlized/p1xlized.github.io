<template>
  <v-card
    variant="flat"
    class="mx-auto"
    max-width="100%"
    max-height="98%"
    rounded="1"
  >
    <div style="position: relative">
      <v-parallax
        src="https://github.com/p1xlized/Simple-Resume-Web-App/blob/master/shaded_landscape.jpg?raw=true"
        height="100vh"
      >
        <div
          class="d-flex flex-column fill-height justify-center align-center text-white"
        >
          <h1 class="text-h4 font-weight-bold mb-4">Welcome</h1>
          <h4 class="subheading">to my personal page</h4>
          <br />
          <div
            style="
              position: absolute;
              bottom: 2.5%;
              left: 50%;
              transform: translateX(-50%);
            "
          >
            <v-btn
              icon="mdi-chevron-double-down"
              variant="text"
              class="ma-2 pa-2"
              @click="scrollToElement('page2')"
            ></v-btn>
          </div>
        </div>
      </v-parallax>
    </div>
  </v-card>

  <br id="page2" height="100%"/>
  <div class="page">
    <v-card
      variant="text"
      class="mx-auto"
      max-width="100%"
      max-height="98%"
      rounded="1"
    >
      <div style="position: relative">
        <div
          class="d-flex flex-column fill-height justify-center align-center text-white"
        >
          <div class="main-view">
            <v-card
              variant="text"
              class="mx-auto"
              width="100vh"
              height="60vh"
              rounded="0"
              border-radius="12px"
              style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
              "
            >
              <v-avatar class="mb-2" size="30vh" rounded="1">
                <v-img cover src="https://tinyurl.com/nhebmjv8"></v-img>
              </v-avatar>
              <v-list-item
                class="text-white"
                title="Alexandru Paduret"
                subtitle="Musician turned Full Stack Developper"
              >
              </v-list-item>
              <br />
              <v-card
                variant="plain"
                class="text-left"
                text="I am a highly motivated and organized individual with excellent communication and interpersonal skills. I have the ability to work in both team and individual settings, and I am always looking for new challenges and opportunities to develop my skills."
              ></v-card>
              <v-card
                variant="plain"
                class="text-left"
                text="My goal is to grow in an Industry that's constanlty in a state of perpetual change. I want to create software that are intuitive, easy to use and beautiful to see"
              ></v-card>
            </v-card>
            <div class="justify-space-around" justify="center">
              <v-btn density="default" icon="mdi-github" variant="text">
              </v-btn>
              <v-btn
                density="default"
                icon="mdi-soundcloud"
                variant="text"
                href="https://github.com/p1xlized/Simple-Resume-Web-App"
              ></v-btn>
              <v-btn density="default" icon="mdi-gitlab" variant="text"></v-btn>
              <v-btn
                density="default"
                icon="mdi-linkedin"
                variant="text"
              ></v-btn>
              <v-btn
                density="default"
                icon="mdi-linkedin"
                variant="text"
              ></v-btn>
            </div>
            <br />
          </div>
          <div class="text-center">
            <v-chip class="ma-2" color="Mauve">Java</v-chip>

            <v-chip class="ma-2" color="Green">Java Script</v-chip>

            <v-chip class="ma-2" color="Teal">React</v-chip>

            <v-chip class="ma-2" color="Sky" text-color="white">Vue</v-chip>

            <v-chip class="ma-2" color="Sapphire" text-color="white">
              Python
            </v-chip>
            <v-chip class="ma-2">Kotlin</v-chip>

            <v-chip class="ma-2" color="Yellow">Linux</v-chip>

            <v-chip class="ma-2" color="Maroon">Firebase</v-chip>

            <v-chip class="ma-2" color="Pink" text-color="white">Docker</v-chip>

            <v-chip class="ma-2" color="f38ba8" text-color="white">
              SQL
            </v-chip>
          </div>
          <br />
          <br />

          <div class="align-end" margin-top="880vh">
            <v-btn
              icon="mdi-code-array"
              variant="text"
              class="float-xl-end"
              @click="scrollToElement('page3')"
            ></v-btn>
          </div>
        </div>
      </div>
    </v-card>
  </div>
  <br />
  <br />
  <div class="page" id="page3">
    <v-card
      variant="flat"
      class="mx-auto"
      max-width="100%"
      max-height="98%"
      rounded="1"
    >
      <div style="position: relative">
        <v-parallax src="@/assets/images/Code.jpg" height="100vh">
          <div
            class="d-flex flex-column fill-height justify-center align-center text-white"
          >
            <GridComponent />
            <br />
            <div
              style="
                position: absolute;
                bottom: 2.5%;
                left: 50%;
                transform: translateX(-50%);
              "
            >
              <v-btn
                icon="mdi-music-circle"
                variant="text"
                class="float-xl-end"
                @click="scrollToElement('page4')"
              ></v-btn>
            </div>
          </div>
        </v-parallax>
      </div>
    </v-card>
  </div>

  <div class="page" id="page4">
    <v-card
      variant="flat"
      class="mx-auto"
      max-width="100%"
      max-height="98%"
      rounded="1"
    >
      <div style="position: relative">
        <v-parallax src="@/assets/images/Prod.jpg" height="100vh">
          <div
            class="d-flex flex-column fill-height justify-center align-center text-white"
          >
            <v-container>
              <v-row no-gutters>
                <v-col>
                  <v-sheet rounded="xl" class="pa-2 ma-8">
                    <MusicCard
                      title="Tides"
                      color="Sapphire"
                      link="https://docs.google.com/uc?export=download&id=1-8UfTL8Y94KN2BWEYlzGap35Ce1uYRIq"
                      image="https://images.unsplash.com/photo-1640595843206-4f554e6c6030?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                  </v-sheet>
                </v-col>

                <v-col cols="6">
                  <v-sheet rounded="xl" class="pa-2 ma-8">
                    <MusicCard
                      title="Cyberpunk"
                      color="Lavender"
                      link="https://docs.google.com/uc?export=download&id=1dx0qbAG1CgvHQ-RxiOQHp2Vo3mufPepx"
                      image="https://i.ibb.co/JvbNtWp/2.jpg"
                  /></v-sheet>
                </v-col>

                <v-col>
                  <v-sheet rounded="xl" class="pa-2 ma-8">
                    <MusicCard
                      title="Metal Phonk"
                      color="Peach"
                      link="https://docs.google.com/uc?export=download&id=1iUCcVciB8b5wss7gemxukK5GAz-vpW6g"
                      image="https://images.unsplash.com/photo-1696838163836-fd2f46aaadce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  /></v-sheet>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col>
                  <v-sheet rounded="xl" class="pa-2 ma-8">
                    <MusicCard
                      title="Wall of Sound"
                      color="Green"
                      link="https://docs.google.com/uc?export=download&id=1nIhum9zKHQcgdE4iVW7rtewc_WYblhPg"
                      image="https://i.ibb.co/JvbNtWp/2.jpg"
                  /></v-sheet>
                </v-col>

                <v-col cols="6">
                  <v-sheet rounded="xl" class="pa-2 ma-8">
                    <MusicCard
                      title="Metal"
                      color="Teal"
                      link="https://docs.google.com/uc?export=download&id=1OTq7HNLK-5YrjBeOkwLKHtKvlJlrGsRw"
                      image="https://i.ibb.co/x82s8n9/1.jpg"
                    />
                  </v-sheet>
                </v-col>
              </v-row>
            </v-container>

            <br />
            <div
              style="
                position: absolute;
                bottom: 2.5%;
                left: 50%;
                transform: translateX(-50%);
              "
            >
              <v-btn
                icon="mdi-dots-horizontal-circle "
                variant="text"
                class="float-xl-end"
                @click="scrollToElement('page5')"
              ></v-btn>
            </div>
          </div>
        </v-parallax>
      </div>
    </v-card>
  </div>

  <br />
  <div class="page" id="page5">
    <div style="margin: 5%">
      <ToolComponent />
    </div>
  </div>
</template>

<script>
import ProfileComponent from "@/components/ProfileComponent.vue";
import MusicCard from "@/components/MusicCard.vue";
import { ref } from "vue";
import GridComponent from "@/components/GridComponent.vue";
import ToolComponent from "@/components/ToolComponent.vue";
const targetId = ref("page2");

export default {
  name: "HomeView",
  components: {
    ProfileComponent,
    GridComponent,
    MusicCard,
    ToolComponent,
  },
  data: () => ({
    show: false,
    tab: null,
    name: "",
    email: "",
    message: "",
  }),
  methods: {
    scrollToElement(elementId) {
      const el = document.getElementById(elementId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scooped>
.page {
  margin-bottom: 0%;
  margin-top: 50px;
}

pre {
  margin: 0;
}
.float-container {
  display: flex;
  align-items: stretch;
}

.left {
  text-align: left;
  margin-right: 0px;
  margin-left: 15%;
}

.right {
  margin-right: 15%;
  margin-left: 20px;
  width: 100%;
  height: 100%;
}

.textbox {
  margin-right: 15%;
  margin-left: 15%;
}
</style>
