<template>
  <svg  :width="`${this.width}px`" viewBox="0 0 20 23" class="star" :class="classObject">
    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill-rule:nonzero;"/>
  </svg>
</template>

<script>

export default {
  props: {
    active: {
      type: Boolean,
      required: true
    },
    editable: {
      type: Boolean,
      required: true
    },
    size: {
      type: String,
      default: 'md'
    }
  },
  computed: {
    classObject() {
      return {
        active: this.active,
        editable: this.editable
      }
    },
    width() {
      switch (this.size) {
        case 'sm':
          return 10;
        case 'md':
          return 20;
        case 'lg':
          return 20;
      };
    },
    height() {
      switch (this.size) {
        case 'sm':
          return 23;
        case 'md':
          return 20;
        case 'lg':
          return 20;
      };
    }
  }
}
</script>

<style lang="scss" scoped>
.star {
  display: inline-block;
  fill: #d8d8d8;
}
.active {
  fill: #ffd055
}
.editable {
  cursor: pointer;
}
</style>
