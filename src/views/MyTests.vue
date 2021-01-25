<template>
<div>
  <div>
    <!-- {{tab.name}} -->
      <b-dropdown :text="textName" class="m-2" ref="dropdown">
          <div :style="inputStyle"  >
            <b-table @row-selected="changeHandler" :selected="selected" :value="value" :thead-class="showHeaders" hover small :fields="fields" :items="options" selectable  select-mode="single">
            </b-table>
          </div>
      </b-dropdown>
  </div>
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
export default class MyTests extends Vue {
  /* eslint-disable @typescript-eslint/no-explicit-any*/
  @Prop() private tab!: any;
  textName = 'Please Select'

  value = []

  selected = []

  public items = [
    [
      'Label item 1',
      'Edit item 1',
      'List item 1',
      'Combo item 1',
      '1',
      'Click Here!',
      'Icon',
      'Click me!'
    ],
    [
      'Label item 2',
      'Edit item 2',
      'List item 2',
      'Combo item 2',
      '0',
      'Click Here!',
      'Icon',
      'Click me!'
    ],
    [
      'Label item 3',
      'Edit item 3',
      'List item 3',
      'Combo item 3',
      '1',
      'Click Here!',
      'Icon',
      'Click me!'
    ]
  ]

  // items = [
  //   'Label',
  //   'Edit',
  //   'List',
  //   'Combo',
  //   'Check',
  //   'Ellipsis',
  //   'Icon',
  //   'Button'
  // ];

  fields = [
    'Label'
  ];

  // showHeaders = 'd-none';

  showHeaders = ''

  // items = [
  //   { age: 40, Label: 'Dickerson', lastName: 'Macdonald' },
  //   { age: 21, Label: 'Larsen', lastName: 'Shaw' },
  //   { age: 89, Label: 'Geneva', lastName: 'Wilson' },
  //   { age: 38, Label: 'Jami', lastName: 'Carney' }
  // ];

  // eslint-disable-next-line
  changeHandler (value: Array<any>) {
    const dropRef: any = this.$refs.dropdown
    dropRef.hide(true)
    console.log('value', value[0].Label)
  }

  get inputStyle () {
    const style: Array<object> = []
    const another = {
      backgroundColor: 'white',
      color: 'black',
      overflow: 'scroll'
    }

    style.push(another)
    return style
  }

  get options () {
    const rows = this.items.map((item, index: number) => {
      // return { Label: item.age.toString(), value: index + 1 }
      return { Label: item.toString(), value: index + 1 }
    })
    return rows
  }
}
</script>
