<template>
  <div class="about">
      <b-tabs content-class="mt-3">
          <b-tab :title="tab.name" v-for="(tab, index) in tabs" :key="index">
            <component
              :is="tab.component"
              :tab="tab"
            />
          </b-tab>
      </b-tabs>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Home from './Home.vue'
import MyTests from './MyTests.vue'

@Component({
  components: {
    Home,
    MyTests
  }
})
export default class About extends Vue {
  /* eslint-disable @typescript-eslint/no-explicit-any*/
  public tabs = [
    {
      name: 'Home',
      value: 'Home',
      component: 'Home'
    },
    {
      name: 'MyTests',
      value: 'MyTests',
      component: 'MyTests'
    },
    {
      name: 'GxTabgrp',
      value: 'GxTabgrp',
      component: 'GxTabgrp'
    }
]
}

</script>
