import { ref } from "vue";
const IMAGES_STREET = import.meta.glob("@/assets/gallery/street/*.{jpg, jpeg, png, webp}", {eager: true});
const IMAGES_STREET_PATH = Object.values(IMAGES_STREET).map(m => m.default);

const IMAGES_RACING = import.meta.glob("@/assets/gallery/racing/*.{jpg, jpeg, png, webp}", {eager: true});
const IMAGES_RACING_PATH = Object.values(IMAGES_RACING).map(m => m.default);

const IMAGES_NATURE = import.meta.glob("@/assets/gallery/nature/*.{jpg, jpeg, png, webp}", {eager: true});
const IMAGES_NATURE_PATH = Object.values(IMAGES_NATURE).map(m => m.default);

export default {
	setup() {
		return {
			tabList: ref([
				{ name: "street" }, 
				{ name: "nature" }, 
				{ name: "racing" }
			]),
			imagesPaths: ref({
				street: IMAGES_STREET_PATH,
				racing: IMAGES_RACING_PATH,
				nature: IMAGES_NATURE_PATH
			}),
			active: ref("street"),
		};
	},
	methods: {
		onTabClick(event) {
			this.active = event.target.dataset.tab;
		},
	},
};
