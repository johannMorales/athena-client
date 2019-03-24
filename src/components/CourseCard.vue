<template>
  <article class="course">
    <div class="course__image">
    </div>
    <div class="course__info">
      <div>

      </div>
      <div>
        <b> Microsoft Excel - Excel from Beginner to Advanced </b>
        <p> Excel with this A-Z Microsoft Excel Course. Microsoft Excel 2010, Excel 2013, Excel 2016 </p>
      </div>
      <div class="info">
        <div class="info__teacher teacher">
          <div class="teacher__avatar">
            <Avatar/>
          </div>
          <div class="teacher__info">
            <div> Teacher name </div>
            <star-rating editable :rating="4" size="sm"/>
          </div>
        </div>
        <div class="info__price">
          S/. 199.00
        </div>
      </div>
      <div class="actions">
        <button style="display: block; width: 100%"> Más Información </button>
      </div>
    </div>
  </article>
</template>

<script>
import Avatar from '@/components/Avatar.vue';
import StarRating from '@/components/StarRating.vue';

export default {
  components: {
    Avatar,
    StarRating
  }
}
</script>

<style lang="scss" scoped>

.course {
  max-width: 300px;
  border: 1px solid grey;
  border-radius: 10px;

  &__image {
    border-radius: 10px;
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url('https://udemy-images.udemy.com/course/240x135/567828_67d0.jpg');
  }

  &__info {
    padding: 10px;
  } 
}

.actions {
  padding: 10px 0;
}

.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &__teacher {
    display: flex;
    align-items: center;
  }
}
</style>
