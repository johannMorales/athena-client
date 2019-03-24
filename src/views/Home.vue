<template>
  <section class="page">
    <section class="page__filters">

    </section>
    <section class="page__courses">
      <template v-for="index in 15">
        <div :key="index" class="course-container">
          <course-card/>
        </div>
      </template>
    </section>
  </section>
</template> 

<script>
import CourseCard from '@/components/CourseCard';

export default {
  name: "home",
  components: {
    CourseCard
  }
};
</script>

<style lang="scss" scoped>

.page {
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-areas:
    "filters courses";
    
  &__filters {
    grid-area: filters;
    min-width: 270px;
    background-color: lighten(grey, 40%);
  }

  &__courses {
    justify-content: space-around;
    grid-area: courses;
    display: flex;
    flex-wrap: wrap;
  }
}
.course-container {
  padding: 10px;
}
</style>
