<template>
  <section class="page">
    <section class="page__pictures">
      <div class="picture">
        Figura 1
      </div>
      <div class="picture">
        Figura 2
      </div>
    </section>
    <section class="page__tendencies">
      <h1> Tendencia de Cursos </h1>
    </section>
    <section class="page__teachers">
      <template v-for="index in 3">
        <article :key="index" class="teacher">
          <div class="teacher__picture"></div>
          <div class="teacher__info">
            <div class="name">
                <h2 v-dummy:2></h2>
                <small v-dummy:4></small>
            </div>
            <p v-dummy:12,15></p>
          </div>
        </article>
      </template>
 

    </section>
    <section class="page__proyects">
      <h1> Proyectos de Voluntariados </h1>
      
    </section>
    <section class="page__about">
      <div class="social">
        <a href="#facebook" class="logo">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href="#linkedin" class="logo">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
        <a href="#youtube" class="logo">
          <ion-icon name="logo-youtube"></ion-icon>
        </a>
      </div>
    </section>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100vh;
  min-height: 100%;
  display: grid;
  grid-template-areas: 
    "pictures"
    "tendencies"
    "teachers"
    "proyects"
    "about";

  grid-template-rows: 1fr 1fr auto 1fr 100px;
  
  text-align: center;

  &__pictures {
    grid-area: pictures;
    display: flex;

    .picture {
      width: 50%;
    }
  }
  
  &__tendencies {
    grid-area: tendencies;
  }

  &__teachers {
    grid-area: teachers;
    background-color: #f5f5f5;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  &__proyects {
    grid-area: proyects;
  }

  &__about {
    grid-area: about;
    background-color: #f5f5f5;
    
    display: flex;
    justify-content: flex-end;
  }

}

.social {

  .logo {
    font-size: 30px;

    &:hover {
      color: red;
    }
  }
}

.teacher {
  display: flex;
  align-items: center;
  margin: 20px 10px;
  text-align: left;
  max-width: 480px;

  &__picture {
    justify-self: center;
    margin-right: 30px;
    border: 3px solid #1890ff;
    border-radius: 999px;
    min-width: 150px;
    width: 150px;
    height: 150px;
    background: #ffffff url('http://fanaru.com/anime-girls/image/152482-anime-girls-black-and-white-anime-girl.png') no-repeat center center;
  }

  &__info {
    flex-grow: 1;
  }

  .name {
    color: #1890ff;
    margin-bottom: 7px;

    small {
      color: #8c8c8c;
    }
  }
}
</style>
