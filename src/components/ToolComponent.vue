<template>
  <v-card>
    <v-toolbar color="#181825">
      <v-toolbar-title class="text-left"
        >Amazing Tools That I Use</v-toolbar-title
      >
    </v-toolbar>
    <div class="d-flex flex-row">
      <v-tabs v-model="tab" direction="vertical" color="primary">
        <v-tab value="option-1" color="Green">
          <v-icon start> mdi-file-code </v-icon>
          IDE
        </v-tab>
        <v-tab value="option-2" color="Mauve">
          <v-icon start> mdi-music-box </v-icon>
          DAW
        </v-tab>
        <v-tab value="option-3" color="Maroon">
          <v-icon start> mdi-penguin </v-icon>
          OS
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="option-1">
          <v-card flat>
            <v-card-text class="text-left" height="90vh">
              <h2>Visual Studio Code (VSCodium):</h2>
              <br />
              <p>
                At the heart of my development set-up is Visual Studio Code, a
                versatile and extensible code editor that seamlessly adapts to
                diverse programming languages and frameworks. Its flexibility is
                a game-changer, accommodating everything from web development to
                data science. With a vast array of extensions, VSCode transforms
                into a personalized coding haven, enhancing productivity and
                efficiency with every line of code.
              </p>
              <br />
              <h2>IntelliJ IDEA:</h2>
              <br />
              <p>
                For Java development, I turn to IntelliJ IDEA, a powerhouse in
                the Java IDE landscape. Its robust feature set, intelligent code
                assistance, and intuitive interface empower Java developers to
                navigate complex projects effortlessly. From refactoring to
                debugging, IntelliJ IDEA streamlines the development process,
                allowing me to focus on crafting high-quality, maintainable
                code.
              </p>
              <br />
              <h2>Android Studio:</h2>
              <br />
              <p class="mb-0">
                When delving into native Android development, my go-to IDE is
                Android Studio. Tailored specifically for building Android
                applications, this tool provides a rich environment for
                designing, coding, and testing. With advanced features like the
                Layout Editor and seamless integration with the Android SDK,
                Android Studio accelerates the development cycle, ensuring the
                creation of immersive and user-friendly Android experiences.
              </p>
              <br />
              <h2>Extentions:</h2>
              <p>
                <v-list lines="two" text="white">
                  <v-list-item
                    title="Autocompletion:"
                    subtitle="Tabnine"
                  ></v-list-item>
                  <v-list-item
                    title="JavaScript:"
                    subtitle="Volar, Redux, React Native Tools and LiveServer "
                  ></v-list-item>
                  <v-list-item
                    title="Themes:"
                    subtitle="Catppuccin, Huston"
                  ></v-list-item>
                </v-list>
              </p>
              <br />
              <h2>Other Software:</h2>
              <p>
                <v-list lines="two" text="white">
                  <v-list-item
                    title="Api tester:"
                    subtitle="Insomnia"
                  ></v-list-item>
                  <v-list-item title="Notes:" subtitle="Obsidian"></v-list-item>
                  <v-list-item
                    title="Terminal:"
                    subtitle="Alacritty"
                  ></v-list-item>
                </v-list>
              </p>
              <br />
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="option-2">
          <v-card flat height="90vh">
            <v-card-text class="text-left">
              <h2>Bitwig Studio:</h2>
              <br />
              <p>
                Bitwig Studio takes the spotlight as my preferred DAW,
                celebrated for its cross-compatibility, including a Linux
                version. This DAW transcends operating system boundaries,
                providing a consistent and powerful environment for musical
                expression. Its intuitive interface and innovative workflow
                enhancements make music production a fluid and enjoyable
                experience. From arrangement to mixing, Bitwig Studio adapts to
                my creative flow, ensuring my ideas come to life with precision.
              </p>
              <br />
              <h2>VST:</h2>
              <p>
                <v-list lines="two" text="white">
                  <v-list-item
                    title="Synth:"
                    subtitle="Vital, Serum, SurgeXT"
                  ></v-list-item>
                  <v-list-item
                    title="Guitar:"
                    subtitle="Guitar Rig, LokiBass VST"
                  ></v-list-item>
                  <v-list-item
                    title="Drums:"
                    subtitle="Kontakt, GetGoodDrums"
                  ></v-list-item>
                  <v-list-item
                    title="Effects:"
                    subtitle="Auditority Bundle, OTT, Analog Obsession"
                  ></v-list-item>
                </v-list>
              </p>
              <br />
              <h2>Hardware:</h2>
              <br />
              <p class="mb-0">
                My hardware setup is: M-Audio Solo audio interface, providing
                pristine audio capture for it's price, and the Samson SR850
                headphones, delivering an immersive listening experience. This
                combination of hardware ensures accurate monitoring and
                crystal-clear sound, allowing me to make informed decisions
                during the production process.
              </p>
              <br />
              <h2>Run Windows Plugins</h2>
              <br />
              <p>
                LinVst is a handy tool for running Windows VST plugins on Linux.
                The setup is straightforward, but I've noticed some plugins
                causing higher-than-expected RAM usage. While it generally
                performs well, this occasional issue might impact overall system
                performance.
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="option-3">
          <v-card flat height="90vh">
            <v-card-text class="text-left">
              <h2>Linux</h2>
              <br />
              <p>
                I use Linux, specifically OpenSuse Tumbleweed with GNOME and
                PaperWM for tiling, because it offers unmatched customization,
                freedom, and open-source transparency. This combination ensures
                a cutting-edge, secure, and privacy-focused computing
                environment that aligns with my values and preferences.
              </p>
              <br />
              <h2>Here are some of my "Rices":</h2>
              <br />
              <br />
              <v-card variant="flat">
                <v-carousel show-arrows="hover" hide-delimiters height="600">
                  <v-carousel-item
                    src="https://github.com/p1xlized/dotafiles/blob/main/5.png?raw=true"
                  ></v-carousel-item>

                  <v-carousel-item
                    src="https://github.com/p1xlized/dotafiles/blob/main/2.png?raw=true"
                  ></v-carousel-item>

                  <v-carousel-item
                    src="https://github.com/p1xlized/dotafiles/blob/main/4.png?raw=true"
                  ></v-carousel-item>
                  <v-carousel-item
                    src="https://github.com/p1xlized/dotafiles/blob/main/1.png?raw=true"
                  ></v-carousel-item>
                </v-carousel>
              </v-card>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </div>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    tab: "option-1",
  }),
};
</script>
<style scoped>
.ascii-art {
  font-family: monospace;
  white-space: pre;
}
</style>
