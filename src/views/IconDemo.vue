<template>
    <el-row justify="left">
      <!-- 默认的不行 -->
      <!-- <el-icon><Female /></el-icon> -->

      <!-- 配置为 prefix: "icon" 时 -->
      <!-- <el-icon><icon-ep-MessageBox /></el-icon>
        <el-icon><icon-ep-female /></el-icon>
        <el-icon><icon-ep-add-location /></el-icon> -->
      <!-- prefix: "fct" -->
      <el-icon><FctEpApple /></el-icon>

      <!-- prefix走默认配置时  -->
      <!-- <el-icon><i-ep-add-location /></el-icon> -->

      <!-- 禁用prefix配置时, prefix: false  -->
      <el-icon><ep-MessageBox /></el-icon>
      <EpMessageBox/>
      <el-icon><EpSuccessFilled /></el-icon>
      
      
      
</el-row>
    <el-icon :size="20">
    <MessageBox />
</el-icon>
<Edit style="width: 2em; height: 2em; margin-left: 80px;"/>

    <h4>componenets动态图标：</h4>
      <el-icon><component :is="iconName"></component></el-icon>

</template>

<script setup lang="ts">
import { MessageBox } from '@element-plus/icons-vue';

    const iconName="Edit"
</script>

<style scoped>

</style>
