package com.microblink.capacitor;

import android.content.Context;

public class FakeR {
        private Context context;
        private String packageName;

        public FakeR(Context context) {
                this.context = context;
                packageName = context.getPackageName();
        }

        public int getId(String group, String key) {
                return context.getResources().getIdentifier(key, group, packageName);
        }

        public static int getId(Context context, String group, String key) {
                return context.getResources().getIdentifier(key, group, context.getPackageName());
        }
}