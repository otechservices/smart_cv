@@ .. @@
 import { Component } from '@angular/core';
+import { MenuItem } from 'primeng/api';
 
 @Component({
   selector: 'app-root',
@@ .. @@
 })
 export class AppComponent {
   title = 'cv-frontend';
+  
+  menuItems: MenuItem[] = [
+    {
+      label: 'Accueil',
+      icon: 'pi pi-home'
+    },
+    {
+      label: 'Profil',
+      icon: 'pi pi-user'
+    },
+    {
+      label: 'Expériences',
+      icon: 'pi pi-briefcase'
+    },
+    {
+      label: 'Compétences',
+      icon: 'pi pi-star'
+    },
+    {
+      label: 'Contact',
+      icon: 'pi pi-envelope'
+    }
+  ];
 }