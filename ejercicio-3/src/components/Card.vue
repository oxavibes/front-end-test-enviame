<template>
  <div class="card">
    <div class="card-image">
      <b-image
        :src="`${character.thumbnail.path}.${character.thumbnail.extension}
                      `"
        ratio="is-1by1"
        responsive
        lazy
      >
      </b-image>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <editable :value.sync="character.name"></editable>
        </div>
      </div>
      <div class="content">
        <div class="tags has-addons is-justify-content-center">
          <span class="tag is-dark">Modificado</span>
          <span class="tag">{{ character.modified | formatDate }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formatDate from "../common/filters";

export default {
  components: { Editable: () => import("./Editable.vue") },
  name: "CardComponent",
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  filters: {
    formatDate,
  },
};
</script>

<style scoped></style>
