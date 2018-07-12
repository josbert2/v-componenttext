<template>
	<div style="width: 100%; " :class="{'red': isRed}">
		<div class="panel-name">
			<div class="line-left"></div>
			<h3 >Botones</h3>
		</div>
		<div class="wrapper_content_content">
			<div class="code-example">	
				<div class="code-panel">	
					<span class="title text-grandient">Botones primarios</span>
					<div class="ml-auto d-flex">
					  	<vue-material-icon name="code" :size="24" ></vue-material-icon>	
					</div>
				</div>
				<div class="code-content d-flex flex-column">	
					 <div class="code-line">
					 	 <div class="code-description">
					 	 	Para definir el tipo de botón, se usa la clase tipo <span>btn-primary</span> con el valor de un tipo de botón como puede ser: <span>btn-primary</span> - <span>btn-danger</span> - <span>btn-warning</span> - <span>btn-success</span>
					 	 </div>
					 	 <div class="btn btn-md btn-primary">Boton</div>
						 <div class="btn btn-md btn-danger">Boton</div>
						 <div class="btn btn-md btn-warning">Boton</div>
						 <div class="btn btn-md btn-success">Boton</div>
						 <div class="btn btn-md btn-pink">Boton</div>
						 <div class="btn btn-md btn-black">Boton</div>
						 <div class="btn btn-md btn-light">Boton</div>
					 </div>
	
				</div>
			</div>
			<div class="code-example">	
				<div class="code-panel">	
					<span class="title">Botones primarios Light</span>
					<div class="ml-auto d-flex">
					  	<vue-material-icon name="code" :size="24" ></vue-material-icon>	
					</div>
				</div>
				<div class="code-content d-flex flex-column">	
					 <div class="code-line">
					 	 <div class="code-description">
					 	 	Para definir el tipo de botón, se usa la clase tipo <span>btn-primary-light</span> con el valor de un tipo de botón como puede ser: llenado primario, lleno de éxito, lleno de peligro, lleno de advertencia, relleno oscuro.
					 	 </div>
					 	 <div class="btn btn-md btn-primary-light">Boton</div>
						 <div class="btn btn-md btn-danger-light">Boton</div>
						 <div class="btn btn-md btn-warning-light">Boton</div>
						 <div class="btn btn-md btn-success-light">Boton</div>
						 <div class="btn btn-md btn-pink-light">Boton</div>
						 <div class="btn btn-md btn-black-light">Boton</div>

					 </div>

						
				</div>
			</div>
			<div class="code-example">	
				<div class="code-panel">	
					<span class="title">Botones primarios Dark</span>
					<div class="ml-auto d-flex">
					  	<vue-material-icon name="code" :size="24" ></vue-material-icon>	
					</div>
				</div>
				<div class="code-content d-flex flex-column">	
					 <div class="code-line">
					 	 <div class="code-description">
					 	 	Para definir el tipo de botón, se usa la clase tipo <span>btn-primary-dark</span> con el valor de un tipo de botón como puede ser: llenado primario, lleno de éxito, lleno de peligro, lleno de advertencia, relleno oscuro.
					 	 </div>
					 	 <div class="btn btn-md btn-primary-dark">Boton</div>
						 <div class="btn btn-md btn-danger-dark">Boton</div>
						 <div class="btn btn-md btn-warning-dark">Boton</div>
						 <div class="btn btn-md btn-success-dark">Boton</div>
						 <div class="btn btn-md btn-pink-dark">Boton</div>
						 <div class="btn btn-md btn-black-dark">Boton</div>
					 </div>

						
				</div>
			</div>
			<div class="code-example">	
				<div class="code-panel">	
					<span class="title">Botones sin box-shadow</span>
					<div class="ml-auto d-flex">
					  	<vue-material-icon name="code" :size="24" ></vue-material-icon>	
					</div>
				</div>
				<div class="code-content d-flex flex-column">	
					 <div class="code-line">
					 	 <div class="code-description">
					 	 	Para hacer que los botones no tengan sombra por defecto es importante agregar la class <span>sh-n</span>
					 	 </div>
					 	 <div class="btn btn-md btn-primary-dark sh-n">Boton</div>
					 	 <div class="btn btn-md btn-primary-dark sh-n">Boton</div>
					 	 <div class="btn btn-md btn-primary-dark sh-n">Boton</div>
					 	 <div class="btn btn-md btn-primary-dark sh-n">Boton</div>
						 
					 </div>

						
				</div>
			</div>
			<div class="code-example">	
				<div class="code-panel">	
					<span class="title">Botones con box-shadow</span>
					<div class="ml-auto d-flex">
					  	<vue-material-icon name="code" :size="24" ></vue-material-icon>	
					</div>
				</div>
				<div class="code-content d-flex flex-column">	
					 <div class="code-line">
					 	 <div class="code-description">
					 	 	Para hacer que los botones tengan sombra es importante agregar la class <span>sh-1</span> - <span>sh-2</span> - <span>sh-3</span> - <span>sh-4</span> - <span>sh-5</span> <span>sh-6</span>
					 	 </div>
					 	 <div class="btn btn-md btn-primary-dark sh-1">Boton</div>
					 	 <div class="btn btn-md btn-primary-dark sh-2">Boton</div>
					 	 <div class="btn btn-md btn-primary-dark sh-3">Boton</div>
					 	 <div class="btn btn-md btn-primary-dark sh-4">Boton</div>
					 	 <div class="btn btn-md btn-primary-dark sh-5">Boton</div>

						 
					 </div>

						
				</div>
			</div>
			<div class="code-example">	
				<div class="code-panel">	
					<span class="title">Botones planos</span>
					<div class="ml-auto d-flex">
					  	<vue-material-icon name="code" :size="24" ></vue-material-icon>	
					</div>
				</div>
				<div class="code-content d-flex flex-column">	
					 <div class="code-line">
					 	 <div class="code-description">
					 	 	Botones sin <span>border-radius</span>, basta con agregar la clase <span>br-n</span>
					 	 </div>
					 	 <div class="btn btn-md btn-primary-light br-n">Boton</div>
						 <div class="btn btn-md btn-danger-light br-n">Boton</div>
						 <div class="btn btn-md btn-warning-light br-n">Boton</div>
						 <div class="btn btn-md btn-success-light br-n">Boton</div>
						 <div class="btn btn-md btn-pink-light br-n">Boton</div>
						 <div class="btn btn-md btn-black-light br-n">Boton</div>
					

						 
					 </div>

						
				</div>
			</div>
			<div class="code-example">	
				<div class="code-panel">	
					<span class="title">Botones planos con niveles </span>
					<div class="ml-auto d-flex">
					  	<vue-material-icon name="code" :size="24" ></vue-material-icon>	
					</div>
				</div>
				<div class="code-content d-flex flex-column">	
					 <div class="code-line">
					 	 <div class="code-description">
					 	 	Botones de niveles con <span>border-radius</span>, basta con agregar la clase <span>br-1</span> - <span>br-2</span> - <span>br-3</span> - <span>br-4</span> - <span>br-5</span>
					 	 </div>
					 	 <div class="btn btn-md btn-primary-light br-1">Boton</div>
						 <div class="btn btn-md btn-danger-light br-2">Boton</div>
						 <div class="btn btn-md btn-warning-light br-3">Boton</div>
						 <div class="btn btn-md btn-success-light br-4">Boton</div>
						 <div class="btn btn-md btn-pink-light br-5">Boton</div>

					

						 
					 </div>

						
				</div>
			</div>
			<div class="code-example">	
				<div class="code-panel">	
					<span class="title">Botones con grosor de textp</span>
					<div class="ml-auto d-flex">
					  	<vue-material-icon name="code" :size="24" ></vue-material-icon>	
					</div>
				</div>
				<div class="code-content d-flex flex-column">	
					 <div class="code-line">
					 	 <div class="code-description">
					 	 	La diferencia para agregar grosor esta en cada fuente a utilizar, la clase necesaria: <span>w100</span> - <span>w200</span> - <span>w300</span> - <span>w400</span> - <span>w500</span> - <span>w1600</span> - <span>w700</span> - <span>w800</span> - <span>w900</span>
					 	 </div>
					 	 <div class="btn btn-md btn-primary-light w100">Boton w100</div>
					 	 <div class="btn btn-md btn-primary-light w200">Boton w200</div>
					 	 <div class="btn btn-md btn-primary-light w300">Boton w300</div>
					 	 <div class="btn btn-md btn-primary-light w400">Boton w400</div>
					 	 <div class="btn btn-md btn-primary-light w500">Boton w500</div>
					 	 <div class="btn btn-md btn-primary-light w600">Boton w600</div>
					 	 <div class="btn btn-md btn-primary-light w700">Boton w700</div>
					 	 <div class="btn btn-md btn-primary-light w800">Boton w800</div>
					 	 <div class="btn btn-md btn-primary-light w900">Boton w900</div>
					 </div>
				</div>
			</div>
			<div class="code-example">	
				<div class="code-panel">	
					<span class="title">Botones con diferentes width</span>
					<div class="ml-auto d-flex">
					  	<vue-material-icon name="code" :size="24" ></vue-material-icon>	
					</div>
				</div>
				<div class="code-content d-flex flex-column">	
					 <div class="code-line">
					 	 <div class="code-description">
					 	 	Existe tres variaciones para el tamaño de cada boton <span>btn-sm</span> - <span>btn-md</span> - <span>btn-lg</span>
					 	 </div>
					 	 <div class="btn btn-md btn-primary-light btn-sm">btn-sm</div>
					 	 <div class="btn btn-md btn-primary-light btn-md">btn-md</div>
					 	 <div class="btn btn-md btn-primary-light btn-lg">btn-lg</div>

					 </div>
				</div>
			</div>
			<div class="code-example">	
				<div class="code-panel">	
					<span class="title">Botones sin color de fondo</span>
					<div class="ml-auto d-flex">
					  	<vue-material-icon name="code" :size="24" ></vue-material-icon>	
					</div>
				</div>
				<div class="code-content d-flex flex-column">	
					 <div class="code-line">
					 	 <div class="code-description">
					 	 	Para definir el tipo de botón, se usa la clase tipo <span>btn-primary-dark</span> con el valor de un tipo de botón como puede ser: llenado primario, lleno de éxito, lleno de peligro, lleno de advertencia, relleno oscuro.
					 	 </div>
					 	 <div class="btn btn-md btn-light-border">Boton</div>
					 	 <div class="btn btn-md btn-primary-border">Boton</div>
						 <div class="btn btn-md btn-danger-border">Boton</div>
						 <div class="btn btn-md btn-warning-border">Boton</div>
						 <div class="btn btn-md btn-success-border">Boton</div>
						 <div class="btn btn-md btn-pink-border">Boton</div>
						 <div class="btn btn-md btn-black-border">Boton</div>
					 </div>

						
				</div>
			</div>
			<div class="code-example">	
				<div class="code-panel">	
					<span class="title">Botones rippleJS</span>
					<div class="ml-auto d-flex">
					  	<vue-material-icon name="code" :size="24" ></vue-material-icon>	
					</div>
				</div>
				<div class="code-content d-flex flex-column">	
					 <div class="code-line">
					 	 <div class="code-description">
					 	 	Botones con efecto ripple <span>ripple-btn</span>
					 	 </div>
					 	 <div class="btn btn-md btn-primary-light ripple-btn">Boton</div>
					 	 <button class="btn circle-btn btn-primary-light ripple-btn ">
					 	 	 <vue-material-icon name="assignment" :size="24"></vue-material-icon> 
					 	 </button>

					 </div>

						
				</div>
			</div>
			<div class="code-example">	

				<div class="code-panel">	
					<span class="title">Botones circulares</span>
					<div class="ml-auto d-flex">
						<a href="#" v-collapse-toggle="'toggle_first'">
							<vue-material-icon name="code" :size="24" ></vue-material-icon>	
						</a>
								
					</div>
					

				</div>
				<v-collapse-wrapper ref="toggle_first">
					    <div class="my-content" v-collapse-content>
					        This is hiddend content
					    </div>
				</v-collapse-wrapper>
				<div class="code-content d-flex flex-column">	
					 <div class="code-line">
					 	 <div class="code-description">
					 	 	Para definir el tipo de botón circular, se usa la clase tipo <span>circle-btn</span> dentro de ello para centrar un icono con <span>material-icons</span>
					 	 </div>
					 	 <button class="btn circle-btn btn-primary-light ">
					 	 	 <vue-material-icon name="assignment" :size="24"></vue-material-icon> 
					 	 </button>
					 	 <button class="btn circle-btn btn-danger-light ">
					 	 	 <vue-material-icon name="done" :size="24"></vue-material-icon> 
					 	 </button>
					 	 <button class="btn circle-btn btn-success-light ">
					 	 	 <vue-material-icon name="assignment" :size="24"></vue-material-icon> 
					 	 </button>
					 	 <button class="btn circle-btn btn-pink-light ">
					 	 	 <vue-material-icon name="assignment" :size="24"></vue-material-icon> 
					 	 </button>
					 	 <button class="btn circle-btn btn-black-light ">
					 	 	 <vue-material-icon name="assignment" :size="24"></vue-material-icon> 
					 	 </button>
					 	 <button class="btn circle-btn btn-primary-light ">
					 	 	 <vue-material-icon name="assignment" :size="24"></vue-material-icon> 
					 	 </button>
					 	 <button class="btn circle-btn btn-success ">
					 	 	 <vue-material-icon name="assignment" :size="24"></vue-material-icon> 
					 	 </button>
					 	 <button class="btn circle-btn btn-black-light ">
					 	 	 <vue-material-icon name="assignment" :size="24"></vue-material-icon> 
					 	 </button>
					 	 <button class="btn circle-btn btn-primary-light " id="boto">
					 	 	 <vue-material-icon name="assignment" :size="24"></vue-material-icon> 
					 	 </button>


					
					 </div>

						
				</div>
			</div>
			<div class="code-example">	
				<div class="code-panel">	
					<span class="title">Name</span>
					<div class="ml-auto d-flex">
						<a href="#" v-collapse-toggle="'toggle_s'">
							<vue-material-icon name="code" :size="24" ></vue-material-icon>	
						</a>		
					</div>
				</div>
				<!--Collapse Wrapper-->
				<v-collapse-wrapper ref="toggle_s">
					    <div class="my-content" v-collapse-content>
					        This is hiddend content
					    </div>
				</v-collapse-wrapper>
				<!--Collapse Wrapper-->
				<!--CONTENT-->
				<div class="code-content d-flex flex-column">	
					 <div class="code-line">
					 	 <div class="code-description">
					 	 	Description the components <span>CODE</span>
					 	 </div>
						<!--Componentes-->
					
						<button class="btn btn-md btn-primary-light w-20 d-block"> Button Full</button>
						<button class="btn btn-md btn-primary-light w-30 d-block"> Button Full</button>
						<button class="btn btn-md btn-primary-light w-40 d-block"> Button Full</button>
						<button class="btn btn-md btn-primary-light w-50 d-block"> Button Full</button>
						<button class="btn btn-md btn-primary-light w-60"> Button Full</button>
						<button class="btn btn-md btn-primary-light w-70"> Button Full</button>
						<button class="btn btn-md btn-primary-light w-80"> Button Full</button>
						<button class="btn btn-md btn-primary-light w-90"> Button Full</button>
						<button class="btn btn-md btn-primary-light w-100"> Button Full</button>
						<!--END Componentes-->
					 </div>	
				</div>
				<!--CONTENT-->
			</div>
		</div>

	</div>

</template>

<script>
//import SearchBar from '@/components/Componentes/script/Botton_script.vue'
export default {
	//components: {
  	//	'search-bar' : SearchBar 
 	//},
 	ready() {
 
	            alert('hola')
	  	
 	
       
    }
}

</script>