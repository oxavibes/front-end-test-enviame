<template>
  <div>
    <p class="title is-6 has-text-grey-darker has-text-centered">
      <span @click="editing = true" v-show="!editing">
        {{ value }}
      </span>
      <span v-show="editing">
        <b-field>
          <b-input
            required
            ref="input"
            :value="value"
            type="text"
            @input="$emit('update:value', $event)"
            @keydown.native.enter="validate()"
            size="is-small"
          >
          </b-input>
        </b-field>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "EditableComponent",
  props: {
    value: {
      type: String,
    },
  },
  data() {
    return {
      editing: false,
    };
  },
  methods: {
    validate() {
      const isValid = this.$refs.input.checkHtml5Validity();

      if (isValid) this.editing = false;
    },
  },
};
</script>

<style></style>
