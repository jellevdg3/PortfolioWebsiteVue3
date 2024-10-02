<template>
	<v-dialog v-model="internalDialog" max-width="800px">
		<v-card>
			<v-card-title class="d-flex justify-space-between align-center">
				<span class="headline">Screenshot</span>
				<v-btn icon @click="close">
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-card-title>
			<v-card-text>
				<v-img :src="src" class="screenshot-image"></v-img>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	name: 'ScreenshotDialog',
	props: {
		modelValue: {
			type: Boolean,
			required: true,
		},
		src: {
			type: String,
			required: true,
		},
	},
	computed: {
		internalDialog: {
			get() {
				return this.modelValue
			},
			set(value) {
				this.$emit('update:modelValue', value)
			},
		},
	},
	methods: {
		close() {
			this.internalDialog = false
		},
	},
}
</script>

<style scoped>
.headline {
	flex: 1;
}

.v-dialog .v-card {
	background-color: #242424;
}

.v-card-text {
	display: flex;
	justify-content: center;
	align-items: center;
}

.screenshot-image {
	max-width: 100%;
	max-height: 80vh;
}
</style>