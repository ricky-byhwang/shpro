<template>
  <div class="member">
    <div class="member-header">
      <h3 class="h-title">휴면계정해제</h3>
    </div>
    <div class="member-step no-flow">
      <div class="step-txt">휴면해제 완료</div>
    </div>
    <div class="complete-box">
      <v-icon
        icon="mdi-check-circle-outline"
        class="icon-success"
      ></v-icon>
      <div class="complete-text">
        <div>휴면해제 완료</div>
        <p>다시 로그인해 주시기 바랍니다.</p>
      </div>
    </div>
    <div class="btn-wrap">
      <v-btn
        variant="flat"
        color="secondary"
        size="x-large"
        rounded="lg"
        class="btn-w14 complete"
      >
        메인
      </v-btn>
      <v-btn
        variant="flat"
        color="primary"
        size="x-large"
        rounded="lg"
        class="btn-w14 complete"
      >
        로그인
      </v-btn>
    </div>
  </div>
</template>