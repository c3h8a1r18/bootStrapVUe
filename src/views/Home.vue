<template>
  <div class="home">
  {{tab.name}}
    <b-form-group >
      <b-form-radio
      v-for="(option, index) in options" :key="index"
        name="radio-inline"
        v-model="value"
        :value="(index + 1)"
        :inline="inlined"
      >{{option.text}}</b-form-radio>
    </b-form-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
/* eslint-disable @typescript-eslint/no-explicit-any*/
  @Prop() private tab!: any;
  inlined = true;
  value = '';
  selected = 'first';
  options = [
    { text: 'First radio', value: 'first' },
    { text: 'Second radio', value: 'second' },
    { text: 'Third radio', value: 'third' }
  ];
}
</script>
<style lang="css" scoped>
</style>
