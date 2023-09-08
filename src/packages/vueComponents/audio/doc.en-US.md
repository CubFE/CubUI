# Audio

### Intro

Audio Playing

### Install

```js
import { createApp } from 'vue';
import { Audio } from '@cubui/cubui';

const app = createApp();
app.use(Audio);
```

### Basic Usage

:::demo

```vue
<template>
  <cub-audio url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav" :loop="true" type="icon"></cub-audio>
</template>
```

:::

### Voice Playing

:::demo

```vue
<template>
  <cub-audio url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav" :loop="false" type="none" ref="audioDemo">
    <div class="cub-voice">
      <div><Voice></Voice></div>
      <div>{{ duration }}"</div>
    </div>
  </cub-audio>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { Voice } from '@cubfe/icons-vue';
const audioDemo = ref(null);
const duration = ref(0);
onMounted(() => {
  setTimeout(() => {
    duration.value = audioDemo.value.second.toFixed();
  }, 500);
});
</script>

<style>
.cub-voice {
  display: flex;
  justify-content: space-between;
  width: 100px;
  height: 20px;
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 18px;
}
</style>
```

:::

### Progress

:::demo

```vue
<template>
  <cub-audio url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav" :loop="true" type="progress">
    <div class="cub-audio-operate-group">
      <cub-audio-operate type="back"></cub-audio-operate>
      <cub-audio-operate type="play"></cub-audio-operate>
      <cub-audio-operate type="forward"></cub-audio-operate>
      <cub-audio-operate type="mute"></cub-audio-operate>
    </div>
  </cub-audio>
</template>
```

:::

### Custom Control

:::demo

```vue
<template>
  <cub-audio
    url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
    :loop="false"
    type="progress"
    @forward="forward"
    @fastBack="fastBack"
    @play="changeStatus"
    @ended="ended"
    @changeProgress="changeProgress"
  >
    <div class="cub-audio-operate-group">
      <cub-audio-operate type="back">
        <PlayDoubleBack width="35px" height="35px"></PlayDoubleBack>
      </cub-audio-operate>
      <cub-audio-operate type="play">
        <PlayStart v-if="!playing" width="35px" height="35px"></PlayStart>
        <PlayStop v-else width="35px" height="35px"></PlayStop>
      </cub-audio-operate>
      <cub-audio-operate type="forward">
        <PlayDoubleForward width="35px" height="35px"></PlayDoubleForward>
      </cub-audio-operate>
    </div>
  </cub-audio>
</template>
<script setup>
import { ref } from 'vue';
import { PlayDoubleBack, PlayDoubleForward, PlayStart, PlayStop } from '@cubfe/icons-vue';
const playing = ref(false);
const fastBack = () => {
  console.log('Backwards');
};
const forward = (progress) => {
  console.log('Fast forward', 'Current Time' + progress);
};
const changeStatus = (status) => {
  console.log('Current play status', status);
  playing.value = status;
};
const ended = () => {
  console.log('Playing ended');
};
const changeProgress = (val) => {
  console.log('Change progress', val);
};
</script>
```

:::

## API

### Props

| Attribute | Description              | Type    | Default    |
| --------- | ------------------------ | ------- | ---------- |
| url       | Audio URL                | string  | `''`       |
| muted     | Whether to be muted      | boolean | `false`    |
| autoplay  | Whether to autoplay      | boolean | `false`    |
| loop      | Whether to loop playback | boolean | `false`    |
| preload   | Whether to proload audio | string  | `auto`     |
| type      | Show type                | String  | `progress` |

### Events

| Attribute       | Description                                    | CallBack                 |
| --------------- | ---------------------------------------------- | ------------------------ |
| fast-back       | Emitted when audio back                        | play time（millisecond） |
| forward         | Emitted when audio forward                     | play time（millisecond） |
| play            | Emitted when audio play or pause               | play status              |
| ended           | Emitted when audio ended                       | ——                       |
| mute            | Emitted when audio mute                        | ——                       |
| change-progress | Emitted when audio progress change             | play time（millisecond） |
| can-play        | Emitted when the user agent can play the media | `event: Event`           |
