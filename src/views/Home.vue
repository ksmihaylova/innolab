<template>
    <div>
        <CardList :title="titleTask" :items="infoTask"/>
        <v-parallax :src="bgParallax" height="250"></v-parallax>
        <CardList :title="titleProject" :items="infoProject"/>
        <v-parallax :src="bgParallax" height="250"></v-parallax>
    </div>
</template>
<script>
  import { Images } from '@/images';
  import { Task, Project } from '@/infoAboutCompany';
  import CardList from '@/components/CardList';

  export default {
    data () {
      return {
        bgParallax: Images.bgParallax,
        titleTask: Task.titleTask,
        infoTask: Task.tasks,
        titleProject: Project.titleProject,
        infoProject: Project.projects
      }
    },
    components: {
      CardList
    }
  };
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
