<template>
   <div class="sub_panel">
        <div class="content-panel-sub" id="panel-f">

          <li :class="{ 'IS-ACTIVATED': $route.name === css } ">  
            <router-link to="/css" class="item  animated fadeInUp"  v-tooltip.right="'CSS'">
              <vue-material-icon name="assignment" :size="24"></vue-material-icon>
            </router-link> 
          </li>
          <li >
              <router-link to="/" class="item animated fadeInUp" v-tooltip.right="'Componentes'">
              <vue-material-icon name="assignment" :size="24" ></vue-material-icon>
            </router-link>   
          </li> 
          
        </div>
      </div>
</template>

<script>



 export default {

        
    }
</script>