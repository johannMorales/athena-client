<template>
  <div class="star-rating">
    <template v-for="index in 5">
      <Star 
        :key="index"
        :editable="editable"
        :size="size"
        :active="(!editable && index <= rating) || (editable && (!currentRating && index <= rating||index<=currentRating))"
        @click.native="emitRate(index)"
        @mouseenter.native="enterStar(index)"
        @mouseleave.native="leaveStar(index)"
      />
    </template>
  </div>
</template>

<script>
import Star from '@/components/Star.vue';

export default {
  components: {
    Star
  },
  props: {
    editable: {
      type: Boolean,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    size: {
      type: String,
      default: 'md'
    }
  },
  data() {
    return {
      currentRating: undefined
    }
  },
  methods: {
    emitRate(rating) {
      if (this.editable)
        this.$emit('rate', rating);
    },
    enterStar(rating) {
      if (this.editable)
        this.currentRating = rating;
    },
    leaveStar(rating) {
      if (this.editable)
        this.currentRating = undefined;
    }
  }
}
</script>

<style lang="scss" scoped>
.star-rating {
  display: inline-block;
}
</style>
