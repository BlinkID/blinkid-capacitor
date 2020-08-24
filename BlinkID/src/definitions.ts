declare module '@capacitor/core' {
  interface PluginRegistry {
    BlinkId: BlinkIdPlugin;
  }
}

export interface BlinkIdPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
