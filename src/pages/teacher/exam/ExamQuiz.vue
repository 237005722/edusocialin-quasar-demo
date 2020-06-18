<template>
  <q-page class="bg-grey-2">
    <div class="row">
      <q-toolbar class="q-mb-xs">
        <q-breadcrumbs class="text-grey q-pt-md q-pb-md" active-color="accent">
          <q-breadcrumbs-el icon="home" to="/teacher/classes" />
          <q-breadcrumbs-el label="考试测验列表" icon="extension" to="/teacher/classes/exam"/>
          <q-breadcrumbs-el label="考试测验详细" icon="announcement" />
        </q-breadcrumbs>
        <q-space/>
        <q-btn round dense ripple no-caps icon="add" color="accent" class="q-ml-md">
          <q-menu
            :offset="[0,10]"
            transition-show="rotate"
            transition-hide="rotate"
          >
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>新增考试/测验</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </div>

    <div class="row">
      <div class="col-12">
        <q-card class="my-card no-shadow q-mb-md q-pl-md q-pr-md">
          <q-card-section>
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-subtitle1">考试/测验结果</div>
              </div>
              <div class="col-auto">
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section>结果分享</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-table
              class="my-sticky-header-column-table"
              title="2020年1月第一月月考"
              :data="data"
              :columns="columns"
              row-key="name"
              flat
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>

</template>

<script>
export default {
  name: 'Exam',
  data () {
    return {
      items: [{}, {}],
      link: 'myClasses',
      columns: [
        {
          name: 'name',
          required: true,
          label: '姓名',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'calories',
          align: 'center',
          label: '理综',
          field: 'calories',
          sortable: true
        },
        { name: 'fat', label: '数学', field: 'fat', sortable: true },
        { name: 'carbs', label: '英语', field: 'carbs', sortable: true },
        {
          name: 'protein',
          label: '历史',
          field: 'protein',
          sortable: true
        },
        {
          name: 'sodium',
          label: '地理',
          field: 'sodium',
          sortable: true
        },
        {
          name: 'calcium',
          label: '政治',
          field: 'calcium',
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        },
        {
          name: 'iron',
          label: '计算机',
          field: 'iron',
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        }
      ],

      data: [
        {
          name: '胡一帆',
          calories: 259,
          fat: 98,
          carbs: 98,
          protein: 88,
          sodium: 87,
          calcium: '90',
          iron: '89'
        },
        {
          name: '杨莉时',
          calories: 237,
          fat: 90,
          carbs: 95,
          protein: 86,
          sodium: 90,
          calcium: '92',
          iron: '85'
        },
        {
          name: '朵芬奇',
          calories: 262,
          fat: 86,
          carbs: 90,
          protein: 80,
          sodium: 85,
          calcium: '88',
          iron: '82'
        },
        {
          name: '李沈咪',
          calories: 295,
          fat: 71,
          carbs: 95,
          protein: 92,
          sodium: 83,
          calcium: '73',
          iron: '56'
        },
        {
          name: '风清扬',
          calories: 299,
          fat: 79,
          carbs: 60,
          protein: 86,
          sodium: 67,
          calcium: '68',
          iron: '90'
        },
        {
          name: '言多兰',
          calories: 420,
          fat: 85,
          carbs: 75,
          protein: 78,
          sodium: 87,
          calcium: '86',
          iron: '67'
        },
        {
          name: '布吉霍',
          calories: 360,
          fat: 97,
          carbs: 79,
          protein: 78,
          sodium: 97,
          calcium: '78',
          iron: '89'
        },
        {
          name: '散马奇',
          calories: 340,
          fat: 79,
          carbs: 76,
          protein: 89,
          sodium: 97,
          calcium: '78',
          iron: '86'
        },
        {
          name: '庄清丽',
          calories: 69,
          fat: 97,
          carbs: 79,
          protein: 85,
          sodium: 67,
          calcium: '95',
          iron: '85'
        },
        {
          name: '董小非',
          calories: 300,
          fat: 79,
          carbs: 84,
          protein: 90,
          sodium: 70,
          calcium: '96',
          iron: '69'
        }
      ]
    }
  },
  created () {
    this.query = this.$route.query
    console.log('classes query', this.query)
  },
  mounted () {
  },
  methods: {
    onLoad (index, done) {
    }
  }
}
</script>

<style lang="sass">
  .my-card
    width: 100%
    border-radius: 0.5rem

  .my-sticky-header-column-table
    /* specifying max-width so the example can
      highlight the sticky column on any browser window */
    max-width: 100%

    /* max height is important */
    .q-table__middle
      max-height: 400px

    td:first-child
      /* bg color is important for td; just specify one */
      background-color: #f5f5dc

    tr th
      position: sticky
      /* higher than z-index for td below */
      z-index: 2

    /* this will be the loading indicator */
    thead tr:last-child th
      /* height of all previous header rows */
      top: 48px
      /* highest z-index */
      z-index: 3
    thead tr:first-child th
      top: 0
      z-index: 1
    tr:first-child th:first-child
      /* highest z-index */
      z-index: 3

    td:first-child
      z-index: 1

    td:first-child, th:first-child
      position: sticky
      left: 0

  .body--dark
    td:first-child
      background-color: lighten($dark, 6%) !important
</style>
