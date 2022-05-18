<template>
  <div>
    <div class="flex flex-col items-center justify-center h-screen">
      <div class="p-4">
        <div  class="text-center ">You have sucessfully Signed Up &#128526; &#128521;</div>
      </div>
      <div id="demo" class=" shadow-lg">
        <NuxtLink to="login" class="text">Login Here</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
#demo{
  background-color: green;
  border-radius: 50px;
  padding: 14px;
}

.text{
  color: white;
  text-align: center;
  cursor: pointer;
}
</style>