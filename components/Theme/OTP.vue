<template>
  <!-- OTP Inputs -->
  <div class="flex justify-center gap-3 mb-2">
    <input
      v-for="(digit, index) in otp"
      :key="index"
      v-model="otp[index]"
      type="text"
      maxlength="1"
      inputmode="numeric"
      pattern="[0-9]*"
      class="w-10 h-10 font-medium text-center transition-all bg-white border-2 rounded-lg outline-none text-md border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 text-slate-800"
      @input="handleInput($event, index)"
      @keydown="handleKeydown($event, index)"
      @paste="handlePaste($event)"
      ref="inputs"
    />
  </div>

  <!-- Timer and Resend Button -->
  <div class="text-center">
    <button
      type="button"
      @click="resendOTP"
      :disabled="timeLeft > 0"
      class="btn btn-link"
      :class="[
        timeLeft > 0 ? ' cursor-not-allowed opacity-80' : ' text-secondary',
      ]"
    >
      {{ $t("resendOTP") }}<span v-if="timeLeft > 0">({{ timeLeft }})</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
// OTP state
const otp = ref(["", "", "", "", "", ""]);
const inputs = ref([]);

// Timer state
const timeLeft = ref(2);
let timer = null;

// Focus first input on mount
onMounted(() => {
  inputs.value[0]?.focus();
  startTimer();
});

// Cleanup timer on unmount
onUnmounted(() => {
  if (timer) clearInterval(timer);
});

// Handle input and move to next
const handleInput = (event, index) => {
  const value = event.target.value.replace(/[^0-9]/g, "");
  otp.value[index] = value;

  if (value && index < 5) {
    inputs.value[index + 1].focus();
  }
};

// Handle backspace and navigation
const handleKeydown = (event, index) => {
  if (event.key === "Backspace" && !otp.value[index] && index > 0) {
    inputs.value[index - 1].focus();
  }
};

// Handle paste functionality
const handlePaste = (event) => {
  const pasteData = event.clipboardData.getData("text").replace(/\D/g, "");
  if (pasteData.length <= 6) {
    const newOtp = pasteData.split("").concat(Array(6).fill("")).slice(0, 6);
    otp.value = newOtp;
    const lastFilledIndex = Math.min(pasteData.length - 1, 5);
    inputs.value[lastFilledIndex].focus();
  }
  event.preventDefault();
};

// Timer logic
const startTimer = () => {
  timer = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      clearInterval(timer);
    }
  }, 1000);
};

// Resend OTP
const resendOTP = () => {
  if (timeLeft.value === 0) {
    otp.value = ["", "", "", "", "", ""];
    timeLeft.value = 3;
    startTimer();
    inputs.value[0].focus();
    // Add your resend OTP API call here
    console.log("OTP resent");
  }
};

// Watch OTP completion (optional)
const otpComplete = computed(() => otp.value.every((digit) => digit !== ""));
watch(otpComplete, (isComplete) => {
  if (isComplete) {
    console.log("OTP Complete:", otp.value.join(""));
    // Add your verification logic here
  }
});
</script>

<style></style>
