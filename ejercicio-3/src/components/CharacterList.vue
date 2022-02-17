<template>
  <div>
    <section class="hero is-small has-background-black">
      <div class="hero-body has-text-centered">
        <img src="../assets/marvel-logo.png" alt="Marvel Logo" />
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="mb-6 title">Marvel Characters</h2>

        <div class="columns">
          <div class="column is-4-tablet">
            <b-field>
              <b-input
                placeholder="Ant man..."
                type="text"
                v-model.lazy="search"
                icon-pack="fas"
                icon="search"
                icon-right="close-circle"
                icon-right-clickable
                @icon-right-click="clearSearch"
              >
              </b-input>
            </b-field>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns is-multiline is-variable is-2">
          <div
            class="column is-12-mobile is-4-tablet is-3-desktop"
            v-for="(character, index) in filteredCharacters"
            :key="index"
          >
            <card v-animate-css="'fadeIn'" :character="character"></card>
          </div>
        </div>
        <div v-show="!filteredCharacters.length && !loading">
          <b-message>
            Lo sentimos, no encontramos resultados con esa busqueda.
          </b-message>
        </div>
      </div>
    </section>

    <infinite-loading @infinite="infiniteHandler">
      <div slot="no-results">No hay resultados</div>
    </infinite-loading>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CharacterListComponent",
  data() {
    return {
      characters: [],
      count: 0,
      limit: 12,
      offset: 0,
      search: "",
      loading: true,
    };
  },
  components: {
    card: () => import("../components/Card.vue"),
    infiniteLoading: () => import("vue-infinite-loading"),
  },
  methods: {
    async infiniteHandler($state) {
      const URL = `${process.env.VUE_APP_BASE_URL}/characters?offset=${this.offset}&ts=${process.env.VUE_APP_TS}&apikey=${process.env.VUE_APP_PUBLIC_KEY}&hash=${process.env.VUE_APP_HASH}&limit=${this.limit}`;

      const {
        data: { data },
      } = await axios.get(URL);

      if (data.results.length) {
        this.offset += 12;

        this.loading = false;

        this.characters = this.characters.concat(data.results);

        $state.loaded();
      } else {
        $state.complete();
      }
    },
    clearSearch() {
      this.search = "";
    },
  },
  computed: {
    filteredCharacters() {
      return this.characters.filter((char) => {
        return char.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
      });
    },
  },
};
</script>

<style></style>
