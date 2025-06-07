<template>
	<div class="page">
		<div class="reverse-sections">
			<header class="header">
				<a href="#" class="header__link">Home</a>
				<!-- href -->
				<p class="header__quote">'Photography takes an instant out of time, altering life by holding it still</p>
			</header>

			<section class="hero">
				<h1 class="hero__title">4ERNOV PICTURES</h1>
				<div class="hero__socials">
					<div class="hero__socials-line"></div>
					<a href="https://t.me/chernov_pictures" class="hero__socials-link" title="Telegram">
						<svg class="hero__socials-icon" viewBox="0 0 32 32">
	<path d="M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z"/>
						</svg>
					</a>
					<div class="hero__socials-line"></div>
				</div>
			</section>
		</div>
		<section class="main">
			<nav class="tab">
				<ul class="tab__list">
					<li
						class="tab__item"
						v-for="item in tabList"
						:class="{ active: item.name === active }"
						:data-tab="item.name"
						@click="onTabClick($event)"
					>
						{{ item.name }}
					</li>
				</ul>
			</nav>

			<div class="main__grid grid">
				<div class="grid__tab-choosing" v-for="tab in tabList">
					<div class="grid__tab-displaing" v-if="tab.name === active">
						<div 
						class="grid__content"
						v-if="imagesPaths[tab.name].length > 0"
						>
							<img 
							class="grid__image"
							:src="image" 
							alt="image" 
							v-for="image in imagesPaths[active]" 
							/>
						</div>
						<div 
						class="grid__empty-tab"
						v-else
						>
							<p class="grid__coming-soon">Coming Soon!</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script src="./script.js" lang="js"></script>
<style src="./style.scss" lang="scss"></style>
