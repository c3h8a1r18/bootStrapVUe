<template>
  <div :style="style" :disabled="disabled">
    <b-tabs content-class="mt-3">
      <GxTabe
        :tabs="tabs"
        >
        </GxTabe>
        <template #tabs-end>
          <b-nav-item role="presentation" @click.prevent="newTab" href="#"><b>Add More</b></b-nav-item>
        </template>
    </b-tabs>
    <!-- <component
      v-for="control in children"
      :key="control.props.id"
      :props="control.props"
      :is="control.component"
      :children="control.children"
      :controlID="props.id"
    /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import GxTabe from './GxTabe.vue'

@Component({
  name: 'GxTabgrp',
  components: { GxTabe }
})

export default class GxTabgrp extends Vue {
    /* eslint-disable @typescript-eslint/no-explicit-any*/
  /** ******************************** Vue Props **********************************/

  // @Prop() private props!: any;
  // @Prop() private children!: any;

  /** ******************************** Vue Data **********************************/

  public props: any = [];
  public children: any = [];
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
      name: 'HelloWorld',
      value: 'HelloWorld',
      component: 'HelloWorld'
    }
]

  newTab () {
    let tabCounter = 0
    tabCounter++
    const keTab = {
      name: 'MyTests' + tabCounter,
      value: 'MyTests',
      component: 'MyTests'
    }
    this.tabs.push(keTab)
  }

  /** ******************************** Vue Computed **********************************/

  get style () {
    const style: Array<any> = []
    return style
  }

  get cssProperties () {
      const style: Array<any> = []
    return style
  }

  get tabindex (): number { return 1 }

  get disabled (): boolean { return false }

  /** ******************************** Vue Methods **********************************/
}
</script>
