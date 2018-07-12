<template>
	<div class="sub-nav">
		<navs></navs>
		<div class="wrapper_content">

				<transition name="fade"  mode="out-in">
					<router-view></router-view>
				</transition>

		</div>
	</div>
</template>
<script>
export default	{

}
</script>