<template>
  <view :class="classes">
    <view class="cub-picker__bar" v-if="showToolbar">
      <view class="cub-picker__cancel cub-picker__left cub-picker__button" @click="cancel">{{
        cancelText || translate('cancel')
      }}</view>
      <view class="cub-picker__title"> {{ title }}</view>
      <view class="cub-picker__confirm cub-picker__right cub-picker__button" @click="confirmHandler()">{{
        okText || translate('confirm')
      }}</view>
    </view>
    <slot name="top"></slot>

    <!-- Taro 下转换成 微信小程序 -->
    <picker-view
      v-if="ENV != ENV_TYPE.WEB"
      :indicatorStyle="`height:${optionHeight}px`"
      :value="defaultIndexes"
      :style="pickerViewStyles"
      v-bind="$attrs"
      :immediateChange="true"
      @change="tileChange"
      @pickstart="handlePickstart"
      @pickend="handlePickend"
    >
      <picker-view-column
        v-for="(column, columnIndex) in columnsList"
        :key="columnIndex"
        :filedNames="columnFieldNames"
      >
        <view
          class="cub-picker-roller-item-tarotile"
          :style="{
            lineHeight: pxCheck(optionHeight)
          }"
          v-for="(item, index) in column"
          :key="item[columnFieldNames.value] ?? index"
        >
          {{ item[columnFieldNames.text] }}
        </view>
      </picker-view-column>
    </picker-view>

    <!-- Taro 下转换成 H5 -->
    <view class="cub-picker__column" :style="columnStyle" v-if="ENV == ENV_TYPE.WEB">
      <view class="cub-picker__columnitem" v-for="(column, columnIndex) in columnsList" :key="columnIndex">
        <cub-picker-column
          :ref="swipeRef"
          :column="column"
          :columnsType="columnsType"
          :filedNames="columnFieldNames"
          :value="defaultValues[columnIndex]"
          :threeDimensional="false"
          :swipeDuration="swipeDuration"
          :visibleOptionNum="visibleOptionNum"
          :optionHeight="optionHeight"
          @change="
            (option: any) => {
              changeHandler(columnIndex, option);
            }
          "
        ></cub-picker-column>
      </view>
    </view>
    <slot name="default"></slot>
  </view>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { componentWeb, componentWeapp } from './common';
import Taro from '@tarojs/taro';
const { create } = createComponent('picker');
import { Component } from 'vue';

const component: Component = Taro.getEnv() == Taro.ENV_TYPE.WEB ? componentWeb : componentWeapp;

export default create(component);
</script>
