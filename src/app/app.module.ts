@@ .. @@
 import { NgModule } from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';
+import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
+
+// PrimeNG Modules
+import { ButtonModule } from 'primeng/button';
+import { CardModule } from 'primeng/card';
+import { InputTextModule } from 'primeng/inputtext';
+import { MenubarModule } from 'primeng/menubar';
+import { PanelModule } from 'primeng/panel';
 
 import { AppComponent } from './app.component';
 
@@ .. @@
   ],
   imports: [
-    BrowserModule
+    BrowserModule,
+    BrowserAnimationsModule,
+    ButtonModule,
+    CardModule,
+    InputTextModule,
+    MenubarModule,
+    PanelModule
   ],
   providers: [],
   bootstrap: [AppComponent]