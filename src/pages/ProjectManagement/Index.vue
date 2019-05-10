<template>
  <div class="project-management-wrap">
    <base-title title="项目管理" icon="md-setting"></base-title>
    <div class="project-management">
      <project-item
        class="project-management-item"
        v-for="item in projectData"
        :key="item.projId"
        :title="item.title"
        :projId="item.projId"
        :members="item.members"
      ></project-item>
    </div>
  </div>
</template>
<script>
import BaseTitle from '../../components/BaseTitle'
import ProjectItem from './project-item'
export default {
  name: 'ProjectManagement',
  props: {},
  data() {
    return {
      projectData: [
        {
          title: '基于catographer的图像识别小组',
          projId: '11001',
          members: [
            {
              sid: '400011'
            },
            {
              sid: '200033'
            }
          ]
        },
        {
          title: '科研管理系统维护小组',
          projId: '11002',
          members: [
            {
              sid: '400011'
            },
            {
              sid: '200033'
            },
            {
              sid: '402011'
            },
            {
              sid: '012133'
            },
            {
              sid: '401211'
            }
          ]
        }
      ]
    }
  },
  methods: {
    toChattingRoom: function(id) {
      console.log('push')
      this.$router.push(`/chatting-room/${id}`)
    }
  },
  components: {
    BaseTitle,
    ProjectItem
  }
}
</script>
<style scoped>
.project-management {
  display: flex;
}
.project-management-item {
  width: 25%;
  max-width: 400px;
  min-width: 100px;
  flex: 1;
  cursor: pointer;
}
</style>