declare module '@capacitor/core' {
    interface PluginRegistry {
    	BlinkIDCapacitorPlugin: {
			scanWithCamera: Function;
		};
    }
}

export default {}